import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import SideNavBar from './Components/sideNavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

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
	const [showSideNavBar, setShowSideNavBar] = useState(false);
	const [toggleIcon, setToggleIcon] = useState(false);
	const isTablet = useMediaQuery({ query: '(max-width: 1190px)' });

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

	const handleToggleSideNavBar = () => {
		setShowSideNavBar(!showSideNavBar);
		setToggleIcon(!toggleIcon);
	};

	return (
		<HomeWrapper gradientIndex={gradientIndex}>
			{isTablet && (
				<Icons>
					{toggleIcon ? (
						<FontAwesomeIcon
							icon={faXmark}
							color="white"
							cursor="pointer"
							fontSize="38px"
							onClick={handleToggleSideNavBar}
						/>
					) : (
						<FontAwesomeIcon
							icon={faBars}
							color="white"
							cursor="pointer"
							fontSize="32px"
							onClick={handleToggleSideNavBar}
						/>
					)}
				</Icons>
			)}
			<SideBarWrapper showSideNavBar={showSideNavBar}>
				<SideNavBar />
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
	text-align: center;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	transition: background 1s linear;
	background: linear-gradient(
		135deg,
		${props => colors[props.gradientIndex]},
		${props => colors[(props.gradientIndex + 1) % colors.length]}
	);
`;

const Icons = styled.div`
	position: fixed;
	right: 15px;
	top: 10px;
	padding: 10px;
`;

const SideBarWrapper = styled.div`
	@media (max-width: 1199px) {
		display: ${({ showSideNavBar }) => (showSideNavBar ? 'block' : 'none')};
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
	}
	/* @media (min-width: 0px) and (max-width: 1199px) {
		display: ${({ showSideNavBar }) => (showSideNavBar ? 'block' : 'none')};
	} */
`;

const ContentWrapper = styled.div`
	color: white;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 100px;
	}
	div {
		font-size: 100px;
		font-weight: 700;
	}
`;
