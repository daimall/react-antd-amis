import React from "react";
import { ToastComponent, AlertComponent } from "amis"
import AMISComponent from "components/AmisRenderer"

class AmisTest extends React.Component<any, any> {
  amisJson: object;
  constructor(props: any) {
    super(props)
    this.amisJson = {
      type: 'page',
      body: {
        type: 'form',
        api: '/api/form',
        controls: [
          {
            type: 'text',
            name: 'name',
            label: '姓名：'
          },
          {
            name: 'email',
            type: 'email',
            label: '邮箱：'
          }
        ]
      }
    }
  }
  render() {
    return (
      <>
        <ToastComponent key="toast" position={'top-right'} />
        <AlertComponent key="alert" />
        <AMISComponent amisJson={this.amisJson} />
      </>
    );
  }
}


export default AmisTest;
