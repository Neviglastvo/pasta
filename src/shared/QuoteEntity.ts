import { Entity, Fields } from "remult"

@Entity("quotes", {
  allowApiCrud: true
})
export class QuoteEntity {
  @Fields.cuid()
  id!: string

  @Fields.string()
  title = ""

  @Fields.object()
  tags:string[] = []

  @Fields.string()
  content = ""

  @Fields.createdAt()
  createdAt?: Date
}
