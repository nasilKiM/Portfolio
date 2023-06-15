import { Outlet } from 'react-router-dom';
import WebHeader from './Header';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Layout = () => {
	const isTablet = useMediaQuery({ query: '(max-width: 1190px)' });

	return (
		<Container>
			{isTablet ? null : <WebHeader />}
			<Outlet />
		</Container>
	);
};

export default Layout;

const Container = styled.div``;
