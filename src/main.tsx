import * as React from "react";
import { App } from "./App";

// Reference to our App.ts class
export interface IMainProps {
  app: App;
}

export class Main extends React.Component<IMainProps, {}> {
  constructor(props: IMainProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <>Main app</>;
  }
}
