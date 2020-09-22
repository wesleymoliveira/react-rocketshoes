import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
    }

    body {
      background: #191920 url(${background}) no-repeat center top;
      -webkit-font-smoothing: antialiased;
      color: #f1f1f1;

    }

    body, input, button {
      font: 14px Roboto, sans-serif;
    }

    #root {
      max-width: 1020px;
      margin: 0 auto;
      padding: 0 20px 50px;
    }

    button {
      cursor: pointer;
    }


`;