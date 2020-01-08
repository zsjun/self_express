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
  compose() {
    return async (req, res) => {
      let next = async () => {
        return Promise.resolve();
      };
      const creatNext = (current, next) => {
        return async () => {
          await current(req, res, next);
        };
      };
      for (let i = this.midderWare.length - 1; i >= 0; i--) {
        next = creatNext(this.midderWare[i], next);
      }
      await next();
    };
  }
  listen(...args) {
    const server = http.createServer((req, res) => {
      this.request.req = req;
      this.response.res = res;
      let fn = this.compose();
      return fn(req, res);
    });
    server.listen(...args);
  }
}
module.exports = MyKoa;
