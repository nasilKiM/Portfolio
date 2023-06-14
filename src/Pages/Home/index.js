import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const professions = ['Designer', 'Developer', 'Freelancer', 'Photographer'];
const colors = [
	'#4484ce',
	'#1ad7c0',
	'#ff9b11',
	'#9b59b6',
	'#ff7f7f',
	'#ecf0f1',
];

const HomePage = () => {
	const [professionIndex, setProfessionIndex] = useState(0);
	const [gradientIndex, setGradientIndex] = useState(0);

	useEffect(() => {
		const professionInterval = setInterval(() => {
			setProfessionIndex(prevIndex =>
				prevIndex === professions.length - 1 ? 0 : prevIndex + 1,
			);
		}, 2000);

		const gradientInterval = setInterval(() => {
			setGradientIndex(prevIndex =>
				prevIndex === colors.length - 1 ? 0 : prevIndex + 1,
			);
		}, 4000);

		return () => {
			clearInterval(gradientInterval);
			clearInterval(professionInterval);
		};
	}, []);

	return (
		<HomeWrapper gradientIndex={gradientIndex}>
			<SideBarWrapper></SideBarWrapper>
			<ContentWrapper>
				<h1>KIM NASIL</h1>
				<div>{professions[professionIndex]}</div>
			</ContentWrapper>
		</HomeWrapper>
	);
};

export default HomePage;

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	text-align: center;
	justify-content: center;
	transition: background 1s linear;
	background: linear-gradient(
		135deg,
		${props => colors[props.gradientIndex]},
		${props => colors[(props.gradientIndex + 1) % colors.length]}
	);
`;

const SideBarWrapper = styled.div`
	width: 300px;
	@media (max-width: 768px) {
		display: none;
	}
`;

const ContentWrapper = styled.div`
	width: 100%;
	color: white;
	h1 {
		font-size: 100px;
	}
	div {
		font-size: 100px;
		font-weight: 700;
	}
`;
