import{o as e,c as t,r as o,d as n,a as r,b as s,e as i,f as a,g as l,h as c,u as d,i as u,E as m,s as p,j as h}from"./vendor-5fd2ea98.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const _=(e,t)=>{const o=e.__vccOpts||e;for(const[n,r]of t)o[n]=r;return o};const f=_({},[["render",function(n,r){const s=o("router-view");return e(),t(s)}]]),g=n("user",{persist:{storage:sessionStorage},state:()=>({name:"张三"}),getters:{nameLength:e=>e.name.length,fullName:e=>e.name+"丰"},actions:{updateName(e){this.name=e}}});n("menu",{state:()=>({isCollapse:!0}),getters:{},actions:{updateCollapse(){this.isCollapse=!this.isCollapse}}});const E=r(),y={},w=function(e,t,o){if(!t||0===t.length)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/CRM-Vue/"+e}(e))in y)return;y[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!o)for(let o=n.length-1;o>=0;o--){const r=n[o];if(r.href===e&&(!t||"stylesheet"===r.rel))return}else if(document.querySelector(`link[href="${e}"]${r}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((t,o)=>{s.addEventListener("load",t),s.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},v=[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:()=>w((()=>import("./index-840972e7.js")),["assets/index-840972e7.js","assets/vendor-5fd2ea98.js","assets/vendor-760a5346.css","assets/index-a1669083.css"])},{path:"/home",name:"home",component:()=>w((()=>import("./index-5994e7cf.js")),["assets/index-5994e7cf.js","assets/vendor-5fd2ea98.js","assets/vendor-760a5346.css"]),children:[{path:"/welcome",name:"welcome",component:()=>w((()=>import("./index-4b525eab.js")),["assets/index-4b525eab.js","assets/vendor-5fd2ea98.js","assets/vendor-760a5346.css"])},{path:"/index",name:"index",component:()=>w((()=>import("./index-840972e7.js")),["assets/index-840972e7.js","assets/vendor-5fd2ea98.js","assets/vendor-760a5346.css","assets/index-a1669083.css"])},{path:"/home",name:"home",component:()=>w((()=>import("./index-f1d14f46.js")),["assets/index-f1d14f46.js","assets/vendor-5fd2ea98.js","assets/vendor-760a5346.css"])}]},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>w((()=>import("./NotFound-c5dc977d.js")),["assets/NotFound-c5dc977d.js","assets/vendor-5fd2ea98.js","assets/vendor-760a5346.css","assets/NotFound-383f6438.css"])}],L=s({history:i({VITE_APP_TITLE:"鸡你太美",VITE_APP_API_BASE_URL:"/api-pro",VITE_BUILD_SOURCEMAP:"false",VITE_BUILD_DROP_CONSOLE:"true",VITE_BUILD_VCONSOLE:"false",VITE_USER_NODE_ENV:"production"}.BASE_URL),routes:v,scrollBehavior:()=>({left:0,top:0})});if("undefined"!=typeof window){let e=function(){var e=document.body,t=document.getElementById("__svg__icons__dom__");t||((t=document.createElementNS("http://www.w3.org/2000/svg","svg")).style.position="absolute",t.style.width="0",t.style.height="0",t.id="__svg__icons__dom__",t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:link","http://www.w3.org/1999/xlink")),t.innerHTML='<symbol viewBox="0 0 48 48" fill="none"  id="icon-avatar"><path d="M5.004 42.231a.78.78 0 0 0 .791.769h36.407a.78.78 0 0 0 .792-.769v-.918c.018-.277.055-1.657-.855-3.184-.574-.963-1.407-1.794-2.476-2.472-1.293-.82-2.938-1.413-4.928-1.77a29.236 29.236 0 0 1-3.002-.584c-2.632-.672-2.862-1.267-2.864-1.273a.763.763 0 0 0-.066-.169c-.022-.11-.075-.528.027-1.647.258-2.843 1.783-4.523 3.008-5.873.386-.425.751-.828 1.032-1.222 1.213-1.7 1.325-3.635 1.33-3.755a2 2 0 0 0-.087-.628c-.12-.37-.343-.6-.507-.77a2.874 2.874 0 0 1-.113-.12c-.012-.014-.044-.052-.015-.243.108-.705.172-1.295.203-1.857.056-1.002.099-2.5-.16-3.959a6.031 6.031 0 0 0-.172-.825c-.273-1.004-.711-1.862-1.32-2.57-.105-.115-2.653-2.8-10.05-3.35-1.023-.076-2.034-.035-3.03.016a4.39 4.39 0 0 0-.875.108c-.764.197-.968.681-1.021.952-.089.45.067.798.17 1.03.015.033.034.074.001.182-.171.266-.442.506-.717.733-.08.067-1.934 1.667-2.036 3.756-.275 1.589-.255 4.064.07 5.775.02.095.047.235.002.33-.35.313-.746.668-.745 1.478.004.082.117 2.016 1.33 3.717.28.394.645.796 1.03 1.221l.002.001c1.225 1.35 2.75 3.03 3.008 5.872.101 1.12.048 1.537.027 1.648a.758.758 0 0 0-.067.169c-.001.006-.23.599-2.85 1.27-1.512.387-3 .585-3.045.59-1.934.327-3.569.906-4.86 1.721-1.065.673-1.9 1.507-2.48 2.477-.928 1.55-.903 2.962-.89 3.22v.923Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round" /></symbol><symbol viewBox="0 0 48 48" fill="none"  id="icon-lock"><rect x="6" y="22" width="36" height="22" rx="2" stroke="currentColor" stroke-width="4" stroke-linejoin="round" /><path d="M14 22v-8c0-5.523 4.477-10 10-10s10 4.477 10 10v8M24 30v6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></symbol>',e.insertBefore(t,e.lastChild)};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}const k=["width","height","color"],I=["xlink:href"],O={__name:"SvgIcon",props:{name:{type:String,require:!0},with:{type:Number,require:!1},height:{type:Number,require:!1},color:{type:String,require:!1}},setup(t){const o=t,n=a((()=>"#icon-"+o.name));return(o,r)=>(e(),l("svg",{width:o.width,height:t.height,color:t.color},[c("use",{"xlink:href":d(n)},null,8,I)],8,k))}},P=u(f),x=r();for(const[b,S]of Object.entries(m))P.component(b,S);x.use(p),P.component("mysvg",O),P.use(h),P.use(x),P.use(E),P.use(L),P.mount("#app");export{_,g as u};
