import styled from 'styled-components';

const Contact = () => {
	return (
		<Container>
			<Title>Get in Touch</Title>
			<Greetings>
				if you have any questions, or if you just want to say hi,
				<br /> please feel free to email me at, <span>
					nasikun@naver.com
				</span>{' '}
				😘
			</Greetings>
			<SNSContainer>
				<img src="/Assets/Icon/githubicon.png" />
				<img src="/Assets/Icon/tistoryicon.png" />
				<img src="/Assets/Icon/linkedinicon.png" />
			</SNSContainer>
		</Container>
	);
};

export default Contact;

const Container = styled.div`
	max-width: 80%;
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
`;

const Title = styled.h2`
	font-size: 80px;
	font-weight: 700;
	margin-bottom: 20px;
	text-align: center;
`;

const Greetings = styled.div`
	text-align: center;
	font-size: 20px;
	line-height: 1.5;
	margin-bottom: 30px;
	span {
		color: darkblue;
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
