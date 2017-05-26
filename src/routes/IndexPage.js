import React from 'react';
import { connect } from 'dva';
import Headers from '../components/Header/Header';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function IndexPage() {
  return (
    <div>
        <Layout>
        	<Header>
        		<Headers />
        	</Header>
	        <Content>
	        	<h1>Yay! Welcome to dva!</h1>
	        </Content>
	        <Footer></Footer>
	        
        </Layout>
    </div>
  );
}

export default connect()(IndexPage);
