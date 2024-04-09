const express = require("express");
const cors = require("cors");
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client();
const app = express();

app.use(cors({
  origin: ["https://glowing-robot-xj6g75vr456cp6wv-5173.app.github.dev"],
  methods: "GET,POST,PUT,DELETE,OPTIONS",
}));

app.use(express.json());

let DB = [];

app.post("/google-auth", async (req, res) => {
  const { credential, client_id } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: client_id,
    });
    const payload = ticket.getPayload();
    const uderid = payload['sub'];
    res.status(200).json({ payload });
  } catch (err) {
    res.status(400).json({err})
  }
})

app.get("/", (req, res) => {
  res.send("server working");
})

app.listen(3000, () => {
  console.log("Server listening on port 3000")
})