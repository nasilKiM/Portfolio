import styled from 'styled-components';

const Projects = () => {
	return (
		<Wrapper>
			<Container>
				<h2>Recent Projects</h2>
				<Select>
					<div>ALL</div>
					<div>REACT</div>
					<div>JAVA SCRIPT</div>
				</Select>
				<ProjectContainer>
					<Project>
						<img />
						<Detail>
							<h4>ZOOP-ZOOP MARKET</h4>
							<span>2023.04 ~ 2023.06</span>
							<span>프로젝트 소개글</span>
							<button>Clone Project</button>
							<button>repository</button>
						</Detail>
					</Project>
					<Project>
						<img />
						<Detail>
							<h4>Movie Cat-cha!</h4>
							<span>2023.03.21 ~ 2023.03.27</span>
							<span>프로젝트 소개글</span>
							<button>Clone Project</button>
							<button>repository</button>
						</Detail>
					</Project>
					<Project>
						<img />
						<Detail>
							<h4>KLL(Search)</h4>
							<span>2023.03.29 ~ 2023.04.02</span>
							<span>프로젝트 소개글</span>
							<button>Clone Project</button>
							<button>repository</button>
						</Detail>
					</Project>
					<Project>
						<img />
						<Detail>
							<h4>Git Issue</h4>
							<span>2023.03.16 ~ 2023.03.20</span>
							<span>프로젝트 소개글</span>
							<button>Clone Project</button>
							<button>repository</button>
						</Detail>
					</Project>
				</ProjectContainer>
			</Container>
		</Wrapper>
	);
};

export default Projects;

const Wrapper = styled.div`
	width: 100%;
	padding: 50px 20px;
	margin: 0 auto;
	background-color: black;
	color: white;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	h2 {
		font-size: 80px;
		font-weight: 600;
		margin: 30px 0;
	}
`;

const Select = styled.div`
	display: flex;
	width: 400px;
	border-radius: 20px;
	margin-bottom: 30px;
	background-color: gray;
	gap: 20px;
	justify-content: center;

	div {
		margin: 15px 10px;
		font-weight: 700;
		cursor: pointer;
		:hover {
			color: red;
		}
	}
`;

const ProjectContainer = styled.div``;

const Project = styled.div`
	width: 100%;
	min-height: 180px;
	display: flex;
	margin-bottom: 40px;
	text-align: left;
	img {
		min-width: 300px;
		max-width: 400px;
		border: 1px solid gray;
	}
`;

const Detail = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding-left: 30px;
	padding-top: 20px;
	button {
		max-width: 100px;
		padding: 10px 5px;
	}
`;
