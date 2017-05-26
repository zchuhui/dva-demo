import React from 'react';
import { connect } from 'dva';
import Headers from '../components/Header/Header';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Menu1() {
  return (
    <div>
    	<Layout>
        	<Header>
        		<Headers />
        	</Header>
	        <Content>
	        	<h1>Yay! This is menu1!</h1>
	        	<img src="../common/images/yay.jpg" />
	        </Content>
	        <Footer></Footer>
        </Layout>
    </div>
  );
}

export default connect()(Menu1);