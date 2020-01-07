const http = require("http");
class MyKoa {
  constructor(props) {
    this.midderWare = [];
  }

  use(fn) {
    this.midderWare.push(fn);
  }
  listen(...args) {
    const server = http.createServer((req, res) => {
      this.midderWare.forEach(function(fn) {
        return fn(req, res);
      });
    });
    server.listen(...args);
  }
}
module.exports = MyKoa;
