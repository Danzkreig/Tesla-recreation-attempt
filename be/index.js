import express from "express";
import cors from "cors";
const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server on at => http://localhost:` + port);
});
