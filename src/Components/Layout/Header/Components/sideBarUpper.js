import { Link } from 'react-router-dom';
import NavBar from './sideBar';

import styled from 'styled-components';

const SideBarUpper = () => {
	return (
		<>
			<Wrapper>
				<Container>
					<Profile>
						<img src="/Assets/Img/defaultProfile.png" />
						<h1>
							<a href="index.html">KIM NASIL</a>
						</h1>
						<SNSContainer>
							<Link to="/">twitter</Link>
							<Link to="/">facebook</Link>
							<Link to="/">instagram</Link>
							<Link to="/">google-plus</Link>
							<Link to="/">linkedin</Link>
						</SNSContainer>
					</Profile>
					<NavBar />
				</Container>
			</Wrapper>
		</>
	);
};

export default SideBarUpper;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;
	transition: all ease-in-out 0.5s;
	z-index: 9997;
	transition: all 0.5s;
	padding: 0 15px;
	background: #040b14;
	overflow-y: auto;

	@media (max-width: 1199px) {
		left: -300px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 300px;
	@media (max-width: 1199px) {
		margin-left: 0;
	}
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
		padding: 0;
		font-weight: 600;
		-moz-text-align-last: center;
		text-align-last: center;
		font-family: 'Poppins', sans-serif;
		:hover {
			color: #fff;
			text-decoration: none;
		}
	}
`;

const SNSContainer = styled.div`
	font-size: 18px;
	display: inline-block;
	background: #212431;
	color: #fff;
	line-height: 1;
	padding: 8px 0;
	margin-right: 4px;
	border-radius: 50%;
	text-align: center;
	width: 36px;
	height: 36px;
	transition: 0.3s;
	:hover {
		background: #149ddd;
		color: #fff;
		text-decoration: none;
	}
`;
