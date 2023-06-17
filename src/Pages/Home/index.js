import styled, { keyframes } from 'styled-components';
import React, { useEffect, useState } from 'react';
import SideNavBar from './Components/sideNavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import Projects from 'Pages/Projects';
import About from 'Pages/About';
import Skill from 'Pages/Skill';
import Contact from 'Pages/Contact';

const professions = ['Developer', 'Challenger', 'TeamWorker'];

const backgroundChange = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const HomePage = () => {
	const [professionIndex, setProfessionIndex] = useState(0);
	const [showSideNavBar, setShowSideNavBar] = useState(false);
	const [toggleIcon, setToggleIcon] = useState(false);
	const isTablet = useMediaQuery({ query: '(max-width: 1190px)' });

	useEffect(() => {
		const professionInterval = setInterval(() => {
			setProfessionIndex(prevIndex =>
				prevIndex === professions.length - 1 ? 0 : prevIndex + 1,
			);
		}, 2000);

		return () => {
			clearInterval(professionInterval);
		};
	}, []);

	const handleToggleSideNavBar = () => {
		setShowSideNavBar(!showSideNavBar);
		setToggleIcon(!toggleIcon);
	};

	return (
		<>
			<HomeWrapper>
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
					<span>{professions[professionIndex]}</span>
				</ContentWrapper>
			</HomeWrapper>
			<About />
			<Skill />
			<Projects />
			<Contact />
		</>
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
	background: linear-gradient(
		135deg,
		#4484ce,
		#1ad7c0,
		#ff9b11,
		#9b59b6,
		#ff7f7f,
		#ecf0f1
	);
	background-size: 400% 400%;
	animation: ${backgroundChange} 25s ease-in-out infinite;
	overflow: hidden;
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
`;

const ContentWrapper = styled.div`
	color: white;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 100px;
	}
	span {
		font-size: 100px;
		font-weight: 700;
	}
`;
