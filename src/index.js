const MyKoa = require("./app.js");

const app = new MyKoa();
app.use((req, res) => {
  console.log("11111111", res.status);
});
app.use((req, res) => {
  console.log("22222222", req);
  res.res.end("hello world");
});
// 监听端口号
app.listen(3011, err => {
  console.log(err);
  if (!err) {
    console.log("server is starting");
  } else {
    console.log(err);
  }
});
