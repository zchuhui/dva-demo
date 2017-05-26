import React,{ Component } from 'react';
import { Link } from 'dva/router';
import styles from './Header.css';

// 公共头部
const Header = React.createClass({
	getInitialState() {
		return {
			username:'dva',
			loginState:false,
		}
	},
	render(){
		return (
			<div className={ styles.header }>
				<b>导航: </b>
				<span>	
					<Link to="">Index</Link> /
					<Link to="1">菜单一</Link> / 
					<Link to="2">菜单二</Link> /
					<Link to="users">Users</Link> 
				</span>
				<Link className={ styles.fr }>hello { this.state.username }</Link>

			</div>
		);
	}
});

export default Header