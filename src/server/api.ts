import { remultExpress } from "remult/remult-express"
import { QuoteEntity } from "../shared/QuoteEntity"

export const api = remultExpress({
  entities: [QuoteEntity]
})
