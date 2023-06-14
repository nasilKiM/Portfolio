import styled from 'styled-components';
import SideBarUpper from './sideBarUpper';

const SideBarContent = () => {
	return (
		<Wrapper>
			<Container>
				<SideBarUpper />
				<div>
					<span>HOME</span>
				</div>
				<div>
					<span>About</span>
				</div>
				<div>
					<span>Resume</span>
				</div>
				<div>
					<span>Portfolio</span>
				</div>
				<div>
					<span>Contact</span>
				</div>
			</Container>
		</Wrapper>
	);
};

export default SideBarContent;

const Wrapper = styled.div`
	width: 300px;
`;

const Container = styled.div`
	width: 100%;
`;
