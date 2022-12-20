"use strict";(self.webpackChunkopensergo_github_io=self.webpackChunkopensergo_github_io||[]).push([[4970],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),g=o,m=f["".concat(s,".").concat(g)]||f[g]||p[g]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5571:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:3},s="Use OpenSergo with CloudWeGo Kitex",u={unversionedId:"quick-start/go/quick-start-kitex",id:"quick-start/go/quick-start-kitex",title:"Use OpenSergo with CloudWeGo Kitex",description:"Kitex Overview",source:"@site/docs/quick-start/go/quick-start-kitex.md",sourceDirName:"quick-start/go",slug:"/quick-start/go/quick-start-kitex",permalink:"/docs/quick-start/go/quick-start-kitex",editUrl:"https://github.com/opensergo/opensergo.github.io/tree/main/docs/quick-start/go/quick-start-kitex.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Use OpenSergo with Kratos",permalink:"/docs/quick-start/go/quick-start-kratos"},next:{title:"Introduce OpenSergo in Istio",permalink:"/docs/quick-start/polyglot-mesh/quick-start-istio-with-opensergo"}},l={},p=[{value:"Kitex Overview",id:"kitex-overview",level:2},{value:"Access OpenSergo in Kitex",id:"access-opensergo-in-kitex",level:2}],f={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-opensergo-with-cloudwego-kitex"},"Use OpenSergo with CloudWeGo Kitex"),(0,i.kt)("h2",{id:"kitex-overview"},"Kitex Overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cloudwego/kitex"},"Kitex")," ","[ka\u026at'eks]"," is a high-performance and strong-extensibility Golang RPC framework that helps developers build microservices.\nIf the performance and extensibility are the main concerns when you develop microservices, Kitex can be a good choice.\nKitex is a subproject of CloudWeGo, for more details please visit CloudWeGo ",(0,i.kt)("a",{parentName:"p",href:"https://www.cloudwego.io/"},"website"),"."),(0,i.kt)("h2",{id:"access-opensergo-in-kitex"},"Access OpenSergo in Kitex"),(0,i.kt)("p",null,"Kitex provides many interfaces with default implementation for users to customize. You can extend or inject them into Kitex to fulfill your needs. For example, you can inject a customized logger into Kitex."),(0,i.kt)("p",null,"To get metainfo available in OpenSergo Dashboard, what we need to do is also quite simple."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    ...\n    "github.com/cloudwego/kitex/server"\n    "github.com/kitex-contrib/opensergo/metainfo"\n    ...\n)\n\nfunc main() {\n    ...\n    r, err := metainfo.NewDefaultMetaReporter()\n    if err != nil {\n        panic(err)\n    }\n    svr := hello.NewServer(\n        new(HelloImpl),\n    )\n    server.RegisterStartHook(func() {\n        if err = r.ReportMetaInfo(svr.GetServiceInfo()); err != nil {\n            klog.Error(err)\n        }\n    })\n    ...\n}\n')),(0,i.kt)("h1",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cloudwego.io/docs/kitex/"},"Kitex docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kitex-contrib/opensergo"},"Kitex-contrib/opensergo"))))}g.isMDXComponent=!0}}]);