import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Icon, Layout, Menu } from 'antd';
import './index.less';

const { Header, Sider, Content } = Layout;

interface SideBarProps {
  collapsed: boolean;
}

class BasicSideBar extends React.Component<SideBarProps, {}> {
  public render(): React.ReactNode {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="apolo-sider-menu-logo" key="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
            <h1>Apolo Admin</h1>
          </Link>
        </div>
        <Menu
          className="apolo-sider-menu-sider"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="user" />
              <span>nav 1</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">
              <Icon type="upload" />
              <span>nav 3</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/hello">
              <Icon type="calendar" />
              <span>hello world</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default BasicSideBar;
