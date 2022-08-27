const Application = require("./app/server");
const DB_URL = "mongodb://localhost:27017/ProjectManagerDB"
const DB_URL2 = "mongodb://localhost:27017/ProjectManagerDB"
new Application(3000, DB_URL)
new Application(3500, DB_URL2)
