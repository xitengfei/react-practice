import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
  Route,
  Link
} from 'react-router-dom'

const { Header, Content, Sider } = Layout;

class ItemsPage extends Component {
    render() {
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>

                <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                    <ul>
                        <li><Link to="/items/1" >items1</Link></li>
                        <li><Link to="/items/2" >items2</Link></li>
                        <li><Link to="/items/3" >items3</Link></li>
                    </ul>
                </Content>
            </Layout>
        );
    }
}

export default ItemsPage;
