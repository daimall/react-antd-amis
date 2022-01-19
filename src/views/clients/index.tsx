import React from "react";
import { ToastComponent, AlertComponent } from "amis"
import { connect } from "react-redux";
import { getBaseUrl } from "utils/baseurl"
import AMISComponent from "components/AmisRenderer"

class AmisTest extends React.Component<any, any> {
  amisJson: object
  constructor(props: any) {
    super(props)
    this.amisJson = {
      type: "page",
      body: [
        {
          label: "新增",
          type: "button",
          actionType: "dialog",
          level: "primary",
          className: "m-b-sm",
          dialog: {
            title: "新增密钥",
            body: {
              type: "form",
              api: "post:" + getBaseUrl() + "/api/v1/curd/client",
              body: [
                {
                  type: "input-text",
                  name: "key",
                  label: "Key",
                },
                {
                  type: "input-text",
                  name: "secret",
                  label: "Secret",
                },
                {
                  type: "input-text",
                  name: "domain",
                  label: "Domain",
                },
              ],
            },
          },
        },
        {
          type: "crud",
          api: getBaseUrl() + "/api/v1/curd/client",
          syncLocation: false,
          columns: [
            {
              name: "id",
              label: "ID",
            },
            {
              name: "key",
              label: "Key",
            },
            {
              name: "secret",
              label: "Secret",
            },
            {
              name: "domain",
              label: "Domain",
            },
            {
              type: "operation",
              label: "操作",
              buttons: [
                {
                  label: "删除",
                  type: "button",
                  actionType: "ajax",
                  level: "danger",
                  confirmText: "确认要删除？",
                  api: "delete:" + getBaseUrl() + "/api/v1/curd/client/$id",
                },
                {
                  label: "修改",
                  type: "button",
                  actionType: "drawer",
                  drawer: {
                    title: "修改",
                    body: {
                      type: "form",
                      api: "put:" + getBaseUrl() + "/api/v1/curd/client/${id}",
                      body: [
                        {
                          type: "input-text",
                          name: "key",
                          label: "Key",
                        },
                        {
                          type: "input-text",
                          name: "secret",
                          label: "Secret",
                        },
                        {
                          type: "input-text",
                          name: "domain",
                          label: "Domain",
                        },
                      ],
                    },
                  },
                }
              ],
            }
          ],
        },
      ],
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

export default connect((state: { user: any }) => {
  return {
    ...state.user,
    menu: state.user.menus.find((m: any) => m.menuId === "menuid4")
  }
}
)(AmisTest);
// export default AmisTest;
