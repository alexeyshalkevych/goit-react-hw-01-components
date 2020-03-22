import { createGlobalStyle } from 'styled-components';

import ProximaNovaLightFontWoff from './ProximaNova-Light/ProximaNovaLight.woff';
import ProximaNovaLightFontWoff2 from './ProximaNova-Light/ProximaNovaLight.woff2';
import ProximaNovaLightFontTtf from './ProximaNova-Light/ProximaNovaLight.ttf';
import ProximaNovaLightFontEot from './ProximaNova-Light/ProximaNovaLight.eot';
import ProximaNovaLightFontSvg from './ProximaNova-Light/ProximaNovaLight.svg';

import ProximaNovaRegularFontWoff from './ProximaNova-Regular/ProximaNovaRegular.woff';
import ProximaNovaRegularFontWoff2 from './ProximaNova-Regular/ProximaNovaRegular.woff2';
import ProximaNovaRegularFontTtf from './ProximaNova-Regular/ProximaNovaRegular.ttf';
import ProximaNovaRegularFontEot from './ProximaNova-Regular/ProximaNovaRegular.eot';
import ProximaNovaRegularFontSvg from './ProximaNova-Regular/ProximaNovaRegular.svg';

import ProximaNovaSemiboldFontWoff from './ProximaNova-Semibold/ProximaNovaSemibold.woff';
import ProximaNovaSemiboldFontWoff2 from './ProximaNova-Semibold/ProximaNovaSemibold.woff2';
import ProximaNovaSemiboldFontTtf from './ProximaNova-Semibold/ProximaNovaSemibold.ttf';
import ProximaNovaSemiboldFontEot from './ProximaNova-Semibold/ProximaNovaSemibold.eot';
import ProximaNovaSemiboldFontSvg from './ProximaNova-Semibold/ProximaNovaSemibold.svg';

export default createGlobalStyle`
    @font-face {
        font-family: 'Proxima Nova';
        src: local('Proxima Nova Light'), local('ProximaNovaLight'),
        url(${ProximaNovaLightFontEot}) format('eot'),
        url(${ProximaNovaLightFontWoff2}) format('woff2'),
        url(${ProximaNovaLightFontWoff}) format('woff'),
        url(${ProximaNovaLightFontTtf}) format("truetype"),
        url(${ProximaNovaLightFontSvg}) format("svg");
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Proxima Nova';
        src: local('Proxima Nova Regular'), local('ProximaNovaRegular'),
        url(${ProximaNovaRegularFontEot}) format('eot'),
        url(${ProximaNovaRegularFontWoff2}) format('woff2'),
        url(${ProximaNovaRegularFontWoff}) format('woff'),
        url(${ProximaNovaRegularFontTtf}) format("truetype"),
        url(${ProximaNovaRegularFontSvg}) format("svg");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Proxima Nova';
        src: local('Proxima Nova Semibold'), local('ProximaNovaSemibold'),
        url(${ProximaNovaSemiboldFontEot}) format('eot'),
        url(${ProximaNovaSemiboldFontWoff2}) format('woff2'),
        url(${ProximaNovaSemiboldFontWoff}) format('woff'),
        url(${ProximaNovaSemiboldFontTtf}) format("truetype"),
        url(${ProximaNovaSemiboldFontSvg}) format("svg");
        font-weight: 600;
        font-style: normal;
    }
`;
