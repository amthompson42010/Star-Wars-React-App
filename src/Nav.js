import React from 'react';
import {
	NavLink as Link,
} from 'react-router-dom';

const Nav = () => (
	<nav style={styles.container}>
		<Link
			exact
			to='/'
			activeStyle={styles.active}
			style={styles.link}
		>
			Home
		</Link>
		<Link exact to='/addcity' activeStyle={styles.active} style={styles.link}>
			Add City
		</Link>
	</nav>
)

const styles = {
	active: {
		color: 'blue'
	},
	link: {
		textDecoration: 'none',
		marginBottom: 10
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: 80,
		height: '100%',
		padding: 15,
		borderRight: '1px solid #666'
	}
}

export default Nav;