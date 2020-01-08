const http = require("http");
const request = require("./request.js");
const response = require("./response.js");
class MyKoa {
  constructor(props) {
    this.midderWare = [];
    this.request = request;
    this.response = response;
  }
  use(fn) {
    this.midderWare.push(fn);
  }
  listen(...args) {
    const server = http.createServer((req, res) => {
      this.request.req = req;
      this.response.res = res;
      this.midderWare.forEach(fn => {
        return fn(this.request.query, this.response);
      });
    });
    server.listen(...args);
  }
}
module.exports = MyKoa;
