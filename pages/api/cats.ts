import path from "path"
import { promises as fs } from "fs"
import { NextRequest, NextResponse } from "next/server"

export default async function handler(req: NextRequest, res: NextResponse) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json")
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + "/cats.json", "utf8")
  // console.log(`🚀 - ${req.method} /cats`)
  //Return the content of the data file in json format
  res.status(200).json(JSON.parse(fileContents))
}
