import { Outlet } from 'react-router-dom';
import WebHeader from './Header';
import styled from 'styled-components';

const Layout = () => {
	return (
		<Container>
			<WebHeader />
			<Outlet />
		</Container>
	);
};

export default Layout;

const Container = styled.div`
	@media (max-width: 1199px) {
		> ${WebHeader} {
			display: none;
		}
	}
`;
