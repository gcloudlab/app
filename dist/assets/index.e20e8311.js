import{b as q,a as A}from"./index.5e4b8f88.js";import{l as G,m as x,b as y,f as d,g as _,j as c,p as U,q as W,d as C,s as X,D as Y,x as R,O as Z,t as J,c as Q,z as ee,h as u,o as oe,v as re,F as le,r as b,b4 as B,Z as se,S as h,U as k,$ as L,W as m,V as f,H as F,a8 as N,X as p,Y as $,a5 as P,a6 as ae,A as te,a4 as w}from"./index.090d1b34.js";import{g as S,e as ie}from"./Scrollbar.0b118b5e.js";import{d as ne}from"./logo.5b29ad49.js";import{N as de}from"./Skeleton.885738e7.js";import"./color-to-class.6a5641e4.js";import"./index.a1c9fab8.js";const ce=o=>{const{textColor2:r,cardColor:e,modalColor:l,popoverColor:s,dividerColor:i,borderRadius:n,fontSize:a,hoverColor:t}=o;return{textColor:r,color:e,colorHover:t,colorModal:l,colorHoverModal:x(l,t),colorPopover:s,colorHoverPopover:x(s,t),borderColor:i,borderColorModal:x(l,i),borderColorPopover:x(s,i),borderRadius:n,fontSize:a}},ue={name:"List",common:G,self:ce},ve=ue,pe=y([d("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[_("show-divider",[d("list-item",[y("&:not(:last-child)",[c("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),_("clickable",[d("list-item",`
 cursor: pointer;
 `)]),_("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),_("hoverable",[d("list-item",`
 border-radius: var(--n-border-radius);
 `,[y("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[c("divider",`
 background-color: transparent;
 `)])])]),_("bordered, hoverable",[d("list-item",`
 padding: 12px 20px;
 `),c("header, footer",`
 padding: 12px 20px;
 `)]),c("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[y("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),d("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[c("prefix",`
 margin-right: 20px;
 flex: 0;
 `),c("suffix",`
 margin-left: 20px;
 flex: 0;
 `),c("main",`
 flex: 1;
 `),c("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),U(d("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),W(d("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),me=Object.assign(Object.assign({},R.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),I=oe("n-list"),be=C({name:"List",props:me,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:e,mergedRtlRef:l}=X(o),s=Y("List",l,r),i=R("List","-list",pe,ve,o,r);Z(I,{showDividerRef:J(o,"showDivider"),mergedClsPrefixRef:r});const n=Q(()=>{const{common:{cubicBezierEaseInOut:t},self:{fontSize:v,textColor:g,color:z,colorModal:E,colorPopover:M,borderColor:D,borderColorModal:j,borderColorPopover:H,borderRadius:V,colorHover:O,colorHoverModal:T,colorHoverPopover:K}}=i.value;return{"--n-font-size":v,"--n-bezier":t,"--n-text-color":g,"--n-color":z,"--n-border-radius":V,"--n-border-color":D,"--n-border-color-modal":j,"--n-border-color-popover":H,"--n-color-modal":E,"--n-color-popover":M,"--n-color-hover":O,"--n-color-hover-modal":T,"--n-color-hover-popover":K}}),a=e?ee("list",void 0,n,o):void 0;return{mergedClsPrefix:r,rtlEnabled:s,cssVars:e?void 0:n,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var o;const{$slots:r,mergedClsPrefix:e,onRender:l}=this;return l==null||l(),u("ul",{class:[`${e}-list`,this.rtlEnabled&&`${e}-list--rtl`,this.bordered&&`${e}-list--bordered`,this.showDivider&&`${e}-list--show-divider`,this.hoverable&&`${e}-list--hoverable`,this.clickable&&`${e}-list--clickable`,this.themeClass],style:this.cssVars},r.header?u("div",{class:`${e}-list__header`},r.header()):null,(o=r.default)===null||o===void 0?void 0:o.call(r),r.footer?u("div",{class:`${e}-list__footer`},r.footer()):null)}}),he=C({name:"ListItem",setup(){const o=re(I,null);return o||le("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:o.showDividerRef,mergedClsPrefix:o.mergedClsPrefixRef}},render(){const{$slots:o,mergedClsPrefix:r}=this;return u("li",{class:`${r}-list-item`},o.prefix?u("div",{class:`${r}-list-item__prefix`},o.prefix()):null,o.default?u("div",{class:`${r}-list-item__main`},o):null,o.suffix?u("div",{class:`${r}-list-item__suffix`},o.suffix()):null,this.showDivider&&u("div",{class:`${r}-list-item__divider`}))}}),fe=async o=>await q.get(`https://v2.aoau.top/pb?p=${o}`),ge=async o=>{const r=b(),e=await fe(o);return e.status===200&&(r.value=e.data),r.value};const _e={class:"menu"},xe=C({__name:"menu",props:{page:{type:Number,default:1}},emits:["onSelect"],setup(o,{emit:r}){const e=o,l=b("\u7EB8\u72471"),s=b(!1),i=[{label:"\u7EB8\u72471",key:1,disabled:e.page===1},{label:"\u7EB8\u72472",key:2,disabled:e.page===2},{label:"\u7EB8\u72473",key:3,disabled:e.page===3},{label:"\u5199\u771F1",key:4,disabled:e.page===4},{label:"\u5199\u771F2",key:5,disabled:e.page===5},{label:"\u5199\u771F3",key:6,disabled:e.page===6},{label:"\u5199\u771F3",key:7,disabled:e.page===7},{label:"\u5199\u771F3",key:8,disabled:e.page===8},{label:"\u5199\u771F3",key:9,disabled:e.page===9},{label:"\u5199\u771F3",key:10,disabled:e.page===10},{label:"\u5199\u771F3",key:11,disabled:e.page===11},{label:"\u5199\u771F3",key:12,disabled:e.page===12},{label:"\u5199\u771F3",key:13,disabled:e.page===13},{label:"\u5199\u771F3",key:14,disabled:e.page===14}],n=a=>{r("onSelect",a),l.value=a.label,s.value=!1};return se(e),(a,t)=>(h(),k("div",_e,[s.value?(h(),L(p(S),{key:0,class:"z-10 rounded shadow animate__animated animate__fadeIn faster",style:{height:"200px"}},{default:m(()=>[f(p(be),{class:""},{default:m(()=>[(h(),k(F,null,N(i,(v,g)=>f(p(he),{key:g,class:"px-2 hover:bg-gray-100",onClick:z=>n(v)},{default:m(()=>[$(P(v.label),1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})):ae("",!0),f(p(A),{class:"mt-2 px-2 shadow-md bg-white",size:"large",type:"primary",round:"",onClick:t[0]||(t[0]=v=>s.value=!s.value)},{default:m(()=>[$(P(l.value),1)]),_:1})]))}}),ye=B(xe,[["__scopeId","data-v-413a31ac"]]);const ke={class:"picture mt-3"},Ce={class:"picture-bar flex flex-wrap justify-around items-end"},we={class:"w-80 h-80 sm:w-80 sm:h-80 md:w-64 md:h-64"},ze=C({__name:"index",setup(o){const r=b(),e=b(1),l=b(ne);te(async()=>{s()});const s=async()=>{r.value=await ge(e.value)},i=n=>{r.value=null,e.value=n.key,s()};return(n,a)=>(h(),L(p(S),{style:{"max-height":"calc(100vh - 60px)"}},{default:m(()=>{var t;return[w("div",ke,[w("div",Ce,[(h(!0),k(F,null,N((t=r.value)==null?void 0:t.photoList,(v,g)=>(h(),k("div",{key:g,class:"picture-item w-80 h-80 sm:w-80 sm:h-80 md:w-64 md:h-64 mx-0.5 mb-3"},[f(p(ie),{class:"picture-i animate__animated animate__fadeIn faster shadow-lg rounded",src:v,"object-fit":"cover",lazy:"","fallback-src":l.value},{placeholder:m(()=>[w("div",we,[f(p(de),{width:"100%",height:"100%",sharp:!1,size:"large"})])]),_:2},1032,["src","fallback-src"])]))),128))]),f(ye,{page:e.value,onOnSelect:i},null,8,["page"])])]}),_:1}))}}),Se=B(ze,[["__scopeId","data-v-c5709168"]]);export{Se as default};
