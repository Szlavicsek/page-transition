import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from "./router/Router"
import { createGlobalStyle } from 'styled-components'

import './App.css';

import AvenirBlackEOT from './assets/fonts/avenirltce95black-webfont.eot';
import AvenirBlackTTF from './assets/fonts/avenirltce95black-webfont.ttf';
import AvenirBlackWOFF2 from './assets/fonts/avenirltce95black-webfont.woff2';
import AvenirRomanEOT from './assets/fonts/avenirltce55roman-webfont.eot';
import AvenirRomanTTF from './assets/fonts/avenirltce55roman-webfont.ttf';
import AvenirRomanWOFF2 from './assets/fonts/avenirltce55roman-webfont.woff2';
import AvenirLightEOT from './assets/fonts/avenirltce35light-webfont.eot';
import AvenirLightTTF from './assets/fonts/avenirltce35light-webfont.ttf';
import AvenirLightWOFF2 from './assets/fonts/avenirltce35light-webfont.woff2';


function App() {
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        document.querySelector("#root").classList.add("scroller")
    }
    const GlobalStyle = createGlobalStyle`
      @font-face {
        font-family: 'Avenir-Black';
		src: url(${AvenirBlackEOT}); /* IE9 Compat Modes */
		src: url('${AvenirBlackEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url(${AvenirBlackWOFF2}) format('woff2'), /* Pretty Modern Browsers */
		url(${AvenirBlackTTF})  format('truetype'); /* Safari, Android, iOS */
      }
      @font-face {
        font-family: 'Avenir-Roman';
		src: url(${AvenirRomanEOT}); /* IE9 Compat Modes */
		src: url('${AvenirRomanEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url(${AvenirRomanWOFF2}) format('woff2'), /* Pretty Modern Browsers */
		url(${AvenirRomanTTF})  format('truetype'); /* Safari, Android, iOS */
      }
       @font-face {
        font-family: 'Avenir-Light';
		src: url(${AvenirLightEOT}); /* IE9 Compat Modes */
		src: url('${AvenirLightEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
		url(${AvenirLightWOFF2}) format('woff2'), /* Pretty Modern Browsers */
		url(${AvenirLightTTF})  format('truetype'); /* Safari, Android, iOS */
      }
    `;

  return (
      <>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </>
  );
}

export default App;
