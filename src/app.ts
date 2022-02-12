import express from "express";
import bodyParser from "body-parser";
import simDataXmlToBinary from "./endpoints/simdata-binary";
import simDataBinaryToXml from "./endpoints/simdata-xml";

const port = 3000;
const app = express();
app.use(bodyParser.text())

app.get('/simdata-binary', (req, res) => {
  simDataXmlToBinary(req.body)
    .then(buffer => {
      res.status(200).send(buffer.toString("base64"));
    })
    .catch(err => {
      res.status(400).send(`XML could not be parsed as SimData\n\n${err}`);
    });
});

app.get('/simdata-xml', (req, res) => {
  simDataBinaryToXml(req.body)
    .then(xml => {
      res.status(200).send(xml);
    })
    .catch(err => {
      res.status(400).send(`Buffer could not be parsed as SimData\n\n${err}`);
    });
});

app.listen(port, () => {
  console.log(`S4TK server listenting on port ${port}`);
});
