import * as React from "react";
import Alert from "./components/alert/index";

const Hello: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      {count}
      <Alert></Alert>
    </div>
  );
};

export default Hello;
