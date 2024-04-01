import express from "express"
import { api } from "./api"
import { remultExpress } from "remult/remult-express";
import bodyParser from "body-parser";
import helmet from "helmet";
import compression from "compression";
import path from "path"
import { createPostgresDataProvider } from "remult/postgres"

const PORT = process.env["PORT"] || 3001
const DATABASE_URL = process.env["DATABASE_URL"];
const IP_WHITELIST = process.env["IP_WHITELIST"] || ['::1'];

const app = express()

// Parse JSON bodies
app.use(bodyParser.json());

// Middleware to restrict access based on IP
app.use((req, res, next) => {

  const clientIp = req.ip;
  console.log("clientIp", clientIp);

  if (!IP_WHITELIST.includes(clientIp)) {
    return res.status(403).send('Access Forbidden');
  }

  next();
});

app.use(helmet())
app.use(compression())

app.use(
  remultExpress({
    dataProvider: DATABASE_URL
   ? createPostgresDataProvider({ connectionString: DATABASE_URL })
   : undefined,
  })
)

app.use(api)

app.use(express.static(path.join(__dirname, "../")))
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "../", "index.html"))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
