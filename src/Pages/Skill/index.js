import styled from 'styled-components';

const Skill = () => {
	return (
		<>
			<Wrapper>
				<h2>SKILLS</h2>
				<div>스킬모음(그래프 라이브러리)</div>
				<div>JavaScript</div>
				<div>React</div>
				<div>TypeScript</div>
				<div>HTML/CSS</div>
			</Wrapper>
		</>
	);
};

export default Skill;

const Wrapper = styled.div`
	background-color: black;
	color: white;
`;
