const MyKoa = require("./app.js");
const app = new MyKoa();
app.use((req, res) => {
  console.log("11111111");
});
app.use((req, res) => {
  console.log("22222222");
  res.end("hello myKoa");
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
