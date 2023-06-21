import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';

import ErrorPage from '../Error';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Projects from '../Pages/Projects';
import HomePage from 'Pages/Home';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: '/about',
				element: <About />,
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
