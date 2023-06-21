import styled from 'styled-components';

const Skill = () => {
	const skillsData = [
		{ label: 'React', percentage: 65 },
		{ label: 'JavaScript', percentage: 50 },
		{ label: 'TypeScript', percentage: 15 },
		{ label: 'HTML/CSS', percentage: 90 },
	];

	return (
		<>
			<Wrapper>
				<h2>Skills</h2>
				<Container>
					{skillsData.map((skill, index) => (
						<PieChart key={index}>
							<PieSlice percentage={skill.percentage}>
								<SliceLabel>{skill.label}</SliceLabel>
							</PieSlice>
						</PieChart>
					))}
				</Container>
			</Wrapper>
		</>
	);
};

export default Skill;

const Wrapper = styled.div`
	width: 100%;
	padding: 50px 0;
	margin: 0 auto;
	background-color: black;
	color: white;
	text-align: center;
	h2 {
		font-size: 80px;
		font-weight: 600;
		margin: 30px 0;
	}
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	justify-content: center;
`;

const PieChart = styled.div`
	width: 180px;
	height: 180px;
	border-radius: 50%;
	background-color: #f2f2f2;
	position: relative;
	overflow: hidden;
`;

const PieSlice = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	clip-path: ${props =>
		`polygon(50% 50%, 100% 0, 100% 50%, ${50 - props.percentage / 2}% 50%)`};
	background-color: ${props =>
		`hsl(${(props.percentage / 100) * 120}, 70%, 50%)`};
	transform-origin: 0 50%;
	transform: rotate(-90deg);
	transition: transform 0.3s ease;
`;

const SliceLabel = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 14px;
	color: #333;
	text-align: center;
`;
