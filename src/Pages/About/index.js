import styled from 'styled-components';
import Skill from './Component';

const About = () => {
	return (
		<>
			<Wrapper>
				<Section>
					<h1>About Me</h1>
					<SectionContent>
						<span>
							My name is Nasil KIM. I'm most passionate about giving back to the
							community, and my goal is to pursue this passion within the field
							of frontend development.
						</span>
					</SectionContent>
				</Section>
				<Container>
					<Section2>
						<SectionTitle>CAREER</SectionTitle>
						<SectionContent>
							<ContentTitle>Carrot Global</ContentTitle>
							<ContentItem>2019.04 ~ 2022.08 ( 3 years )</ContentItem>
							<ContentItem>Team Leader</ContentItem>
							<ContentItem>-SmartLearning Department-</ContentItem>
							<ContentItem>job description</ContentItem>
						</SectionContent>
						<SectionContent>
							<ContentTitle>Yonsei University</ContentTitle>
							<ContentItem>2016.09 ~ 2018.09 ( 2 years )</ContentItem>
							<ContentItem>Administrative Staff</ContentItem>
							<ContentItem>Language Research Education Center</ContentItem>
							<ContentItem>job description</ContentItem>
						</SectionContent>
					</Section2>
					<Section2>
						<SectionTitle>EDUCATION</SectionTitle>
						<SectionContent>
							<ContentItem>학력</ContentItem>
							<ContentItem>기간</ContentItem>
						</SectionContent>
					</Section2>
				</Container>
			</Wrapper>
			<Skill />
		</>
	);
};

export default About;

const Wrapper = styled.div`
	width: 100%;
	padding: 0 20px;
	padding-top: 100px;
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	text-align: center;
`;

const Section = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	padding-bottom: 90px;
	text-align: center;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: 80px;
		font-weight: 600;
		padding-bottom: 20px;
	}
	span {
		min-width: 300px;
		max-width: 800px;
		font-size: 26px;
		line-height: 1.2;
	}
`;

const Section2 = styled.div`
	margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
	font-size: 30px;
	font-weight: bold;
	margin-bottom: 10px;
	padding-bottom: 20px;
	border-bottom: 2px solid aquamarine;
`;

const ContentTitle = styled.div`
	font-size: 20px;
	margin: 30px 0;
	background-color: gray;
	padding: 10px 20px;
	border-radius: 30px;
`;

const SectionContent = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContentItem = styled.div`
	margin-bottom: 8px;
`;
