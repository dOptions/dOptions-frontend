(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[2],{108:function(n,e,t){"use strict";t.d(e,"d",(function(){return p})),t.d(e,"b",(function(){return f})),t.d(e,"a",(function(){return b})),t.d(e,"k",(function(){return h})),t.d(e,"n",(function(){return g})),t.d(e,"f",(function(){return x})),t.d(e,"g",(function(){return w})),t.d(e,"c",(function(){return m})),t.d(e,"i",(function(){return v})),t.d(e,"e",(function(){return j})),t.d(e,"h",(function(){return y})),t.d(e,"m",(function(){return O})),t.d(e,"j",(function(){return k})),t.d(e,"l",(function(){return T}));var r=t(41),a=t.n(r),o=t(58),i=t(7),c=t.n(i),s=t(121),u=t.n(s),d=t(86),l=t(63),p=function(n,e,t){var r=new c.a(n),a=new c.a(e),o=new c.a(t),i=new c.a(t).times(l.a.defaultPrecision).times(1e3).div(l.a.poolPrecision);return r.gt(0)&&a.gt(0)&&(i=o.times(r).div(a)),i},f=function(n,e,t){var r=new c.a(n),a=new c.a(e),o=new c.a(t),i=new c.a(0);return r.gt(0)&&a.gt(0)&&(i=o.times(r).div(a)),i},b=function(){var n=Object(o.a)(a.a.mark((function n(){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.f)(l.a.contract.usdt,"approve(address,uint256)",[{type:"address",value:l.a.contract.erc},{type:"uint256",value:d.b}]);case 2:return e=n.sent,n.abrupt("return",Object(d.g)(e));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,o,i,s,u,p=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:"USDT",r=l.a.contract.eth,o="provide(uint256)",i=[{type:"uint256",value:0}],s={callValue:new c.a(e).times(l.a.defaultPrecision).integerValue(c.a.ROUND_DOWN).toString()},"USDT"===t&&(r=l.a.contract.erc,o="provide(uint256,uint256)",i=[{type:"uint256",value:"0x".concat(new c.a(e).times(l.a.defaultPrecision).integerValue(c.a.ROUND_DOWN).toString(16))},{type:"uint256",value:0}],s={}),n.next=8,Object(d.f)(r,o,i,s);case 8:return u=n.sent,n.abrupt("return",Object(d.g)(u));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,o,i=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"USDT",r="USDT"===t?l.a.contract.erc:l.a.contract.eth,n.next=4,Object(d.f)(r,"withdraw(uint256,uint256)",[{type:"uint256",value:"0x".concat(new c.a(e).times(l.a.defaultPrecision).integerValue(c.a.ROUND_DOWN).toString(16))},{type:"uint256",value:d.b}]);case 4:return o=n.sent,n.abrupt("return",Object(d.g)(o));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=Object(o.a)(a.a.mark((function n(e,t,r,o){var i,s,u,p=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=p.length>4&&void 0!==p[4]?p[4]:"PUT",s="PUT"===i?l.a.contract.put:l.a.contract.call,n.next=4,Object(d.f)(s,"create(uint256,uint256,uint256)",[{type:"uint256",value:"0x".concat(new c.a(e).times(86400).toString(16))},{type:"uint256",value:"0x".concat(new c.a(t).times(l.a.defaultPrecision).integerValue(c.a.ROUND_DOWN).toString(16))},{type:"uint256",value:"0x".concat(new c.a(r).times(l.a.defaultPrecision).integerValue(c.a.ROUND_DOWN).toString(16))}],{callValue:o.times(l.a.defaultPrecision).integerValue(c.a.ROUND_DOWN).toString()});case 4:return u=n.sent,n.abrupt("return",Object(d.g)(u));case 6:case"end":return n.stop()}}),n)})));return function(e,t,r,a){return n.apply(this,arguments)}}(),w=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,o,i=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:"PUT",r="PUT"===t?l.a.contract.put:l.a.contract.call,n.next=4,Object(d.f)(r,"exercise(uint256)",[{type:"uint256",value:e}]);case 4:return o=n.sent,n.abrupt("return",Object(d.g)(o));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=Object(o.a)(a.a.mark((function n(e,t,r){var o,i,s,u,p,f,b,h=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=h.length>3&&void 0!==h[3]?h[3]:"PUT",i=new c.a(0),s=!1,u="PUT"===o?l.a.contract.put:l.a.contract.call,n.next=6,Object(d.h)(u,"fees(uint256,uint256,uint256)",[{type:"uint256",value:"0x".concat(new c.a(e).times(86400).toString(16))},{type:"uint256",value:"0x".concat(new c.a(t).times(l.a.defaultPrecision).integerValue(c.a.ROUND_DOWN).toString(16))},{type:"uint256",value:"0x".concat(new c.a(r).times(l.a.defaultPrecision).integerValue(c.a.ROUND_DOWN).toString(16))}]);case 6:return(p=n.sent).length&&(f=0,b=p[0],i=new c.a(b.substr(f++*d.a,d.a),16).div(l.a.defaultPrecision),s=!0),n.abrupt("return",{totalFee:i,success:s});case 9:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),v=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r,o,i,s,u,p,f,b,h,g,x,w,m,v,j,y,O,k,T,P,S,z,D,N,L,W;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l.a.zeroAddr,e&&(t=e),r=new c.a(0),o=new c.a(0),i=new c.a(0),s=new c.a(0),u=new c.a(0),p=new c.a(0),f=new c.a(0),b=new c.a(0),h=new c.a(0),g=new c.a(0),x=new c.a(0),w=new c.a(0),m=new c.a(0),v=new c.a(0),j=new c.a(0),y=new c.a(0),O=new c.a(0),k=new c.a(0),T=new c.a(0),P=new c.a(0),S=new c.a(0),z=new c.a(0),D=!1,n.next=27,Object(d.h)(l.a.contract.agg,"userInfo(address,address,address,address,address)",[{type:"address",value:t},{type:"address",value:l.a.contract.util},{type:"address",value:l.a.contract.usdt},{type:"address",value:l.a.contract.eth},{type:"address",value:l.a.contract.erc}]);case 27:return(N=n.sent).length&&(L=0,W=N[0],r=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),o=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),i=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),s=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),u=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.poolPrecision),p=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.poolPrecision),f=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),b=new c.a(W.substr(L++*d.a,d.a),16).times(1e3),h=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),g=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),x=new c.a(W.substr(L++*d.a,d.a),16).times(1e3),w=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),m=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),v=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.poolPrecision),j=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.poolPrecision),y=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),O=new c.a(W.substr(L++*d.a,d.a),16).times(1e3),k=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),T=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),P=new c.a(W.substr(L++*d.a,d.a),16).times(1e3),S=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),z=new c.a(W.substr(L++*d.a,d.a),16).div(l.a.defaultPrecision),D=!0),n.abrupt("return",{latestAnswer:r,trxBalance:o,tokenBalance:i,tokenAllowance:s,ethTotalSupply:u,ethBalanceOf:p,ethShareOf:f,ethLastProvideTimestamp:b,ethAvailableBalance:h,ethTotalBalance:g,ethLockupPeriod:x,ethLockedAmount:w,ethLockedPremium:m,ercTotalSupply:v,ercBalanceOf:j,ercShareOf:y,ercLastProvideTimestamp:O,ercAvailableBalance:k,ercTotalBalance:T,ercLockupPeriod:P,ercLockedAmount:S,ercLockedPremium:z,success:D});case 30:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),j=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"PUT",a="\u2248 $ ".concat(new c.a(n).minus(e).times(t)._toFixed(l.a.defaultShowDec));return"CALL"===r&&(a="\u2248 ".concat(e.minus(n).times(t).div(e)._toFixed(l.a.defaultShowDec)," TRX")),a},y=function(){var n=Object(o.a)(a.a.mark((function n(e,t){var r,i,s,u,l=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=l.length>2&&void 0!==l[2]?l[2]:"PUT",i=l.length>3?l[3]:void 0,s=0,u=function(){var n=Object(o.a)(a.a.mark((function n(){var o,l;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(s>5)){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,Object(d.c)(t);case 4:(o=n.sent).id&&"FAILED"!==o.result?(l=new c.a(o.contractResult,16).toNumber(),T(e,l,r,i)):(s++,setTimeout((function(){u()}),5e3));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),setTimeout((function(){u()}),5e3);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),O=function(){var n=Object(o.a)(a.a.mark((function n(e,t,r){var o,i,c,s=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o=s.length>3&&void 0!==s[3]?s[3]:"PUT",i=k(e),(c=i.filter((function(n){return n.id===r&&n.option===o}))).length&&(c[0].plRelized=t),window.localStorage.setItem("".concat(l.a.localStorage.historyKey).concat(e),JSON.stringify(i));case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),k=function(n){if(!n)return[];try{var e=window.localStorage.getItem("".concat(l.a.localStorage.historyKey).concat(n))||[];return JSON.parse(e)}catch(t){return[]}},T=function(){var n=Object(o.a)(a.a.mark((function n(e,t){var r,o,i,s,p,f,b,h,g,x,w,m,v,j,y,O,T=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=T.length>2&&void 0!==T[2]?T[2]:"PUT",o=T.length>3?T[3]:void 0,i=Number(t),s="PUT"===r?l.a.contract.put:l.a.contract.call,n.next=6,Object(d.h)(s,"options(uint256)",[{type:"uint256",value:i}]);case 6:return p=n.sent,f=new c.a(0),b="",h=new c.a(0),g=new c.a(0),x=new c.a(0),w=new c.a(0),m=!1,p.length&&(v=0,j=p[0],f=new c.a(j.substr(v++*d.a,d.a),16),y=j.substr(v++*d.a,d.a),b=u.a.address.fromHex("41"+y.slice(24)),h=new c.a(j.substr(v++*d.a,d.a),16).div(l.a.defaultPrecision),g=new c.a(j.substr(v++*d.a,d.a),16).div(l.a.defaultPrecision),x=new c.a(j.substr(v++*d.a,d.a),16).div(l.a.defaultPrecision),w=new c.a(j.substr(v++*d.a,d.a),16).times(1e3),b===e&&f.eq(0)&&w.gt(Date.now())&&(m=!0)),m&&(O=k(e),O.filter((function(n){return n.id===i&&n.option===r})).length||(O.push({id:i,state:f,strike:h,amount:g,premium:x,expiration:w,breakEven:o,option:r}),window.localStorage.setItem("".concat(l.a.localStorage.historyKey).concat(e),JSON.stringify(O)))),n.abrupt("return",{success:m});case 17:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},205:function(n,e){},214:function(n,e){},231:function(n,e){},232:function(n,e){},63:function(n,e,t){"use strict";Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ENV;var r={chain:{privateKey:"01",fullHost:"https://api.trongrid.io",eventServer:"https://api.trongrid.io"},trongrid:{host:"https://api.trongrid.io",headers:{"TRON-PRO-API-KEY":"9d5dc642-7ec8-4411-9dc7-add7c83227d3"}},contract:{usdt:"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",agg:"TYWvCyuDy6AAVtQf7ZU1JJW3wQLxpm3DoS",util:"TGwjJWzL89samtdMiikf9cAi7uSz8zcUnC",call:"TNNzHFwsmeRkFCRNyD1soA6uNQJVmvpmuA",put:"TK9BGNfydfLQmj1LWj9HY1jANqt8SCfgMm",eth:"TJzadXYiWubbsvfu8ZZqRJbgJCNFMnFSfM",erc:"TNu7o1yzzyR9S24Pp5wAuxugbNdyzdwmX7"},ropt:{token:"",symbol:"rOPT",decimals:6,precision:1e6},wtrx:{token:"TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR",symbol:"WTRX",decimals:6,precision:1e6},pools:{lpPoolAddr:"",votePoolAddr:"",startTime:16304256e5,votes:["writeTRX","writeUSDT","USDTLP","rOPTLP"],writeTRX:{token:"TJzadXYiWubbsvfu8ZZqRJbgJCNFMnFSfM",symbol:"writeTRX",abbr:"W-T",decimals:18,precision:1e18,reward:"ropt",pid:0,speed:parseInt(6965255.5/86400)},writeUSDT:{token:"TNu7o1yzzyR9S24Pp5wAuxugbNdyzdwmX7",symbol:"writeUSDT",abbr:"W-U",decimals:18,precision:1e18,reward:"ropt",pid:1,speed:parseInt(6965255.5/86400)},USDTLP:{token:"TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE",swap:"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",symbol:"USDT-TRX LP",abbr:"LP",decimals:6,precision:1e6,reward:"ropt",pid:2,speed:parseInt(995036.5/86400)},rOPTLP:{token:"T",swap:"T",symbol:"rOPT-TRX LP",abbr:"LP",decimals:6,precision:1e6,reward:"ropt",pid:3,speed:parseInt(4975182.5/86400)},rOPT:{token:"T",symbol:"rOPT",abbr:"rOPT",decimals:6,precision:1e6,reward1:"wtrx",reward2:"ropt"}},apyUrl:"/apy",localStorage:{historyKey:"historyKey"},apyShowDec:2,defaultShowDec:4,defaultDecimals:6,defaultPrecision:1e6,poolDecimals:18,poolPrecision:1e18,zeroAddr:"T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",RESPONSIVE_MOBILE:1120,justswap:{host:"https://justswap.io/#/home?tokenAddress=",swap:"&type=swap",add:"&type=add"},twitter:"https://twitter.com/dOptions4",telegram:"https://t.me/deoptions",discord:"",github:"https://github.com/hegicor",email:"doptions@protonmail.com"};e.a=Object.assign(r,{})},71:function(n,e,t){"use strict";t.d(e,"a",(function(){return M})),t.d(e,"b",(function(){return q})),t.d(e,"d",(function(){return Q})),t.d(e,"c",(function(){return Y})),t.d(e,"f",(function(){return Z})),t.d(e,"e",(function(){return G})),t.d(e,"p",(function(){return $})),t.d(e,"j",(function(){return nn})),t.d(e,"k",(function(){return en})),t.d(e,"h",(function(){return dn})),t.d(e,"m",(function(){return gn})),t.d(e,"i",(function(){return wn})),t.d(e,"n",(function(){return Tn})),t.d(e,"l",(function(){return zn})),t.d(e,"o",(function(){return Wn})),t.d(e,"g",(function(){return Bn}));var r,a,o,i,c,s,u,d,l,p,f,b,h,g,x,w,m,v,j,y,O,k,T,P,S,z,D,N,L,W,C,R,U,A,E=t(44),I=t(45),B=t.p+"static/media/button-primary.b0ef4fd8.svg",_=t.p+"static/media/button-primary--disabled.4ca72e7f.svg",J=t.p+"static/media/button-primary-blue.778f65bb.svg",F=t.p+"static/media/button-secondary.434d3c39.svg",V=t.p+"static/media/button-secondary-yellow.81e9ee07.svg",K=t.p+"static/media/cat-icon.8bbc7302.svg",H=t.p+"static/media/cat-icon-phone.3f11a3ee.svg",X=t.p+"static/media/question-mark.00ac48f1.svg",M=I.a.div(r||(r=Object(E.a)(["\n  padding: 0;\n  max-width: 1120px;\n  width: 1120px;\n  margin: 0 auto;\n  z-index: 0;\n\n  @media screen and (max-width: 768px) {\n    padding: 0 20px;\n    width: 100%;\n  }\n"]))),q=I.a.button(a||(a=Object(E.a)(["\n  cursor: pointer;\n  outline: none;\n  margin: auto 0;\n  font-family: Jura;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 100%;\n  text-align: center;\n  letter-spacing: 0.1em;\n  height: 46px;\n  width: ",";\n  z-index: 1;\n\n  color: #15203d;\n  background: transparent;\n  border: 1px solid #45fff4;\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: none;\n  border-style: solid;\n  border-image-width: 50px;\n  border-image-source: url(",");\n  border-image-slice: 20;\n  border-image-repeat: stretch;\n\n  &:hover:not([disabled]) {\n    filter: drop-shadow(0 0 10px #45fff4);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    border-image-source: url(",");\n  }\n\n  &.blue {\n    color: #defefe;\n    border-image-source: url(",");\n\n    &:hover {\n      filter: drop-shadow(0 0 10px #1d509e);\n    }\n  }\n"])),(function(n){return n.block?"100%":"265px"}),B,_,J),Q=I.a.button(o||(o=Object(E.a)(["\n  cursor: pointer;\n  outline: none;\n  margin: auto 0;\n  font-family: Jura;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 100%;\n  text-align: center;\n  letter-spacing: 0.1em;\n  height: 46px;\n  width: ",";\n  z-index: 1;\n\n  color: #45fff4;\n  background: transparent;\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: none;\n  border-style: solid;\n  border-image-width: 50px;\n  border-image-source: url(",");\n  border-image-slice: 20;\n  border-image-repeat: stretch;\n\n  &:hover {\n    filter: drop-shadow(0 0 10px #45fff4);\n  }\n\n  &.yellow {\n    color: #ffd24c;\n    border-image-source: url(",");\n\n    &:hover {\n      filter: drop-shadow(0 0 10px #ffd24c);\n    }\n  }\n"])),(function(n){return n.block?"100%":n.min?"165px":"265px"}),F,V),Y=I.a.button(i||(i=Object(E.a)(["\n  cursor: pointer;\n  outline: none;\n  font-family: Jura;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 100%;\n  text-align: center;\n  letter-spacing: 0.1em;\n  width: ",";\n  z-index: 1;\n\n  padding: 0;\n  color: #1c2a4f;\n  background: #45fff4;\n  box-sizing: border-box;\n  border: 0;\n  border-style: solid;\n\n  &:hover:not([disabled]) {\n    filter: drop-shadow(0 0 5px #45fff4);\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n    background: #45fff466;\n  }\n"])),(function(n){return n.block?"100%":"100px"})),Z=I.a.div(c||(c=Object(E.a)(["\n  font-family: Jura;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  line-height: 100%;\n  display: flex;\n  align-items: center;\n  color: #fff;\n  text-shadow: 0 0 1px #1b1b1b;\n  padding-left: 66px;\n  position: relative;\n  margin: 60px auto 35px 0;\n  text-transform: uppercase;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 51px;\n    height: 28px;\n    background: url(",");\n    -webkit-background-size: contain;\n    -moz-background-size: contain;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    left: 0;\n  }\n\n  @media screen and (max-width: 768px) {\n    padding-left: 22px;\n    margin-bottom: 40px;\n    &::before {\n      width: 12px;\n      height: 100%;\n      background: url(",");\n      background-size: auto;\n      background-repeat: repeat-y;\n    }\n  }\n"])),K,H),G=I.a.div(s||(s=Object(E.a)(["\n  background: #19264c;\n  border: 1px solid #2e5584;\n  box-sizing: border-box;\n  padding: 25px 20px;\n  margin-top: ",";\n\n  @media screen and (max-width: 768px) {\n    padding: 20px;\n  }\n"])),(function(n){return n.mt?"".concat(n.mt,"px"):0})),$=I.a.div(u||(u=Object(E.a)(["\n  background: #0f5467;\n  position: relative;\n  padding: 15px 30px 15px 85px;\n\n  div {\n    font-family: Exo2;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 160%;\n    color: #defefe;\n  }\n\n  &::before {\n    content: '';\n    width: 5px;\n    height: 100%;\n    position: absolute;\n    background: #45fff4;\n    top: 0;\n    left: 0;\n  }\n\n  &::after {\n    content: '';\n    width: 50px;\n    height: 100%;\n    position: absolute;\n    background: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    top: 0;\n    left: 15px;\n  }\n\n  @media screen and (max-width: 768px) {\n    text-align: center;\n    padding: 85px 10px 20px 10px;\n\n    &::before {\n      width: 100%;\n      height: 5px;\n    }\n    &::after {\n      height: 50px;\n      width: 100%;\n      top: 20px;\n      left: 0;\n    }\n  }\n"])),X),nn=I.a.div(d||(d=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),en=I.a.div(l||(l=Object(E.a)(["\n  font-family: Exo2;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 100%;\n  color: #defefe;\n  text-align: ",";\n\n  .desc {\n    font-family: Jura;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 100%;\n    color: #defefe;\n    margin-top: 10px;\n\n    span {\n      color: #45fff4;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    text-align: center;\n    font-size: 14px;\n\n    .desc {\n      font-size: 16px;\n    }\n\n    &:last-child {\n      margin-top: 20px;\n    }\n  }\n"])),(function(n){return n.right?"right":"left"})),tn=t(3),rn=I.a.div(p||(p=Object(E.a)(["\n  min-height: 420px;\n  position: relative;\n  display: flex;\n  background: linear-gradient(180deg, rgba(100, 255, 255, 0.15) 0%, rgba(2, 145, 255, 0.15) 100%);\n\n  &::before {\n    content: '';\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: url(",");\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    position: absolute;\n  }\n"])),(function(n){return n.heroImg})),an=Object(I.a)(M)(f||(f=Object(E.a)(["\n  margin: 85px auto auto;\n  position: relative;\n  flex: 1;\n"]))),on=I.a.div(b||(b=Object(E.a)(["\n  font-family: Jura;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 125%;\n  text-transform: uppercase;\n  color: #45fff4;\n  text-shadow: 0 0 1px #1b1b1b;\n\n  @media screen and (max-width: 768px) {\n    margin-top: 40px;\n  }\n"]))),cn=I.a.div(h||(h=Object(E.a)(["\n  font-family: Exo2;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 160%;\n  color: #defefe;\n  margin: 60px 0 0;\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: 40px;\n  }\n"]))),sn=I.a.div(g||(g=Object(E.a)(["\n  height: 370px;\n  width: 507px;\n  top: 50%;\n  right: 0;\n  position: absolute;\n\n  background: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(0%, -50%);\n"])),(function(n){return n.cryoImg})),un=I.a.div(x||(x=Object(E.a)(["\n  height: 239px;\n  width: 439px;\n  top: 50%;\n  right: 0;\n  position: absolute;\n\n  background: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(0%, -50%);\n"])),(function(n){return n.cryoImg})),dn=(I.a.div(w||(w=Object(E.a)(["\n  height: 258px;\n  width: 229px;\n  top: 50%;\n  right: 0;\n  position: absolute;\n\n  background: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(0%, -50%);\n"])),(function(n){return n.cryoImg})),function(n){return Object(tn.jsx)(rn,{heroImg:n.heroImg,children:Object(tn.jsxs)(an,{children:[Object(tn.jsx)(on,{children:n.title}),Object(tn.jsx)(cn,{children:n.desc}),n.isPhone?Object(tn.jsx)(tn.Fragment,{}):Object(tn.jsx)(tn.Fragment,{children:"lp"==n.type||"mint"==n.type?Object(tn.jsx)(un,{cryoImg:n.cryoImg}):Object(tn.jsx)(sn,{cryoImg:n.cryoImg})})]})})}),ln=t(40),pn=t(0),fn=I.a.div(m||(m=Object(E.a)(["\n  display: flex;\n  height: 36px;\n  max-width: ",";\n  width: ",";\n  padding: 5px;\n  border-radius: 2px;\n  border: 1px solid #667fcc;\n  background: #19274d;\n"])),(function(n){return n.block?"100%":"280px"}),(function(n){return n.block?"100%":"280px"})),bn=I.a.div(v||(v=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  cursor: pointer;\n  border-radius: 2px;\n\n  &.select {\n    color: #1c2a4f;\n    background: #45fff4;\n    span {\n      color: #1c2a4f;\n    }\n  }\n"]))),hn=I.a.span(j||(j=Object(E.a)(["\n  font-family: Jura;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 100%;\n  color: #667fcc;\n  text-transform: uppercase;\n  margin: auto;\n"]))),gn=function(n){var e=Object(pn.useState)(n.values[0]),t=Object(ln.a)(e,2),r=t[0],a=t[1];return Object(tn.jsx)(fn,{block:n.block,children:n.values.map((function(e){return Object(tn.jsx)(bn,{className:r===e&&"select",onClick:function(){!function(e){a(e),n.onChange&&n.onChange(e)}(e)},children:Object(tn.jsx)(hn,{children:e})},e)}))})},xn=I.a.div(y||(y=Object(E.a)(["\n  position: relative;\n\n  input {\n    width: 100%;\n    min-height: 36px;\n    max-height: 36px;\n    height: 36px;\n    flex: 1;\n    outline: none;\n    padding: 10px "," 10px 15px;\n    font-family: Exo2;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 100%;\n    color: #fff;\n    min-width: 20px;\n    background: #19274d;\n    border: 1px solid #667fcc;\n    box-sizing: border-box;\n    box-shadow: inset 0 0 10px #0d1326;\n    border-radius: 2px;\n    text-overflow: ellipsis;\n\n    &:active,\n    :focus {\n      border: 1px solid #45fff4;\n    }\n  }\n\n  &::after {\n    content: '","';\n    position: absolute;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    right: 10px;\n    font-family: Exo2;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 100%;\n    text-align: right;\n    color: #667fcc;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n"])),(function(n){return n.suffix?"80px":"10px"}),(function(n){return n.suffix})),wn=function(n){var e=Object(pn.useState)(""),t=Object(ln.a)(e,2),r=t[0],a=t[1];return Object(tn.jsx)(xn,{suffix:n.suffix?n.suffix:"",children:Object(tn.jsx)("input",{placeholder:n.defaultValue?n.defaultValue:"",value:void 0===n.value?r:n.value,onChange:function(e){var t;t=e.target.value,n.disabled||(a(t),n.onChange&&n.onChange(t))}})})},mn=t.p+"static/media/triangle.4c2251f9.svg",vn=I.a.div(O||(O=Object(E.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 36px;\n\n  &::after {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 10px;\n    right: 10px;\n    background: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n\n  &.open {\n    &::after {\n      transform: rotate(180deg);\n    }\n  }\n"])),mn),jn=I.a.div(k||(k=Object(E.a)(["\n  flex: 1;\n  display: flex;\n  background: linear-gradient(180deg, #203060 0%, #19264d 100%);\n  border: 1px solid #6680cc;\n  border-radius: 2px;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 0 30px 0 10px;\n"]))),yn=I.a.div(T||(T=Object(E.a)(["\n  font-family: Exo2;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 100%;\n  color: #defefe;\n  margin: auto 0;\n"]))),On=I.a.div(P||(P=Object(E.a)(["\n  background: linear-gradient(180deg, #203060 0%, #19264d 100%);\n  border: 1px solid #6680cc;\n  border-radius: 2px;\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  bottom: -5px;\n  transform: translate(0, 100%);\n  z-index: 10;\n  padding: 5px 0;\n"]))),kn=I.a.div(S||(S=Object(E.a)(["\n  height: 36px;\n  padding: 0 30px 0 10px;\n  box-sizing: border-box;\n  display: flex;\n  cursor: pointer;\n\n  &:hover {\n    background: #19274d;\n\n    div {\n      color: #45fff4;\n    }\n  }\n"]))),Tn=function(n){var e=Object(pn.useState)(!1),t=Object(ln.a)(e,2),r=t[0],a=t[1],o=Object(pn.useState)(n.values[0].label),i=Object(ln.a)(o,2),c=i[0],s=i[1];return Object(tn.jsxs)(vn,{className:r&&"open",onClick:function(){return a(!r)},children:[Object(tn.jsx)(jn,{children:Object(tn.jsx)(yn,{children:c})}),r&&Object(tn.jsx)(On,{onBlur:function(){return a(!1)},children:n.values.map((function(e){return Object(tn.jsx)(kn,{onClick:function(){!function(e){s(e.label),a(!1),n.onChange&&n.onChange(e.value)}(e)},children:Object(tn.jsx)(yn,{children:e.label})},e.label)}))})]})},Pn=I.a.div(z||(z=Object(E.a)(["\n  width: 100%;\n  margin-top: 20px;\n  height: 25px;\n  background: #16697e;\n  position: relative;\n  overflow: hidden;\n"]))),Sn=I.a.div(D||(D=Object(E.a)(["\n  width: 0;\n  height: 100%;\n  background: #45fff4;\n  transition: width 2s;\n"]))),zn=function(n){return Object(tn.jsx)(Pn,{children:Object(tn.jsx)(Sn,{style:{width:n.precent?"".concat(n.precent,"%"):0}})})},Dn=I.a.div(N||(N=Object(E.a)(["\n  margin-top: 25px;\n  max-height: 655px;\n  overflow: auto;\n\n  table {\n    border-collapse: collapse;\n    border: 1px solid #203160;\n    width: 100%;\n  }\n"]))),Nn=I.a.tr(L||(L=Object(E.a)(["\n  display: table-row;\n  border-color: inherit;\n  vertical-align: middle;\n  height: 42px;\n  background: #203160;\n\n  th {\n    padding: 5px;\n    font-family: Exo2;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 12px;\n    line-height: 100%;\n    color: #defefe;\n    white-space: nowrap;\n    text-align: left;\n\n    &:first-child {\n      padding-left: 20px;\n    }\n  }\n"]))),Ln=I.a.tr(W||(W=Object(E.a)(["\n  display: table-row;\n  border-color: inherit;\n  vertical-align: middle;\n  height: 60px;\n  background: #19274d;\n  border-bottom: 1px solid #263b73;\n\n  &.mini {\n    height: 40px;\n  }\n\n  th {\n    display: table-cell;\n    vertical-align: inherit;\n    padding: 5px;\n    font-family: Exo2;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 100%;\n    white-space: nowrap;\n\n    &:first-child {\n      padding-left: 20px;\n    }\n    &.null {\n      padding-left: 0;\n      text-align: center;\n      color: #667fcc;\n    }\n  }\n"]))),Wn=function(n){var e=n.headers||[],t=n.values||[],r=n.placeholder||"";return Object(tn.jsx)(Dn,{children:Object(tn.jsx)("table",{children:Object(tn.jsxs)("tbody",{children:[Object(tn.jsx)(Nn,{children:e.map((function(n){return Object(tn.jsx)("th",{children:n},n)}))}),t.length?t.map((function(n){return Object(tn.jsx)(Ln,{className:"mini",children:Object.keys(n).map((function(e){return Object(tn.jsx)("th",{children:n[e]},e)}))},"".concat(n.Type?"".concat(n.ID).concat(n.Type):"".concat(n.Expiry)))})):Object(tn.jsx)(Ln,{children:Object(tn.jsx)("th",{colSpan:e.length,className:"null",children:r})})]})})})},Cn=t.p+"static/media/collapse-open.2b9bbaf7.svg",Rn=t.p+"static/media/collapse-close.a37a15cd.svg",Un=I.a.div(C||(C=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n"]))),An=I.a.div(R||(R=Object(E.a)(["\n  min-height: 50px;\n  box-shadow: 0 0 2px #0291ce;\n  display: box;\n  display: flex;\n  position: relative;\n  cursor: pointer;\n  clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px);\n  position: relative;\n\n  &::before {\n    z-index: -1;\n    content: '';\n    position: absolute;\n    height: calc(100% - 2px);\n    width: calc(100% - 2px);\n    top: 1px;\n    left: 1px;\n    bottom: 1px;\n    right: 1px;\n    background: radial-gradient(50% 50% at 50% 50%, #203060 52.6%, #19264d 100%);\n    clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px);\n  }\n\n  &::after {\n    z-index: -2;\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    clip-path: polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px);\n    background: #667fcc;\n  }\n\n  &.open {\n    &::before {\n      content: none;\n    }\n    &::after {\n      background: #45fff4;\n    }\n  }\n"]))),En=I.a.div(U||(U=Object(E.a)(["\n  font-family: Exo2;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 100%;\n  color: #defefe;\n  margin: auto 35px auto 25px;\n  z-index: 1;\n  padding: 10px 0;\n  flex: 1;\n  position: relative;\n\n  &::after {\n    content: '';\n    height: 100%;\n    right: -10px;\n    width: 16px;\n    top: 0;\n    position: absolute;\n    background: url(",");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n  }\n\n  &.open {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 160%;\n    color: #121c36;\n\n    &::after {\n      background: url(",");\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center;\n    }\n  }\n"])),Rn,Cn),In=I.a.div(A||(A=Object(E.a)(["\n  display: flex;\n  background: #1d2b4d;\n  padding: 25px 30px 30px 30px;\n  border-left: 1px solid #22596d;\n  border-right: 1px solid #22596d;\n  border-bottom: 2px solid #45fff4;\n\n  font-family: Exo2;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 150%;\n  color: #defefe;\n"]))),Bn=function(n){var e=Object(pn.useState)(!1),t=Object(ln.a)(e,2),r=t[0],a=t[1];return Object(tn.jsxs)(Un,{children:[Object(tn.jsx)(An,{className:r&&"open",onClick:function(){return a(!r)},children:Object(tn.jsx)(En,{className:r&&"open",children:n.title})}),r&&Object(tn.jsx)(In,{children:n.children})]})}},74:function(n,e,t){"use strict";var r=t(41),a=t.n(r),o=t(58),i=t(34),c=t(67),s=t(378),u=(t(136),t(7)),d=t.n(u),l=t(63),p=t(86),f=t(108);Object(c.b)({enforceActions:"never"});var b=new function n(){var e=this;Object(i.a)(this,n),this.tronLinked=!1,this.address="",this.isPhone=!1,this.page="holders",this.latestAnswer=new d.a(0),this.trxBalance=new d.a(0),this.tokenBalance=new d.a(0),this.tokenAllowance=new d.a(0),this.ethTotalSupply=new d.a(0),this.ethBalanceOf=new d.a(0),this.ethShareOf=new d.a(0),this.ethLastProvideTimestamp=new d.a(0),this.ethAvailableBalance=new d.a(0),this.ethTotalBalance=new d.a(0),this.ethLockedAmount=new d.a(0),this.ethLockedPremium=new d.a(0),this.ercTotalSupply=new d.a(0),this.ercBalanceOf=new d.a(0),this.ercShareOf=new d.a(0),this.ercLastProvideTimestamp=new d.a(0),this.ercAvailableBalance=new d.a(0),this.ercTotalBalance=new d.a(0),this.ercLockedAmount=new d.a(0),this.ercLockedPremium=new d.a(0),this.poolStartCd=l.a.pools.startTime-Date.now(),this.lastTime=Date.now(),this.apys={},this.initTronLink=function(){var n=function(){var n=Object(o.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.isPhone=Object(s.a)(window.navigator).phone||window.innerWidth<l.a.RESPONSIVE_MOBILE,window.tronWeb&&window.tronWeb.ready?(window.tronWeb.setHeader&&window.tronWeb.fullNode.host===l.a.trongrid.host&&window.tronWeb.setHeader(l.a.trongrid.headers),e.address=window.tronWeb.defaultAddress.base58,e.tronLinked||e.reload(),e.tronLinked=!0):e.tronLinked=!1,e.calcDeadline();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n(),setInterval((function(){n()}),3e3),e.reload(),setInterval((function(){e.reload()}),1e4),setInterval((function(){e.poolStartCd=e.poolStartCd-(Date.now()-e.lastTime),e.lastTime=Date.now()}),1e3)},this.calcDeadline=Object(o.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.e)();case 2:t=n.sent,e.poolStartCd=l.a.pools.startTime-t,e.lastTime=Date.now();case 5:case"end":return n.stop()}}),n)}))),this.reload=Object(o.a)(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(f.i)(e.address);case 2:(t=n.sent).success&&Object.keys(t).forEach((function(n){"success"!==n&&(e[n]=t[n])}));case 5:case"end":return n.stop()}}),n)}))),this.listenTronLink=function(){window.addEventListener("message",(function(n){if(n.data&&n.data.message){var t=n.data.message;"setAccount"===t.action&&e.tronLinked&&t.data.address!==e.address&&window.location.reload(),"setNode"===t.action&&window.location.reload()}}))},this.changePage=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.page=n,t||window.scrollTo(0,0)},Object(c.d)(this),this.initTronLink(),this.listenTronLink(),this.calcDeadline()};e.a=b},86:function(n,e,t){"use strict";t.d(e,"a",(function(){return f})),t.d(e,"b",(function(){return b})),t.d(e,"g",(function(){return h})),t.d(e,"f",(function(){return x})),t.d(e,"h",(function(){return w})),t.d(e,"c",(function(){return m})),t.d(e,"e",(function(){return v})),t.d(e,"d",(function(){return j}));var r=t(41),a=t.n(r),o=t(58),i=t(121),c=t.n(i),s=t(377),u=t(63),d=t(3),l=u.a.chain,p=new c.a({fullHost:l.fullHost,eventServer:l.eventServer,privateKey:l.privateKey});p.setHeader&&p.fullNode.host===u.a.trongrid.host&&p.setHeader(u.a.trongrid.headers);var f=64,b="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",h=function(n){return n.transaction?(g("Waiting","Waiting for confirmation..."),setTimeout(Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(n.transaction.txID);case 2:"FAILED"===e.sent.result?g("Reverted","Transaction reverted."):g("Confirmed","Transaction was confirmed.");case 4:case"end":return e.stop()}}),e)}))),7e3),n):{transaction:{txID:!1}}},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";s.a.open({message:n,description:e,closeIcon:Object(d.jsx)(d.Fragment,{}),getContainer:function(){return document.getElementById("home")}})},x=function(){var n=Object(o.a)(a.a.mark((function n(e,t){var r,o,i,c,s,u,d=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=d.length>2&&void 0!==d[2]?d[2]:[],o=d.length>3&&void 0!==d[3]?d[3]:{},n.prev=2,i=p,window.tronWeb&&window.tronWeb.ready&&(i=window.tronWeb),n.next=7,i.transactionBuilder.triggerSmartContract(e,t,Object.assign({feeLimit:1e8},o),r);case 7:if((c=n.sent).result&&c.result.result){n.next=10;break}throw new Error("Unknown trigger error: "+JSON.stringify(c.transaction));case 10:return g("Waiting","Waiting for signature..."),n.next=13,i.trx.sign(c.transaction);case 13:return s=n.sent,n.next=16,i.trx.sendRawTransaction(s);case 16:return u=n.sent,n.abrupt("return",u);case 20:return n.prev=20,n.t0=n.catch(2),console.log("trigger error ".concat(e," - ").concat(t),n.t0.message?n.t0.message:n.t0),"Confirmation declined by user"===n.t0?g("Cancel","Confirmation declined by user!"):g("Failed","Transaction failed."),n.abrupt("return",{});case 25:case"end":return n.stop()}}),n,null,[[2,20]])})));return function(e,t){return n.apply(this,arguments)}}(),w=function(){var n=Object(o.a)(a.a.mark((function n(e,t){var r,o,i,c=arguments;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=c.length>2&&void 0!==c[2]?c[2]:[],n.prev=1,o=p,window.tronWeb&&window.tronWeb.ready&&(o=window.tronWeb),n.next=6,o.transactionBuilder.triggerSmartContract(e,t,{_isConstant:!0},r);case 6:return i=n.sent,n.abrupt("return",i&&i.result?i.constant_result:[]);case 10:return n.prev=10,n.t0=n.catch(1),console.log("view error ".concat(e," - ").concat(t),n.t0.message?n.t0.message:n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}(),m=function(){var n=Object(o.a)(a.a.mark((function n(e){var t,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=p,window.tronWeb&&window.tronWeb.ready&&(t=window.tronWeb),n.next=5,t.trx.getUnconfirmedTransactionInfo(e);case 5:return r=n.sent,n.abrupt("return",r);case 9:return n.prev=9,n.t0=n.catch(0),console.log("check error ".concat(e),n.t0.message?n.t0.message:n.t0),n.abrupt("return",{});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=Object(o.a)(a.a.mark((function n(){var e,t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=p,window.tronWeb&&window.tronWeb.ready&&(e=window.tronWeb),n.next=5,e.trx.getCurrentBlock();case 5:if(!(t=n.sent).block_header){n.next=8;break}return n.abrupt("return",t.block_header.raw_data.timestamp);case 8:return n.abrupt("return",(new Date).getTime());case 11:return n.prev=11,n.t0=n.catch(0),console.log("getCurBlockTime error",n.t0.message?n.t0.message:n.t0),n.abrupt("return",(new Date).getTime());case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),j=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"string"!==typeof n?"":(n=n.trim()).length<=e+t?n:"".concat(n.substring(0,e),"...").concat(n.substring(n.length,n.length-t))}}}]);