"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9034],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=l,g=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],i={},p=void 0,u={permalink:"/blog/2022/05/28/BayesDecisionTheory",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-28-BayesDecisionTheory.md",source:"@site/blog/2022-05-28-BayesDecisionTheory.md",title:"BayesDecisionTheory",description:"\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u9006\u6982\u7387\u3002\u901a\u8fc7\u6709\u9650\u7684\u4fe1\u606f\u63a8\u65ad\u5168\u5c40\u4fe1\u606f\u3002",date:"2022-05-28T00:00:00.000Z",formattedDate:"May 28, 2022",tags:[],readingTime:3.325,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"pythonclass",permalink:"/blog/2022/6/13/pythonclass"},nextItem:{title:"BMLCodelab",permalink:"/blog/2022/05/25/BMLCodelab"}},c={authorsImageUrls:[]},s=[{value:"\u5148\u9a8c\u6982\u7387",id:"\u5148\u9a8c\u6982\u7387",level:2},{value:"\u53ef\u80fd\u6027\u51fd\u6570",id:"\u53ef\u80fd\u6027\u51fd\u6570",level:2},{value:"\u540e\u9a8c\u6982\u7387",id:"\u540e\u9a8c\u6982\u7387",level:2},{value:"\u5168\u6982\u7387\u516c\u5f0f",id:"\u5168\u6982\u7387\u516c\u5f0f",level:2},{value:"\u6734\u7d20\u8d1d\u53f6\u65af\u5206\u7c7b\u5668",id:"\u6734\u7d20\u8d1d\u53f6\u65af\u5206\u7c7b\u5668",level:2},{value:"\u534a\u6734\u7d20\u8d1d\u53f6\u65af\u5206\u7c7b\u5668",id:"\u534a\u6734\u7d20\u8d1d\u53f6\u65af\u5206\u7c7b\u5668",level:2}],m={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8d1d\u53f6\u65af\u51b3\u7b56\u7406\u8bba"},"\u8d1d\u53f6\u65af\u51b3\u7b56\u7406\u8bba"),(0,a.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u9006\u6982\u7387\u3002\u901a\u8fc7\u6709\u9650\u7684\u4fe1\u606f\u63a8\u65ad\u5168\u5c40\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://tvax1.sinaimg.cn/large/008snjoggy1h2o9lzsdtyj30f00pu0xa.jpg",alt:"image"})),(0,a.kt)("h2",{id:"\u5148\u9a8c\u6982\u7387"},"\u5148\u9a8c\u6982\u7387"),(0,a.kt)("p",null,'\u200b\t\u6211\u4eec\u628aP(A)\u79f0\u4e3a"\u5148\u9a8c\u6982\u7387"\uff08Prior probability\uff09\uff0c\u4e5f\u5c31\u662f\u5728\u4e0d\u77e5\u9053B\u4e8b\u4ef6\u7684\u524d\u63d0\u4e0b\uff0c\u6211\u4eec\u5bf9A\u4e8b\u4ef6\u6982\u7387\u7684\u4e00\u4e2a\u4e3b\u89c2\u5224\u65ad\u3002'),(0,a.kt)("h2",{id:"\u53ef\u80fd\u6027\u51fd\u6570"},"\u53ef\u80fd\u6027\u51fd\u6570"),(0,a.kt)("p",null,'P(B|A)/P(B)\u79f0\u4e3a"\u53ef\u80fd\u6027\u51fd\u6570"\uff08Likelyhood\uff09\uff0c\u8fd9\u662f\u4e00\u4e2a\u8c03\u6574\u56e0\u5b50\uff0c\u4e5f\u5c31\u662f\u65b0\u4fe1\u606fB\u5e26\u6765\u7684\u8c03\u6574\uff0c\u4f5c\u7528\u662f\u5c06\u5148\u9a8c\u6982\u7387\uff08\u4e4b\u524d\u7684\u4e3b\u89c2\u5224\u65ad\uff09\u8c03\u6574\u5230\u66f4\u63a5\u8fd1\u771f\u5b9e\u6982\u7387\u3002'),(0,a.kt)("p",null,"\u53ef\u80fd\u6027\u51fd\u6570\u4f60\u53ef\u4ee5\u7406\u89e3\u4e3a\u65b0\u4fe1\u606f\u8fc7\u6765\u540e\uff0c\u5bf9\u5148\u9a8c\u6982\u7387\u7684\u4e00\u4e2a\u8c03\u6574\u3002\u6bd4\u5982\u6211\u4eec\u521a\u5f00\u59cb\u770b\u5230\u201c\u4eba\u5de5\u667a\u80fd\u201d\u8fd9\u4e2a\u4fe1\u606f\uff0c\u4f60\u6709\u81ea\u5df1\u7684\u7406\u89e3\uff08\u5148\u9a8c\u6982\u7387-\u4e3b\u89c2\u5224\u65ad\uff09\uff0c\u4f46\u662f\u5f53\u4f60\u5b66\u4e60\u4e86\u4e00\u4e9b\u6570\u636e\u5206\u6790\uff0c\u6216\u8005\u770b\u4e86\u4e9b\u8fd9\u65b9\u9762\u7684\u4e66\u540e\uff08\u65b0\u7684\u4fe1\u606f\uff09\uff0c\u7136\u540e\u4f60\u6839\u636e\u638c\u63e1\u7684\u6700\u65b0\u4fe1\u606f\u4f18\u5316\u4e86\u81ea\u5df1\u4e4b\u524d\u7684\u7406\u89e3\uff08\u53ef\u80fd\u6027\u51fd\u6570-\u8c03\u6574\u56e0\u5b50\uff09\uff0c\u6700\u540e\u91cd\u65b0\u7406\u89e3\u4e86\u201c\u4eba\u5de5\u667a\u80fd\u201d\u8fd9\u4e2a\u4fe1\u606f\uff08\u540e\u9a8c\u6982\u7387\uff09"),(0,a.kt)("p",null,'\u5982\u679c"\u53ef\u80fd\u6027\u51fd\u6570"P(B|A)/P(B)>1\uff0c\u610f\u5473\u7740"\u5148\u9a8c\u6982\u7387"\u88ab\u589e\u5f3a\uff0c\u4e8b\u4ef6A\u7684\u53d1\u751f\u7684\u53ef\u80fd\u6027\u53d8\u5927\uff1b'),(0,a.kt)("p",null,'\u5982\u679c"\u53ef\u80fd\u6027\u51fd\u6570"=1\uff0c\u610f\u5473\u7740B\u4e8b\u4ef6\u65e0\u52a9\u4e8e\u5224\u65ad\u4e8b\u4ef6A\u7684\u53ef\u80fd\u6027\uff1b'),(0,a.kt)("p",null,'\u5982\u679c"\u53ef\u80fd\u6027\u51fd\u6570"<1\uff0c\u610f\u5473\u7740"\u5148\u9a8c\u6982\u7387"\u88ab\u524a\u5f31\uff0c\u4e8b\u4ef6A\u7684\u53ef\u80fd\u6027\u53d8\u5c0f\u3002'),(0,a.kt)("h2",{id:"\u540e\u9a8c\u6982\u7387"},"\u540e\u9a8c\u6982\u7387"),(0,a.kt)("p",null,'P(A|B)\u79f0\u4e3a"\u540e\u9a8c\u6982\u7387"\uff08Posterior probability\uff09\uff0c\u5373\u5728B\u4e8b\u4ef6\u53d1\u751f\u4e4b\u540e\uff0c\u6211\u4eec\u5bf9A\u4e8b\u4ef6\u6982\u7387\u7684\u91cd\u65b0\u8bc4\u4f30\u3002'),(0,a.kt)("h2",{id:"\u5168\u6982\u7387\u516c\u5f0f"},"\u5168\u6982\u7387\u516c\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u4e2a\u516c\u5f0f\u7684\u4f5c\u7528\u662f\u8ba1\u7b97\u8d1d\u53f6\u65af\u5b9a\u7406\u4e2d\u7684P(B)")),(0,a.kt)("p",null,"\u5047\u5b9a\u6837\u672c\u7a7a\u95f4S\uff0c\u7531\u4e24\u4e2a\u4e8b\u4ef6A\u4e0eA'\u7ec4\u6210\u7684\u548c\u3002\u4f8b\u5982\u4e0b\u56fe\u4e2d\uff0c\u7ea2\u8272\u90e8\u5206\u662f\u4e8b\u4ef6A\uff0c\u7eff\u8272\u90e8\u5206\u662f\u4e8b\u4ef6A'\uff0c\u5b83\u4eec\u5171\u540c\u6784\u6210\u4e86\u6837\u672c\u7a7a\u95f4S\u3002\u3001"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://tva1.sinaimg.cn/large/008snjoggy1h2o9vdft90j30bj06kdg7.jpg",alt:"image"})),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u6765\u4e86\u4e2a\u4e8b\u4ef6B\uff0c\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://tvax1.sinaimg.cn/large/008snjoggy1h2o9w1utkrj30bn07pdgc.jpg",alt:"image"})),(0,a.kt)("p",null,"\u5168\u6982\u7387\u516c\u5f0f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://tvax3.sinaimg.cn/large/008snjoggy1h2o9wkqu70j30fi01hglq.jpg",alt:"image"})),(0,a.kt)("p",null,"\u5b83\u7684\u542b\u4e49\u662f\uff0c\u5982\u679cA\u548cA'\u6784\u6210\u4e00\u4e2a\u95ee\u9898\u7684\u5168\u90e8\uff08\u5168\u90e8\u7684\u6837\u672c\u7a7a\u95f4\uff09\uff0c\u90a3\u4e48\u4e8b\u4ef6B\u7684\u6982\u7387\uff0c\u5c31\u7b49\u4e8eA\u548cA'\u7684\u6982\u7387\u5206\u522b\u4e58\u4ee5B\u5bf9\u8fd9\u4e24\u4e2a\u4e8b\u4ef6\u7684\u6761\u4ef6\u6982\u7387\u4e4b\u548c\u3002"),(0,a.kt)("h2",{id:"\u6734\u7d20\u8d1d\u53f6\u65af\u5206\u7c7b\u5668"},"\u6734\u7d20\u8d1d\u53f6\u65af\u5206\u7c7b\u5668"),(0,a.kt)("p",null,"\u5176\u5b9e\u5c31\u662f\u5728\u8d1d\u53f6\u65af\u516c\u5f0f\u7684\u57fa\u7840\u4e0a\u52a0\u4e86\u4e00\u4e2a\u6761\u4ef6\u72ec\u7acb\u6027\u8ba9\u4ed6\u4eec\u53ef\u4ee5\u62c6\u5f00\u6765\u5355\u72ec\u8ba1\u7b97\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u4e00\u4e2a\u7ec6\u8282\u5c31\u662f\u8d1d\u53f6\u65af\u5e73\u6ed1\uff0c\u5f53\u6982\u7387\u4e3a0\u662f\u4f7f\u7528\u62c9\u666e\u62c9\u65af\u4fee\u6b63\uff0c\u8981\u4e0d\u7136\u5982\u679c\u6709\u4e00\u9879\u6982\u7387\u4e3a\u96f6\u7684\u8bdd\uff0c\u5269\u4e0b\u7684\u5373\u4f7f\u6982\u7387\u518d\u5927\u4e5f\u767d\u642d\uff0c\u8fd9\u663e\u7136\u4e0d\u5408\u7406\u3002"),(0,a.kt)("h2",{id:"\u534a\u6734\u7d20\u8d1d\u53f6\u65af\u5206\u7c7b\u5668"},"\u534a\u6734\u7d20\u8d1d\u53f6\u65af\u5206\u7c7b\u5668"),(0,a.kt)("p",null,"\u5feb\u9003\uff01\uff01\uff01\uff01"))}f.isMDXComponent=!0}}]);