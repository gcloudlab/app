import{b4 as V,d as T,a0 as _,a1 as h,r as c,Z as $,S as o,U as s,H as A,a8 as B,$ as d,X as a,V as i,a6 as K,a4 as w,W as g,Y as L,a5 as j}from"./index.af57445c.js";import{u as P}from"./robot.97cc1244.js";import{F as z}from"./Folder.191c0997.js";import{F as U,D as G}from"./FileTraySharp.6bcdae8e.js";import{e as q,B as H}from"./Scrollbar.0a2e91cc.js";import{N as W}from"./Skeleton.73fbb1d6.js";import"./index.04c61e6b.js";import"./color-to-class.0332f98b.js";import"./date.454365cc.js";import"./index.a1c9fab8.js";const X={class:"file-graphical"},Y={key:0,class:"file-warpper mt-4 flex flex-wrap justify-start"},Z=["onClick"],J={key:0,class:"z-10 w-18 h-12 absolute right-0 top-0 left-0"},M=["onClick"],Q=["src"],ee=["onClick"],te=T({__name:"file-graphical",props:{values:{type:Object,required:!0,default:{}}},emits:["selectedKeys","expandedKeys"],setup(u,{emit:v}){const x=u,C=_(()=>h(()=>import("./index.b6f30faf.js"),["index.b6f30faf.js","Dropdown.3fff8135.js","Scrollbar.0a2e91cc.js","index.af57445c.js","index.04c61e6b.js","color-to-class.0332f98b.js","index.f31c340f.js","index.959f2e3a.css","robot.97cc1244.js","date.454365cc.js","index.a1c9fab8.js","Eye.6d434294.js","Tag.1b72b5af.js"],import.meta.url)),f=_(()=>h(()=>import("./file-edit.10a2e745.js"),["file-edit.10a2e745.js","index.af57445c.js","Input.56277aaa.js","index.04c61e6b.js","color-to-class.0332f98b.js","index.a1c9fab8.js","Eye.6d434294.js"],import.meta.url)),E=_(()=>h(()=>import("./index.f40f550f.js"),["index.f40f550f.js","index.f31c340f.js","index.959f2e3a.css","index.af57445c.js","robot.97cc1244.js","index.04c61e6b.js","color-to-class.0332f98b.js","date.454365cc.js","Scrollbar.0a2e91cc.js","index.a1c9fab8.js","Eye.6d434294.js","Tag.1b72b5af.js"],import.meta.url)),{onUpdateFileName:F}=P(),p=c(!1),b=c(0),D=c(0),n=c(null),y=c(!0),r=t=>{n.value=t,v("selectedKeys",t)},N=t=>{v("expandedKeys",t)},I=t=>{var m;t&&t!==((m=n.value)==null?void 0:m.name)&&n.value&&n.value.identity&&(n.value.name=t,F({identity:n.value.identity,name:t}))},O=t=>{console.log("--drop select",t),p.value=!1},R=t=>{p.value=t},S=t=>{y.value=!1};return $(x),(t,m)=>{var k;return o(),s("div",X,[((k=u.values.children)==null?void 0:k.length)!==0?(o(),s("div",Y,[(o(!0),s(A,null,B(u.values.children,e=>(o(),s("div",{key:e.id,class:"flex flex-col justify-end items-center w-18 px-1 mx-2 mb-5 transition-all duration-100 hover:bg-gray-100 hover:shadow hover:rounded-lg animate__animated animate__fadeIn faster"},[(e==null?void 0:e.type)==="\u6587\u4EF6\u5939"&&e.path===""&&e.size===0?(o(),d(a(z),{key:0,class:"w-10 text-primary cursor-pointer",onClick:l=>N(e)},null,8,["onClick"])):(e==null?void 0:e.type)==="\u56FE\u7247"?(o(),s("div",{key:1,class:"image-item-wrapper w-18 relative",onClick:l=>r(e)},[i(a(q),{class:"shadow-lg rounded",lazy:"",src:e.path,width:"70","object-fit":"cover","preview-disabled":"","fallback-src":"./src/assets/logo.png","intersection-observer-options":{root:"#image-scroll-container"},"on-load":S},null,8,["src"]),y.value?(o(),s("div",J,[i(a(W),{width:"100%",height:"100%",sharp:!1})])):K("",!0)],8,Z)):e.type==="\u89C6\u9891\u6587\u4EF6"?(o(),s("video",{key:2,class:"shadow-md rounded",width:"70",style:{"max-height":"46px"},onClick:l=>r(e)},[w("source",{src:e.path,type:"video/mp4"},null,8,Q)],8,M)):e.type==="\u538B\u7F29\u6587\u4EF6"?(o(),d(a(U),{key:3,class:"w-10 text-primary cursor-pointer",onClick:l=>r(e)},null,8,["onClick"])):(o(),d(a(G),{key:4,class:"w-10 text-gray-400 cursor-pointer",onClick:l=>r(e)},null,8,["onClick"])),i(a(H),{"show-arrow":!1,placement:"bottom",trigger:"hover",style:{backgroundColor:"white",color:"black"}},{trigger:g(()=>[w("p",{class:"self-center truncate w-18 mt-1 text-center text-xs",onClick:l=>r(e)},[i(a(f),{truncate:"",value:e.name,"on-update-value":I},null,8,["value"])],8,ee)]),default:g(()=>[L(" "+j(e.name),1)]),_:2},1024)]))),128))])):(o(),d(a(E),{key:1,description:"\u7A7A\u6587\u4EF6\u5939"})),i(a(C),{show:p.value,position:{x:b.value,y:D.value},onSelect:O,onClickoutside:R},null,8,["show","position"])])}}}),pe=V(te,[["__scopeId","data-v-b4e1864a"]]);export{pe as default};