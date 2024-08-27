const express = require("express");
const fs = require("fs");
const cors = require("cors"); // Import cors
const { runDeployTransfer } = require("../web3/runDeploy");
const app = express();

const PORT = process.env.PORT || 9000;

app.use(cors()); // Use cors middleware
app.use(express.json());

app.post("/earn", (req, res) => {
  const { receiverAddress, amt } = req.body;
  fs.writeFileSync(
    "../web3/receiver.js",
    `const receiverAddress = "${receiverAddress}";
const amt = ${amt};

module.exports = { receiverAddress, amt };
`
  );

  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send("server-online");
});

app.post("/wallet", (req, res) => {
  const content = fs.readFileSync("./receiver.js", "utf-8");
  res.send(`TOILA ${content}`);
});

app.post("/withdraw", async (req, res) => {
  console.log("got request");
  const { receiverAddress, amt } = req.body;
  fs.writeFileSync(
    "../web3/receiver.js",
    `const receiverAddress = "${receiverAddress}";
const amt = ${amt};

module.exports = { receiverAddress, amt };
`
  );

  const content = fs.readFileSync("./receiver.js", "utf-8");
  await runDeployTransfer();
  console.log("SUCCESFUL===============");
  res.send(`TOILA ${content}`);

});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
