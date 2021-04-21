const http = require("http");
const createHandler = require("github-webhook-handler");

const handler = createHandler({ path: "/push", secret: "cfdkndkjfndkbfd" });

const app = http.createServer((req, res) => {
  handler(req, res, () => {
    res.statusCode = 404;
    res.end("no such location");
  });
});

handler.on("push", (event) => {
  console.log(event.payload.repository.name);
});

app.listen(3000, () => {
  console.log("start");
});
