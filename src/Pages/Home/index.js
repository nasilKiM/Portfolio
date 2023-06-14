import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const professions = ['Designer', 'Developer', 'Freelancer', 'Photographer'];

const HomePage = () => {
	const [professionIndex, setProfessionIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProfessionIndex(prevIndex =>
				prevIndex === professions.length - 1 ? 0 : prevIndex + 1,
			);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Wrapper>
			<h1>KIM NASIL</h1>
			<div>{professions[professionIndex]}</div>
		</Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background-color: pink;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
