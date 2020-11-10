import { createGlobalStyle } from 'styled-components';
const IconFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1604565254437'); /* IE9 */
    src: url('./iconfont.eot?t=1604565254437#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASUAAsAAAAACRwAAARGAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqFNIRFATYCJAMUCwwABCAFhG0HTRvWBxEVpGWQ/Two4+qMkYQlKQ64ZL0yr/784n5H/NfQ7bv7aZeoAA6JYiIs9PEYhYpCmSJd93h8NyI/vKe9oL1cMigdrA5QMzEd7KNVnPxHZ3OuOTIqQo3kzu89+kJaHqTZQwD4xL3TP88/2KgH1MW+5sC4+xhgHFAWjrFwkRW4xJ6CeDYddEzQeQIMBuwg1+GxqUDAqdMCZFsmLgAi4oUXcEE4+BlrC5AH4CHaGHoduHe+n38uIQAaXgf1opvbsGII/LJ6+wbr5Xohu/fBUHdh8JtABzZAgdxlRrcwr7qBIT+DcYHAQEChXfXzeFv49g3HgcC4IDup/eGBgsCgIFNQrSvKntcKfFkZ2sDmAbfAVgi3Dtsb1DTguNYygDXwDpBDUJ1HXZZQOALKNGVvpqSKKGAPUCZFCqlkBZWRudCAXK6VXnCMmgAYIU+P8ZtIH8P0OXcI0/Zvht4t1MQ5BOkgN0pS1+/WW3iUHLc6LD1YIqHp41Z285fQC6gJzUXnAqgNltJXjPyRgWbf1lLJc9F8gVzOLFq2cKOGRJLKHiiX+y7SPCClqUVyW7mcXnC/QypNk3Zxt0wkkzPXmHFJoqQ/7Y50Qp4iHxDdleVo2i6iSxZoWJEfjF2Yh5I1qKiAxNKKxcUspVycWZSPFSgVnWYj7liF3ilR4gqvZOX+CWlocGGZvxz/49/QeMHLEeEFOdRYi8oUc6iYQJ/XuUzjNW36j475J3MDEL72Yonfzcu8fNW8bhhp6Beu2L3Xu124SOmUp3q8sC7StamYUGxHUnXRix+xPPP6S8e2HmDTLPmCJ3TUqQMaZUG8549BySdO1MSWqO3SGKiMPrw/OImY9u73qN+yNXp4t8A1V4bu5C/Gi93em6zJykgE7b2AQfTwJuUBYmDB5V7dfoG0z6rLpKfyRZvbpcDAxDnC0ab2wKaO0Tm+a3TTqGsKDKvEu4WzVrDvxWJGxIrfsyzDsMBxTp/i4C93nDsNpww3B5r5JC3D7j+HIg0cxyq3AmikP/XM0b04hvUB7DqKj/Xy8eeOvDHXwcn1gkN5ysJvxBIHwOeVh3xH3UxTXQ3tbbdBZd374S6kgPhj/BpU36QUtxrWhyeYKMBEEgKcX92r0PJWJNeedmM/qMwROx2gmUEfHcGMLNYOExQ3TBECMNiK2Lykrh4GqZkAjg0RIFTsAkrJKWBU3CBx9gl4BN6BTyUYSKKo70mxCKKsCyEUjBrkH7zaN6MHuHOb72ivJChscPg3UvEFmPox3rjhhtTFgvKxM7MBQ3uGlVyGKe1w0B5Qce+Yj2UYTNaberXnqnNFKBg1yD94tW/G6sxd4vN3tFcSVCD5UXwjFd87TP1YgbxZt0qSUxlcPnZmNswkQ3uGFWFMWnWHI3tUQMW9a1A+loG2M1Wt/fD2fI67YFDvnqSlpzLJVLsQdduVxS59x4rNahG8NaRuv8RWnK8qAAA=') format('woff2'),
    url('./iconfont.woff?t=1604565254437') format('woff'),
    url('./iconfont.ttf?t=1604565254437') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1604565254437#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconyumaobi:before {
    content: "\e6e5";
  }

  .iconfangdajing:before {
    content: "\e662";
  }

  .iconzuanshi:before {
    content: "\e628";
  }
`;

export default IconFont;
