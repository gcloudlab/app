import{u as E}from"./robot.e45a1a5b.js";import{w as H}from"./index.5e4b8f88.js";import{l as S,f as u,b as l,g as $,j as d,d as C,s as j,x as R,O as w,t as F,c as g,z as A,h as v,o as I,r as O,A as V,bb as D,v as N,Z as K,S as p,$ as x,W as k,U as M,a8 as U,X as B,Y as J,a5 as X,H as Y}from"./index.090d1b34.js";import{a as Z}from"./color-to-class.6a5641e4.js";import"./date.c25f3370.js";const q={fontWeightActive:"400"},G=e=>{const{fontSize:o,textColor3:t,textColor2:n,borderRadius:a,buttonColor2Hover:r,buttonColor2Pressed:c}=e;return Object.assign(Object.assign({},q),{fontSize:o,itemLineHeight:"1.25",itemTextColor:t,itemTextColorHover:n,itemTextColorPressed:n,itemTextColorActive:n,itemBorderRadius:a,itemColorHover:r,itemColorPressed:c,separatorColor:t})},Q={name:"Breadcrumb",common:S,self:G},W=Q,ee=u("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[l("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),l("a",`
 color: inherit;
 text-decoration: inherit;
 `),u("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[u("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),l("&:not(:last-child)",[$("clickable",[d("link",`
 cursor: pointer;
 `,[l("&:hover",`
 background-color: var(--n-item-color-hover);
 `),l("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),d("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[l("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[u("icon",`
 color: var(--n-item-text-color-hover);
 `)]),l("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[u("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),d("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),l("&:last-child",[d("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[u("icon",`
 color: var(--n-item-text-color-active);
 `)]),d("separator",`
 display: none;
 `)])])]),z=I("n-breadcrumb"),re=Object.assign(Object.assign({},R.props),{separator:{type:String,default:"/"}}),te=C({name:"Breadcrumb",props:re,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=j(e),n=R("Breadcrumb","-breadcrumb",ee,W,e,o);w(z,{separatorRef:F(e,"separator"),mergedClsPrefixRef:o});const a=g(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:i,itemTextColor:s,itemTextColorHover:m,itemTextColorPressed:b,itemTextColorActive:h,fontSize:f,fontWeightActive:L,itemBorderRadius:T,itemColorHover:y,itemColorPressed:P,itemLineHeight:_}}=n.value;return{"--n-font-size":f,"--n-bezier":c,"--n-item-text-color":s,"--n-item-text-color-hover":m,"--n-item-text-color-pressed":b,"--n-item-text-color-active":h,"--n-separator-color":i,"--n-item-color-hover":y,"--n-item-color-pressed":P,"--n-item-border-radius":T,"--n-font-weight-active":L,"--n-item-line-height":_}}),r=t?A("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},v("ul",null,this.$slots))}}),oe=H?window:null,ne=(e=oe)=>{const o=()=>{const{hash:a,host:r,hostname:c,href:i,origin:s,pathname:m,port:b,protocol:h,search:f}=(e==null?void 0:e.location)||{};return{hash:a,host:r,hostname:c,href:i,origin:s,pathname:m,port:b,protocol:h,search:f}},t=()=>{n.value=o()},n=O(o());return V(()=>{e&&(e.addEventListener("popstate",t),e.addEventListener("hashchange",t))}),D(()=>{e&&(e.removeEventListener("popstate",t),e.removeEventListener("hashchange",t))}),n},ae={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},ie=C({name:"BreadcrumbItem",props:ae,setup(e,{slots:o}){const t=N(z,null);if(!t)return()=>null;const{separatorRef:n,mergedClsPrefixRef:a}=t,r=ne(),c=g(()=>e.href?"a":"span"),i=g(()=>r.value.href===e.href?"location":null);return()=>{const{value:s}=a;return v("li",{class:[`${s}-breadcrumb-item`,e.clickable&&`${s}-breadcrumb-item--clickable`]},v(c.value,{class:`${s}-breadcrumb-item__link`,"aria-current":i.value,href:e.href,onClick:e.onClick},o),v("span",{class:`${s}-breadcrumb-item__separator`,"aria-hidden":"true"},Z(o.separator,()=>{var m;return[(m=e.separator)!==null&&m!==void 0?m:n.value]})))}}}),de=C({__name:"file-folder-route",props:{routes:{type:Array,default:[{name:"\u4E3B\u83DC\u5355"}]}},setup(e){const o=e,{onJumpToFolder:t,onRemoveFromFolderRoutes:n}=E(),a=r=>{r.name==="\u4E3B\u83DC\u5355"&&n(),t(r)};return K(o),(r,c)=>(p(),x(B(te),null,{default:k(()=>[(p(!0),M(Y,null,U(e.routes,i=>(p(),x(B(ie),{key:i.id,onClick:s=>a(i)},{default:k(()=>[J(X(i.name),1)]),_:2},1032,["onClick"]))),128))]),_:1}))}});export{de as default};
