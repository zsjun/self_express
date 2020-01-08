const MyKoa = require("./app.js");

const app = new MyKoa();
app.use(async (req, res, next) => {
  console.log("1");
  await next(); // 调用下一个middleware
  console.log("5");
});
app.use(async (req, res, next) => {
  console.log("2");
  await next(); // 调用下一个middleware
  console.log("4");
});
app.use(async (req, res, next) => {
  console.log("3");
  // res.end("hello");
  // res.res.end("hello world");
});
// 监听端口号
app.listen(3011, err => {
  if (!err) {
    console.log("server is starting");
  } else {
    console.log(err);
  }
});
