import React, { Component } from 'react';
import { Breadcrumb, Layout } from 'antd';
import './index.less';
import BasicSideBar from '../SideBar';
import BasicHeader from '../Header';

const { Header, Sider, Content } = Layout;
const handleChange = Symbol();

interface LayoutState {
  collapsed: boolean;
}

class BasicLayout extends Component<{}, LayoutState> {
  protected constructor(props: {}) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  public render(): React.ReactNode {
    return (
      <Layout>
        <BasicSideBar collapsed={this.state.collapsed} />
        <Layout>
          <BasicHeader collapsed={this.state.collapsed} onToggle={this.toggle} />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Content>
        </Layout>
      </Layout>
    );
  }

  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
}

export default BasicLayout;
