import React from "react";

import { AlertProps, KindMap } from "./interface";
import "./style/index";

const kinds: KindMap = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502",
};

const Alert: React.FC<AlertProps> = ({ children, kind = "info", ...rest }) => (
  <div
    className="Alert"
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    dsdss11sdd99998skdjssdsdsdsjlkjkslldjsidhs
    {children}
  </div>
);

export default Alert;
