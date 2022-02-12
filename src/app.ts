import express from "express";
import bodyParser from "body-parser";
import simDataXmlToBinary from "./endpoints/simdata-binary";

const port = 3000;
const app = express();
app.use(bodyParser.text())

app.get('/simdata-binary', (req, res) => {
  simDataXmlToBinary(req.body)
    .then(buffer => {
      //
    })
    .catch(err => {
      res.status(400).send(`XML could not be parsed as SimData: ${err}`);
    });
});

app.listen(port, () => {
  console.log(`S4TK server listenting on port ${port}`);
});