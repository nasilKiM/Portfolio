import styled from 'styled-components';

const SideNavBar = () => {
	return (
		<>
			<Wrapper>
				<Container>
					<Profile>
						<img src="/Assets/Img/defaultProfile.png" />
						<h1>KIM NASIL</h1>
					</Profile>
					<SNSContainer>
						<div>github</div>
						<div>tistory</div>
						<div>linkedin</div>
					</SNSContainer>

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
		</>
	);
};

export default SideNavBar;

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
	background: gray;
	overflow-y: auto;

	@media (max-width: 1199px) {
		left: -300px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
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
	padding: 15px 0;
	text-align: center;
	transition: 0.3s;
	div {
		:hover {
			background: #149ddd;
			color: #fff;
			text-decoration: none;
		}
	}
`;
