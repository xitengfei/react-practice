import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import TopMenuComponent from './components/TopMenuComponent';
import MenuComponent from './components/MenuComponent';

import DashboardPage from './pages/DashBoardPage';
import AboutPage from './pages/AboutPage';
import ItemsPage from './pages/ItemsPage';
import ItemDetailPage from './pages/ItemDetailPage';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  render() {
    return (
<Router>
    <Layout>
        <Header className="header">
            <div className="logo" />
            <TopMenuComponent />
        </Header>
        <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <MenuComponent />
            </Sider>

            <Route exact path="/" component={DashboardPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route exact path="/items" component={ItemsPage}/>
            <Route path="/items/:id" component={ItemDetailPage}/>
        </Layout>
    </Layout>
</Router>
    );
  }
}

export default App;
