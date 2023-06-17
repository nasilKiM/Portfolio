import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<S.Wrapper>
			<S.Text>
				<S.Emphasize>에러가 발생했습니다!</S.Emphasize>
				요청해주신 페이지를 찾을 수 없습니다.
			</S.Text>
			<S.ButtonBox>
				<S.GoMain onClick={() => navigate(-1)}>이전 페이지로 이동</S.GoMain>
			</S.ButtonBox>
		</S.Wrapper>
	);
};

export default ErrorPage;

const Wrapper = styled.div`
	width: 70%;
	min-width: 414px;
	max-width: 1200px;
	margin: 0 auto;
	@media (max-width: 700px) {
		width: 95%;
	}
	@media (max-width: 800px) {
		width: 90%;
	}
`;

const Text = styled.div`
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.base};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	margin-bottom: 30px;
`;

const Emphasize = styled.div`
	margin-bottom: 25px;
	color: ${({ theme }) => theme.color.primary};
	font-size: ${({ theme }) => theme.fontSize.big};
`;
const ButtonBox = styled.div`
	width: 50%;
	margin: 0 auto;
	padding: 10px;
	display: flex;
	justify-content: center;
	background-color: ${({ theme }) => theme.color.primary};
	border-radius: 15px;
`;

const GoMain = styled(Link)`
	color: ${({ theme }) => theme.color.black};
	font-weight: ${({ theme }) => theme.fontWeight.bolder};
	text-decoration: none;
	background-color: ${({ theme }) => theme.color.gray[200]};
	padding: 20px;
	border-radius: 10px;
	:hover {
		background-color: ${({ theme }) => theme.color.primary[400]};
		color: ${({ theme }) => theme.color.white};
	}
`;

const S = {
	Wrapper,
	Text,
	Emphasize,
	ButtonBox,
	GoMain,
};
