import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SideNavBar = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleSideNavBar = () => {
		setIsOpen(!isOpen);
	};

	const handleNavigate = route => {
		navigate(route);
	};

	return (
		<>
			<Wrapper isOpen={isOpen}>
				<Container>
					<Profile>
						<img src="/Assets/Img/defaultProfile.png" />
						<h1>KIM NASIL</h1>
					</Profile>
					<SNSContainer>
						<img src="/Assets/Icon/githubicon.png" />
						<img src="/Assets/Icon/tistoryicon.png" />
						<img src="/Assets/Icon/linkedinicon.png" />
					</SNSContainer>

					<MenuWrapper>
						<span onClick={() => handleNavigate('/')}>HOME</span>
						<span onClick={() => handleNavigate('/about')}>About</span>
						<span onClick={() => handleNavigate('/skill')}>Skill</span>
						<span onClick={() => handleNavigate('/projects')}>Projects</span>
						<span onClick={() => handleNavigate('/contact')}>Contact</span>
					</MenuWrapper>
				</Container>
			</Wrapper>
		</>
	);
};

export default SideNavBar;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 250px;
	transition: all ease-in-out 0.5s;
	z-index: 9997;
	transition: all 0.5s;
	padding: 0 15px;
	background: white;
	overflow-y: auto;
	border-right: 1px solid lightgray;
	background-color: black;
	color: white;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 40px;
`;

const Profile = styled.div`
	width: 100%;

	img {
		margin: 15px auto;
		display: block;
		width: 120px;
		border: 8px solid #2c2f3f;
	}

	h1 {
		font-size: 24px;
		margin: 0;
		padding: 10px 0;
		font-weight: 600;
		-moz-text-align-last: center;
		text-align-last: center;
		font-family: 'Poppins', sans-serif;
	}
`;

const SNSContainer = styled.div`
	font-size: 18px;
	padding: 20px 0;
	text-align: center;
	img {
		width: 40px;
		margin-right: 15px;
		:hover {
			border-radius: 50%;
			border: 1px solid #ffecec;
			cursor: pointer;
		}
	}
`;

const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 20px;
	gap: 30px;
	font-size: 24px;
	font-weight: bold;
	span {
		:hover {
			color: red;
			cursor: pointer;
		}
	}
`;
