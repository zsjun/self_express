const compose = () => {
  return async ctx => {
    function createNext(middleware, oldNext) {
      return async () => {
        await middleware(ctx, oldNext);
      };
    }

    let len = this.middlewares.length;
    let next = async () => {
      return Promise.resolve();
    };
    for (let i = len - 1; i >= 0; i--) {
      let currentMiddleware = this.middlewares[i];
      next = createNext(currentMiddleware, next);
    }

    await next();
  };
};

module.exports = compose;
