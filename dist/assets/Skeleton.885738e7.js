import{l as P,b as f,f as R,d as N,s as H,x as k,c as A,y as E,h as b,G as L,H as O}from"./index.090d1b34.js";import{p}from"./index.a1c9fab8.js";import{w as V}from"./index.5e4b8f88.js";let y=!1;function _(){if(!!V&&!!window.CSS&&!y&&(y=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const j=e=>{const{heightSmall:o,heightMedium:i,heightLarge:n,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:o,heightMedium:i,heightLarge:n}},T={name:"Skeleton",common:P,self:j},$=f([R("skeleton",`
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),f("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),F=Object.assign(Object.assign({},k.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),M=N({name:"Skeleton",inheritAttrs:!1,props:F,setup(e){_();const{mergedClsPrefixRef:o}=H(e),i=k("Skeleton","-skeleton",$,T,e,o);return{mergedClsPrefix:o,style:A(()=>{var n,r;const s=i.value,{common:{cubicBezierEaseInOut:v}}=s,m=s.self,{color:S,colorEnd:w,borderRadius:x}=m;let a;const{circle:l,sharp:z,round:C,width:t,height:c,size:g,text:h,animated:B}=e;g!==void 0&&(a=m[E("height",g)]);const d=l?(n=t!=null?t:c)!==null&&n!==void 0?n:a:t,u=(r=l&&t!=null?t:c)!==null&&r!==void 0?r:a;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:l?"50%":C?"4096px":z?"":x,width:typeof d=="number"?p(d):d,height:typeof u=="number"?p(u):u,animation:B?"":"none","--n-bezier":v,"--n-color-start":S,"--n-color-end":w}})}},render(){const{repeat:e,style:o,mergedClsPrefix:i,$attrs:n}=this,r=b("div",L({class:`${i}-skeleton`,style:o},n));return e>1?b(O,null,Array.apply(null,{length:e}).map(s=>[r,`
`])):r}});export{M as N};
