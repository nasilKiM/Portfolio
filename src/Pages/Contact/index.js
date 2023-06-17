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
			<button>github</button>
			<button>tistory</button>
			<button>linkedin</button>
		</Container>
	);
};

export default Contact;

const Container = styled.div`
	max-width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	padding: 20px;
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
