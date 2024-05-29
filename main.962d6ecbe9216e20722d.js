(()=>{"use strict";var n={725:(n,e,r)=>{r.d(e,{A:()=>z});var t=r(354),o=r.n(t),a=r(314),i=r.n(a),A=r(417),s=r.n(A),c=new URL(r(552),r.b),d=new URL(r(949),r.b),u=new URL(r(505),r.b),l=new URL(r(450),r.b),p=new URL(r(329),r.b),C=new URL(r(372),r.b),m=new URL(r(176),r.b),g=new URL(r(268),r.b),f=new URL(r(427),r.b),B=i()(o()),b=s()(c),h=s()(d),I=s()(u),v=s()(l),x=s()(p),k=s()(C),y=s()(m),w=s()(g),E=s()(f);B.push([n.id,`#galerypage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    color: white\n}\n\n#gridGalery {\n    display: grid;\n    width: 35vw;\n    height: 35vw;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(3, 1fr);\n    gap: 2vw;\n    margin-top: 20px;\n}\n\n#gridGalery * {\n    border-radius: 20px;\n    border: 2px solid white;\n}\n\n#p1 {\n    background: url(${b});\n    background-size: cover;\n    background-position: center;\n}\n\n#p2 {\n    background: url(${h});\n    background-size: cover;\n    background-position: center;\n}\n\n#p3 {\n    background: url(${I});\n    background-size: cover;\n    background-position: center;\n}\n\n#p4 {\n    background: url(${v});\n    background-size: cover;\n    background-position: center;\n}\n\n#p5 {\n    background: url(${x});\n    background-size: cover;\n    background-position: center;\n}\n\n#p6 {\n    background: url(${k});\n    background-size: cover;\n    background-position: center;\n}\n\n#p7 {\n    background: url(${y});\n    background-size: cover;\n    background-position: center;\n}\n\n#p8 {\n    background: url(${w});\n    background-size: cover;\n    background-position: center;\n}\n\n#p9 {\n    background: url(${E});\n    background-size: cover;\n    background-position: center;\n}`,"",{version:3,sources:["webpack://./src/galery.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;IACb,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,kCAAkC;IAClC,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mDAAqC;IACrC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAuC;IACvC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAuC;IACvC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAyC;IACzC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAsC;IACtC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAqC;IACrC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAqC;IACrC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAA0C;IAC1C,sBAAsB;IACtB,2BAA2B;AAC/B",sourcesContent:["#galerypage {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    color: white\r\n}\r\n\r\n#gridGalery {\r\n    display: grid;\r\n    width: 35vw;\r\n    height: 35vw;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(3, 1fr);\r\n    gap: 2vw;\r\n    margin-top: 20px;\r\n}\r\n\r\n#gridGalery * {\r\n    border-radius: 20px;\r\n    border: 2px solid white;\r\n}\r\n\r\n#p1 {\r\n    background: url('./assets/italy.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#p2 {\r\n    background: url('./assets/ingermanland.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#p3 {\r\n    background: url('./assets/georgia.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#p4 {\r\n    background: url('./assets/germany.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#p5 {\r\n    background: url('./assets/restraunt.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#p6 {\r\n    background: url('./assets/france.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#p7 {\r\n    background: url('./assets/china.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#p8 {\r\n    background: url('./assets/india.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#p9 {\r\n    background: url('./assets/uzbekistan.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}"],sourceRoot:""}]);const z=B},86:(n,e,r)=>{r.d(e,{A:()=>l});var t=r(354),o=r.n(t),a=r(314),i=r.n(a),A=r(417),s=r.n(A),c=new URL(r(276),r.b),d=i()(o()),u=s()(c);d.push([n.id,`#homepage {\n    display: flex;\n    width: 100vw;\n    height: 100%;\n    color: white;\n}\n\n#chef {\n    display: flex;\n    flex-direction: column;\n    font-size: 48px;\n    width: 40%;\n    border: 2px solid white;\n    border-radius: 20px;\n    justify-content: center;\n    align-items: center;\n    margin: 20px;\n}\n\n#chefphoto {\n    width: 250px;\n    height: 250px;\n    border-radius: 50%;\n    border: 2px solid white;\n    background: url(${u});\n    background-size: cover;\n    background-position: center;\n}\n\n#restrauntInfo {\n    display: flex;\n    flex-direction: column;\n    font-size: 26px;\n    width: 60%;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 20px;\n}\n`,"",{version:3,sources:["webpack://./src/home.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,UAAU;IACV,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,mDAAoC;IACpC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,UAAU;IACV,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;AACjB",sourcesContent:["#homepage {\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 100%;\r\n    color: white;\r\n}\r\n\r\n#chef {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 48px;\r\n    width: 40%;\r\n    border: 2px solid white;\r\n    border-radius: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 20px;\r\n}\r\n\r\n#chefphoto {\r\n    width: 250px;\r\n    height: 250px;\r\n    border-radius: 50%;\r\n    border: 2px solid white;\r\n    background: url('./assets/remy.jpg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#restrauntInfo {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 26px;\r\n    width: 60%;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding: 20px;\r\n}\r\n"],sourceRoot:""}]);const l=d},523:(n,e,r)=>{r.d(e,{A:()=>g});var t=r(354),o=r.n(t),a=r(314),i=r.n(a),A=r(417),s=r.n(A),c=new URL(r(162),r.b),d=new URL(r(74),r.b),u=new URL(r(572),r.b),l=i()(o()),p=s()(c),C=s()(d),m=s()(u);l.push([n.id,`@font-face {\n    font-family: 'restrauntFont';\n    src: url(${p}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'infoFont';\n    src: url(${C}) format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: url(${m}) fixed; \n    background-size: cover; \n}\n\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n}\n\nheader {\n    background-color: rgba(0, 0, 0, 0.9);\n    font-size: 32px;\n    font-family: "restrauntFont", sans-serif;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100vw;\n}\n\nheader * {\n    margin: 0;  \n    padding: 0; \n}\n\nnav button {\n    margin-right: 20px;\n    outline: none;\n    border: 2px solid white;\n    font-size: 32px;\n    width: 200px;\n    height: 40px;\n    border-radius: 10px 10px 10px 10px;\n    background-color: inherit;\n    color: white;\n    margin-bottom: 10px;\n    font-family: "infoFont", sans-serif;\n}\n\nnav button:hover {\n    animation: vibration 0.5s;\n}\n\n@keyframes vibration {\n    0% { transform: translateX(0); }\n    25% { transform: translateX(-2px); }\n    50% { transform: translateX(2px); }\n    75% { transform: translateX(-2px); }\n    100% { transform: translateX(0); }\n}\n\n#content {\n    background-color: rgba(0, 0, 0, 0.75);\n    flex: 1;\n    font-family: "infoFont", sans-serif;\n}\n\nnav {\n    margin-top: 10px;\n}`,"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;IACI,4BAA4B;IAC5B,+DAAqD;IACrD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,+DAAgD;IAChD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,yDAA8C;IAC9C,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,wCAAwC;IACxC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,kCAAkC;IAClC,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,KAAK,wBAAwB,EAAE;IAC/B,MAAM,2BAA2B,EAAE;IACnC,MAAM,0BAA0B,EAAE;IAClC,MAAM,2BAA2B,EAAE;IACnC,OAAO,wBAAwB,EAAE;AACrC;;AAEA;IACI,qCAAqC;IACrC,OAAO;IACP,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;AACpB",sourcesContent:["@font-face {\r\n    font-family: 'restrauntFont';\r\n    src: url('./assets/restraunt.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'infoFont';\r\n    src: url('./assets/info.ttf') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: url('./assets/foodmap.jpeg') fixed; \r\n    background-size: cover; \r\n}\r\n\r\n#container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n}\r\n\r\nheader {\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n    font-size: 32px;\r\n    font-family: \"restrauntFont\", sans-serif;\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100vw;\r\n}\r\n\r\nheader * {\r\n    margin: 0;  \r\n    padding: 0; \r\n}\r\n\r\nnav button {\r\n    margin-right: 20px;\r\n    outline: none;\r\n    border: 2px solid white;\r\n    font-size: 32px;\r\n    width: 200px;\r\n    height: 40px;\r\n    border-radius: 10px 10px 10px 10px;\r\n    background-color: inherit;\r\n    color: white;\r\n    margin-bottom: 10px;\r\n    font-family: \"infoFont\", sans-serif;\r\n}\r\n\r\nnav button:hover {\r\n    animation: vibration 0.5s;\r\n}\r\n\r\n@keyframes vibration {\r\n    0% { transform: translateX(0); }\r\n    25% { transform: translateX(-2px); }\r\n    50% { transform: translateX(2px); }\r\n    75% { transform: translateX(-2px); }\r\n    100% { transform: translateX(0); }\r\n}\r\n\r\n#content {\r\n    background-color: rgba(0, 0, 0, 0.75);\r\n    flex: 1;\r\n    font-family: \"infoFont\", sans-serif;\r\n}\r\n\r\nnav {\r\n    margin-top: 10px;\r\n}"],sourceRoot:""}]);const g=l},918:(n,e,r)=>{r.d(e,{A:()=>w});var t=r(354),o=r.n(t),a=r(314),i=r.n(a),A=r(417),s=r.n(A),c=new URL(r(619),r.b),d=new URL(r(347),r.b),u=new URL(r(609),r.b),l=new URL(r(140),r.b),p=new URL(r(246),r.b),C=new URL(r(426),r.b),m=new URL(r(687),r.b),g=new URL(r(95),r.b),f=i()(o()),B=s()(c),b=s()(d),h=s()(u),I=s()(l),v=s()(p),x=s()(C),k=s()(m),y=s()(g);f.push([n.id,`.lunch {\n    height: 275px;\n    width: 275px;\n    border-radius: 20px;\n    border: 2px solid white;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /*justify-content: flex-end;*/\n    justify-content: space-around; /* x */\n    position: relative;\n    font-size: 24px;\n}\n\n#row1 div div {\n    width: 200px;\n    height: 200px;\n    /*position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);*/\n}\n\n#row2 div div {\n    width: 200px;\n    height: 200px;\n    /*position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);*/\n}\n\n#img1 {\n    background: url(${B});\n    background-size: cover;\n    background-position: center;\n}\n\n#img2 {\n    background: url(${b});\n    background-size: cover;\n    background-position: center;\n}\n\n#img3 {\n    background: url(${h});\n    background-size: cover;\n    background-position: center;\n}\n\n#img4 {\n    background: url(${I});\n    background-size: cover;\n    background-position: center;\n}\n\n#img5 {\n    background: url(${v});\n    background-size: cover;\n    background-position: center;\n}\n\n#img6 {\n    background: url(${x});\n    background-size: cover;\n    background-position: center;\n}\n\n#img7 {\n    background: url(${k});\n    background-size: cover;\n    background-position: center;\n}\n\n#img8 {\n    background: url(${y});\n    background-size: cover;\n    background-position: center;\n}\n\n#menupage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    gap: 20px;\n}\n\n#row1 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 20px;\n}\n\n#row2 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n    margin-bottom: 20px;\n}\n\n\n\n`,"",{version:3,sources:["webpack://./src/menu.css"],names:[],mappings:"AAAA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,6BAA6B,EAAE,MAAM;IACrC,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb;;;sCAGkC;AACtC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb;;;sCAGkC;AACtC;;AAEA;IACI,mDAAqC;IACrC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAqC;IACrC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAuC;IACvC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAA0C;IAC1C,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAuC;IACvC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAA4C;IAC5C,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAqC;IACrC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,mDAAsC;IACtC,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,mBAAmB;AACvB",sourcesContent:[".lunch {\r\n    height: 275px;\r\n    width: 275px;\r\n    border-radius: 20px;\r\n    border: 2px solid white;\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    /*justify-content: flex-end;*/\r\n    justify-content: space-around; /* x */\r\n    position: relative;\r\n    font-size: 24px;\r\n}\r\n\r\n#row1 div div {\r\n    width: 200px;\r\n    height: 200px;\r\n    /*position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);*/\r\n}\r\n\r\n#row2 div div {\r\n    width: 200px;\r\n    height: 200px;\r\n    /*position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);*/\r\n}\r\n\r\n#img1 {\r\n    background: url('./assets/italy.svg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#img2 {\r\n    background: url('./assets/china.svg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#img3 {\r\n    background: url('./assets/germany.svg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#img4 {\r\n    background: url('./assets/uzbekistan.svg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#img5 {\r\n    background: url('./assets/georgia.svg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#img6 {\r\n    background: url('./assets/ingermanland.svg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#img7 {\r\n    background: url('./assets/india.svg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#img8 {\r\n    background: url('./assets/france.svg');\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n#menupage {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100vw;\r\n    gap: 20px;\r\n}\r\n\r\n#row1 {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    margin-top: 20px;\r\n}\r\n\r\n#row2 {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n"],sourceRoot:""}]);const w=f},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],A=0;A<n.length;A++){var s=n[A],c=t.base?s[0]+t.base:s[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var l=r(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var C=o(p,t);t.byIndex=A,e.splice(A,0,{identifier:u,updater:C,references:1})}i.push(u)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var A=r(a[i]);e[A].references--}for(var s=t(n,o),c=0;c<a.length;c++){var d=r(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},176:(n,e,r)=>{n.exports=r.p+"64f7af0c80a1d6640b01.jpg"},347:(n,e,r)=>{n.exports=r.p+"1033fa57a325ff43c823.svg"},572:(n,e,r)=>{n.exports=r.p+"917904a1a57fb1cf054b.jpeg"},372:(n,e,r)=>{n.exports=r.p+"4b4a24000514ccac925e.jpg"},95:(n,e,r)=>{n.exports=r.p+"49d21c9a58c9829235d0.svg"},505:(n,e,r)=>{n.exports=r.p+"a596af3e487c98f5173e.jpg"},246:(n,e,r)=>{n.exports=r.p+"22370c46a09c49d3f258.svg"},450:(n,e,r)=>{n.exports=r.p+"e6ee9230093fe0bac06d.jpg"},609:(n,e,r)=>{n.exports=r.p+"860a4d561bb40080be24.svg"},268:(n,e,r)=>{n.exports=r.p+"bafa7aa024f9a3c4cd1a.jpg"},687:(n,e,r)=>{n.exports=r.p+"76af8495e0f12e5065c3.svg"},74:(n,e,r)=>{n.exports=r.p+"7b8c952927af2b0deacd.ttf"},949:(n,e,r)=>{n.exports=r.p+"670a48bbefe410196b5a.jpg"},426:(n,e,r)=>{n.exports=r.p+"f00fe85400e072843839.svg"},552:(n,e,r)=>{n.exports=r.p+"9205faf7059ac8be0eaf.jpg"},619:(n,e,r)=>{n.exports=r.p+"6834ee498d6ff0200ddf.svg"},276:(n,e,r)=>{n.exports=r.p+"4be2894850ab88d2b0ea.jpg"},329:(n,e,r)=>{n.exports=r.p+"f95ec36e3f2232178b5d.jpg"},162:(n,e,r)=>{n.exports=r.p+"31f0a02d84d42627c894.ttf"},427:(n,e,r)=>{n.exports=r.p+"e90adade6983575e6cb9.jpg"},140:(n,e,r)=>{n.exports=r.p+"2ed0b6d674dfa152fe08.svg"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.p="",r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var n=r(72),e=r.n(n),t=r(825),o=r.n(t),a=r(659),i=r.n(a),A=r(56),s=r.n(A),c=r(540),d=r.n(c),u=r(113),l=r.n(u),p=r(523),C={};C.styleTagTransform=l(),C.setAttributes=s(),C.insert=i().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=d(),e()(p.A,C),p.A&&p.A.locals&&p.A.locals;var m=r(86),g={};function f(n){const e=document.createElement("div");e.id="homepage";const r=document.createElement("div");r.id="chef";const t=document.createElement("p");t.id="chefsignature",t.textContent="Our chef";const o=document.createElement("div");o.id="chefphoto";const a=document.createElement("p");a.id="chefname",a.textContent="Remy",r.appendChild(t),r.appendChild(o),r.appendChild(a);const i=document.createElement("div");i.id="restrauntInfo";const A=document.createElement("p");A.id="restrauntsignature",A.textContent="About Global Palate";const s=document.createElement("p");s.id="aboutrestraunt",s.textContent="Welcome to Global Palate restaurant, where we offer our guests unique lunch sets from around the world. Our restaurant prides itself on providing quality dishes inspired by world cuisines. From hearty to sweet, our sets will satisfy any taste preference. Join us for an unforgettable culinary journey through different cultures. Whether you crave cozy comfort food or seek adventure, we have the perfect set for you. Come and enjoy the world on a plate at our restaurant",i.appendChild(A),i.appendChild(s),e.appendChild(r),e.appendChild(i),n.appendChild(e)}g.styleTagTransform=l(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(m.A,g),m.A&&m.A.locals&&m.A.locals;var B=r(918),b={};b.styleTagTransform=l(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),e()(B.A,b),B.A&&B.A.locals&&B.A.locals,r(95);var h=r(725),I={};I.styleTagTransform=l(),I.setAttributes=s(),I.insert=i().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=d(),e()(h.A,I),h.A&&h.A.locals&&h.A.locals;const v=document.querySelector("#content");window.addEventListener("load",(()=>{f(v)}));const x=document.querySelector("#home"),k=document.querySelector("#menu"),y=document.querySelector("#galery");x.addEventListener("click",(function(){v.innerHTML="",f(v)})),k.addEventListener("click",(function(){v.innerHTML="",function(n){const e=document.createElement("div");e.id="menupage";const r=document.createElement("div");r.id="row1";const t=document.createElement("div");t.classList.add("lunch"),t.id="lunch1";const o=document.createElement("div");o.id="img1";const a=document.createElement("p");a.id="signature1",a.textContent="Italian set",t.appendChild(o),t.appendChild(a);const i=document.createElement("div");i.classList.add("lunch"),i.id="lunch2";const A=document.createElement("div");A.id="img2";const s=document.createElement("p");s.id="signature2",s.textContent="Chinese set",i.appendChild(A),i.appendChild(s);const c=document.createElement("div");c.classList.add("lunch"),c.id="lunch3";const d=document.createElement("div");d.id="img3";const u=document.createElement("p");u.id="signature3",u.textContent="German set",c.appendChild(d),c.appendChild(u);const l=document.createElement("div");l.classList.add("lunch"),l.id="lunch4";const p=document.createElement("div");p.id="img4";const C=document.createElement("p");C.id="signature4",C.textContent="Uzbek set",l.appendChild(p),l.appendChild(C),r.appendChild(t),r.appendChild(i),r.appendChild(c),r.appendChild(l);const m=document.createElement("div");m.id="row2";const g=document.createElement("div");g.classList.add("lunch"),g.id="lunch5";const f=document.createElement("div");f.id="img5";const B=document.createElement("p");B.id="signature5",B.textContent="Georgian set",g.appendChild(f),g.appendChild(B);const b=document.createElement("div");b.classList.add("lunch"),b.id="lunch6";const h=document.createElement("div");h.id="img6";const I=document.createElement("p");I.id="signature6",I.textContent="Ingrian set",b.appendChild(h),b.appendChild(I);const v=document.createElement("div");v.classList.add("lunch"),v.id="lunch7";const x=document.createElement("div");x.id="img7";const k=document.createElement("p");k.id="signature7",k.textContent="Indian set",v.appendChild(x),v.appendChild(k);const y=document.createElement("div");y.classList.add("lunch"),y.id="lunch8";const w=document.createElement("div");w.id="img8";const E=document.createElement("p");function z(n,e,r,t){n.addEventListener("mouseover",(function(){e.textContent=r,e.style.fontSize="15px",e.style.textAlign="center"})),n.addEventListener("mouseout",(function(){e.textContent=t,e.style.fontSize="24px"}))}E.id="signature8",E.textContent="French set",y.appendChild(w),y.appendChild(E),console.log(w.src),m.appendChild(g),m.appendChild(b),m.appendChild(v),m.appendChild(y),e.appendChild(r),e.appendChild(m),n.appendChild(e),z(t,a,"Bruschetta with Tomato and Basil, Spaghetti Carbonara, Limoncello Spritz, Tiramisu","Italian set"),z(i,s,"Spring Rolls, Kung Pao Chicken with Steamed Rice, Jasmine Tea, Mango Pudding","Chinese set"),z(c,u,"Pretzel with Mustard Dip, Schnitzel with Potato Salad, Pilsner, Black Forest Cake","German set"),z(l,C,"Samsa, Plov, Ayran, Halva","Uzbek set"),z(g,B,"Khachapuri, Khinkali, Saperavi, Churchkhela","Georgian set"),z(b,I,"Trout soup, Beef Stroganoff with Buckwheat, Berry Ingrian Kvass, Ptichye Moloko","Ingrian set"),z(v,k,"Samosa with Tamarind Chutney, Chicken Tikka Masala with Naan Bread, Lassi, Gulab Jamun","Indian set"),z(y,E,"French Onion Soup, Coq au Vin with Ratatouille, Red Bordeaux Wine, Crème Brûlée","French set")}(v)})),y.addEventListener("click",(function(){v.innerHTML="",function(n){const e=document.createElement("div");e.id="galerypage";const r=document.createElement("div");r.id="gridGalery";const t=document.createElement("div");t.id="p1";const o=document.createElement("div");o.id="p2";const a=document.createElement("div");a.id="p3";const i=document.createElement("div");i.id="p4";const A=document.createElement("div");A.id="p5";const s=document.createElement("div");s.id="p6";const c=document.createElement("div");c.id="p7";const d=document.createElement("div");d.id="p8";const u=document.createElement("div");u.id="p9",r.appendChild(t),r.appendChild(o),r.appendChild(a),r.appendChild(i),r.appendChild(A),r.appendChild(s),r.appendChild(c),r.appendChild(d),r.appendChild(u),e.appendChild(r),n.appendChild(e)}(v)}))})()})();
//# sourceMappingURL=main.962d6ecbe9216e20722d.js.map