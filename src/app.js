const http = require("http");
class Koa {
  constructor(props) {
    this.midderWare = [];
  }

  use(fn) {
    this.midderWare.push(fn);
  }
  listen(...args) {
    const server = http.createServer((req, res) => {
      console.log(Array.isArray(this.midderWare));
      this.midderWare.forEach(function(fn) {
        console.log(fn);
        return fn(req, res);
      });
    });
    server.listen(...args);
  }
}
module.exports = Koa;
