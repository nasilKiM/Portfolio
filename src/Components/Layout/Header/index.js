import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { basicSetting, flexAllCenter } from 'Styles/common';

const WebHeader = () => {
	const navigate = useNavigate();

	return (
		<>
			<S.Wrapper>
				<S.Container>
					<S.Logo>로고위치</S.Logo>
					<S.Menu>Home</S.Menu>
					<S.Menu>About</S.Menu>
					<S.Menu>Skill</S.Menu>
					<S.Menu>Projects</S.Menu>
					<S.Menu>Contact</S.Menu>
				</S.Container>
			</S.Wrapper>
		</>
	);
};

export default WebHeader;

const Wrapper = styled.div`
	${basicSetting}
	${flexAllCenter}
	font-family: 'Nanum_extraBold';
	padding-bottom: 5px;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: ${props =>
		props.isMobile ? 'space-around' : 'space-between'};
	padding-top: 30px;
`;

const Menu = styled.div`
	color: ${({ theme }) => theme.color.black};
	height: 20px;
	width: 110px;
	text-decoration: none;
	padding-right: 10px;
	cursor: pointer;
	:hover {
		color: ${({ theme }) => theme.color.primary[400]};
	}
`;

const Logo = styled.div`
	width: 100%;
	min-width: 120px;
	max-width: 200px;
	margin-right: 20px;
	@media (max-width: 700px) {
		padding-right: 10px;
	}
	@media ${({ theme }) => theme.device.mobile} {
		width: 135px;
	}
`;

const S = {
	Wrapper,
	Container,
	Menu,
	Logo,
};
