import{aO as x,i as h,l as b,f as u,M as c,j as d,g as o,d as C,s as $,x as m,c as y,z as w,h as l,H as _}from"./index.af57445c.js";var z=/\s/;function O(e){for(var i=e.length;i--&&z.test(e.charAt(i)););return i}var B=/^\s+/;function I(e){return e&&e.slice(0,O(e)+1).replace(B,"")}var f=0/0,P=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,N=/^0o[0-7]+$/i,R=parseInt;function H(e){if(typeof e=="number")return e;if(x(e))return f;if(h(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=h(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=I(e);var r=k.test(e);return r||N.test(e)?R(e.slice(2),r?2:8):P.test(e)?f:+e}const D=e=>{const{textColor1:i,dividerColor:r,fontWeightStrong:s}=e;return{textColor:i,color:r,fontWeight:s}},T={name:"Divider",common:b,self:D},j=T,S=u("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[c("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[c("no-title",`
 display: flex;
 align-items: center;
 `)]),d("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),o("title-position-left",[d("line",[o("left",{width:"28px"})])]),o("title-position-right",[d("line",[o("right",{width:"28px"})])]),o("dashed",[d("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),o("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),d("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),c("dashed",[d("line",{backgroundColor:"var(--n-color)"})]),o("dashed",[d("line",{borderColor:"var(--n-color)"})]),o("vertical",{backgroundColor:"var(--n-color)"})]),W=Object.assign(Object.assign({},m.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),L=C({name:"Divider",props:W,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=$(e),s=m("Divider","-divider",S,j,e,i),a=y(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:v,textColor:g,fontWeight:p}}=s.value;return{"--n-bezier":t,"--n-color":v,"--n-text-color":g,"--n-font-weight":p}}),n=r?w("divider",void 0,a,e):void 0;return{mergedClsPrefix:i,cssVars:r?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$slots:i,titlePlacement:r,vertical:s,dashed:a,cssVars:n,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:s,[`${t}-divider--no-title`]:!i.default,[`${t}-divider--dashed`]:a,[`${t}-divider--title-position-${r}`]:i.default&&r}],style:n},s?null:l("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!s&&i.default?l(_,null,l("div",{class:`${t}-divider__title`},this.$slots),l("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}});export{L as N,H as t};
