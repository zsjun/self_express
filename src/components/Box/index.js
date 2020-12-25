import React, { Fragment, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import iconArrow from "./images/coor-arrow.svg";

import isEmpty from "lodash/isEmpty";
import isBoolean from "lodash/isBoolean";
import isObject from "lodash/isObject";
import { nfn } from "../../common";

/**
 * 基本的盒子，用于组成页面的各个小容器
 * 可设置标题，自带Loading样式，自身可判断是否有数据而进行展示/隐藏
 */
function Box({ title, data, classes, style }) {
  return (
    <div className={classes} style={style}>
      sdd
    </div>
  );
}
Box.defaultProps = {
  isLoading: false,
  defaultOpen: true,
  onToggle: nfn,
};
Box.propTypes = {
  /** 盒子的标题，可以省略 */
  title: PropTypes.any,
  /** 盒子依赖的数据，会根据是否有该数据而判断是否展示数据为空, 当data为boolean的时候，直接判断是否展示盒子依赖的数据 */
  data: PropTypes.any,
  /** 数据为空时展示的描述 */
  emptyDesc: PropTypes.string,
  /** 是否正在Loading, 是的话会自带Loading样式 */
  isLoading: PropTypes.bool,
  /** 是否带border */
  border: PropTypes.bool,
  /** 是否可以折叠 */
  collapse: PropTypes.bool,
  /** 可以折叠时，是否默认展开 */
  defaultOpen: PropTypes.bool,
  /** 自定义折叠按钮 */
  toggleRender: PropTypes.func,
  /** 自定义盒子内容高度 */
  contentHeight: PropTypes.string,
};

export default Box;
