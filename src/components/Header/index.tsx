import * as React from 'react';
import { Avatar, Badge, Col, Dropdown, Icon, Layout, Menu, Row } from 'antd';
import './index.less';
import { Link } from 'react-router-dom';

const { Header } = Layout;

interface Props {
  collapsed: boolean;
  onToggle: () => void;
}

class BasicHeader extends React.PureComponent<Props> {
  public render(): React.ReactNode {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="/individual">个人中心</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/settings">设置</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">注销</Menu.Item>
      </Menu>
    );
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <div
          className="apolo-global-header"
          style={{ position: 'relative', padding: 0, height: '64px' }}
        >
          <span>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.onToggle}
            />
          </span>
          <div className="apolo-header-index-right">
            <Row type={'flex'} justify={'end'} align={'middle'}>
              <Col>
                <Dropdown overlay={menu}>
                  <a className={'action'} href={'#'}>
                    <Avatar style={{ verticalAlign: 'middle' }}>Chen</Avatar>
                    <Icon type={'down'} />
                  </a>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </div>
      </Header>
    );
  }
}

export default BasicHeader;
