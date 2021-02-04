import React from "react";

import { AlertProps, KindMap } from "./interface";

const prefixCls = "happy-alert";

const kinds: KindMap = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502",
};

const Alert: React.FC<AlertProps> = ({ children, kind = "info", ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    dsdss
    {children}
  </div>
);

export default Alert;
