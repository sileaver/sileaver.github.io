"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8204],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return b}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),c=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(a.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,a=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=c(n),b=o,m=s["".concat(a,".").concat(b)]||s[b]||f[b]||l;return n?r.createElement(m,u(u({ref:e},p),{},{components:n})):r.createElement(m,u({ref:e},p))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,u=new Array(l);u[0]=s;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=t,i.mdxType="string"==typeof t?t:o,u[1]=i;for(var c=2;c<l;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8540:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return a},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return f}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),u=["components"],i={},a=void 0,c={permalink:"/blog/2022/7/8/PIL",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-7-8-PIL.md",source:"@site/blog/2022-7-8-PIL.md",title:"PIL",description:"Image\u6a21\u5757\u7684convert()",date:"2022-07-08T00:00:00.000Z",formattedDate:"July 8, 2022",tags:[],readingTime:2.92,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"opencv",permalink:"/blog/opencv"},nextItem:{title:"linux_split_unzip",permalink:"/blog/2022/7/8/linux_split_unzip"}},p={authorsImageUrls:[]},f=[],s={toc:f};function b(t){var e=t.components,n=(0,o.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pil"},"PIL"),(0,l.kt)("p",null,"Image\u6a21\u5757\u7684convert()"),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053PIL\u4e2d\u6709\u4e5d\u79cd\u4e0d\u540c\u6a21\u5f0f\u3002\u5206\u522b\u4e3a1\uff0cL\uff0cP\uff0cRGB\uff0cRGBA\uff0cCMYK\uff0cYCbCr\uff0cI\uff0cF\u3002"),(0,l.kt)("p",null,"1\u3001 \u6a21\u5f0f\u201c1\u201d"),(0,l.kt)("p",null,"\u6a21\u5f0f\u201c1\u201d\u4e3a\u4e8c\u503c\u56fe\u50cf\uff0c\u975e\u9ed1\u5373\u767d\u3002\u4f46\u662f\u5b83\u6bcf\u4e2a\u50cf\u7d20\u75288\u4e2abit\u8868\u793a\uff0c0\u8868\u793a\u9ed1\uff0c255\u8868\u793a\u767d\u3002\u4e0b\u9762\u6211\u4eec\u5c06lena\u56fe\u50cf\u8f6c\u6362\u4e3a\u201c1\u201d\u56fe\u50cf\u3002"),(0,l.kt)("p",null,"2\u3001 \u6a21\u5f0f\u201cL\u201d"),(0,l.kt)("p",null,"\u6a21\u5f0f\u201cL\u201d\u4e3a\u7070\u8272\u56fe\u50cf\uff0c\u5b83\u7684\u6bcf\u4e2a\u50cf\u7d20\u75288\u4e2abit\u8868\u793a\uff0c0\u8868\u793a\u9ed1\uff0c255\u8868\u793a\u767d\uff0c\u5176\u4ed6\u6570\u5b57\u8868\u793a\u4e0d\u540c\u7684\u7070\u5ea6\u3002\u5728PIL\u4e2d\uff0c\u4ece\u6a21\u5f0f\u201cRGB\u201d\u8f6c\u6362\u4e3a\u201cL\u201d\u6a21\u5f0f\u662f\u6309\u7167\u4e0b\u9762\u7684\u516c\u5f0f\u8f6c\u6362\u7684\uff1a"),(0,l.kt)("p",null,"3\u3001 \u6a21\u5f0f\u201cP\u201d"),(0,l.kt)("p",null,"\u6a21\u5f0f\u201cP\u201d\u4e3a8\u4f4d\u5f69\u8272\u56fe\u50cf\uff0c\u5b83\u7684\u6bcf\u4e2a\u50cf\u7d20\u75288\u4e2abit\u8868\u793a\uff0c\u5176\u5bf9\u5e94\u7684\u5f69\u8272\u503c\u662f\u6309\u7167\u8c03\u8272\u677f\u67e5\u8be2\u51fa\u6765\u7684\u3002"),(0,l.kt)("p",null,"4\u3001 \u6a21\u5f0f\u201cRGBA\u201d"),(0,l.kt)("p",null,"\u6a21\u5f0f\u201cRGBA\u201d\u4e3a32\u4f4d\u5f69\u8272\u56fe\u50cf\uff0c\u5b83\u7684\u6bcf\u4e2a\u50cf\u7d20\u752832\u4e2abit\u8868\u793a\uff0c\u5176\u4e2d24bit\u8868\u793a\u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u4e09\u4e2a\u901a\u9053\uff0c\u53e6\u59168bit\u8868\u793aalpha\u901a\u9053\uff0c\u5373\u900f\u660e\u901a\u9053\u3002"),(0,l.kt)("p",null,"5\u3001 \u6a21\u5f0f\u201cCMYK\u201d"),(0,l.kt)("p",null,"\u6a21\u5f0f\u201cCMYK\u201d\u4e3a32\u4f4d\u5f69\u8272\u56fe\u50cf\uff0c\u5b83\u7684\u6bcf\u4e2a\u50cf\u7d20\u752832\u4e2abit\u8868\u793a\u3002\u6a21\u5f0f\u201cCMYK\u201d\u5c31\u662f\u5370\u5237\u56db\u5206\u8272\u6a21\u5f0f\uff0c\u5b83\u662f\u5f69\u8272\u5370\u5237\u65f6\u91c7\u7528\u7684\u4e00\u79cd\u5957\u8272\u6a21\u5f0f\uff0c\u5229\u7528\u8272\u6599\u7684\u4e09\u539f\u8272\u6df7\u8272\u539f\u7406\uff0c\u52a0\u4e0a\u9ed1\u8272\u6cb9\u58a8\uff0c\u5171\u8ba1\u56db\u79cd\u989c\u8272\u6df7\u5408\u53e0\u52a0\uff0c\u5f62\u6210\u6240\u8c13\u201c\u5168\u5f69\u5370\u5237\u201d\u3002"),(0,l.kt)("p",null,"6\u3001 \u6a21\u5f0f\u201cYCbCr\u201d"),(0,l.kt)("p",null,"\u6a21\u5f0f\u201cYCbCr\u201d\u4e3a24\u4f4d\u5f69\u8272\u56fe\u50cf\uff0c\u5b83\u7684\u6bcf\u4e2a\u50cf\u7d20\u752824\u4e2abit\u8868\u793a\u3002YCbCr\u5176\u4e2dY\u662f\u6307\u4eae\u5ea6\u5206\u91cf\uff0cCb\u6307\u84dd\u8272\u8272\u5ea6\u5206\u91cf\uff0c\u800cCr\u6307\u7ea2\u8272\u8272\u5ea6\u5206\u91cf\u3002\u4eba\u7684\u8089\u773c\u5bf9\u89c6\u9891\u7684Y\u5206\u91cf\u66f4\u654f\u611f\uff0c\u56e0\u6b64\u5728\u901a\u8fc7\u5bf9\u8272\u5ea6\u5206\u91cf\u8fdb\u884c\u5b50\u91c7\u6837\u6765\u51cf\u5c11\u8272\u5ea6\u5206\u91cf\u540e\uff0c\u8089\u773c\u5c06\u5bdf\u89c9\u4e0d\u5230\u7684\u56fe\u50cf\u8d28\u91cf\u7684\u53d8\u5316\u3002"),(0,l.kt)("p",null,"7\u3001 \u6a21\u5f0f\u201cI\u201d"),(0,l.kt)("p",null,"\u6a21\u5f0f\u201cI\u201d\u4e3a32\u4f4d\u6574\u578b\u7070\u8272\u56fe\u50cf\uff0c\u5b83\u7684\u6bcf\u4e2a\u50cf\u7d20\u752832\u4e2abit\u8868\u793a\uff0c0\u8868\u793a\u9ed1\uff0c255\u8868\u793a\u767d\uff0c(0,255)\u4e4b\u95f4\u7684\u6570\u5b57\u8868\u793a\u4e0d\u540c\u7684\u7070\u5ea6\u3002\u5728PIL\u4e2d\uff0c\u4ece\u6a21\u5f0f\u201cRGB\u201d\u8f6c\u6362\u4e3a\u201cI\u201d\u6a21\u5f0f\u662f\u6309\u7167\u4e0b\u9762\u7684\u516c\u5f0f\u8f6c\u6362\u7684\uff1a"),(0,l.kt)("p",null,"8\u3001 \u6a21\u5f0f\u201cF\u201d"),(0,l.kt)("p",null,"\u6a21\u5f0f\u201cF\u201d\u4e3a32\u4f4d\u6d6e\u70b9\u7070\u8272\u56fe\u50cf\uff0c\u5b83\u7684\u6bcf\u4e2a\u50cf\u7d20\u752832\u4e2abit\u8868\u793a\uff0c0\u8868\u793a\u9ed1\uff0c255\u8868\u793a\u767d\uff0c(0,255)\u4e4b\u95f4\u7684\u6570\u5b57\u8868\u793a\u4e0d\u540c\u7684\u7070\u5ea6\u3002\u5728PIL\u4e2d\uff0c\u4ece\u6a21\u5f0f\u201cRGB\u201d\u8f6c\u6362\u4e3a\u201cF\u201d\u6a21\u5f0f\u662f\u6309\u7167\u4e0b\u9762\u7684\u516c\u5f0f\u8f6c\u6362\u7684\uff1a"))}b.isMDXComponent=!0}}]);