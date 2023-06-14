import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
	body{
		font-family: "Open Sans", sans-serif;
	}
	button: {
		border: none;
	}
	

`;
export default GlobalStyles;
