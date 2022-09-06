import{h as W,i as pe,j as we,p as ye,m as ze,F as Se,z as $e,L as Ce}from"./Scrollbar.0b118b5e.js";import{aK as xe,l as Be,d as I,r as k,v as q,c as z,s as G,D as ke,B as Ee,w as Re,C as Te,O as P,P as N,Q as X,h as s,E as Q,G as J,b as n,e as _,f as b,g as w,j as B,aj as Fe,x as Z,t as Y,z as Oe,F as Me,K as Pe,S as Ie,U as _e,aL as L,V as U,W as M,X as A,Y as De}from"./index.090d1b34.js";import{v as je,s as ee,q as He,u as V,p as K,a as Le}from"./index.5e4b8f88.js";import{u as Ue,a as Ae}from"./use-is-composing.fc961806.js";import{e as Ne}from"./index.20db2190.js";import{b as C}from"./color-to-class.6a5641e4.js";const We=e=>{const{modalColor:t,textColor1:r,textColor2:u,boxShadow3:d,lineHeight:m,fontWeightStrong:l,dividerColor:h,closeColorHover:f,closeColorPressed:v,closeIconColor:c,closeIconColorHover:E,closeIconColorPressed:R,borderRadius:T,primaryColorHover:F}=e;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:u,titleTextColor:r,titleFontSize:"18px",titleFontWeight:l,boxShadow:d,lineHeight:m,headerBorderBottom:`1px solid ${h}`,footerBorderTop:`1px solid ${h}`,closeIconColor:c,closeIconColorHover:E,closeIconColorPressed:R,closeSize:"22px",closeIconSize:"18px",closeColorHover:f,closeColorPressed:v,closeBorderRadius:T,resizableTriggerColorHover:F}},Xe=xe({name:"Drawer",common:Be,peers:{Scrollbar:je},self:We}),Ye=Xe,Ve=I({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=k(!!e.show),r=k(null),u=q(W);let d=0,m="",l=null;const h=k(!1),f=k(!1),v=z(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:c,mergedRtlRef:E}=G(e),R=ke("Drawer",E,c),T=o=>{f.value=!0,d=v.value?o.clientY:o.clientX,m=document.body.style.cursor,document.body.style.cursor=v.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",x),document.body.addEventListener("mouseleave",p),document.body.addEventListener("mouseup",y)},F=()=>{l!==null&&(window.clearTimeout(l),l=null),f.value?h.value=!0:l=window.setTimeout(()=>{h.value=!0},300)},D=()=>{l!==null&&(window.clearTimeout(l),l=null),h.value=!1},{doUpdateHeight:j,doUpdateWidth:H}=u,x=o=>{var g,O;if(f.value)if(v.value){let S=((g=r.value)===null||g===void 0?void 0:g.offsetHeight)||0;const $=d-o.clientY;S+=e.placement==="bottom"?$:-$,j(S),d=o.clientY}else{let S=((O=r.value)===null||O===void 0?void 0:O.offsetWidth)||0;const $=d-o.clientX;S+=e.placement==="right"?$:-$,H(S),d=o.clientX}},y=()=>{f.value&&(d=0,f.value=!1,document.body.style.cursor=m,document.body.removeEventListener("mousemove",x),document.body.removeEventListener("mouseup",y),document.body.removeEventListener("mouseleave",p))},p=y;Ee(()=>{e.show&&(t.value=!0)}),Re(()=>e.show,o=>{o||y()}),Te(()=>{y()});const i=z(()=>{const{show:o}=e,g=[[X,o]];return e.showMask||g.push([pe,e.onClickoutside,void 0,{capture:!0}]),g});function a(){var o;t.value=!1,(o=e.onAfterLeave)===null||o===void 0||o.call(e)}return Ue(z(()=>e.blockScroll&&t.value)),P(we,r),P(ye,null),P(ze,null),{bodyRef:r,rtlEnabled:R,mergedClsPrefix:u.mergedClsPrefixRef,isMounted:u.isMountedRef,mergedTheme:u.mergedThemeRef,displayed:t,transitionName:z(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:a,bodyDirectives:i,handleMousedownResizeTrigger:T,handleMouseenterResizeTrigger:F,handleMouseleaveResizeTrigger:D,isDragging:f,isHoverOnResizeTrigger:h}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?N(s("div",{role:"none"},s(Se,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>s(Q,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>N(s("div",J(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?s("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?s("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):s(ee,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[X,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Ke,cubicBezierEaseOut:qe}=_;function Ge({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ke}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${qe}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Qe,cubicBezierEaseOut:Je}=_;function Ze({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Qe}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Je}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:et,cubicBezierEaseOut:tt}=_;function rt({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${et}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${tt}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:ot,cubicBezierEaseOut:nt}=_;function it({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${ot}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${nt}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const st=n([b("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Ge(),Ze(),rt(),it(),w("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),w("native-scrollbar",[b("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),B("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[w("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),b("drawer-content-wrapper",`
 box-sizing: border-box;
 `),b("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[w("native-scrollbar",[b("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),b("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),b("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),b("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[B("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),w("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),w("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[B("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),w("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),w("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[B("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),n("body",[n(">",[b("drawer-container",{position:"fixed"})])]),b("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[n("> *",{pointerEvents:"all"})]),b("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[w("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),He({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),at=Object.assign(Object.assign({},Z.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),lt=I({name:"Drawer",inheritAttrs:!1,props:at,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:u}=G(e),d=Fe(),m=Z("Drawer","-drawer",st,Ye,e,t),l=k(e.defaultWidth),h=k(e.defaultHeight),f=V(Y(e,"width"),l),v=V(Y(e,"height"),h),c=z(()=>{const{placement:i}=e;return i==="top"||i==="bottom"?"":K(f.value)}),E=z(()=>{const{placement:i}=e;return i==="left"||i==="right"?"":K(v.value)}),R=i=>{const{onUpdateWidth:a,"onUpdate:width":o}=e;a&&C(a,i),o&&C(o,i),l.value=i},T=i=>{const{onUpdateHeight:a,"onUpdate:width":o}=e;a&&C(a,i),o&&C(o,i),h.value=i},F=z(()=>[{width:c.value,height:E.value},e.drawerStyle||""]);function D(i){const{onMaskClick:a,maskClosable:o}=e;o&&x(!1),a&&a(i)}const j=Ae();function H(i){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&Ne(i)&&!j.value&&x(!1)}function x(i){const{onHide:a,onUpdateShow:o,"onUpdate:show":g}=e;o&&C(o,i),g&&C(g,i),a&&!i&&C(a,i)}P(W,{isMountedRef:d,mergedThemeRef:m,mergedClsPrefixRef:t,doUpdateShow:x,doUpdateHeight:T,doUpdateWidth:R});const y=z(()=>{const{common:{cubicBezierEaseInOut:i,cubicBezierEaseIn:a,cubicBezierEaseOut:o},self:{color:g,textColor:O,boxShadow:S,lineHeight:$,headerPadding:te,footerPadding:re,bodyPadding:oe,titleFontSize:ne,titleTextColor:ie,titleFontWeight:se,headerBorderBottom:ae,footerBorderTop:le,closeIconColor:de,closeIconColorHover:ce,closeIconColorPressed:ue,closeColorHover:he,closeColorPressed:fe,closeIconSize:be,closeSize:me,closeBorderRadius:ge,resizableTriggerColorHover:ve}}=m.value;return{"--n-line-height":$,"--n-color":g,"--n-text-color":O,"--n-box-shadow":S,"--n-bezier":i,"--n-bezier-out":o,"--n-bezier-in":a,"--n-header-padding":te,"--n-body-padding":oe,"--n-footer-padding":re,"--n-title-text-color":ie,"--n-title-font-size":ne,"--n-title-font-weight":se,"--n-header-border-bottom":ae,"--n-footer-border-top":le,"--n-close-icon-color":de,"--n-close-icon-color-hover":ce,"--n-close-icon-color-pressed":ue,"--n-close-size":me,"--n-close-color-hover":he,"--n-close-color-pressed":fe,"--n-close-icon-size":be,"--n-close-border-radius":ge,"--n-resize-trigger-color-hover":ve}}),p=u?Oe("drawer",void 0,y,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:F,handleMaskClick:D,handleEsc:H,mergedTheme:m,cssVars:u?void 0:y,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender,isMounted:d}},render(){const{mergedClsPrefix:e}=this;return s(Ce,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),N(s("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?s(Q,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,s(Ve,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[$e,{zIndex:this.zIndex,enabled:this.show}]])}})}}),dt={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},ct=I({name:"DrawerContent",props:dt,setup(){const e=q(W,null);e||Me("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:u,bodyStyle:d,bodyContentStyle:m,headerStyle:l,footerStyle:h,scrollbarProps:f,closable:v,$slots:c}=this;return s("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},c.header||e||v?s("div",{class:`${t}-drawer-header`,style:l,role:"none"},s("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},c.header!==void 0?c.header():e),v&&s(Pe,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?s("div",{class:`${t}-drawer-body`,style:d,role:"none"},s("div",{class:`${t}-drawer-body-content-wrapper`,style:m,role:"none"},c)):s(ee,Object.assign({themeOverrides:u.peerOverrides.Scrollbar,theme:u.peers.Scrollbar},f,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:m}),c),c.footer?s("div",{class:`${t}-drawer-footer`,style:h,role:"none"},c.footer()):null)}}),ut=De("\u6253\u5F00"),ht=I({__name:"index",setup(e){return(t,r)=>(Ie(),_e("div",null,[L(t.$slots,"trigger",{},()=>[U(A(Le),null,{default:M(()=>[ut]),_:1})]),U(A(lt),J(t.$attrs,{resizable:""}),{default:M(()=>[U(A(ct),{closable:""},{header:M(()=>[L(t.$slots,"header")]),default:M(()=>[L(t.$slots,"default")]),_:3})]),_:3},16)]))}}),wt=Object.freeze(Object.defineProperty({__proto__:null,default:ht},Symbol.toStringTag,{value:"Module"}));export{ct as N,ht as _,lt as a,wt as i};
