import{d as W,r as S,u as Nt,h as c,a as jt,i as Ve,c as k,w as Q,n as ne,t as G,b as C,e as It,f as x,g as T,j as D,k as Dt,N as Ot,T as Ge,l as Ce,m as me,o as Ye,p as Mt,q as Ht,s as _e,v as le,x as ee,y as V,z as we,A as Se,B as Ue,C as Vt,D as Gt,E as Yt,F as Ut,G as Xe,H as qe,I as Xt,J as qt,K as Kt,L as Jt,M as Zt,O as Qt,P as ea,Q as ta,R as aa,S as O,U as X,V as P,W as A,X as y,Y as M,Z as Ke,_ as Je,$ as de,a0 as na,a1 as ra,a2 as ze,a3 as Re,a4 as Y,a5 as ae,a6 as oa,a7 as ia,a8 as sa,a9 as la}from"./index.af57445c.js";import{u as $e,a as Be,r as da}from"./useAuthentication.0c4df20f.js";import{A as ca,R as ua,u as fa}from"./robot.97cc1244.js";import{d as Ze}from"./logo.5b29ad49.js";import{f as ba,V as xe,N as ma,u as va,o as Qe,a as Z}from"./index.04c61e6b.js";import{g as pa}from"./date.454365cc.js";import{_ as ha}from"./index.71bf65ec.js";import{t as We,N as ie}from"./Divider.f2d22453.js";import{c as ga,a as Ne,o as xa,f as je,u as Ie,b as ve,d as ya,N as Ca,e as _a,g as wa}from"./Scrollbar.0a2e91cc.js";import{c as et,r as ye,i as Sa,a as za,b as se}from"./color-to-class.0332f98b.js";import{g as Ra}from"./attribute.dd679ec7.js";import{t as $a}from"./Tag.1b72b5af.js";import"./use-is-composing.892e6671.js";import"./index.20db2190.js";const Ba=Ne(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ne("&::-webkit-scrollbar",{width:0,height:0})]),Ta=W({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=S(null);function t(n){!(n.currentTarget.offsetWidth<n.currentTarget.scrollWidth)||n.deltaY===0||(n.currentTarget.scrollLeft+=n.deltaY+n.deltaX,n.preventDefault())}const a=Nt();return Ba.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ga,ssr:a}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...n){var r;(r=e.value)===null||r===void 0||r.scrollTo(...n)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Ea=function(){return jt.Date.now()};const pe=Ea;var Pa="Expected a function",Fa=Math.max,La=Math.min;function Aa(e,t,a){var o,n,r,d,s,h,f=0,u=!1,b=!1,v=!0;if(typeof e!="function")throw new TypeError(Pa);t=We(t)||0,Ve(a)&&(u=!!a.leading,b="maxWait"in a,r=b?Fa(We(a.maxWait)||0,t):r,v="trailing"in a?!!a.trailing:v);function p(_){var L=o,N=n;return o=n=void 0,f=_,d=e.apply(N,L),d}function z(_){return f=_,s=setTimeout(E,t),u?p(_):d}function R(_){var L=_-h,N=_-f,j=t-L;return b?La(j,r-N):j}function g(_){var L=_-h,N=_-f;return h===void 0||L>=t||L<0||b&&N>=r}function E(){var _=pe();if(g(_))return F(_);s=setTimeout(E,R(_))}function F(_){return s=void 0,v&&o?p(_):(o=n=void 0,d)}function m(){s!==void 0&&clearTimeout(s),f=0,o=h=n=s=void 0}function B(){return s===void 0?d:F(pe())}function I(){var _=pe(),L=g(_);if(o=arguments,n=this,h=_,L){if(s===void 0)return z(h);if(b)return clearTimeout(s),s=setTimeout(E,t),p(h)}return s===void 0&&(s=setTimeout(E,t)),d}return I.cancel=m,I.flush=B,I}var ka="Expected a function";function he(e,t,a){var o=!0,n=!0;if(typeof e!="function")throw new TypeError(ka);return Ve(a)&&(o="leading"in a?!!a.leading:o,n="trailing"in a?!!a.trailing:n),Aa(e,t,{leading:o,maxWait:t,trailing:n})}const De=W({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=S(null),a=S(e.value),o=S(e.value),n=S("up"),r=S(!1),d=k(()=>r.value?`${e.clsPrefix}-base-slot-machine-current-number--${n.value}-scroll`:null),s=k(()=>r.value?`${e.clsPrefix}-base-slot-machine-old-number--${n.value}-scroll`:null);Q(G(e,"value"),(u,b)=>{a.value=b,o.value=u,ne(h)});function h(){const u=e.newOriginalNumber,b=e.oldOriginalNumber;b===void 0||u===void 0||(u>b?f("up"):b>u&&f("down"))}function f(u){n.value=u,r.value=!1,ne(()=>{var b;(b=t.value)===null||b===void 0||b.offsetWidth,r.value=!0})}return()=>{const{clsPrefix:u}=e;return c("span",{ref:t,class:`${u}-base-slot-machine-number`},a.value!==null?c("span",{class:[`${u}-base-slot-machine-old-number ${u}-base-slot-machine-old-number--top`,s.value]},a.value):null,c("span",{class:[`${u}-base-slot-machine-current-number`,d.value]},c("span",{ref:"numberWrapper",class:[`${u}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${u}-base-slot-machine-current-number__inner--not-number`]},o.value)),a.value!==null?c("span",{class:[`${u}-base-slot-machine-old-number ${u}-base-slot-machine-old-number--bottom`,s.value]},a.value):null)}}}),{cubicBezierEaseOut:J}=It;function Wa({duration:e=".2s"}={}){return[C("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${J},
 max-width ${e} ${J},
 transform ${e} ${J}
 `}),C("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${J},
 max-width ${e} ${J},
 transform ${e} ${J}
 `}),C("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),C("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),C("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),C("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const Na=C([C("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),C("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),C("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),C("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),x("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[x("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Wa({duration:".2s"}),ba({duration:".2s",delay:"0s"}),x("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[T("top",{transform:"translateY(-100%)"}),T("bottom",{transform:"translateY(100%)"}),T("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),T("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),x("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[T("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),T("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),D("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[T("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),ja=W({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){Dt("-base-slot-machine",Na,G(e,"clsPrefix"));const t=S(),a=S(),o=k(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const n=[];let r=e.value;for(e.max!==void 0&&(r=Math.min(e.max,r));r>=1;)n.push(r%10),r/=10,r=Math.floor(r);return n.reverse(),n});return Q(G(e,"value"),(n,r)=>{typeof n=="string"?(a.value=void 0,t.value=void 0):typeof r=="string"?(a.value=n,t.value=void 0):(a.value=n,t.value=r)}),()=>{const{value:n,clsPrefix:r}=e;return typeof n=="number"?c("span",{class:`${r}-base-slot-machine`},c(Ge,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>o.value.map((d,s)=>c(De,{clsPrefix:r,key:o.value.length-s-1,oldOriginalNumber:t.value,newOriginalNumber:a.value,value:d}))}),c(Ot,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<n?c(De,{clsPrefix:r,value:"+"}):null})):c("span",{class:`${r}-base-slot-machine`},n)}}}),Ia=!1,Da=e=>{const{borderRadius:t,avatarColor:a,cardColor:o,fontSize:n,heightTiny:r,heightSmall:d,heightMedium:s,heightLarge:h,heightHuge:f,modalColor:u,popoverColor:b}=e;return{borderRadius:t,fontSize:n,border:`2px solid ${o}`,heightTiny:r,heightSmall:d,heightMedium:s,heightLarge:h,heightHuge:f,color:me(o,a),colorModal:me(u,a),colorPopover:me(b,a)}},Oa={name:"Avatar",common:Ce,self:Da},Ma=Oa,Ha=Ye("n-avatar-group"),Va=x("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[Mt(C("&","--n-merged-color: var(--n-color-modal);")),Ht(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),D("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),x("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),D("text","line-height: 1.25")]),Ga=Object.assign(Object.assign({},ee.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String}),Ya=W({name:"Avatar",props:Ga,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:a}=_e(e),o=S(!1);let n=null;const r=S(null),d=S(null),s=()=>{const{value:m}=r;if(m&&(n===null||n!==m.innerHTML)){n=m.innerHTML;const{value:B}=d;if(B){const{offsetWidth:I,offsetHeight:_}=B,{offsetWidth:L,offsetHeight:N}=m,j=.9,U=Math.min(I/L*j,_/N*j,1);m.style.transform=`translateX(-50%) translateY(-50%) scale(${U})`}}},h=le(Ha,null),f=k(()=>{const{size:m}=e;if(m)return m;const{size:B}=h||{};return B||"medium"}),u=ee("Avatar","-avatar",Va,Ma,e,t),b=le($a,null),v=k(()=>{if(h)return!0;const{round:m,circle:B}=e;return m!==void 0||B!==void 0?m||B:b?b.roundRef.value:!1}),p=k(()=>h?!0:e.bordered||!1),z=m=>{if(!E.value)return;o.value=!0;const{onError:B}=e;B&&B(m)};Q(()=>e.src,()=>o.value=!1);const R=k(()=>{const m=f.value,B=v.value,I=p.value,{color:_}=e,{self:{borderRadius:L,fontSize:N,color:j,border:U,colorModal:H,colorPopover:ue},common:{cubicBezierEaseInOut:fe}}=u.value;let te;return typeof m=="number"?te=`${m}px`:te=u.value.self[V("height",m)],{"--n-font-size":N,"--n-border":I?U:"none","--n-border-radius":B?"50%":L,"--n-color":_||j,"--n-color-modal":_||H,"--n-color-popover":_||ue,"--n-bezier":fe,"--n-merged-size":`var(--n-avatar-size-override, ${te})`}}),g=a?we("avatar",k(()=>{const m=f.value,B=v.value,I=p.value,{color:_}=e;let L="";return m&&(typeof m=="number"?L+=`a${m}`:L+=m[0]),B&&(L+="b"),I&&(L+="c"),_&&(L+=et(_)),L}),R,e):void 0,E=S(!e.lazy);Se(()=>{if(Ia)return;let m;const B=Ue(()=>{m==null||m(),m=void 0,e.lazy&&(m=xa(d.value,e.intersectionObserverOptions,E))});Vt(()=>{B(),m==null||m()})});const F=S(!e.lazy);return{textRef:r,selfRef:d,mergedRoundRef:v,mergedClsPrefix:t,fitTextTransform:s,cssVars:a?void 0:R,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,hasLoadError:o,handleError:z,shouldStartLoading:E,loaded:F,mergedOnLoad:m=>{const{onLoad:B}=e;B==null||B(m),F.value=!0}}},render(){var e,t;const{$slots:a,src:o,mergedClsPrefix:n,lazy:r,onRender:d,mergedOnLoad:s,shouldStartLoading:h,loaded:f,hasLoadError:u}=this;d==null||d();let b;const v=!f&&!u&&((t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e));return this.hasLoadError?b=c("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):b=ye(a.default,p=>{if(p)return c(xe,{onResize:this.fitTextTransform},{default:()=>c("span",{ref:"textRef",class:`${n}-avatar__text`},p)});if(o)return c("img",{loading:"eager",src:h||f?o:void 0,onLoad:s,"data-image-src":o,onError:this.handleError,style:[{objectFit:this.objectFit},v?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),c("span",{ref:"selfRef",class:[`${n}-avatar`,this.themeClass],style:this.cssVars},b,r&&v)}}),Ua=e=>{const{errorColor:t,infoColor:a,successColor:o,warningColor:n,fontFamily:r}=e;return{color:t,colorInfo:a,colorSuccess:o,colorError:t,colorWarning:n,fontSize:"12px",fontFamily:r}},Xa={name:"Badge",common:Ce,self:Ua},qa=Xa,Ka=C([C("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),x("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[T("as-is",[x("badge-sup",{position:"static",transform:"translateX(0)"},[je({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),T("dot",[x("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[C("::before","border-radius: 4px;")])]),x("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[je({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),x("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),C("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Ja=Object.assign(Object.assign({},ee.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String}),Za=W({name:"Badge",props:Ja,setup(e,{slots:t}){const{mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedRtlRef:n}=_e(e),r=ee("Badge","-badge",Ka,qa,e,a),d=S(!1),s=()=>{d.value=!0},h=()=>{d.value=!1},f=k(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)||!Sa(t.value)));Se(()=>{f.value&&(d.value=!0)});const u=Gt("Badge",n,a),b=k(()=>{const{type:p,color:z}=e,{common:{cubicBezierEaseInOut:R,cubicBezierEaseOut:g},self:{[V("color",p)]:E,fontFamily:F,fontSize:m}}=r.value;return{"--n-font-size":m,"--n-font-family":F,"--n-color":z||E,"--n-ripple-color":z||E,"--n-bezier":R,"--n-ripple-bezier":g}}),v=o?we("badge",k(()=>{let p="";const{type:z,color:R}=e;return z&&(p+=z[0]),R&&(p+=et(R)),p}),b,e):void 0;return{rtlEnabled:u,mergedClsPrefix:a,appeared:d,showBadge:f,handleAfterEnter:s,handleAfterLeave:h,cssVars:o?void 0:b,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var e;const{mergedClsPrefix:t,onRender:a,themeClass:o,$slots:n}=this;a==null||a();const r=(e=n.default)===null||e===void 0?void 0:e.call(n);return c("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,o,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!r}],style:this.cssVars},r,c(Yt,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?c("sup",{class:`${t}-badge-sup`,title:Ra(this.value)},za(n.value,()=>[this.dot?null:c(ja,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?c(ma,{clsPrefix:t}):null):null}))}}),Qa={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabPaddingSmallCard:"6px 10px",tabPaddingMediumCard:"8px 12px",tabPaddingLargeCard:"8px 16px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},en=e=>{const{textColor2:t,primaryColor:a,textColorDisabled:o,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:d,closeColorHover:s,closeColorPressed:h,tabColor:f,baseColor:u,dividerColor:b,fontWeight:v,textColor1:p,borderRadius:z,fontSize:R,fontWeightStrong:g}=e;return Object.assign(Object.assign({},Qa),{colorSegment:f,tabFontSizeCard:R,tabTextColorLine:p,tabTextColorActiveLine:a,tabTextColorHoverLine:a,tabTextColorDisabledLine:o,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:o,tabTextColorBar:p,tabTextColorActiveBar:a,tabTextColorHoverBar:a,tabTextColorDisabledBar:o,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:a,tabTextColorDisabledCard:o,barColor:a,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:d,closeColorHover:s,closeColorPressed:h,closeBorderRadius:z,tabColor:f,tabColorSegment:u,tabBorderColor:b,tabFontWeightActive:v,tabFontWeight:v,tabBorderRadius:z,paneTextColor:t,fontWeightStrong:g})},tn={name:"Tabs",common:Ce,self:en},an=tn,Te=Ye("n-tabs"),tt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};W({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:tt,setup(e){const t=le(Te,null);return t||Ut("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const nn=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Jt(tt,["displayDirective"])),ce=W({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:nn,setup(e){const{mergedClsPrefixRef:t,valueRef:a,typeRef:o,closableRef:n,tabStyleRef:r,tabChangeIdRef:d,onBeforeLeaveRef:s,triggerRef:h,handleAdd:f,activateTab:u,handleClose:b}=le(Te);return{trigger:h,mergedClosable:k(()=>{if(e.internalAddable)return!1;const{closable:v}=e;return v===void 0?n.value:v}),style:r,clsPrefix:t,value:a,type:o,handleClose(v){v.stopPropagation(),!e.disabled&&b(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}const{name:v}=e,p=++d.id;if(v!==a.value){const{value:z}=s;z?Promise.resolve(z(e.name,a.value)).then(R=>{R&&d.id===p&&u(v)}):u(v)}}}},render(){const{internalAddable:e,clsPrefix:t,name:a,disabled:o,label:n,tab:r,value:d,mergedClosable:s,style:h,trigger:f,$slots:{default:u}}=this,b=n!=null?n:r;return c("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${t}-tabs-tab-pad`}):null,c("div",Object.assign({key:a,"data-name":a,"data-disabled":o?!0:void 0},Xe({class:[`${t}-tabs-tab`,d===a&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,s&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:f==="click"?this.activateTab:void 0,onMouseenter:f==="hover"?this.activateTab:void 0,style:e?void 0:h},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${t}-tabs-tab__label`},e?c(qe,null,c("div",{class:`${t}-tabs-tab__height-placeholder`},"\xA0"),c(Xt,{clsPrefix:t},{default:()=>c(ca,null)})):u?u():typeof b=="object"?b:qt(b!=null?b:a)),s&&this.type==="card"?c(Kt,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),rn=x("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[T("segment-type",[x("tabs-rail",[C("&.transition-disabled","color: red;",[x("tabs-tab",`
 transition: none;
 `)])])]),x("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[x("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[T("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),T("flex",[x("tabs-nav",{width:"100%"},[x("tabs-wrapper",{width:"100%"},[x("tabs-tab",{marginRight:0})])])]),x("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[D("prefix, suffix",`
 display: flex;
 align-items: center;
 `),D("prefix","padding-right: 16px;"),D("suffix","padding-left: 16px;")]),x("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[T("shadow-before",[C("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),T("shadow-after",[C("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),C("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),C("&::before",`
 left: 0;
 `),C("&::after",`
 right: 0;
 `)]),x("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),x("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),x("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),x("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[T("disabled",{cursor:"not-allowed"}),D("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),D("label",`
 display: flex;
 align-items: center;
 `)]),x("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[C("&.transition-disabled",`
 transition: none;
 `),T("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),x("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),x("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[C("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),C("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),C("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),C("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),C("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),x("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),T("line-type, bar-type",[x("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[C("&:hover",{color:"var(--n-tab-text-color-hover)"}),T("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),T("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),x("tabs-nav",[T("line-type",[D("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),T("card-type",[D("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[T("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[D("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Zt("disabled",[C("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),T("closable","padding-right: 6px;"),T("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),T("disabled","color: var(--n-tab-text-color-disabled);")]),x("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),on=Object.assign(Object.assign({},ee.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),sn=W({name:"Tabs",props:on,setup(e,{slots:t}){var a,o,n,r;const{mergedClsPrefixRef:d,inlineThemeDisabled:s}=_e(e),h=ee("Tabs","-tabs",rn,an,e,d),f=S(null),u=S(null),b=S(null),v=S(null),p=S(null),z=S(!0),R=S(!0),g=Ie(e,["labelSize","size"]),E=Ie(e,["activeName","value"]),F=S((o=(a=E.value)!==null&&a!==void 0?a:e.defaultValue)!==null&&o!==void 0?o:t.default?(r=(n=ve(t.default())[0])===null||n===void 0?void 0:n.props)===null||r===void 0?void 0:r.name:null),m=va(E,F),B={id:0},I=k(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Q(m,()=>{B.id=0,N()});function _(){var i;const{value:l}=m;return l===null?null:(i=f.value)===null||i===void 0?void 0:i.querySelector(`[data-name="${l}"]`)}function L(i){if(e.type==="card")return;const{value:l}=u;if(!!l&&i){const w=`${d.value}-tabs-bar--disabled`,{barWidth:$}=e;if(i.dataset.disabled==="true"?l.classList.add(w):l.classList.remove(w),typeof $=="number"&&i.offsetWidth>=$){const K=Math.floor((i.offsetWidth-$)/2)+i.offsetLeft;l.style.left=`${K}px`,l.style.maxWidth=`${$}px`}else l.style.left=`${i.offsetLeft}px`,l.style.maxWidth=`${i.offsetWidth}px`;l.style.width="8192px",l.offsetWidth}}function N(){if(e.type==="card")return;const i=_();i&&L(i)}const j=S(null);let U=0,H=null;function ue(i){const l=j.value;if(l){U=i.getBoundingClientRect().height;const w=`${U}px`,$=()=>{l.style.height=w,l.style.maxHeight=w};H?($(),H(),H=null):H=$}}function fe(i){const l=j.value;if(l){const w=i.getBoundingClientRect().height,$=()=>{document.body.offsetHeight,l.style.maxHeight=`${w}px`,l.style.height=`${Math.max(U,w)}px`};H?(H(),H=null,$()):H=$}}function te(){const i=j.value;i&&(i.style.maxHeight="",i.style.height="")}const Ee={value:[]},Pe=S("next");function at(i){const l=m.value;let w="next";for(const $ of Ee.value){if($===l)break;if($===i){w="prev";break}}Pe.value=w,nt(i)}function nt(i){const{onActiveNameChange:l,onUpdateValue:w,"onUpdate:value":$}=e;l&&se(l,i),w&&se(w,i),$&&se($,i),F.value=i}function rt(i){const{onClose:l}=e;l&&se(l,i)}function Fe(){const{value:i}=u;if(!i)return;const l="transition-disabled";i.classList.add(l),N(),i.classList.remove(l)}let Le=0;function ot(i){var l;if(i.contentRect.width===0&&i.contentRect.height===0||Le===i.contentRect.width)return;Le=i.contentRect.width;const{type:w}=e;(w==="line"||w==="bar")&&Fe(),w!=="segment"&&be((l=p.value)===null||l===void 0?void 0:l.$el)}const it=he(ot,64);Q([()=>e.justifyContent,()=>e.size],()=>{ne(()=>{const{type:i}=e;(i==="line"||i==="bar")&&Fe()})});const re=S(!1);function st(i){var l;const{target:w,contentRect:{width:$}}=i,K=w.parentElement.offsetWidth;if(!re.value)K<$&&(re.value=!0);else{const{value:oe}=v;if(!oe)return;K-$>oe.$el.offsetWidth&&(re.value=!1)}be((l=p.value)===null||l===void 0?void 0:l.$el)}const lt=he(st,64);function dt(){const{onAdd:i}=e;i&&i(),ne(()=>{const l=_(),{value:w}=p;!l||!w||w.scrollTo({left:l.offsetLeft,top:0,behavior:"smooth"})})}function be(i){if(!i)return;const{scrollLeft:l,scrollWidth:w,offsetWidth:$}=i;z.value=l<=0,R.value=l+$>=w}const ct=he(i=>{be(i.target)},64);Qt(Te,{triggerRef:G(e,"trigger"),tabStyleRef:G(e,"tabStyle"),paneClassRef:G(e,"paneClass"),paneStyleRef:G(e,"paneStyle"),mergedClsPrefixRef:d,typeRef:G(e,"type"),closableRef:G(e,"closable"),valueRef:m,tabChangeIdRef:B,onBeforeLeaveRef:G(e,"onBeforeLeave"),activateTab:at,handleClose:rt,handleAdd:dt}),ya(()=>{N()}),Ue(()=>{const{value:i}=b;if(!i)return;const{value:l}=d,w=`${l}-tabs-nav-scroll-wrapper--shadow-before`,$=`${l}-tabs-nav-scroll-wrapper--shadow-after`;z.value?i.classList.remove(w):i.classList.add(w),R.value?i.classList.remove($):i.classList.add($)});const Ae=S(null);Q(m,()=>{if(e.type==="segment"){const i=Ae.value;i&&ne(()=>{i.classList.add("transition-disabled"),i.offsetWidth,i.classList.remove("transition-disabled")})}});const ut={syncBarPosition:()=>{N()}},ke=k(()=>{const{value:i}=g,{type:l}=e,w={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[l],$=`${i}${w}`,{self:{barColor:K,closeIconColor:oe,closeIconColorHover:ft,closeIconColorPressed:bt,tabColor:mt,tabBorderColor:vt,paneTextColor:pt,tabFontWeight:ht,tabBorderRadius:gt,tabFontWeightActive:xt,colorSegment:yt,fontWeightStrong:Ct,tabColorSegment:_t,closeSize:wt,closeIconSize:St,closeColorHover:zt,closeColorPressed:Rt,closeBorderRadius:$t,[V("panePadding",i)]:Bt,[V("tabPadding",$)]:Tt,[V("tabGap",$)]:Et,[V("tabTextColor",l)]:Pt,[V("tabTextColorActive",l)]:Ft,[V("tabTextColorHover",l)]:Lt,[V("tabTextColorDisabled",l)]:At,[V("tabFontSize",i)]:kt},common:{cubicBezierEaseInOut:Wt}}=h.value;return{"--n-bezier":Wt,"--n-color-segment":yt,"--n-bar-color":K,"--n-tab-font-size":kt,"--n-tab-text-color":Pt,"--n-tab-text-color-active":Ft,"--n-tab-text-color-disabled":At,"--n-tab-text-color-hover":Lt,"--n-pane-text-color":pt,"--n-tab-border-color":vt,"--n-tab-border-radius":gt,"--n-close-size":wt,"--n-close-icon-size":St,"--n-close-color-hover":zt,"--n-close-color-pressed":Rt,"--n-close-border-radius":$t,"--n-close-icon-color":oe,"--n-close-icon-color-hover":ft,"--n-close-icon-color-pressed":bt,"--n-tab-color":mt,"--n-tab-font-weight":ht,"--n-tab-font-weight-active":xt,"--n-tab-padding":Tt,"--n-tab-gap":Et,"--n-pane-padding":Bt,"--n-font-weight-strong":Ct,"--n-tab-color-segment":_t}}),q=s?we("tabs",k(()=>`${g.value[0]}${e.type[0]}`),ke,e):void 0;return Object.assign({mergedClsPrefix:d,mergedValue:m,renderedNames:new Set,tabsRailElRef:Ae,tabsPaneWrapperRef:j,tabsElRef:f,barElRef:u,addTabInstRef:v,xScrollInstRef:p,scrollWrapperElRef:b,addTabFixed:re,tabWrapperStyle:I,handleNavResize:it,mergedSize:g,handleScroll:ct,handleTabsResize:lt,cssVars:s?void 0:ke,themeClass:q==null?void 0:q.themeClass,animationDirection:Pe,renderNameListRef:Ee,onAnimationBeforeLeave:ue,onAnimationEnter:fe,onAnimationAfterEnter:te,onRender:q==null?void 0:q.onRender},ut)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:a,addable:o,mergedSize:n,renderNameListRef:r,onRender:d,$slots:{default:s,prefix:h,suffix:f}}=this;d==null||d();const u=s?ve(s()).filter(g=>g.type.__TAB_PANE__===!0):[],b=s?ve(s()).filter(g=>g.type.__TAB__===!0):[],v=!b.length,p=t==="card",z=t==="segment",R=!p&&!z&&this.justifyContent;return r.value=[],c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${n}-size`,R&&`${e}-tabs--flex`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},ye(h,g=>g&&c("div",{class:`${e}-tabs-nav__prefix`},g)),z?c("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},v?u.map((g,E)=>(r.value.push(g.props.name),c(ce,Object.assign({},g.props,{internalCreatedByPane:!0,internalLeftPadded:E!==0}),g.children?{default:g.children.tab}:void 0))):b.map((g,E)=>(r.value.push(g.props.name),E===0?g:He(g)))):c(xe,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},c(Ta,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const g=c("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},R?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),v?u.map((F,m)=>(r.value.push(F.props.name),ge(c(ce,Object.assign({},F.props,{internalCreatedByPane:!0,internalLeftPadded:m!==0&&(!R||R==="center"||R==="start"||R==="end")}),F.children?{default:F.children.tab}:void 0)))):b.map((F,m)=>(r.value.push(F.props.name),ge(m!==0&&!R?He(F):F))),!a&&o&&p?Me(o,(v?u.length:b.length)!==0):null,R?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let E=g;return p&&o&&(E=c(xe,{onResize:this.handleTabsResize},{default:()=>g})),c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},E,p?c("div",{class:`${e}-tabs-pad`}):null,p?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),a&&o&&p?Me(o,!0):null,ye(f,g=>g&&c("div",{class:`${e}-tabs-nav__suffix`},g))),v&&(this.animated?c("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},Oe(u,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Oe(u,this.mergedValue,this.renderedNames)))}});function Oe(e,t,a,o,n,r,d){const s=[];return e.forEach(h=>{const{name:f,displayDirective:u,"display-directive":b}=h.props,v=z=>u===z||b===z,p=t===f;if(h.key!==void 0&&(h.key=f),p||v("show")||v("show:lazy")&&a.has(f)){a.has(f)||a.add(f);const z=!v("if");s.push(z?ea(h,[[ta,p]]):h)}}),d?c(Ge,{name:`${d}-transition`,onBeforeLeave:o,onEnter:n,onAfterEnter:r},{default:()=>s}):s}function Me(e,t){return c(ce,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function He(e){const t=aa(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ge(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const ln={class:"attention-group flex text-sm"},dn=M(" \u4E0A\u4F20\u987B\u77E5 "),cn=W({__name:"index",setup(e){const t=S("\u300C\u4E0A\u4F20\u987B\u77E5\u300D\uFF1A\u7531\u4E8E\u7ECF\u8D39\u6709\u9650\uFF0C\u5355\u6587\u4EF6\u4E0A\u4F20\u9650\u523610Mb\u4EE5\u5185\uFF0C\u9ED8\u8BA4\u603B\u5BB9\u91CF200Mb\u3002\u8BF7\u6CE8\u610F\u9075\u5B88\u4E92\u8054\u7F51\u51B2\u6D6A\u89C4\u8303\uFF0C\u675C\u7EDD\u4E0A\u4F20\u8FDD\u89C4\u6587\u4EF6\u7B49\u5185\u5BB9\uFF0C\u902E\u5230\u4E86\u4F60\u8DD1\u5F97\u8131\uFF0C\u9A6C\u8111\u9614\u{1F620}\uFF0C\u87F9\u87F9\u60A8\u7684\u652F\u6301\u3002");return(a,o)=>(O(),X("div",ln,[P(y(Z),{class:"mx-1",tertiary:"",type:"primary",size:"small",onClick:o[0]||(o[0]=n=>y(Qe)(t.value,{closable:!0,duration:1e4,keepAliveOnHover:!0}))},{default:A(()=>[dn]),_:1})]))}}),un=M(" \u7F16\u8F91 "),fn=M(" \u4FEE\u6539\u4E2A\u4EBA\u8D44\u6599"),bn=M(" \u6682\u4E0D\u652F\u6301 "),mn=W({__name:"edit-user",props:{data:{type:Object,required:!0}},setup(e){const t=e,a=S(!1),o=()=>{a.value=!0};return Ke(t),(n,r)=>{const d=Je("Vue3Lottie");return O(),de(ha,{show:a.value,"onUpdate:show":r[0]||(r[0]=s=>a.value=s),width:"40%"},{trigger:A(()=>[P(y(Z),{class:"mr-1",tertiary:"",type:"primary",size:"small",onClick:o},{default:A(()=>[un]),_:1})]),header:A(()=>[fn]),default:A(()=>[bn,P(d,{class:"w-1/2","animation-data":y(ua)},null,8,["animation-data"])]),_:1},8,["show"])}}}),vn={id:"user-info",class:"user-info"},pn={class:"user"},hn={class:"text-primary"},gn={class:"flex items-center mb-2"},xn={class:"text-xs"},yn={key:0,class:"text-xs"},Cn={class:"flex"},_n=M(" \u6362\u4E2A\u5934\u50CF "),wn=ia('<div class="action"><p class="hover:text-primary transition-color duration-200 cursor-pointer">\u{1F47B} \u6211\u7684\u5206\u4EAB</p><p class="hover:text-primary transition-color duration-200 cursor-pointer">\u{1F60D} \u6211\u7684\u4E0B\u8F7D</p><p class="hover:text-primary transition-color duration-200 cursor-pointer">\u{1F3AF} \u6211\u7684\u6536\u85CF</p><p class="hover:text-primary transition-color duration-200 cursor-pointer">\u{1F92E} \u56DE\u6536\u7AD9</p></div>',1),Sn={class:"flex justify-between"},zn=M(" \u4F7F\u7528\u624B\u518C "),Rn={class:"sign-action"},$n=M(" \u6CE8\u9500 "),Bn=M(" \u767B\u9646 "),Tn=W({__name:"index",setup(e){const t=na(()=>ra(()=>import("./index.b42cc648.js"),["index.b42cc648.js","index.af57445c.js","index.04c61e6b.js","color-to-class.0332f98b.js","index.71bf65ec.js","Scrollbar.0a2e91cc.js","use-is-composing.892e6671.js","index.20db2190.js","Divider.f2d22453.js"],import.meta.url)),a=ze(),o=$e(),{auth:n,sign_status:r,online_status:d}=Re(o),{onLogout:s,onChangeAvatar:h,onUpdateUserInfo:f}=Be(),u=()=>{s(),a.push("/sign")},b=async()=>{const v=da();h(v),await f({avatar:v})};return(v,p)=>{var z,R,g,E;return O(),X("div",vn,[Y("div",pn,[Y("h3",null,[M(ae(y(pa)())+", ",1),Y("span",hn,ae(((z=y(n))==null?void 0:z.name)||"\u6E38\u5BA2"),1)]),Y("div",gn,[Y("div",xn,ae(((R=y(n))==null?void 0:R.email)||"\u6CE8\u518C\u5373\u8D601G\u5BB9\u91CF\uFF5E"),1),(g=y(n))!=null&&g.registration_days?(O(),X("div",yn,[P(y(ie),{vertical:""}),M("\u5DF2\u52A0\u5165"+ae((E=y(n))==null?void 0:E.registration_days)+"\u5929 ",1)])):oa("",!0)]),Y("div",Cn,[P(mn,{data:y(n)},null,8,["data"]),P(y(Z),{tertiary:"",type:"primary",size:"small",onClick:b},{default:A(()=>[_n]),_:1})])]),P(y(ie)),wn,P(y(ie)),Y("div",Sn,[P(y(Z),{tertiary:"",type:"primary",size:"small",onClick:p[0]||(p[0]=F=>y(Qe)("\u5F00\u53D1\u4E2D\uFF5E"))},{default:A(()=>[zn]),_:1}),P(cn),P(y(t))]),P(y(ie)),Y("div",Rn,[y(r)&&y(d)?(O(),de(y(Z),{key:0,type:"default",size:"small",onClick:u},{default:A(()=>[$n]),_:1})):(O(),de(y(Z),{key:1,type:"default",size:"small",onClick:p[1]||(p[1]=F=>y(a).push("/sign"))},{default:A(()=>[Bn]),_:1}))])])}}}),En={class:"avatar"},Pn=W({__name:"index",props:{src:null,size:{default:"medium"},color:{default:"whitesmoke"},lazy:{type:Boolean,default:!1},fallbackSrc:null,bordered:{type:Boolean,default:!0},objectFit:{default:"cover"},round:{type:Boolean,default:!1},animate:{default:""},showStatus:{type:Boolean,default:!1}},setup(e){const t=e;ze();const a=$e(),{auth:o,sign_status:n,online_status:r}=Re(a);Be();const d=S(Ze),s=k(()=>(n==null?void 0:n.value)&&(r==null?void 0:r.value)?"success":"warning");return Ke(t),(h,f)=>(O(),X("div",En,[P(y(Ca),Xe({trigger:"click"},h.$attrs,{"show-arrow":!1}),{trigger:A(()=>[P(y(Za),{show:e.showStatus,dot:"",type:y(s)},{default:A(()=>[P(y(Ya),{class:"animate__animated animate__fadeIn faster",src:e.src,size:e.size,"fallback-src":d.value,lazy:e.lazy,bordered:e.bordered,"object-fit":e.objectFit,color:e.color,round:e.round,style:{borderRadius:"5px"}},null,8,["src","size","fallback-src","lazy","bordered","object-fit","color","round"])]),_:1},8,["show","type"])]),header:A(()=>[]),default:A(()=>[P(Tn,{class:"user w-60"})]),_:1},16)]))}}),Fn=""+new URL("gcloud.4e03fe21.png",import.meta.url).href;const Ln={class:"layout-header shadow"},An=W({__name:"header",setup(e){const t=ze(),a=$e(),o=k(()=>{var s;return(s=t.currentRoute.value.name)!=null?s:"home"}),n=S([{name:"home",label:"\u4E3B\u9875",path:"/home"},{name:"share",label:"\u5206\u4EAB",path:"/share"},{name:"community",label:"\u793E\u533A",path:"/community"},{name:"library",label:"\u56FE\u4E66\u9986",path:"/library"}]),r=S(Fn),{auth:d}=Re(a);return(s,h)=>(O(),X("div",Ln,[P(y(sn),{class:"header-tabs px-4 py-2",value:y(o),type:"line",size:"medium","bar-width":0},{prefix:A(()=>[P(y(_a),{class:"animate__animated animate__fadeIn faster",width:"100","preview-disabled":"",src:r.value,onClick:h[0]||(h[0]=f=>y(t).push("/home"))},null,8,["src"])]),suffix:A(()=>{var f;return[P(Pn,{src:((f=y(d))==null?void 0:f.avatar)||y(Ze),size:"large",bordered:"","object-fit":"contain","show-status":!0},null,8,["src"])]}),default:A(()=>[(O(!0),X(qe,null,sa(n.value,f=>(O(),de(y(ce),{key:f.name,class:"cursor-pointer",name:f.name,onClick:u=>y(t).push(f.path)},{default:A(()=>[M(ae(f.label),1)]),_:2},1032,["name","onClick"]))),128))]),_:1},8,["value"])]))}}),kn=W({__name:"footer",setup(e){return(t,a)=>null}}),Wn={class:"layout"},Jn=W({__name:"index",setup(e){const{onGetFileList:t}=fa(),{onGetUserDetailAndCheckAuth:a}=Be();return la(o=>{o.path!=="/sign"&&a()}),Se(async()=>{a(),await t()}),(o,n)=>{const r=Je("router-view");return O(),X("div",Wn,[P(An),P(y(wa),{style:{"max-height":"calc(100vh - 60px)"}},{default:A(()=>[P(r),P(kn)]),_:1})])}}});export{Jn as default};
