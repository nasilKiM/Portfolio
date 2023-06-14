import { Outlet } from 'react-router-dom';
import WebHeader from './Header';

const Layout = () => {
	return (
		<div>
			<WebHeader />
			<Outlet />
		</div>
	);
};

export default Layout;
