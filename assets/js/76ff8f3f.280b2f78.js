"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3830],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),u=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,g=p["".concat(m,".").concat(d)]||p[d]||s[d]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3416:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={},m=void 0,u={permalink:"/blog/2022/04/28/raspberryncnn",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-28-raspberryncnn.md",source:"@site/blog/2022-04-28-raspberryncnn.md",title:"raspberryncnn",description:"\u50bb\u74dc\u5f0f\u6811\u8393\u6d3e\u914d\u7f6encnn\u6559\u7a0b",date:"2022-04-28T00:00:00.000Z",formattedDate:"April 28, 2022",tags:[],readingTime:3.165,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"win10\u5feb\u6377\u952e",permalink:"/blog/2022/05/09/win10"},nextItem:{title:"studynotes",permalink:"/blog/2022/04/23/studynotes"}},c={authorsImageUrls:[]},s=[{value:"clone",id:"clone",level:2},{value:"build",id:"build",level:2},{value:"test",id:"test",level:2},{value:"Test1",id:"test1",level:3},{value:"Test2",id:"test2",level:3}],p={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u50bb\u74dc\u5f0f\u6811\u8393\u6d3e\u914d\u7f6encnn\u6559\u7a0b")),(0,i.kt)("h2",{id:"clone"},"clone"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/Tencent/ncnn.git\ncd ncnn\ngit submodule update --init\n")),(0,i.kt)("h2",{id:"build"},"build"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ncnn\nmkdir -p build\ncd build\n\nsudo apt install build-essential git cmake libprotobuf-dev protobuf-compiler libvulkan-dev vulkan-utils libopencv-dev\ncmake -DCMAKE_EXE_LINKER_FLAGS=-ldl ..\n\nmake -j4\n")),(0,i.kt)("p",null,"\u62a5\u9519"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'CMake Warning at CMakeLists.txt:163 (message):\nGLSLANG_TARGET_DIR must be defined! NCNN_SYSTEM_GLSLANG will be turned off.\n\n\nCMake Error at CMakeLists.txt:188 (message):\nThe submodules were not downloaded! Please update submodules with "git\nsubmodule update --init" and try again.\n\n\n-- Configuring incomplete, errors occurred!\nSee also "/home/pi/ncnn/ncnn_master/ncnn/build/CMakeFiles/CMakeOutput.log".\n\n')),(0,i.kt)("p",null,"\u5f53\u4f60\u770b\u89c1\u8fd9\u4e2a\uff0c\u8bf7\u4e0d\u8981\u60ca\u614c\uff0c\u8fd9\u662f\u56e0\u4e3a\u90e8\u5206\u4f9d\u8d56\u5305\u4e0d\u5b58\u5728\uff0c\u518d\u6b21\u8fd0\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"git submodule update --init"),"\u5373\u53ef"),(0,i.kt)("p",null,"\u5982\u679c\u4f9d\u7136\u4e0d\u884c\uff0c\u5efa\u8bae\u624b\u52a8\u4e0b\u8f7d.deb\u6587\u4ef6\u76f4\u63a5\u5b89\u88c5\u4f9d\u8d56\u5305\uff0c\u5f53\u65f6\u6211\u662f\u624b\u52a8clone\u4e86glslang\uff0c\u4e0d\u77e5\u9053\u5230\u4f60\u90a3\u4e2a\u65f6\u5019\u8fd8\u7528\u4e0d\u7528\u3002"),(0,i.kt)("h2",{id:"test"},"test"),(0,i.kt)("h3",{id:"test1"},"Test1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build $ cd ../examples/\nexamples $ ../build/examples/squeezenet ../images/256-ncnn.png\n1\n2\nResult\n\nvkCreateInstance failed -9\nvkCreateInstance failed -9\n532 = 0.165951\n920 = 0.094098\n716 = 0.062193\n\n")),(0,i.kt)("h3",{id:"test2"},"Test2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"examples $ cd ../benchmark/\nbenchmark $ ../build/benchmark/benchncnn 10 $(nproc) 0 -1\n\nResult\n\nloop_count = 10\nnum_threads = 4\npowersave = 0\ngpu_device = -1\ncooling_down = 1\n          squeezenet  min =   59.54  max =   78.24  avg =   61.93\n     squeezenet_int8  min =   68.22  max =  136.60  avg =   75.22\n           mobilenet  min =   82.28  max =  103.96  avg =   86.50\n      mobilenet_int8  min =  102.12  max =  127.61  avg =  105.56\n        mobilenet_v2  min =   72.07  max =   78.58  avg =   73.41\n        mobilenet_v3  min =   58.79  max =   62.76  avg =   59.56\n          shufflenet  min =   39.38  max =   39.76  avg =   39.56\n       shufflenet_v2  min =   30.91  max =   62.75  avg =   34.47\n             mnasnet  min =   62.02  max =   63.65  avg =   63.10\n     proxylessnasnet  min =   63.72  max =   78.89  avg =   65.54\n     efficientnet_b0  min =   97.13  max =  134.88  avg =  101.45\n        regnety_400m  min =   78.38  max =  112.27  avg =   82.46\n           blazeface  min =   11.84  max =   12.11  avg =   11.98\n           googlenet  min =  175.91  max =  226.33  avg =  187.03\n      googlenet_int8  min =  160.86  max =  174.87  avg =  163.83\n            resnet18  min =  226.30  max =  256.77  avg =  231.41\n       resnet18_int8  min =  137.44  max =  172.20  avg =  144.58\n             alexnet  min =  175.46  max =  187.97  avg =  178.70\n               vgg16  min =  966.03  max = 1200.06  avg = 1021.94\n          vgg16_int8  min = 1198.49  max = 1241.05  avg = 1216.26\n            resnet50  min =  466.87  max =  511.23  avg =  483.53\n       resnet50_int8  min =  332.21  max =  380.04  avg =  344.77\n      squeezenet_ssd  min =  178.27  max =  232.75  avg =  187.56\n squeezenet_ssd_int8  min =  195.93  max =  227.62  avg =  202.93\n       mobilenet_ssd  min =  175.19  max =  197.45  avg =  182.97\n  mobilenet_ssd_int8  min =  172.96  max =  207.40  avg =  181.28\n      mobilenet_yolo  min =  426.78  max =  526.93  avg =  463.47\n  mobilenetv2_yolov3  min =  248.95  max =  274.25  avg =  255.45\n         yolov4-tiny  min =  329.52  max =  369.67  avg =  342.12\n\n\n")),(0,i.kt)("p",null,"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u5982\u4f55\u5224\u65ad\u7f16\u8bd1\u6210\u529f\uff0c\u5f53\u4f60\u770b\u89c1build/example\u4e0b\u6709\u4e00\u5927\u5806shared library\u6587\u4ef6\uff0c\u56fe\u6807\u662f\u7eff\u8272\u68f1\u5f62\u65f6\uff0c\u606d\u559c\u4f60\u914d\u5b8c\u4e86\u3002"),(0,i.kt)("p",null,"\u662f\u4e0d\u662f\u770b\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u5176\u5b9e\u53ef\u4ee5\u914d\u6b7b\u4eba\u3002"),(0,i.kt)("p",null,"\u987a\u4fbf\u4e00\u63d0\uff0cshared library\u4e3a\u52a8\u6001\u5206\u4eab\u5e93\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\u4f60\u4ee5\u4e3a\u8fd9\u5c31\u5b8c\u4e86\uff0c\u7b11\u6b7b\uff0c\u4f60\u7684ncnn\u548copencv\u600e\u4e48\u7528\u90fd\u8fd8\u662f\u4e2a\u95ee\u9898\uff0c\u7b49\u6211\u5b66\u5b8ccmake\u5728\u8fde\u8f7d\u3002"))}d.isMDXComponent=!0}}]);