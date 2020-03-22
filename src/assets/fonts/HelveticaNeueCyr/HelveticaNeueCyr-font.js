import { createGlobalStyle } from 'styled-components';

import HelveticaNeueCyrLightFontWoff from './HelveticaNeueCyr-Light/HelveticaNeueCyrLight.woff';
import HelveticaNeueCyrLightFontWoff2 from './HelveticaNeueCyr-Light/HelveticaNeueCyrLight.woff2';
import HelveticaNeueCyrLightFontTtf from './HelveticaNeueCyr-Light/HelveticaNeueCyrLight.ttf';
import HelveticaNeueCyrLightFontEot from './HelveticaNeueCyr-Light/HelveticaNeueCyrLight.eot';
import HelveticaNeueCyrLightFontSvg from './HelveticaNeueCyr-Light/HelveticaNeueCyrLight.svg';

import HelveticaNeueCyrBoldFontWoff from './HelveticaNeueCyr-Bold/HelveticaNeueCyrBold.woff';
import HelveticaNeueCyrBoldFontWoff2 from './HelveticaNeueCyr-Bold/HelveticaNeueCyrBold.woff2';
import HelveticaNeueCyrBoldFontTtf from './HelveticaNeueCyr-Bold/HelveticaNeueCyrBold.ttf';
import HelveticaNeueCyrBoldFontEot from './HelveticaNeueCyr-Bold/HelveticaNeueCyrBold.eot';
import HelveticaNeueCyrBoldFontSvg from './HelveticaNeueCyr-Bold/HelveticaNeueCyrBold.svg';

export default createGlobalStyle`
    @font-face {
        font-family: 'HelveticaNeueCyr';
        src: local('HelveticaNeueCyr Light'), local('HelveticaNeueCyrLight'),
        url(${HelveticaNeueCyrLightFontEot}) format('eot'),
        url(${HelveticaNeueCyrLightFontWoff2}) format('woff2'),
        url(${HelveticaNeueCyrLightFontWoff}) format('woff'),
        url(${HelveticaNeueCyrLightFontTtf}) format("truetype"),
        url(${HelveticaNeueCyrLightFontSvg}) format("svg");
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'HelveticaNeueCyr';
        src: local('HelveticaNeueCyr Bold'), local('HelveticaNeueCyrBold'),
        url(${HelveticaNeueCyrBoldFontEot}) format('eot'),
        url(${HelveticaNeueCyrBoldFontWoff2}) format('woff2'),
        url(${HelveticaNeueCyrBoldFontWoff}) format('woff'),
        url(${HelveticaNeueCyrBoldFontTtf}) format("truetype"),
        url(${HelveticaNeueCyrBoldFontSvg}) format("svg");
        font-weight: 700;
        font-style: normal;
    }
`;
