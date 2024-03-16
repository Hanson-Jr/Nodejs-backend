const http = require("node:http");
const fs = require("fs")
const Port = 8900

const ServerReturnName = http. createServer((req, res) =>{
  const File = fs.readFileSync ("./file.txt", "utf-8")
  res. writeHead (200)
  res.end(File)
})
ServerReturnName.listen (Port,() =>{
  console.log("Server is running at the Http" +" "+ Port )
})