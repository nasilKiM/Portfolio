import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import SideBarUpper from 'Components/Layout/Header/Components/sideBarUpper';

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
		<HomeWrapper>
			<SideBarWrapper>
				<SideBarUpper />
			</SideBarWrapper>
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
	width: 100%;
	height: 100vh;
	background-color: pink;
	text-align: center;
	flex-direction: column;
	justify-content: center;
`;

const SideBarWrapper = styled.div`
	width: 300px;
	@media (max-width: 768px) {
		display: none;
	}
`;

const ContentWrapper = styled.div`
	flex: 1;
`;
