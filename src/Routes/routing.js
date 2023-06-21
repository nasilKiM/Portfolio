import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';

import ErrorPage from '../Error';
import About from '../Pages/About';
import Skill from '../Pages/Skill';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import HomePageTemp from 'Pages/Home/indexTemp';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '',
				element: <HomePageTemp />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/skill',
				element: <Skill />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);

export default router;
