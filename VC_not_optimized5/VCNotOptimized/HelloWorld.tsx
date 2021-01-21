import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react';

export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  render() {
    return <DefaultButton primary={true}>{this.props.name}</DefaultButton>;
  }
}