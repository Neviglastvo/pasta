import express from "express"
import { api } from "./api"
import { JsonDataProvider } from "remult";
import { JsonEntityFileStorage } from "remult/server";
import { remultExpress } from "remult/remult-express";
import bodyParser from "body-parser";

// Define the whitelist of IP addresses
const whitelist = ['::1','192.168.1.1', '127.0.0.1']; // Add your whitelisted IPs here

const app = express()

// Parse JSON bodies
app.use(bodyParser.json());

// Middleware to restrict access based on IP
app.use((req, res, next) => {

  const clientIp = req.ip;
  console.log("clientIp", clientIp);

  if (!whitelist.includes(clientIp)) {
    return res.status(403).send('Access Forbidden');
  }

  next();
});

app.use(
  remultExpress({
    dataProvider: async () =>
      new JsonDataProvider(new JsonEntityFileStorage("./db"))
  })
)

app.use(api)



app.get("*", (req, res) => res.send(`api Server - path: "${req.path}"`))
app.listen(3001, () => console.log(`Server started http://localhost:${3001}/api`))
