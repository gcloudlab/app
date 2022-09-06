import{C as Pe,r as ke,p as ce,V as Ne,x as Ce,y as Ie,m as Re,j as Ke,D as De,f as Oe,s as ze,N as Te,t as pe}from"./Scrollbar.0b118b5e.js";import{r as H,w as ie,bc as Ae,aY as Be,C as Fe,ae as He,aK as _e,l as Me,aS as $e,d as M,h as s,o as de,v as _,c as y,O as W,ag as X,E as je,G as fe,J,ad as Le,H as We,f as I,b as L,M as le,g as K,j as T,t as D,s as Ee,x as he,y as F,z as Ue}from"./index.090d1b34.js";import{i as G,h as V,C as qe,X as Ge,u as Ve}from"./index.5e4b8f88.js";import{C as Xe,h as se,c as Je,n as Ye}from"./index.cf1a054d.js";import{b as te}from"./color-to-class.6a5641e4.js";function Qe(e,o,i){if(!o)return e;const r=H(e.value);let n=null;return ie(e,t=>{n!==null&&window.clearTimeout(n),t===!0?i&&!i.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function Ze(e={},o){const i=Ae({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,t=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(w=>{if(w!==d.key)return;const h=r[w];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},u=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}n!==void 0&&Object.keys(n).forEach(w=>{if(w!==d.key)return;const h=n[w];if(typeof h=="function")h(d);else{const{stop:g=!1,prevent:S=!1}=h;g&&d.stopPropagation(),S&&d.preventDefault(),h.handler(d)}})},p=()=>{(o===void 0||o.value)&&(V("keydown",document,t),V("keyup",document,u)),o!==void 0&&ie(o,d=>{d?(V("keydown",document,t),V("keyup",document,u)):(G("keydown",document,t),G("keyup",document,u))})};return Pe()?(Be(p),Fe(()=>{(o===void 0||o.value)&&(G("keydown",document,t),G("keyup",document,u))})):p(),He(i)}const eo={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"},oo=e=>{const{primaryColor:o,textColor2:i,dividerColor:r,hoverColor:n,popoverColor:t,invertedColor:u,borderRadius:p,fontSizeSmall:d,fontSizeMedium:w,fontSizeLarge:h,fontSizeHuge:g,heightSmall:S,heightMedium:k,heightLarge:N,heightHuge:O,textColor3:x,opacityDisabled:C}=e;return Object.assign(Object.assign({},eo),{optionHeightSmall:S,optionHeightMedium:k,optionHeightLarge:N,optionHeightHuge:O,borderRadius:p,fontSizeSmall:d,fontSizeMedium:w,fontSizeLarge:h,fontSizeHuge:g,optionTextColor:i,optionTextColorHover:i,optionTextColorActive:o,optionTextColorChildActive:o,color:t,dividerColor:r,suffixColor:i,prefixColor:i,optionColorHover:n,optionColorActive:$e(o,{alpha:.1}),groupHeaderTextColor:x,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:u,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:o,optionColorActiveInverted:o,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:C})},no=_e({name:"Dropdown",common:Me,peers:{Popover:ke},self:oo}),to=no,ve=M({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ae=de("n-dropdown-menu"),Y=de("n-dropdown"),ue=de("n-dropdown-option");function re(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function ro(e){return e.type==="group"}function me(e){return e.type==="divider"}function io(e){return e.type==="render"}const be=M({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=_(Y),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:t,activeKeyPathRef:u,animatedRef:p,mergedShowRef:d,renderLabelRef:w,renderIconRef:h,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:k,nodePropsRef:N,menuPropsRef:O}=o,x=_(ue,null),C=_(ae),E=_(ce),Q=y(()=>e.tmNode.rawNode),U=y(()=>{const{value:l}=S;return re(e.tmNode.rawNode,l)}),Z=y(()=>{const{disabled:l}=e.tmNode;return l}),ee=y(()=>{if(!U.value)return!1;const{key:l,disabled:b}=e.tmNode;if(b)return!1;const{value:R}=i,{value:A}=r,{value:ne}=n,{value:B}=t;return R!==null?B.includes(l):A!==null?B.includes(l)&&B[B.length-1]!==l:ne!==null?B.includes(l):!1}),oe=y(()=>r.value===null&&!p.value),q=Qe(ee,300,oe),$=y(()=>!!(x!=null&&x.enteringSubmenuRef.value)),j=H(!1);W(ue,{enteringSubmenuRef:j});function z(){j.value=!0}function a(){j.value=!1}function m(){const{parentKey:l,tmNode:b}=e;b.disabled||!d.value||(n.value=l,r.value=null,i.value=b.key)}function f(){const{tmNode:l}=e;l.disabled||!d.value||i.value!==l.key&&m()}function c(l){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:b}=l;b&&!se({target:b},"dropdownOption")&&!se({target:b},"scrollbarRail")&&(i.value=null)}function P(){const{value:l}=U,{tmNode:b}=e;!d.value||!l&&!b.disabled&&(o.doSelect(b.key,b.rawNode),o.doUpdateShow(!1))}return{labelField:g,renderLabel:w,renderIcon:h,siblingHasIcon:C.showIconRef,siblingHasSubmenu:C.hasSubmenuRef,menuProps:O,popoverBody:E,animated:p,mergedShowSubmenu:y(()=>q.value&&!$.value),rawNode:Q,hasSubmenu:U,pending:X(()=>{const{value:l}=t,{key:b}=e.tmNode;return l.includes(b)}),childActive:X(()=>{const{value:l}=u,{key:b}=e.tmNode,R=l.findIndex(A=>b===A);return R===-1?!1:R<l.length-1}),active:X(()=>{const{value:l}=u,{key:b}=e.tmNode,R=l.findIndex(A=>b===A);return R===-1?!1:R===l.length-1}),mergedDisabled:Z,renderOption:k,nodeProps:N,handleClick:P,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:c,handleSubmenuBeforeEnter:z,handleSubmenuAfterEnter:a}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:n,clsPrefix:t,siblingHasIcon:u,siblingHasSubmenu:p,renderLabel:d,renderIcon:w,renderOption:h,nodeProps:g,props:S,scrollable:k}=this;let N=null;if(n){const E=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);N=s(we,Object.assign({},E,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const O={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g==null?void 0:g(r),C=s("div",Object.assign({class:[`${t}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),s("div",fe(O,S),[s("div",{class:[`${t}-dropdown-option-body__prefix`,u&&`${t}-dropdown-option-body__prefix--show-icon`]},[w?w(r):J(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},d?d(r):J((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,p&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(qe,null,{default:()=>s(Xe,null)}):null)]),this.hasSubmenu?s(Ne,null,{default:()=>[s(Ce,null,{default:()=>s("div",{class:`${t}-dropdown-offset-container`},s(Ie,{show:this.mergedShowSubmenu,placement:this.placement,to:k&&this.popoverBody||void 0,teleportDisabled:!k},{default:()=>s("div",{class:`${t}-dropdown-menu-wrapper`},i?s(je,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>N}):N)}))})]}):null);return h?h({node:C,option:r}):C}}),ao=M({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=_(ae),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:n,renderOptionRef:t}=_(Y);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:n,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:n,renderLabel:t,renderOption:u}=this,{rawNode:p}=this.tmNode,d=s("div",Object.assign({class:`${o}-dropdown-option`},n==null?void 0:n(p)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},J(p.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(p):J((e=p.title)!==null&&e!==void 0?e:p[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return u?u({node:d,option:p}):d}}),lo=M({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return s(We,null,s(ao,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>me(n.rawNode)?s(ve,{clsPrefix:i,key:n.key}):n.isGroup?(Le("dropdown","`group` node is not allowed to be put in `group` node."),null):s(be,{clsPrefix:i,tmNode:n,parentKey:o,key:n.key})))}}),so=M({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),we=M({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=_(Y);W(ae,{showIconRef:y(()=>{const n=o.value;return e.tmNodes.some(t=>{var u;if(t.isGroup)return(u=t.children)===null||u===void 0?void 0:u.some(({rawNode:d})=>n?n(d):d.icon);const{rawNode:p}=t;return n?n(p):p.icon})}),hasSubmenuRef:y(()=>{const{value:n}=i;return e.tmNodes.some(t=>{var u;if(t.isGroup)return(u=t.children)===null||u===void 0?void 0:u.some(({rawNode:d})=>re(d,n));const{rawNode:p}=t;return re(p,n)})})});const r=H(null);return W(Re,null),W(Ke,null),W(ce,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(n=>{const{rawNode:t}=n;return io(t)?s(so,{tmNode:n,key:n.key}):me(t)?s(ve,{clsPrefix:o,key:n.key}):ro(t)?s(lo,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key}):s(be,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key,props:t.props,scrollable:i})});return s("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(Ge,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?De({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),uo=I("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Oe(),I("dropdown-option",`
 position: relative;
 `,[L("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[L("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),I("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[L("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[K("pending",`
 color: var(--n-option-text-color-hover);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),L("&::before","background-color: var(--n-option-color-hover);")]),K("active",`
 color: var(--n-option-text-color-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),L("&::before","background-color: var(--n-option-color-active);")]),K("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[T("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),K("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),K("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[T("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[K("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),T("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[K("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),T("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),T("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[K("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),I("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("dropdown-menu","pointer-events: all;")]),I("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),I("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),I("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),L(">",[I("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),K("scrollable",[T("content",`
 padding: var(--n-padding);
 `)])]),co={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},po=Object.keys(pe),fo=Object.assign(Object.assign(Object.assign({},pe),co),he.props),yo=M({name:"Dropdown",inheritAttrs:!1,props:fo,setup(e){const o=H(!1),i=Ve(D(e,"show"),o),r=y(()=>{const{keyField:a,childrenField:m}=e;return Je(e.options,{getKey(f){return f[a]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),n=y(()=>r.value.treeNodes),t=H(null),u=H(null),p=H(null),d=y(()=>{var a,m,f;return(f=(m=(a=t.value)!==null&&a!==void 0?a:u.value)!==null&&m!==void 0?m:p.value)!==null&&f!==void 0?f:null}),w=y(()=>r.value.getPath(d.value).keyPath),h=y(()=>r.value.getPath(e.value).keyPath),g=X(()=>e.keyboard&&i.value);Ze({keydown:{ArrowUp:{prevent:!0,handler:Z},ArrowRight:{prevent:!0,handler:U},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:Q},Escape:E},keyup:{Enter:oe}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:k}=Ee(e),N=he("Dropdown","-dropdown",uo,to,e,S);W(Y,{labelFieldRef:D(e,"labelField"),childrenFieldRef:D(e,"childrenField"),renderLabelRef:D(e,"renderLabel"),renderIconRef:D(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:u,lastToggledSubmenuKeyRef:p,pendingKeyPathRef:w,activeKeyPathRef:h,animatedRef:D(e,"animated"),mergedShowRef:i,nodePropsRef:D(e,"nodeProps"),renderOptionRef:D(e,"renderOption"),menuPropsRef:D(e,"menuProps"),doSelect:O,doUpdateShow:x}),ie(i,a=>{!e.animated&&!a&&C()});function O(a,m){const{onSelect:f}=e;f&&te(f,a,m)}function x(a){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&te(m,a),f&&te(f,a),o.value=a}function C(){t.value=null,u.value=null,p.value=null}function E(){x(!1)}function Q(){$("left")}function U(){$("right")}function Z(){$("up")}function ee(){$("down")}function oe(){const a=q();a!=null&&a.isLeaf&&(O(a.key,a.rawNode),x(!1))}function q(){var a;const{value:m}=r,{value:f}=d;return!m||f===null?null:(a=m.getNode(f))!==null&&a!==void 0?a:null}function $(a){const{value:m}=d,{value:{getFirstAvailableNode:f}}=r;let c=null;if(m===null){const P=f();P!==null&&(c=P.key)}else{const P=q();if(P){let l;switch(a){case"down":l=P.getNext();break;case"up":l=P.getPrev();break;case"right":l=P.getChild();break;case"left":l=P.getParent();break}l&&(c=l.key)}}c!==null&&(t.value=null,u.value=c)}const j=y(()=>{const{size:a,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:c}=N.value,{padding:P,dividerColor:l,borderRadius:b,optionOpacityDisabled:R,[F("optionIconSuffixWidth",a)]:A,[F("optionSuffixWidth",a)]:ne,[F("optionIconPrefixWidth",a)]:B,[F("optionPrefixWidth",a)]:ye,[F("fontSize",a)]:ge,[F("optionHeight",a)]:xe,[F("optionIconSize",a)]:Se}=c,v={"--n-bezier":f,"--n-font-size":ge,"--n-padding":P,"--n-border-radius":b,"--n-option-height":xe,"--n-option-prefix-width":ye,"--n-option-icon-prefix-width":B,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":A,"--n-option-icon-size":Se,"--n-divider-color":l,"--n-option-opacity-disabled":R};return m?(v["--n-color"]=c.colorInverted,v["--n-option-color-hover"]=c.optionColorHoverInverted,v["--n-option-color-active"]=c.optionColorActiveInverted,v["--n-option-text-color"]=c.optionTextColorInverted,v["--n-option-text-color-hover"]=c.optionTextColorHoverInverted,v["--n-option-text-color-active"]=c.optionTextColorActiveInverted,v["--n-option-text-color-child-active"]=c.optionTextColorChildActiveInverted,v["--n-prefix-color"]=c.prefixColorInverted,v["--n-suffix-color"]=c.suffixColorInverted,v["--n-group-header-text-color"]=c.groupHeaderTextColorInverted):(v["--n-color"]=c.color,v["--n-option-color-hover"]=c.optionColorHover,v["--n-option-color-active"]=c.optionColorActive,v["--n-option-text-color"]=c.optionTextColor,v["--n-option-text-color-hover"]=c.optionTextColorHover,v["--n-option-text-color-active"]=c.optionTextColorActive,v["--n-option-text-color-child-active"]=c.optionTextColorChildActive,v["--n-prefix-color"]=c.prefixColor,v["--n-suffix-color"]=c.suffixColor,v["--n-group-header-text-color"]=c.groupHeaderTextColor),v}),z=k?Ue("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),j,e):void 0;return{mergedClsPrefix:S,mergedTheme:N,tmNodes:n,mergedShow:i,handleAfterLeave:()=>{!e.animated||C()},doUpdateShow:x,cssVars:k?void 0:j,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const e=(r,n,t,u,p)=>{var d;const{mergedClsPrefix:w,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(h==null?void 0:h(void 0,this.tmNodes.map(k=>k.rawNode)))||{},S={ref:Ye(n),class:[r,`${w}-dropdown`,this.themeClass],clsPrefix:w,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:u,onMouseleave:p};return s(we,fe(this.$attrs,S,g))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(Te,Object.assign({},ze(this.$props,po),i),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}});export{yo as N};
