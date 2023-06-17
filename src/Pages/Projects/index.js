import styled from 'styled-components';

const Projects = () => {
	return (
		<Wrapper>
			<Container>
				<h2>Recent Projects</h2>
				<ProjectContainer>
					<div>
						프로젝트1
						<h4>프로젝트명</h4>
						<span>프로젝트 업데이트 날짜</span>
						<span>프로젝트 소개글</span>
						<button>repository</button>
					</div>
					<div>
						프로젝트2
						<h4>프로젝트명</h4>
						<span>프로젝트 업데이트 날짜</span>
						<span>프로젝트 소개글</span>
						<button>repository</button>
					</div>
					<div>
						프로젝트3
						<h4>프로젝트명</h4>
						<span>프로젝트 업데이트 날짜</span>
						<span>프로젝트 소개글</span>
						<button>repository</button>
					</div>
					<div>
						프로젝트4
						<h4>프로젝트명</h4>
						<span>프로젝트 업데이트 날짜</span>
						<span>프로젝트 소개글</span>
						<button>repository</button>
					</div>
				</ProjectContainer>
			</Container>
		</Wrapper>
	);
};

export default Projects;

const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
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

const ProjectContainer = styled.div`
	width: 80%;
	div {
		min-height: 150px;
		border: 1px solid gray;
		margin-bottom: 20px;
	}
`;
