import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import SideNavBar from './Components/sideNavBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import Projects from 'Pages/Projects';
import About from 'Pages/About';
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
	const location = useLocation();
	const sectionRefs = useRef({});

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

	useEffect(() => {
		const sectionId = location.hash.slice(1);
		const sectionElement = sectionRefs.current[sectionId];
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: 'smooth' });
		}
	}, [location.hash]);

	const handleMenuClick = sectionId => {
		const sectionElement = sectionRefs.current[sectionId];
		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<Wrapper>
				<Container>
					{isTablet ? null : (
						<NavWrapper>
							<Link to="/">HOME</Link>
							<Link to="/#about">ABOUT</Link>
							<Link to="/#projects">PROJECTS</Link>
							<Link to="/#contact">CONTACTS</Link>
						</NavWrapper>
					)}
					<Intro>
						<div>NASIL KIM</div>
						<div>I'm ________</div>
						<span>{professions[professionIndex]}</span>
					</Intro>
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
						{isTablet ? <SideNavBar /> : null}
					</SideBarWrapper>
				</Container>
				<HomeWrapper />
			</Wrapper>
			<section id="about" ref={ref => (sectionRefs.current['about'] = ref)}>
				<About />
			</section>
			<section
				id="projects"
				ref={ref => (sectionRefs.current['projects'] = ref)}
			>
				<Projects />
			</section>
			<section id="contact" ref={ref => (sectionRefs.current['contact'] = ref)}>
				<Contact />
			</section>
		</>
	);
};

export default HomePage;

const Wrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	height: 100%;
	background: url('/Assets/Img/background.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: local;
	@media (max-width: 1100px) {
		background-size: cover;
	}
`;

const Container = styled.div`
	width: 100%;
	position: absolute;
	color: white;
	z-index: 1;
`;

const Intro = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: left;
	padding-top: 250px;
	font-size: 80px;
	font-weight: 700;
	line-height: 1;
	span {
		font-size: 85px;
		color: antiquewhite;
	}
`;

const HomeWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
		135deg,
		#4484ce,
		#1ad7c0,
		#9b59b6,
		#ff7f7f,
		#ecf0f1
	);
	background-size: 400% 400%;
	animation: ${backgroundChange} 10s ease-in-out infinite;
	overflow: hidden;
	z-index: -10000;
`;

const NavWrapper = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	gap: 25px;
	font-size: 20px;
	font-weight: 700;
	justify-content: flex-end;
	padding: 20px 50px;
	cursor: pointer;
	a {
		text-decoration: none;
		color: white;
		:visited {
			text-decoration: none;
		}
		:hover {
			color: red;
		}
	}
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
