module.exports = {
  get status() {
    return 300;
  },

  /**
   * 设置返回给客户端的stausCode
   *
   * @param {number} statusCode 状态码
   */
  set status(statusCode) {
    if (typeof statusCode !== "number") {
      throw new Error("statusCode must be a number!");
    }
    this.res.statusCode = statusCode;
  }
};
