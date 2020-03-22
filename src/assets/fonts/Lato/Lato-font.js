import { createGlobalStyle } from 'styled-components';

import LatoBoldFontWoff from './Lato-Bold/LatoBold.woff';
import LatoBoldFontWoff2 from './Lato-Bold/LatoBold.woff2';
import LatoBoldFontTtf from './Lato-Bold/LatoBold.ttf';
import LatoBoldFontEot from './Lato-Bold/LatoBold.eot';
import LatoBoldFontSvg from './Lato-Bold/LatoBold.svg';

import LatoRegularFontWoff from './Lato-Regular/LatoRegular.woff';
import LatoRegularFontWoff2 from './Lato-Regular/LatoRegular.woff2';
import LatoRegularFontTtf from './Lato-Regular/LatoRegular.ttf';
import LatoRegularFontEot from './Lato-Regular/LatoRegular.eot';
import LatoRegularFontSvg from './Lato-Regular/LatoRegular.svg';

import LatoBlackFontWoff from './Lato-Black/LatoBlack.woff';
import LatoBlackFontWoff2 from './Lato-Black/LatoBlack.woff2';
import LatoBlackFontTtf from './Lato-Black/LatoBlack.ttf';
import LatoBlackFontEot from './Lato-Black/LatoBlack.eot';
import LatoBlackFontSvg from './Lato-Black/LatoBlack.svg';

export default createGlobalStyle`
    @font-face {
        font-family: 'Lato Regular';
        src: local('Lato Regular'), local('LatoRegular'),
        url(${LatoRegularFontEot}) format('eot'),
        url(${LatoRegularFontWoff2}) format('woff2'),
        url(${LatoRegularFontWoff}) format('woff'),
        url(${LatoRegularFontTtf}) format("truetype"),
        url(${LatoRegularFontSvg}) format("svg");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Lato Bold';
        src: local('Lato Bold'), local('LatoBold'),
        url(${LatoBoldFontEot}) format('eot'),
        url(${LatoBoldFontWoff2}) format('woff2'),
        url(${LatoBoldFontWoff}) format('woff'),
        url(${LatoBoldFontTtf}) format("truetype"),
        url(${LatoBoldFontSvg}) format("svg");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Lato Black';
        src: local('Lato Black'), local('LatoBlack'),
        url(${LatoBlackFontEot}) format('eot'),
        url(${LatoBlackFontWoff2}) format('woff2'),
        url(${LatoBlackFontWoff}) format('woff'),
        url(${LatoBlackFontTtf}) format("truetype"),
        url(${LatoBlackFontSvg}) format("svg");
        font-weight: 900;
        font-style: normal;
    }
`;
