import{d as A,u as sn,A as Ge,aM as dn,aN as cn,c as B,r as X,ag as me,h as a,G as un,C as yt,aI as Ce,l as fe,f as k,j,b as U,s as he,x as Q,v as ie,aQ as fn,y as le,z as pe,I as ee,aK as qe,J as xt,E as hn,g as M,M as pn,t as K,w as Ae,n as Te,O as xe,aU as gn,aZ as je,D as bt,o as Xe,P as wt,Q as Ct,N as Ze,ak as Ue,F as _e,L as _t,aS as mn,a_ as kt,a$ as St,b0 as Rt,b1 as Pt,B as vn,aT as yn,ad as xn,aR as bn,ai as wn,H as Cn,S as Y,U as ne,a7 as _n,a4 as H,a0 as re,a1 as oe,a3 as Ye,Z as kn,V as W,W as Z,X as T,a5 as ce,Y as be,b2 as Pe,$ as ae,a6 as ue,b3 as Sn,b4 as Tt,_ as Rn}from"./index.090d1b34.js";import{A as Pn,a as Je,u as zt,R as Tn}from"./robot.e45a1a5b.js";import{V as rt,x as ot,r as zn,v as Ln,s as Fn,u as Lt,y as Bn,p as ge,w as $n,a as se,z as Nn,c as On,d as it,e as In}from"./index.5e4b8f88.js";import{r as En,a as Ft,b as te}from"./color-to-class.6a5641e4.js";import{c as Dn,a as $e,k as Mn,l as Qe,f as An,n as jn,q as Un,r as Hn,s as Vn,N as Kn,t as lt,e as Wn,v as Gn,g as He}from"./Scrollbar.0b118b5e.js";import{d as Ve,p as ke,g as Ne}from"./index.a1c9fab8.js";import{k as qn,E as Xn}from"./Eye.80ba4262.js";import{N as Zn}from"./Tag.e096baa9.js";function Ke(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function Yn(e){return t=>{t?e.value=t.$el:e.value=null}}function ye(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(r=>{r&&r(n)})}}function at(e){return e&-e}class Jn{constructor(t,n){this.l=t,this.min=n;const r=new Array(t+1);for(let o=0;o<t+1;++o)r[o]=0;this.ft=r}add(t,n){if(n===0)return;const{l:r,ft:o}=this;for(t+=1;t<=r;)o[t]+=n,t+=at(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:r,l:o}=this;if(t>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let l=t*r;for(;t>0;)l+=n[t],t-=at(t);return l}getBound(t){let n=0,r=this.l;for(;r>n;){const o=Math.floor((n+r)/2),l=this.sum(o);if(l>t){r=o;continue}else if(l<t){if(n===o)return this.sum(n+1)<=t?n+1:o;n=o}else return o}return n}}let Se;function Qn(){return Se===void 0&&("matchMedia"in window?Se=window.matchMedia("(pointer:coarse)").matches:Se=!1),Se}let Oe;function st(){return Oe===void 0&&(Oe="chrome"in window?window.devicePixelRatio:1),Oe}const er=$e(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[$e("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[$e("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),tr=A({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=sn();er.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Dn,ssr:t}),Ge(()=>{const{defaultScrollIndex:p,defaultScrollKey:w}=e;p!=null?g({index:p}):w!=null&&g({key:w})});let n=!1,r=!1;dn(()=>{if(n=!1,!r){r=!0;return}g({top:f.value,left:c})}),cn(()=>{n=!0,r||(r=!0)});const o=B(()=>{const p=new Map,{keyField:w}=e;return e.items.forEach((L,O)=>{p.set(L[w],O)}),p}),l=X(null),i=X(void 0),d=new Map,s=B(()=>{const{items:p,itemSize:w,keyField:L}=e,O=new Jn(p.length,w);return p.forEach((I,E)=>{const D=I[L],V=d.get(D);V!==void 0&&O.add(E,V)}),O}),u=X(0);let c=0;const f=X(0),m=me(()=>Math.max(s.value.getBound(f.value-Ve(e.paddingTop))-1,0)),v=B(()=>{const{value:p}=i;if(p===void 0)return[];const{items:w,itemSize:L}=e,O=m.value,I=Math.min(O+Math.ceil(p/L+1),w.length-1),E=[];for(let D=O;D<=I;++D)E.push(w[D]);return E}),g=(p,w)=>{if(typeof p=="number"){P(p,w,"auto");return}const{left:L,top:O,index:I,key:E,position:D,behavior:V,debounce:x=!0}=p;if(L!==void 0||O!==void 0)P(L,O,V);else if(I!==void 0)S(I,V,x);else if(E!==void 0){const z=o.value.get(E);z!==void 0&&S(z,V,x)}else D==="bottom"?P(0,Number.MAX_SAFE_INTEGER,V):D==="top"&&P(0,0,V)};let b,_=null;function S(p,w,L){const{value:O}=s,I=O.sum(p)+Ve(e.paddingTop);if(!L)l.value.scrollTo({left:0,top:I,behavior:w});else{b=p,_!==null&&window.clearTimeout(_),_=window.setTimeout(()=>{b=void 0,_=null},16);const{scrollTop:E,offsetHeight:D}=l.value;if(I>E){const V=O.get(p);I+V<=E+D||l.value.scrollTo({left:0,top:I+V-D,behavior:w})}else l.value.scrollTo({left:0,top:I,behavior:w})}}function P(p,w,L){l.value.scrollTo({left:p,top:w,behavior:L})}function F(p,w){var L,O,I;if(n||e.ignoreItemResize||N(w.target))return;const{value:E}=s,D=o.value.get(p),V=E.get(D),x=(I=(O=(L=w.borderBoxSize)===null||L===void 0?void 0:L[0])===null||O===void 0?void 0:O.blockSize)!==null&&I!==void 0?I:w.contentRect.height;if(x===V)return;x-e.itemSize===0?d.delete(p):d.set(p,x-e.itemSize);const q=x-V;if(q===0)return;E.add(D,q);const J=l.value;if(J!=null){if(b===void 0){const de=E.sum(D);J.scrollTop>de&&J.scrollBy(0,q)}else if(D<b)J.scrollBy(0,q);else if(D===b){const de=E.sum(D);x+de>J.scrollTop+J.offsetHeight&&J.scrollBy(0,q)}C()}u.value++}const y=!Qn();let h=!1;function R(p){var w;(w=e.onScroll)===null||w===void 0||w.call(e,p),(!y||!h)&&C()}function $(p){var w;if((w=e.onWheel)===null||w===void 0||w.call(e,p),y){const L=l.value;if(L!=null){if(p.deltaX===0&&(L.scrollTop===0&&p.deltaY<=0||L.scrollTop+L.offsetHeight>=L.scrollHeight&&p.deltaY>=0))return;p.preventDefault(),L.scrollTop+=p.deltaY/st(),L.scrollLeft+=p.deltaX/st(),C(),h=!0,Mn(()=>{h=!1})}}}function G(p){if(n||N(p.target)||p.contentRect.height===i.value)return;i.value=p.contentRect.height;const{onResize:w}=e;w!==void 0&&w(p)}function C(){const{value:p}=l;p!=null&&(f.value=p.scrollTop,c=p.scrollLeft)}function N(p){let w=p;for(;w!==null;){if(w.style.display==="none")return!0;w=w.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:o,itemsStyle:B(()=>{const{itemResizable:p}=e,w=ke(s.value.sum());return u.value,[e.itemsStyle,{boxSizing:"content-box",height:p?"":w,minHeight:p?w:"",paddingTop:ke(e.paddingTop),paddingBottom:ke(e.paddingBottom)}]}),visibleItemsStyle:B(()=>(u.value,{transform:`translateY(${ke(s.value.sum(m.value))})`})),viewportItems:v,listElRef:l,itemsElRef:X(null),scrollTo:g,handleListResize:G,handleListScroll:R,handleListWheel:$,handleItemResize:F}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return a(rt,{onResize:this.handleListResize},{default:()=>{var o,l;return a("div",un(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(i=>{const d=i[t],s=n.get(d),u=this.$slots.default({item:i,index:s})[0];return e?a(rt,{key:d,onResize:c=>this.handleItemResize(d,c)},{default:()=>u}):(u.key=d,u)})})]):(l=(o=this.$slots).empty)===null||l===void 0?void 0:l.call(o)])}})}});function nr(e,t){t&&(Ge(()=>{const{value:n}=e;n&&ot.registerHandler(n,t)}),yt(()=>{const{value:n}=e;n&&ot.unregisterHandler(n)}))}const rr=Ce("attach",a("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),or=A({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ir=A({name:"ChevronLeft",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),lr=A({name:"ChevronRight",render(){return a("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ar=Ce("trash",a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),a("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),a("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),a("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),sr=Ce("download",a("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"}))))),dr=A({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),cr=Ce("cancel",a("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),ur=Ce("retry",a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),a("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),fr=A({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function dt(e){return Array.isArray(e)?e:[e]}const We={STOP:"STOP"};function Bt(e,t){const n=t(e);e.children!==void 0&&n!==We.STOP&&e.children.forEach(r=>Bt(r,t))}function hr(e,t={}){const{preserveGroup:n=!1}=t,r=[],o=n?i=>{i.isLeaf||(r.push(i.key),l(i.children))}:i=>{i.isLeaf||(i.isGroup||r.push(i.key),l(i.children))};function l(i){i.forEach(o)}return l(e),r}function pr(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function gr(e){return e.children}function mr(e){return e.key}function vr(){return!1}function yr(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function xr(e){return e.disabled===!0}function br(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Ie(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function Ee(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function wr(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)||n.add(r)}),Array.from(n)}function Cr(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)&&n.delete(r)}),Array.from(n)}function _r(e){return(e==null?void 0:e.type)==="group"}function kr(e){const t=new Map;return e.forEach((n,r)=>{t.set(n.key,r)}),n=>{var r;return(r=t.get(n))!==null&&r!==void 0?r:null}}class Sr extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Rr(e,t,n,r){return ze(t.concat(e),n,r,!1)}function Pr(e,t){const n=new Set;return e.forEach(r=>{const o=t.treeNodeMap.get(r);if(o!==void 0){let l=o.parent;for(;l!==null&&!(l.disabled||n.has(l.key));)n.add(l.key),l=l.parent}}),n}function Tr(e,t,n,r){const o=ze(t,n,r,!1),l=ze(e,n,r,!0),i=Pr(e,n),d=[];return o.forEach(s=>{(l.has(s)||i.has(s))&&d.push(s)}),d.forEach(s=>o.delete(s)),o}function De(e,t){const{checkedKeys:n,keysToCheck:r,keysToUncheck:o,indeterminateKeys:l,cascade:i,leafOnly:d,checkStrategy:s,allowNotLoaded:u}=e;if(!i)return r!==void 0?{checkedKeys:wr(n,r),indeterminateKeys:Array.from(l)}:o!==void 0?{checkedKeys:Cr(n,o),indeterminateKeys:Array.from(l)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(l)};const{levelTreeNodeMap:c}=t;let f;o!==void 0?f=Tr(o,n,t,u):r!==void 0?f=Rr(r,n,t,u):f=ze(n,t,u,!1);const m=s==="parent",v=s==="child"||d,g=f,b=new Set,_=Math.max.apply(null,Array.from(c.keys()));for(let S=_;S>=0;S-=1){const P=S===0,F=c.get(S);for(const y of F){if(y.isLeaf)continue;const{key:h,shallowLoaded:R}=y;if(v&&R&&y.children.forEach(N=>{!N.disabled&&!N.isLeaf&&N.shallowLoaded&&g.has(N.key)&&g.delete(N.key)}),y.disabled||!R)continue;let $=!0,G=!1,C=!0;for(const N of y.children){const p=N.key;if(!N.disabled){if(C&&(C=!1),g.has(p))G=!0;else if(b.has(p)){G=!0,$=!1;break}else if($=!1,G)break}}$&&!C?(m&&y.children.forEach(N=>{!N.disabled&&g.has(N.key)&&g.delete(N.key)}),g.add(h)):G&&b.add(h),P&&v&&g.has(h)&&g.delete(h)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(b)}}function ze(e,t,n,r){const{treeNodeMap:o,getChildren:l}=t,i=new Set,d=new Set(e);return e.forEach(s=>{const u=o.get(s);u!==void 0&&Bt(u,c=>{if(c.disabled)return We.STOP;const{key:f}=c;if(!i.has(f)&&(i.add(f),d.add(f),br(c.rawNode,l))){if(r)return We.STOP;if(!n)throw new Sr}})}),d}function zr(e,{includeGroup:t=!1,includeSelf:n=!0},r){var o;const l=r.treeNodeMap;let i=e==null?null:(o=l.get(e))!==null&&o!==void 0?o:null;const d={keyPath:[],treeNodePath:[],treeNode:i};if(i!=null&&i.ignored)return d.treeNode=null,d;for(;i;)!i.ignored&&(t||!i.isGroup)&&d.treeNodePath.push(i),i=i.parent;return d.treeNodePath.reverse(),n||d.treeNodePath.pop(),d.keyPath=d.treeNodePath.map(s=>s.key),d}function Lr(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Fr(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o+1)%r]:o===n.length-1?null:n[o+1]}function ct(e,t,{loop:n=!1,includeDisabled:r=!1}={}){const o=t==="prev"?Br:Fr,l={reverse:t==="prev"};let i=!1,d=null;function s(u){if(u!==null){if(u===e){if(!i)i=!0;else if(!e.disabled&&!e.isGroup){d=e;return}}else if((!u.disabled||r)&&!u.ignored&&!u.isGroup){d=u;return}if(u.isGroup){const c=et(u,l);c!==null?d=c:s(o(u,n))}else{const c=o(u,!1);if(c!==null)s(c);else{const f=$r(u);f!=null&&f.isGroup?s(o(f,n)):n&&s(o(u,!0))}}}}return s(e),d}function Br(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o-1+r)%r]:o===0?null:n[o-1]}function $r(e){return e.parent}function et(e,t={}){const{reverse:n=!1}=t,{children:r}=e;if(r){const{length:o}=r,l=n?o-1:0,i=n?-1:o,d=n?-1:1;for(let s=l;s!==i;s+=d){const u=r[s];if(!u.disabled&&!u.ignored)if(u.isGroup){const c=et(u,t);if(c!==null)return c}else return u}}return null}const Nr={getChild(){return this.ignored?null:et(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return ct(this,"next",e)},getPrev(e={}){return ct(this,"prev",e)}};function Or(e,t){const n=t?new Set(t):void 0,r=[];function o(l){l.forEach(i=>{r.push(i),!(i.isLeaf||!i.children||i.ignored)&&(i.isGroup||n===void 0||n.has(i.key))&&o(i.children)})}return o(e),r}function Ir(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function $t(e,t,n,r,o,l=null,i=0){const d=[];return e.forEach((s,u)=>{var c;const f=Object.create(r);if(f.rawNode=s,f.siblings=d,f.level=i,f.index=u,f.isFirstChild=u===0,f.isLastChild=u+1===e.length,f.parent=l,!f.ignored){const m=o(s);Array.isArray(m)&&(f.children=$t(m,t,n,r,o,f,i+1))}d.push(f),t.set(f.key,f),n.has(i)||n.set(i,[]),(c=n.get(i))===null||c===void 0||c.push(f)}),d}function Er(e,t={}){var n;const r=new Map,o=new Map,{getDisabled:l=xr,getIgnored:i=vr,getIsGroup:d=_r,getKey:s=mr}=t,u=(n=t.getChildren)!==null&&n!==void 0?n:gr,c=t.ignoreEmptyChildren?y=>{const h=u(y);return Array.isArray(h)?h.length?h:null:h}:u,f=Object.assign({get key(){return s(this.rawNode)},get disabled(){return l(this.rawNode)},get isGroup(){return d(this.rawNode)},get isLeaf(){return pr(this.rawNode,c)},get shallowLoaded(){return yr(this.rawNode,c)},get ignored(){return i(this.rawNode)},contains(y){return Ir(this,y)}},Nr),m=$t(e,r,o,f,c);function v(y){if(y==null)return null;const h=r.get(y);return h&&!h.isGroup&&!h.ignored?h:null}function g(y){if(y==null)return null;const h=r.get(y);return h&&!h.ignored?h:null}function b(y,h){const R=g(y);return R?R.getPrev(h):null}function _(y,h){const R=g(y);return R?R.getNext(h):null}function S(y){const h=g(y);return h?h.getParent():null}function P(y){const h=g(y);return h?h.getChild():null}const F={treeNodes:m,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:c,getFlattenedNodes(y){return Or(m,y)},getNode:v,getPrev:b,getNext:_,getParent:S,getChild:P,getFirstAvailableNode(){return Lr(m)},getPath(y,h={}){return zr(y,h,F)},getCheckedKeys(y,h={}){const{cascade:R=!0,leafOnly:$=!1,checkStrategy:G="all",allowNotLoaded:C=!1}=h;return De({checkedKeys:Ie(y),indeterminateKeys:Ee(y),cascade:R,leafOnly:$,checkStrategy:G,allowNotLoaded:C},F)},check(y,h,R={}){const{cascade:$=!0,leafOnly:G=!1,checkStrategy:C="all",allowNotLoaded:N=!1}=R;return De({checkedKeys:Ie(h),indeterminateKeys:Ee(h),keysToCheck:y==null?[]:dt(y),cascade:$,leafOnly:G,checkStrategy:C,allowNotLoaded:N},F)},uncheck(y,h,R={}){const{cascade:$=!0,leafOnly:G=!1,checkStrategy:C="all",allowNotLoaded:N=!1}=R;return De({checkedKeys:Ie(h),indeterminateKeys:Ee(h),keysToUncheck:y==null?[]:dt(y),cascade:$,leafOnly:G,checkStrategy:C,allowNotLoaded:N},F)},getNonLeafKeys(y={}){return hr(m,y)}};return F}const Dr={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"},Mr=e=>{const{textColorDisabled:t,iconColor:n,textColor2:r,fontSizeSmall:o,fontSizeMedium:l,fontSizeLarge:i,fontSizeHuge:d}=e;return Object.assign(Object.assign({},Dr),{fontSizeSmall:o,fontSizeMedium:l,fontSizeLarge:i,fontSizeHuge:d,textColor:t,iconColor:n,extraTextColor:r})},Ar={name:"Empty",common:fe,self:Mr},Nt=Ar,jr=k("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[j("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[U("+",[j("description",`
 margin-top: 8px;
 `)])]),j("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),j("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Ur=Object.assign(Object.assign({},Q.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Hr=A({name:"Empty",props:Ur,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=he(e),r=Q("Empty","-empty",jr,Nt,e,t),{localeRef:o}=zn("Empty"),l=ie(fn,null),i=B(()=>{var c,f,m;return(c=e.description)!==null&&c!==void 0?c:(m=(f=l==null?void 0:l.mergedComponentPropsRef.value)===null||f===void 0?void 0:f.Empty)===null||m===void 0?void 0:m.description}),d=B(()=>{var c,f;return((f=(c=l==null?void 0:l.mergedComponentPropsRef.value)===null||c===void 0?void 0:c.Empty)===null||f===void 0?void 0:f.renderIcon)||(()=>a(dr,null))}),s=B(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:f},self:{[le("iconSize",c)]:m,[le("fontSize",c)]:v,textColor:g,iconColor:b,extraTextColor:_}}=r.value;return{"--n-icon-size":m,"--n-font-size":v,"--n-bezier":f,"--n-text-color":g,"--n-icon-color":b,"--n-extra-text-color":_}}),u=n?pe("empty",B(()=>{let c="";const{size:f}=e;return c+=f[0],c}),s,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:d,localizedDescription:B(()=>i.value||o.value.description),cssVars:n?void 0:s,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),a("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${t}-empty__icon`},e.icon?e.icon():a(ee,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${t}-empty__extra`},e.extra()):null)}}),Vr={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"},Kr=e=>{const{borderRadius:t,popoverColor:n,textColor3:r,dividerColor:o,textColor2:l,primaryColorPressed:i,textColorDisabled:d,primaryColor:s,opacityDisabled:u,hoverColor:c,fontSizeSmall:f,fontSizeMedium:m,fontSizeLarge:v,fontSizeHuge:g,heightSmall:b,heightMedium:_,heightLarge:S,heightHuge:P}=e;return Object.assign(Object.assign({},Vr),{optionFontSizeSmall:f,optionFontSizeMedium:m,optionFontSizeLarge:v,optionFontSizeHuge:g,optionHeightSmall:b,optionHeightMedium:_,optionHeightLarge:S,optionHeightHuge:P,borderRadius:t,color:n,groupHeaderTextColor:r,actionDividerColor:o,optionTextColor:l,optionTextColorPressed:i,optionTextColorDisabled:d,optionTextColorActive:s,optionOpacityDisabled:u,optionCheckColor:s,optionColorPending:c,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:c,actionTextColor:l,loadingColor:s})},Wr=qe({name:"InternalSelectMenu",common:fe,peers:{Scrollbar:Ln,Empty:Nt},self:Kr}),Ot=Wr;function Gr(e,t){return a(hn,{name:"fade-in-scale-up-transition"},{default:()=>e?a(ee,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>a(or)}):null})}const ut=A({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:o,renderLabelRef:l,renderOptionRef:i,labelFieldRef:d,valueFieldRef:s,showCheckmarkRef:u,nodePropsRef:c,handleOptionClick:f,handleOptionMouseEnter:m}=ie(Qe),v=me(()=>{const{value:S}=n;return S?e.tmNode.key===S.key:!1});function g(S){const{tmNode:P}=e;P.disabled||f(S,P)}function b(S){const{tmNode:P}=e;P.disabled||m(S,P)}function _(S){const{tmNode:P}=e,{value:F}=v;P.disabled||F||m(S,P)}return{multiple:r,isGrouped:me(()=>{const{tmNode:S}=e,{parent:P}=S;return P&&P.rawNode.type==="group"}),showCheckmark:u,nodeProps:c,isPending:v,isSelected:me(()=>{const{value:S}=t,{value:P}=r;if(S===null)return!1;const F=e.tmNode.rawNode[s.value];if(P){const{value:y}=o;return y.has(F)}else return S===F}),labelField:d,renderLabel:l,renderOption:i,handleMouseMove:_,handleMouseEnter:b,handleClick:g}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:o,showCheckmark:l,nodeProps:i,renderOption:d,renderLabel:s,handleClick:u,handleMouseEnter:c,handleMouseMove:f}=this,m=Gr(n,e),v=s?[s(t,n),l&&m]:[xt(t[this.labelField],t,n),l&&m],g=i==null?void 0:i(t),b=a("div",Object.assign({},g,{class:[`${e}-base-select-option`,t.class,g==null?void 0:g.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:o,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:l}],style:[(g==null?void 0:g.style)||"",t.style||""],onClick:ye([u,g==null?void 0:g.onClick]),onMouseenter:ye([c,g==null?void 0:g.onMouseenter]),onMousemove:ye([f,g==null?void 0:g.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},v));return t.render?t.render({node:b,option:t,selected:n}):d?d({node:b,option:t,selected:n}):b}}),ft=A({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=ie(Qe);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:o}}=this,l=r==null?void 0:r(o),i=t?t(o,!1):xt(o[this.labelField],o,!1),d=a("div",Object.assign({},l,{class:[`${e}-base-select-group-header`,l==null?void 0:l.class]}),i);return o.render?o.render({node:d,option:o}):n?n({node:d,option:o,selected:!1}):d}}),qr=k("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[k("scrollbar",`
 max-height: var(--n-height);
 `),k("virtual-list",`
 max-height: var(--n-height);
 `),k("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[j("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),k("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),k("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),j("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),j("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),j("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),k("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[M("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),U("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),U("&:active",`
 color: var(--n-option-text-color-pressed);
 `),M("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),M("pending",[U("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),M("selected",`
 color: var(--n-option-text-color-active);
 `,[U("&::before",`
 background-color: var(--n-option-color-active);
 `),M("pending",[U("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),M("disabled",`
 cursor: not-allowed;
 `,[pn("selected",`
 color: var(--n-option-text-color-disabled);
 `),M("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),j("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[An({enterScale:"0.5"})])])]),Xr=A({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Q.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=Q("InternalSelectMenu","-internal-select-menu",qr,Ot,e,K(e,"clsPrefix")),n=X(null),r=X(null),o=X(null),l=B(()=>e.treeMate.getFlattenedNodes()),i=B(()=>kr(l.value)),d=X(null);function s(){const{treeMate:x}=e;let z=null;const{value:q}=e;q===null?z=x.getFirstAvailableNode():(e.multiple?z=x.getNode((q||[])[(q||[]).length-1]):z=x.getNode(q),(!z||z.disabled)&&(z=x.getFirstAvailableNode())),p(z||null)}function u(){const{value:x}=d;x&&!e.treeMate.getNode(x.key)&&(d.value=null)}let c;Ae(()=>e.show,x=>{x?c=Ae(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?s():u(),Te(w)):u()},{immediate:!0}):c==null||c()},{immediate:!0}),yt(()=>{c==null||c()});const f=B(()=>Ve(t.value.self[le("optionHeight",e.size)])),m=B(()=>Ne(t.value.self[le("padding",e.size)])),v=B(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),g=B(()=>{const x=l.value;return x&&x.length===0});function b(x){const{onToggle:z}=e;z&&z(x)}function _(x){const{onScroll:z}=e;z&&z(x)}function S(x){var z;(z=o.value)===null||z===void 0||z.sync(),_(x)}function P(){var x;(x=o.value)===null||x===void 0||x.sync()}function F(){const{value:x}=d;return x||null}function y(x,z){z.disabled||p(z,!1)}function h(x,z){z.disabled||b(z)}function R(x){var z;Ke(x,"action")||(z=e.onKeyup)===null||z===void 0||z.call(e,x)}function $(x){var z;Ke(x,"action")||(z=e.onKeydown)===null||z===void 0||z.call(e,x)}function G(x){var z;(z=e.onMousedown)===null||z===void 0||z.call(e,x),!e.focusable&&x.preventDefault()}function C(){const{value:x}=d;x&&p(x.getNext({loop:!0}),!0)}function N(){const{value:x}=d;x&&p(x.getPrev({loop:!0}),!0)}function p(x,z=!1){d.value=x,z&&w()}function w(){var x,z;const q=d.value;if(!q)return;const J=i.value(q.key);J!==null&&(e.virtualScroll?(x=r.value)===null||x===void 0||x.scrollTo({index:J}):(z=o.value)===null||z===void 0||z.scrollTo({index:J,elSize:f.value}))}function L(x){var z,q;!((z=n.value)===null||z===void 0)&&z.contains(x.target)&&((q=e.onFocus)===null||q===void 0||q.call(e,x))}function O(x){var z,q;!((z=n.value)===null||z===void 0)&&z.contains(x.relatedTarget)||(q=e.onBlur)===null||q===void 0||q.call(e,x)}xe(Qe,{handleOptionMouseEnter:y,handleOptionClick:h,valueSetRef:v,pendingTmNodeRef:d,nodePropsRef:K(e,"nodeProps"),showCheckmarkRef:K(e,"showCheckmark"),multipleRef:K(e,"multiple"),valueRef:K(e,"value"),renderLabelRef:K(e,"renderLabel"),renderOptionRef:K(e,"renderOption"),labelFieldRef:K(e,"labelField"),valueFieldRef:K(e,"valueField")}),xe(jn,n),Ge(()=>{const{value:x}=o;x&&x.sync()});const I=B(()=>{const{size:x}=e,{common:{cubicBezierEaseInOut:z},self:{height:q,borderRadius:J,color:de,groupHeaderTextColor:Fe,actionDividerColor:Wt,optionTextColorPressed:Gt,optionTextColor:qt,optionTextColorDisabled:Xt,optionTextColorActive:Zt,optionOpacityDisabled:Yt,optionCheckColor:Jt,actionTextColor:Qt,optionColorPending:en,optionColorActive:tn,loadingColor:nn,loadingSize:rn,optionColorActivePending:on,[le("optionFontSize",x)]:ln,[le("optionHeight",x)]:an,[le("optionPadding",x)]:Be}}=t.value;return{"--n-height":q,"--n-action-divider-color":Wt,"--n-action-text-color":Qt,"--n-bezier":z,"--n-border-radius":J,"--n-color":de,"--n-option-font-size":ln,"--n-group-header-text-color":Fe,"--n-option-check-color":Jt,"--n-option-color-pending":en,"--n-option-color-active":tn,"--n-option-color-active-pending":on,"--n-option-height":an,"--n-option-opacity-disabled":Yt,"--n-option-text-color":qt,"--n-option-text-color-active":Zt,"--n-option-text-color-disabled":Xt,"--n-option-text-color-pressed":Gt,"--n-option-padding":Be,"--n-option-padding-left":Ne(Be,"left"),"--n-option-padding-right":Ne(Be,"right"),"--n-loading-color":nn,"--n-loading-size":rn}}),{inlineThemeDisabled:E}=e,D=E?pe("internal-select-menu",B(()=>e.size[0]),I,e):void 0,V={selfRef:n,next:C,prev:N,getPendingTmNode:F};return nr(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:r,scrollbarRef:o,itemSize:f,padding:m,flattenedNodes:l,empty:g,virtualListContainer(){const{value:x}=r;return x==null?void 0:x.listElRef},virtualListContent(){const{value:x}=r;return x==null?void 0:x.itemsElRef},doScroll:_,handleFocusin:L,handleFocusout:O,handleKeyUp:R,handleKeyDown:$,handleMouseDown:G,handleVirtualListResize:P,handleVirtualListScroll:S,cssVars:E?void 0:I,themeClass:D==null?void 0:D.themeClass,onRender:D==null?void 0:D.onRender},V)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:o,onRender:l}=this;return l==null||l(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,o,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?a("div",{class:`${n}-base-select-menu__loading`},a(gn,{clsPrefix:n,strokeWidth:20})):this.empty?a("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},Ft(e.empty,()=>[a(Hr,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty})])):a(Fn,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?a(tr,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:i})=>i.isGroup?a(ft,{key:i.key,clsPrefix:n,tmNode:i}):i.ignored?null:a(ut,{clsPrefix:n,key:i.key,tmNode:i})}):a("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(i=>i.isGroup?a(ft,{key:i.key,clsPrefix:n,tmNode:i}):a(ut,{clsPrefix:n,key:i.key,tmNode:i})))}),En(e.action,i=>i&&[a("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},i),a(fr,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function Le(e){return e.type==="group"}function It(e){return e.type==="ignored"}function al(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Zr(e,t){return{getIsGroup:Le,getIgnored:It,getKey(r){return Le(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[t]}}}function sl(e,t,n,r){if(!t)return e;function o(l){if(!Array.isArray(l))return[];const i=[];for(const d of l)if(Le(d)){const s=o(d[r]);s.length&&i.push(Object.assign({},d,{[r]:s}))}else{if(It(d))continue;t(n,d)&&i.push(d)}return i}return o(e)}function dl(e,t,n){const r=new Map;return e.forEach(o=>{Le(o)?o[n].forEach(l=>{r.set(l[t],l)}):r.set(o[t],o)}),r}const Yr=e=>{const{fontWeight:t,textColor1:n,textColor2:r,textColorDisabled:o,dividerColor:l,fontSize:i}=e;return{titleFontSize:i,titleFontWeight:t,dividerColor:l,titleTextColor:n,titleTextColorDisabled:o,fontSize:i,textColor:r,arrowColor:r,arrowColorDisabled:o}},Jr={name:"Collapse",common:fe,self:Yr},Qr=Jr,eo=k("collapse","width: 100%;",[k("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: 16px 0 0 0;
 `,[M("disabled",[j("header","cursor: not-allowed;",[j("header-main",`
 color: var(--n-title-text-color-disabled);
 `),k("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),k("collapse-item","margin-left: 32px;"),U("&:first-child","margin-top: 0;"),U("&:first-child >",[j("header","padding-top: 0;")]),M("left-arrow-placement",[j("header",[k("collapse-item-arrow","margin-right: 4px;")])]),M("right-arrow-placement",[j("header",[k("collapse-item-arrow","margin-left: 4px;")])]),j("content-wrapper",[j("content-inner","padding-top: 16px;"),je({duration:"0.15s"})]),M("active",[j("header",[M("active",[k("collapse-item-arrow","transform: rotate(90deg);")])])]),U("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),j("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[j("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),j("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),k("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),to=Object.assign(Object.assign({},Q.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Et=Xe("n-collapse"),no=A({name:"Collapse",props:to,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:o}=he(e),l=X(e.defaultExpandedNames),i=B(()=>e.expandedNames),d=Lt(i,l),s=Q("Collapse","-collapse",eo,Qr,e,n);function u(b){const{"onUpdate:expandedNames":_,onUpdateExpandedNames:S,onExpandedNamesChange:P}=e;S&&te(S,b),_&&te(_,b),P&&te(P,b),l.value=b}function c(b){const{onItemHeaderClick:_}=e;_&&te(_,b)}function f(b,_,S){const{accordion:P}=e,{value:F}=d;if(P)b?(u([_]),c({name:_,expanded:!0,event:S})):(u([]),c({name:_,expanded:!1,event:S}));else if(!Array.isArray(F))u([_]),c({name:_,expanded:!0,event:S});else{const y=F.slice(),h=y.findIndex(R=>_===R);~h?(y.splice(h,1),u(y),c({name:_,expanded:!1,event:S})):(y.push(_),u(y),c({name:_,expanded:!0,event:S}))}}xe(Et,{props:e,mergedClsPrefixRef:n,expandedNamesRef:d,slots:t,toggleItem:f});const m=bt("Collapse",o,n),v=B(()=>{const{common:{cubicBezierEaseInOut:b},self:{titleFontWeight:_,dividerColor:S,titleTextColor:P,titleTextColorDisabled:F,textColor:y,arrowColor:h,fontSize:R,titleFontSize:$,arrowColorDisabled:G}}=s.value;return{"--n-font-size":R,"--n-bezier":b,"--n-text-color":y,"--n-divider-color":S,"--n-title-font-size":$,"--n-title-text-color":P,"--n-title-text-color-disabled":F,"--n-title-font-weight":_,"--n-arrow-color":h,"--n-arrow-color-disabled":G}}),g=r?pe("collapse",void 0,v,e):void 0;return{rtlEnabled:m,mergedTheme:s,mergedClsPrefix:n,cssVars:r?void 0:v,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),ro=A({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Un(K(e,"show"))}},render(){return a(Ze,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,o=t==="show"&&n,l=a("div",{class:`${r}-collapse-item__content-wrapper`},a("div",{class:`${r}-collapse-item__content-inner`},this.$slots));return o?wt(l,[[Ct,e]]):e?l:null}})}}),oo={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},ht=A({name:"CollapseItem",props:oo,setup(e){const{mergedRtlRef:t}=he(e),n=Ue(),r=me(()=>{var f;return(f=e.name)!==null&&f!==void 0?f:n}),o=ie(Et);o||_e("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:l,props:i,mergedClsPrefixRef:d,slots:s}=o,u=B(()=>{const{value:f}=l;if(Array.isArray(f)){const{value:m}=r;return!~f.findIndex(v=>v===m)}else if(f){const{value:m}=r;return m!==f}return!0});return{rtlEnabled:bt("Collapse",t,d),collapseSlots:s,randomName:n,mergedClsPrefix:d,collapsed:u,mergedDisplayDirective:B(()=>{const{displayDirective:f}=e;return f||i.displayDirective}),arrowPlacement:B(()=>i.arrowPlacement),handleClick(f){o&&!e.disabled&&o.toggleItem(u.value,r.value,f)}}},render(){var e;const{collapseSlots:t,$slots:n,arrowPlacement:r,collapsed:o,mergedDisplayDirective:l,mergedClsPrefix:i,disabled:d}=this,s=n.header?n.header():this.title,u=n["header-extra"]||t["header-extra"],c=n.arrow||t.arrow;return a("div",{class:[`${i}-collapse-item`,`${i}-collapse-item--${r}-arrow-placement`,d&&`${i}-collapse-item--disabled`,!o&&`${i}-collapse-item--active`]},a("div",{class:[`${i}-collapse-item__header`,!o&&`${i}-collapse-item__header--active`]},a("div",{class:`${i}-collapse-item__header-main`,onClick:this.handleClick},r==="right"&&s,a("div",{class:`${i}-collapse-item-arrow`,key:this.rtlEnabled?0:1},c?c({collapsed:o}):a(ee,{clsPrefix:i},{default:(e=t.expandIcon)!==null&&e!==void 0?e:()=>this.rtlEnabled?a(ir,null):a(lr,null)})),r==="left"&&s),u&&a("div",{class:`${i}-collapse-item__header-extra`,onClick:this.handleClick},{default:u})),a(ro,{clsPrefix:i,displayDirective:l,show:!o},n))}});function io(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const lo=qe({name:"Popselect",common:fe,peers:{Popover:Hn,InternalSelectMenu:Ot},self:io}),Dt=lo,Mt=Xe("n-popselect"),ao=k("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),tt={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,internalShowCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},pt=qn(tt),so=A({name:"PopselectPanel",props:tt,setup(e){const t=ie(Mt),{mergedClsPrefixRef:n,inlineThemeDisabled:r}=he(e),o=Q("Popselect","-pop-select",ao,Dt,t.props,n),l=B(()=>Er(e.options,Zr("value","children")));function i(m,v){const{onUpdateValue:g,"onUpdate:value":b,onChange:_}=e;g&&te(g,m,v),b&&te(b,m,v),_&&te(_,m,v)}function d(m){u(m.key)}function s(m){Ke(m,"action")||m.preventDefault()}function u(m){const{value:{getNode:v}}=l;if(e.multiple)if(Array.isArray(e.value)){const g=[],b=[];let _=!0;e.value.forEach(S=>{if(S===m){_=!1;return}const P=v(S);P&&(g.push(P.key),b.push(P.rawNode))}),_&&(g.push(m),b.push(v(m).rawNode)),i(g,b)}else{const g=v(m);g&&i([m],[g.rawNode])}else if(e.value===m&&e.cancelable)i(null,null);else{const g=v(m);g&&i(m,g.rawNode);const{"onUpdate:show":b,onUpdateShow:_}=t.props;b&&te(b,!1),_&&te(_,!1),t.setShow(!1)}Te(()=>{t.syncPosition()})}Ae(K(e,"options"),()=>{Te(()=>{t.syncPosition()})});const c=B(()=>{const{self:{menuBoxShadow:m}}=o.value;return{"--n-menu-box-shadow":m}}),f=r?pe("select",void 0,c,t.props):void 0;return{mergedTheme:t.mergedThemeRef,mergedClsPrefix:n,treeMate:l,handleToggle:d,handleMenuMousedown:s,cssVars:r?void 0:c,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a(Xr,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.internalShowCheckmark},{action:()=>{var t,n;return((n=(t=this.$slots).action)===null||n===void 0?void 0:n.call(t))||[]},empty:()=>{var t,n;return((n=(t=this.$slots).empty)===null||n===void 0?void 0:n.call(t))||[]}})}}),co=Object.assign(Object.assign(Object.assign(Object.assign({},Q.props),_t(lt,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},lt.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),tt),uo=A({name:"Popselect",props:co,inheritAttrs:!1,__popover__:!0,setup(e){const t=Q("Popselect","-popselect",void 0,Dt,e),n=X(null);function r(){var i;(i=n.value)===null||i===void 0||i.syncPosition()}function o(i){var d;(d=n.value)===null||d===void 0||d.setShow(i)}return xe(Mt,{props:e,mergedThemeRef:t,syncPosition:r,setShow:o}),Object.assign(Object.assign({},{syncPosition:r,setShow:o}),{popoverInstRef:n,mergedTheme:t})},render(){const{mergedTheme:e}=this,t={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(n,r,o,l,i)=>{const{$attrs:d}=this;return a(so,Object.assign({},d,{class:[d.class,n],style:[d.style,o]},Vn(this.$props,pt),{ref:Yn(r),onMouseenter:ye([l,d.onMouseenter]),onMouseleave:ye([i,d.onMouseleave])}),{action:()=>{var s,u;return(u=(s=this.$slots).action)===null||u===void 0?void 0:u.call(s)},empty:()=>{var s,u;return(u=(s=this.$slots).empty)===null||u===void 0?void 0:u.call(s)}})}};return a(Kn,Object.assign({},_t(this.$props,pt),t,{internalDeactivateImmediately:!0}),{trigger:()=>{var n,r;return(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n)}})}}),fo=e=>{const{infoColor:t,successColor:n,warningColor:r,errorColor:o,textColor2:l,progressRailColor:i,fontSize:d,fontWeight:s}=e;return{fontSize:d,fontSizeCircle:"28px",fontWeightCircle:s,railColor:i,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:n,iconColorWarning:r,iconColorError:o,textColorCircle:l,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:l,fillColor:t,fillColorInfo:t,fillColorSuccess:n,fillColorWarning:r,fillColorError:o,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}},ho={name:"Progress",common:fe,self:fo},At=ho,po={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},go=e=>{const{primaryColor:t,textColor2:n,borderColor:r,lineHeight:o,fontSize:l,borderRadiusSmall:i,dividerColor:d,fontWeightStrong:s,textColor1:u,textColor3:c,infoColor:f,warningColor:m,errorColor:v,successColor:g,codeColor:b}=e;return Object.assign(Object.assign({},po),{aTextColor:t,blockquoteTextColor:n,blockquotePrefixColor:r,blockquoteLineHeight:o,blockquoteFontSize:l,codeBorderRadius:i,liTextColor:n,liLineHeight:o,liFontSize:l,hrColor:d,headerFontWeight:s,headerTextColor:u,pTextColor:n,pTextColor1Depth:u,pTextColor2Depth:n,pTextColor3Depth:c,pLineHeight:o,pFontSize:l,headerBarColor:t,headerBarColorPrimary:t,headerBarColorInfo:f,headerBarColorError:v,headerBarColorWarning:m,headerBarColorSuccess:g,textColor:n,textColor1Depth:u,textColor2Depth:n,textColor3Depth:c,textColorPrimary:t,textColorInfo:f,textColorSuccess:g,textColorWarning:m,textColorError:v,codeTextColor:n,codeColor:b,codeBorder:"1px solid #0000"})},mo={name:"Typography",common:fe,self:go},vo=mo,yo=e=>{const{iconColor:t,primaryColor:n,errorColor:r,textColor2:o,successColor:l,opacityDisabled:i,actionColor:d,borderColor:s,hoverColor:u,lineHeight:c,borderRadius:f,fontSize:m}=e;return{fontSize:m,lineHeight:c,borderRadius:f,draggerColor:d,draggerBorder:`1px dashed ${s}`,draggerBorderHover:`1px dashed ${n}`,itemColorHover:u,itemColorHoverError:mn(r,{alpha:.06}),itemTextColor:o,itemTextColorError:r,itemTextColorSuccess:l,itemIconColor:t,itemDisabledOpacity:i,itemBorderImageCardError:`1px solid ${r}`,itemBorderImageCard:`1px solid ${s}`}},xo=qe({name:"Upload",common:fe,peers:{Button:Bn,Progress:At},self:yo}),bo=xo,wo=U([k("progress",{display:"inline-block"},[k("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),M("line",`
 width: 100%;
 display: block;
 `,[k("progress-content",`
 display: flex;
 align-items: center;
 `,[k("progress-graph",{flex:1})]),k("progress-custom-content",{marginLeft:"14px"}),k("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[M("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),M("circle, dashboard",{width:"120px"},[k("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),k("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),k("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),M("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[k("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),k("progress-content",{position:"relative"}),k("progress-graph",{position:"relative"},[k("progress-graph-circle",[U("svg",{verticalAlign:"bottom"}),k("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[M("empty",{opacity:0})]),k("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),k("progress-graph-line",[M("indicator-inside",[k("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[k("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),k("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),M("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[k("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),k("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),k("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[k("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[M("processing",[U("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),U("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Co={success:a(kt,null),error:a(St,null),warning:a(Rt,null),info:a(Pt,null)},_o=A({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const n=B(()=>ge(e.height)),r=B(()=>e.railBorderRadius!==void 0?ge(e.railBorderRadius):e.height!==void 0?ge(e.height,{c:.5}):""),o=B(()=>e.fillBorderRadius!==void 0?ge(e.fillBorderRadius):e.railBorderRadius!==void 0?ge(e.railBorderRadius):e.height!==void 0?ge(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:l,railColor:i,railStyle:d,percentage:s,unit:u,indicatorTextColor:c,status:f,showIndicator:m,fillColor:v,processing:g,clsPrefix:b}=e;return a("div",{class:`${b}-progress-content`,role:"none"},a("div",{class:`${b}-progress-graph`,"aria-hidden":!0},a("div",{class:[`${b}-progress-graph-line`,{[`${b}-progress-graph-line--indicator-${l}`]:!0}]},a("div",{class:`${b}-progress-graph-line-rail`,style:[{backgroundColor:i,height:n.value,borderRadius:r.value},d]},a("div",{class:[`${b}-progress-graph-line-fill`,g&&`${b}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:v,height:n.value,lineHeight:n.value,borderRadius:o.value}},l==="inside"?a("div",{class:`${b}-progress-graph-line-indicator`},s,u):null)))),m&&l==="outside"?a("div",null,t.default?a("div",{class:`${b}-progress-custom-content`,style:{color:c},role:"none"},t.default()):f==="default"?a("div",{role:"none",class:`${b}-progress-icon ${b}-progress-icon--as-text`,style:{color:c}},s,u):a("div",{class:`${b}-progress-icon`,"aria-hidden":!0},a(ee,{clsPrefix:b},{default:()=>Co[f]}))):null)}}}),ko={success:a(kt,null),error:a(St,null),warning:a(Rt,null),info:a(Pt,null)},So=A({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){function n(r,o,l){const{gapDegree:i,viewBoxWidth:d}=e,s=50,u=0,c=s,f=0,m=2*s,v=`M 55,55 m ${u},${c}
      a ${s},${s} 0 1 1 ${f},${-m}
      a ${s},${s} 0 1 1 ${-f},${m}`,g=Math.PI*2*s,b={stroke:l,strokeDasharray:`${r/100*(g-i)}px ${d*8}px`,strokeDashoffset:`-${i/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:v,pathStyle:b}}return()=>{const{fillColor:r,railColor:o,strokeWidth:l,offsetDegree:i,status:d,percentage:s,showIndicator:u,indicatorTextColor:c,unit:f,gapOffsetDegree:m,clsPrefix:v}=e,{pathString:g,pathStyle:b}=n(100,0,o),{pathString:_,pathStyle:S}=n(s,i,r);return a("div",{class:`${v}-progress-content`,role:"none"},a("div",{class:`${v}-progress-graph`,"aria-hidden":!0},a("div",{class:`${v}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},a("svg",{viewBox:"0 0 110 110"},a("g",null,a("path",{class:`${v}-progress-graph-circle-rail`,d:g,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:b})),a("g",null,a("path",{class:[`${v}-progress-graph-circle-fill`,s===0&&`${v}-progress-graph-circle-fill--empty`],d:_,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:S}))))),u?a("div",null,t.default?a("div",{class:`${v}-progress-custom-content`,role:"none"},t.default()):d!=="default"?a("div",{class:`${v}-progress-icon`,"aria-hidden":!0},a(ee,{clsPrefix:v},{default:()=>ko[d]})):a("div",{class:`${v}-progress-text`,style:{color:c},role:"none"},a("span",{class:`${v}-progress-text__percentage`},s),a("span",{class:`${v}-progress-text__unit`},f))):null)}}});function gt(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Ro=A({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const n=B(()=>e.percentage.map((o,l)=>`${Math.PI*o/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*l)-e.circleGap*l)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:r,strokeWidth:o,circleGap:l,showIndicator:i,fillColor:d,railColor:s,railStyle:u,percentage:c,clsPrefix:f}=e;return a("div",{class:`${f}-progress-content`,role:"none"},a("div",{class:`${f}-progress-graph`,"aria-hidden":!0},a("div",{class:`${f}-progress-graph-circle`},a("svg",{viewBox:`0 0 ${r} ${r}`},c.map((m,v)=>a("g",{key:v},a("path",{class:`${f}-progress-graph-circle-rail`,d:gt(r/2-o/2*(1+2*v)-l*v,o,r),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:s[v]},u[v]]}),a("path",{class:[`${f}-progress-graph-circle-fill`,m===0&&`${f}-progress-graph-circle-fill--empty`],d:gt(r/2-o/2*(1+2*v)-l*v,o,r),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:n.value[v],strokeDashoffset:0,stroke:d[v]}})))))),i&&t.default?a("div",null,a("div",{class:`${f}-progress-text`},t.default())):null)}}}),Po=Object.assign(Object.assign({},Q.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),To=A({name:"Progress",props:Po,setup(e){const t=B(()=>e.indicatorPlacement||e.indicatorPosition),n=B(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:r,inlineThemeDisabled:o}=he(e),l=Q("Progress","-progress",wo,At,e,r),i=B(()=>{const{status:s}=e,{common:{cubicBezierEaseInOut:u},self:{fontSize:c,fontSizeCircle:f,railColor:m,railHeight:v,iconSizeCircle:g,iconSizeLine:b,textColorCircle:_,textColorLineInner:S,textColorLineOuter:P,lineBgProcessing:F,fontWeightCircle:y,[le("iconColor",s)]:h,[le("fillColor",s)]:R}}=l.value;return{"--n-bezier":u,"--n-fill-color":R,"--n-font-size":c,"--n-font-size-circle":f,"--n-font-weight-circle":y,"--n-icon-color":h,"--n-icon-size-circle":g,"--n-icon-size-line":b,"--n-line-bg-processing":F,"--n-rail-color":m,"--n-rail-height":v,"--n-text-color-circle":_,"--n-text-color-line-inner":S,"--n-text-color-line-outer":P}}),d=o?pe("progress",B(()=>e.status[0]),i,e):void 0;return{mergedClsPrefix:r,mergedIndicatorPlacement:t,gapDeg:n,cssVars:o?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:o,railColor:l,railStyle:i,color:d,percentage:s,viewBoxWidth:u,strokeWidth:c,mergedIndicatorPlacement:f,unit:m,borderRadius:v,fillBorderRadius:g,height:b,processing:_,circleGap:S,mergedClsPrefix:P,gapDeg:F,gapOffsetDegree:y,themeClass:h,$slots:R,onRender:$}=this;return $==null||$(),a("div",{class:[h,`${P}-progress`,`${P}-progress--${e}`,`${P}-progress--${o}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":s,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?a(So,{clsPrefix:P,status:o,showIndicator:r,indicatorTextColor:n,railColor:l,fillColor:d,railStyle:i,offsetDegree:this.offsetDegree,percentage:s,viewBoxWidth:u,strokeWidth:c,gapDegree:F===void 0?e==="dashboard"?75:0:F,gapOffsetDegree:y,unit:m},R):e==="line"?a(_o,{clsPrefix:P,status:o,showIndicator:r,indicatorTextColor:n,railColor:l,fillColor:d,railStyle:i,percentage:s,processing:_,indicatorPlacement:f,unit:m,fillBorderRadius:g,railBorderRadius:v,height:b},R):e==="multiple-circle"?a(Ro,{clsPrefix:P,strokeWidth:c,railColor:l,fillColor:d,railStyle:i,viewBoxWidth:u,percentage:s,showIndicator:r,circleGap:S},R):null)}}),zo=k("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[U("&:first-child","margin-top: 0;"),U("&:last-child","margin-bottom: 0;")]),Lo=Object.assign(Object.assign({},Q.props),{depth:[String,Number]}),Fo=A({name:"P",props:Lo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=he(e),r=Q("Typography","-p",zo,vo,e,t),o=B(()=>{const{depth:i}=e,d=i||"1",{common:{cubicBezierEaseInOut:s},self:{pFontSize:u,pLineHeight:c,pMargin:f,pTextColor:m,[`pTextColor${d}Depth`]:v}}=r.value;return{"--n-bezier":s,"--n-font-size":u,"--n-line-height":c,"--n-margin":f,"--n-text-color":i===void 0?m:v}}),l=n?pe("p",B(()=>`${e.depth||""}`),o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),ve=Xe("n-upload"),jt="__UPLOAD_DRAGGER__",Bo=A({name:"UploadDragger",[jt]:!0,setup(e,{slots:t}){const n=ie(ve,null);return n||_e("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:r},mergedDisabledRef:{value:o},maxReachedRef:{value:l}}=n;return a("div",{class:[`${r}-upload-dragger`,(o||l)&&`${r}-upload-dragger--disabled`]},t)}}});var Ut=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(l){return l instanceof n?l:new n(function(i){i(l)})}return new(n||(n=Promise))(function(l,i){function d(c){try{u(r.next(c))}catch(f){i(f)}}function s(c){try{u(r.throw(c))}catch(f){i(f)}}function u(c){c.done?l(c.value):o(c.value).then(d,s)}u((r=r.apply(e,t||[])).next())})};const Ht=e=>e.includes("image/"),$o=(e="")=>{const t=e.split("/"),r=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(r)||[""])[0]},No=e=>{if(e.type)return Ht(e.type);const t=e.thumbnailUrl||e.url||"",n=$o(t);return/^data:image\//.test(t)||/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(n)?!0:!(/^data:/.test(t)||n)};function Oo(e){return Ut(this,void 0,void 0,function*(){return yield new Promise(t=>{if(!e.type||!Ht(e.type)){t("");return}t(window.URL.createObjectURL(e))})})}const Io=$n&&window.FileReader&&window.File;function Eo(e){return e.isDirectory}function Do(e){return e.isFile}function Mo(e,t){return Ut(this,void 0,void 0,function*(){const n=[];let r,o=0;function l(){o++}function i(){o--,o||r(n)}function d(s){s.forEach(u=>{if(!!u){if(l(),t&&Eo(u)){const c=u.createReader();l(),c.readEntries(f=>{d(f),i()},()=>{i()})}else Do(u)&&(l(),u.file(c=>{n.push({file:c,entry:u,source:"dnd"}),i()},()=>{i()}));i()}})}return yield new Promise(s=>{r=s,d(e)}),n})}function we(e){const{id:t,name:n,percentage:r,status:o,url:l,file:i,thumbnailUrl:d,type:s,fullPath:u,batchId:c}=e;return{id:t,name:n,percentage:r!=null?r:null,status:o,url:l!=null?l:null,file:i!=null?i:null,thumbnailUrl:d!=null?d:null,type:s!=null?s:null,fullPath:u!=null?u:null,batchId:c!=null?c:null}}function Ao(e,t,n){return e=e.toLowerCase(),t=t.toLocaleLowerCase(),n=n.toLocaleLowerCase(),n.split(",").map(o=>o.trim()).filter(Boolean).some(o=>{if(o.startsWith(".")){if(e.endsWith(o))return!0}else if(o.includes("/")){const[l,i]=t.split("/"),[d,s]=o.split("/");if((d==="*"||l&&d&&d===l)&&(s==="*"||i&&s&&s===i))return!0}else return!0;return!1})}const jo=(e,t)=>{if(!e)return;const n=document.createElement("a");n.href=e,t!==void 0&&(n.download=t),document.body.appendChild(n),n.click(),document.body.removeChild(n)},nt=A({name:"UploadTrigger",props:{abstract:Boolean},setup(e,{slots:t}){const n=ie(ve,null);n||_e("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:r,mergedDisabledRef:o,maxReachedRef:l,listTypeRef:i,dragOverRef:d,openOpenFileDialog:s,draggerInsideRef:u,handleFileAddition:c,mergedDirectoryDndRef:f,triggerStyleRef:m}=n,v=B(()=>i.value==="image-card");function g(){o.value||l.value||s()}function b(F){F.preventDefault(),d.value=!0}function _(F){F.preventDefault(),d.value=!0}function S(F){F.preventDefault(),d.value=!1}function P(F){var y;if(F.preventDefault(),!u.value||o.value||l.value){d.value=!1;return}const h=(y=F.dataTransfer)===null||y===void 0?void 0:y.items;h!=null&&h.length?Mo(Array.from(h).map(R=>R.webkitGetAsEntry()),f.value).then(R=>{c(R)}).finally(()=>{d.value=!1}):d.value=!1}return()=>{var F;const{value:y}=r;return e.abstract?(F=t.default)===null||F===void 0?void 0:F.call(t,{handleClick:g,handleDrop:P,handleDragOver:b,handleDragEnter:_,handleDragLeave:S}):a("div",{class:[`${y}-upload-trigger`,(o.value||l.value)&&`${y}-upload-trigger--disabled`,v.value&&`${y}-upload-trigger--image-card`],style:m.value,onClick:g,onDrop:P,onDragover:b,onDragenter:_,onDragleave:S},v.value?a(Bo,null,{default:()=>Ft(t.default,()=>[a(ee,{clsPrefix:y},{default:()=>a(Pn,null)})])}):t)}}}),Uo=A({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:ie(ve).mergedThemeRef}},render(){return a(Ze,null,{default:()=>this.show?a(To,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}}),Ho=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},a("g",{fill:"none"},a("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"}))),Vo=a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},a("g",{fill:"none"},a("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})));var Ko=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(l){return l instanceof n?l:new n(function(i){i(l)})}return new(n||(n=Promise))(function(l,i){function d(c){try{u(r.next(c))}catch(f){i(f)}}function s(c){try{u(r.throw(c))}catch(f){i(f)}}function u(c){c.done?l(c.value):o(c.value).then(d,s)}u((r=r.apply(e,t||[])).next())})};const Re={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},Wo=A({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0}},setup(e){const t=ie(ve),n=X(null),r=X(""),o=B(()=>{const{file:h}=e;return h.status==="finished"?"success":h.status==="error"?"error":"info"}),l=B(()=>{const{file:h}=e;if(h.status==="error")return"error"}),i=B(()=>{const{file:h}=e;return h.status==="uploading"}),d=B(()=>{if(!t.showCancelButtonRef.value)return!1;const{file:h}=e;return["uploading","pending","error"].includes(h.status)}),s=B(()=>{if(!t.showRemoveButtonRef.value)return!1;const{file:h}=e;return["finished"].includes(h.status)}),u=B(()=>{if(!t.showDownloadButtonRef.value)return!1;const{file:h}=e;return["finished"].includes(h.status)}),c=B(()=>{if(!t.showRetryButtonRef.value)return!1;const{file:h}=e;return["error"].includes(h.status)}),f=me(()=>r.value||e.file.thumbnailUrl||e.file.url),m=B(()=>{if(!t.showPreviewButtonRef.value)return!1;const{file:{status:h},listType:R}=e;return["finished"].includes(h)&&f.value&&R==="image-card"});function v(){t.submit(e.file.id)}function g(h){h.preventDefault();const{file:R}=e;["finished","pending","error"].includes(R.status)?_(R):["uploading"].includes(R.status)?P(R):xn("upload","The button clicked type is unknown.")}function b(h){h.preventDefault(),S(e.file)}function _(h){const{xhrMap:R,doChange:$,onRemoveRef:{value:G},mergedFileListRef:{value:C}}=t;Promise.resolve(G?G({file:Object.assign({},h),fileList:C}):!0).then(N=>{if(N===!1)return;const p=Object.assign({},h,{status:"removed"});R.delete(h.id),$(p,void 0,{remove:!0})})}function S(h){const{onDownloadRef:{value:R}}=t;Promise.resolve(R?R(Object.assign({},h)):!0).then($=>{$!==!1&&jo(h.url,h.name)})}function P(h){const{xhrMap:R}=t,$=R.get(h.id);$==null||$.abort(),_(Object.assign({},h))}function F(){const{onPreviewRef:{value:h}}=t;if(h)h(e.file);else if(e.listType==="image-card"){const{value:R}=n;if(!R)return;R.click()}}const y=()=>Ko(this,void 0,void 0,function*(){const{listType:h}=e;h!=="image"&&h!=="image-card"||!Io||!(e.file.file instanceof File)||(r.value=yield t.getFileThumbnailUrl(e.file))});return vn(()=>{y()}),{mergedTheme:t.mergedThemeRef,progressStatus:o,buttonType:l,showProgress:i,disabled:t.mergedDisabledRef,showCancelButton:d,showRemoveButton:s,showDownloadButton:u,showRetryButton:c,showPreviewButton:m,mergedThumbnailUrl:f,imageRef:n,handleRemoveOrCancelClick:g,handleDownloadClick:b,handleRetryClick:v,handlePreviewClick:F}},render(){const{clsPrefix:e,mergedTheme:t,listType:n,file:r}=this;let o;const l=n==="image";l||n==="image-card"?o=No(r)?this.mergedThumbnailUrl&&r.status!=="error"?a("a",{rel:"noopener noreferer",target:"_blank",href:r.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},n==="image-card"?a(Wn,{src:this.mergedThumbnailUrl||void 0,previewSrc:r.url||void 0,alt:r.name,ref:"imageRef"}):a("img",{src:this.mergedThumbnailUrl||void 0,alt:r.name})):a("span",{class:`${e}-upload-file-info__thumbnail`},a(ee,{clsPrefix:e},{default:()=>Ho})):a("span",{class:`${e}-upload-file-info__thumbnail`},a(ee,{clsPrefix:e},{default:()=>Vo})):o=a("span",{class:`${e}-upload-file-info__thumbnail`},a(ee,{clsPrefix:e},{default:()=>a(rr,null)}));const d=a(Uo,{show:this.showProgress,percentage:r.percentage||0,status:this.progressStatus}),s=n==="text"||n==="image";return a("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,r.url&&r.status!=="error"&&n!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${n}-type`]},a("div",{class:`${e}-upload-file-info`},o,a("div",{class:`${e}-upload-file-info__name`},s&&(r.url&&r.status!=="error"?a("a",{rel:"noopener noreferer",target:"_blank",href:r.url||void 0,onClick:this.handlePreviewClick},r.name):a("span",{onClick:this.handlePreviewClick},r.name)),l&&d),a("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${n}-type`]},this.showPreviewButton?a(se,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Re},{icon:()=>a(ee,{clsPrefix:e},{default:()=>a(Xn,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&a(se,{key:"cancelOrTrash",theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:Re,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>a(yn,null,{default:()=>this.showRemoveButton?a(ee,{clsPrefix:e,key:"trash"},{default:()=>a(ar,null)}):a(ee,{clsPrefix:e,key:"cancel"},{default:()=>a(cr,null)})})}),this.showRetryButton&&!this.disabled&&a(se,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Re},{icon:()=>a(ee,{clsPrefix:e},{default:()=>a(ur,null)})}),this.showDownloadButton?a(se,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Re},{icon:()=>a(ee,{clsPrefix:e},{default:()=>a(sr,null)})}):null)),!l&&d)}}),Vt=A({name:"UploadFileList",setup(e,{slots:t}){const n=ie(ve,null);n||_e("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:r,mergedClsPrefixRef:o,listTypeRef:l,mergedFileListRef:i,fileListStyleRef:d,cssVarsRef:s,themeClassRef:u,maxReachedRef:c,showTriggerRef:f,imageGroupPropsRef:m}=n,v=B(()=>l.value==="image-card"),g=()=>i.value.map(_=>a(Wo,{clsPrefix:o.value,key:_.id,file:_,listType:l.value})),b=()=>v.value?a(Gn,Object.assign({},m.value),{default:g}):a(Ze,{group:!0},{default:g});return()=>{const{value:_}=o,{value:S}=r;return a("div",{class:[`${_}-upload-file-list`,v.value&&`${_}-upload-file-list--grid`,S?u==null?void 0:u.value:void 0],style:[S&&s?s.value:"",d.value]},b(),f.value&&!c.value&&v.value&&a(nt,null,t))}}}),Go=U([k("upload","width: 100%;",[M("dragger-inside",[k("upload-trigger",`
 display: block;
 `)]),M("drag-over",[k("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),k("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[U("&:hover",`
 border: var(--n-dragger-border-hover);
 `),M("disabled",`
 cursor: not-allowed;
 `)]),k("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[U("+",[k("upload-file-list","margin-top: 8px;")]),M("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),M("image-card",`
 width: 96px;
 height: 96px;
 `,[k("base-icon",`
 font-size: 24px;
 `),k("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),k("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[U("a, img","outline: none;"),M("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[k("upload-file","cursor: not-allowed;")]),M("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),k("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[je(),k("progress",[je({foldPadding:!0})]),U("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[k("upload-file-info",[j("action",`
 opacity: 1;
 `)])]),M("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[k("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[k("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),j("name",`
 padding: 0 8px;
 `),j("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[U("img",`
 width: 100%;
 `)])])]),M("text-type",[k("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),M("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[k("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),k("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[j("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[U("img",`
 width: 100%;
 `)])]),U("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),U("&:hover",[U("&::before","opacity: 1;"),k("upload-file-info",[j("thumbnail","opacity: .12;")])])]),M("error-status",[U("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),k("upload-file-info",[j("name","color: var(--n-item-text-color-error);"),j("thumbnail","color: var(--n-item-text-color-error);")]),M("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),M("with-url",`
 cursor: pointer;
 `,[k("upload-file-info",[j("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[U("a",`
 text-decoration: underline;
 `)])])]),k("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[j("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[k("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),j("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[k("button",[U("&:not(:last-child)",{marginRight:"4px"}),k("base-icon",[U("svg",[bn()])])]),M("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),M("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),j("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[U("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),k("upload-file-input",`
 display: block;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);var Me=globalThis&&globalThis.__awaiter||function(e,t,n,r){function o(l){return l instanceof n?l:new n(function(i){i(l)})}return new(n||(n=Promise))(function(l,i){function d(c){try{u(r.next(c))}catch(f){i(f)}}function s(c){try{u(r.throw(c))}catch(f){i(f)}}function u(c){c.done?l(c.value):o(c.value).then(d,s)}u((r=r.apply(e,t||[])).next())})};function qo(e,t,n){const{doChange:r,xhrMap:o}=e;let l=0;function i(s){var u;let c=Object.assign({},t,{status:"error",percentage:l});o.delete(t.id),c=we(((u=e.onError)===null||u===void 0?void 0:u.call(e,{file:c,event:s}))||c),r(c,s)}function d(s){var u;if(e.isErrorState){if(e.isErrorState(n)){i(s);return}}else if(n.status<200||n.status>=300){i(s);return}let c=Object.assign({},t,{status:"finished",percentage:l,file:null});o.delete(t.id),c=we(((u=e.onFinish)===null||u===void 0?void 0:u.call(e,{file:c,event:s}))||c),r(c,s)}return{handleXHRLoad:d,handleXHRError:i,handleXHRAbort(s){const u=Object.assign({},t,{status:"removed",file:null,percentage:l});o.delete(t.id),r(u,s)},handleXHRProgress(s){const u=Object.assign({},t,{status:"uploading"});if(s.lengthComputable){const c=Math.ceil(s.loaded/s.total*100);u.percentage=c,l=c}r(u,s)}}}function Xo(e){const{inst:t,file:n,data:r,headers:o,withCredentials:l,action:i,customRequest:d}=e,{doChange:s}=e.inst;let u=0;d({file:n,data:r,headers:o,withCredentials:l,action:i,onProgress(c){const f=Object.assign({},n,{status:"uploading"}),m=c.percent;f.percentage=m,u=m,s(f)},onFinish(){var c;let f=Object.assign({},n,{status:"finished",percentage:u,file:null});f=we(((c=t.onFinish)===null||c===void 0?void 0:c.call(t,{file:f}))||f),s(f)},onError(){var c;let f=Object.assign({},n,{status:"error",percentage:u});f=we(((c=t.onError)===null||c===void 0?void 0:c.call(t,{file:f}))||f),s(f)}})}function Zo(e,t,n){const r=qo(e,t,n);n.onabort=r.handleXHRAbort,n.onerror=r.handleXHRError,n.onload=r.handleXHRLoad,n.upload&&(n.upload.onprogress=r.handleXHRProgress)}function Kt(e,t){return typeof e=="function"?e({file:t}):e||{}}function Yo(e,t,n){const r=Kt(t,n);!r||Object.keys(r).forEach(o=>{e.setRequestHeader(o,r[o])})}function Jo(e,t,n){const r=Kt(t,n);!r||Object.keys(r).forEach(o=>{e.append(o,r[o])})}function Qo(e,t,n,{method:r,action:o,withCredentials:l,headers:i,data:d}){const s=new XMLHttpRequest;e.xhrMap.set(n.id,s),s.withCredentials=l;const u=new FormData;if(Jo(u,d,n),u.append(t,n.file),Zo(e,n,s),o!==void 0){s.open(r.toUpperCase(),o),Yo(s,i,n),s.send(u);const c=Object.assign({},n,{status:"uploading"});e.doChange(c)}}const ei=Object.assign(Object.assign({},Q.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerStyle:[String,Object]}),ti=A({name:"Upload",props:ei,setup(e){e.abstract&&e.listType==="image-card"&&_e("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=he(e),r=Q("Upload","-upload",Go,bo,e,t),o=Nn(e),l=B(()=>{const{max:C}=e;return C!==void 0?v.value.length>=C:!1}),i=X(e.defaultFileList),d=K(e,"fileList"),s=X(null),u={value:!1},c=X(!1),f=new Map,m=Lt(d,i),v=B(()=>m.value.map(we));function g(){var C;(C=s.value)===null||C===void 0||C.click()}function b(C){const N=C.target;P(N.files?Array.from(N.files).map(p=>({file:p,entry:null,source:"input"})):null,C),N.value=""}function _(C){const{"onUpdate:fileList":N,onUpdateFileList:p}=e;N&&te(N,C),p&&te(p,C),i.value=C}const S=B(()=>e.multiple||e.directory);function P(C,N){if(!C||C.length===0)return;const{onBeforeUpload:p}=e;C=S.value?C:[C[0]];const{max:w,accept:L}=e;C=C.filter(({file:I,source:E})=>E==="dnd"&&(L==null?void 0:L.trim())?Ao(I.name,I.type,L):!0),w&&(C=C.slice(0,w-v.value.length));const O=Ue();Promise.all(C.map(({file:I,entry:E})=>Me(this,void 0,void 0,function*(){var D;const V={id:Ue(),batchId:O,name:I.name,status:"pending",percentage:0,file:I,url:null,type:I.type,thumbnailUrl:null,fullPath:(D=E==null?void 0:E.fullPath)!==null&&D!==void 0?D:`/${I.webkitRelativePath||I.name}`};return!p||(yield p({file:V,fileList:v.value}))!==!1?V:null}))).then(I=>Me(this,void 0,void 0,function*(){let E=Promise.resolve();return I.forEach(D=>{E=E.then(Te).then(()=>{D&&y(D,N,{append:!0})})}),yield E})).then(()=>{e.defaultUpload&&F()})}function F(C){const{method:N,action:p,withCredentials:w,headers:L,data:O,name:I}=e,E=C!==void 0?v.value.filter(V=>V.id===C):v.value,D=C!==void 0;E.forEach(V=>{const{status:x}=V;(x==="pending"||x==="error"&&D)&&(e.customRequest?Xo({inst:{doChange:y,xhrMap:f,onFinish:e.onFinish,onError:e.onError},file:V,action:p,withCredentials:w,headers:L,data:O,customRequest:e.customRequest}):Qo({doChange:y,xhrMap:f,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},I,V,{method:N,action:p,withCredentials:w,headers:L,data:O}))})}const y=(C,N,p={append:!1,remove:!1})=>{const{append:w,remove:L}=p,O=Array.from(v.value),I=O.findIndex(E=>E.id===C.id);if(w||L||~I){w?O.push(C):L?O.splice(I,1):O.splice(I,1,C);const{onChange:E}=e;E&&E({file:C,fileList:O,event:N}),_(O)}};function h(C){return Me(this,void 0,void 0,function*(){const{createThumbnailUrl:N}=e;return N?yield N(C.file):yield Oo(C.file)})}const R=B(()=>{const{common:{cubicBezierEaseInOut:C},self:{draggerColor:N,draggerBorder:p,draggerBorderHover:w,itemColorHover:L,itemColorHoverError:O,itemTextColorError:I,itemTextColorSuccess:E,itemTextColor:D,itemIconColor:V,itemDisabledOpacity:x,lineHeight:z,borderRadius:q,fontSize:J,itemBorderImageCardError:de,itemBorderImageCard:Fe}}=r.value;return{"--n-bezier":C,"--n-border-radius":q,"--n-dragger-border":p,"--n-dragger-border-hover":w,"--n-dragger-color":N,"--n-font-size":J,"--n-item-color-hover":L,"--n-item-color-hover-error":O,"--n-item-disabled-opacity":x,"--n-item-icon-color":V,"--n-item-text-color":D,"--n-item-text-color-error":I,"--n-item-text-color-success":E,"--n-line-height":z,"--n-item-border-image-card-error":de,"--n-item-border-image-card":Fe}}),$=n?pe("upload",void 0,R,e):void 0;xe(ve,{mergedClsPrefixRef:t,mergedThemeRef:r,showCancelButtonRef:K(e,"showCancelButton"),showDownloadButtonRef:K(e,"showDownloadButton"),showRemoveButtonRef:K(e,"showRemoveButton"),showRetryButtonRef:K(e,"showRetryButton"),onRemoveRef:K(e,"onRemove"),onDownloadRef:K(e,"onDownload"),mergedFileListRef:v,triggerStyleRef:K(e,"triggerStyle"),xhrMap:f,submit:F,doChange:y,showPreviewButtonRef:K(e,"showPreviewButton"),onPreviewRef:K(e,"onPreview"),getFileThumbnailUrl:h,listTypeRef:K(e,"listType"),dragOverRef:c,openOpenFileDialog:g,draggerInsideRef:u,handleFileAddition:P,mergedDisabledRef:o.mergedDisabledRef,maxReachedRef:l,fileListStyleRef:K(e,"fileListStyle"),abstractRef:K(e,"abstract"),acceptRef:K(e,"accept"),cssVarsRef:n?void 0:R,themeClassRef:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender,showTriggerRef:K(e,"showTrigger"),imageGroupPropsRef:K(e,"imageGroupProps"),mergedDirectoryDndRef:B(()=>{var C;return(C=e.directoryDnd)!==null&&C!==void 0?C:e.directory})});const G={clear:()=>{i.value=[]},submit:F,openOpenFileDialog:g};return Object.assign({mergedClsPrefix:t,draggerInsideRef:u,inputElRef:s,mergedTheme:r,dragOver:c,mergedMultiple:S,cssVars:n?void 0:R,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender,handleFileInputChange:b},G)},render(){var e,t;const{draggerInsideRef:n,mergedClsPrefix:r,$slots:o,directory:l,onRender:i}=this;if(o.default&&!this.abstract){const s=o.default()[0];!((e=s==null?void 0:s.type)===null||e===void 0)&&e[jt]&&(n.value=!0)}const d=a("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${r}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:l,directory:l}));return this.abstract?a(Cn,null,(t=o.default)===null||t===void 0?void 0:t.call(o),a(wn,{to:"body"},d)):(i==null||i(),a("div",{class:[`${r}-upload`,n.value&&`${r}-upload--dragger-inside`,this.dragOver&&`${r}-upload--drag-over`,this.themeClass],style:this.cssVars},d,this.showTrigger&&this.listType!=="image-card"&&a(nt,null,o),this.showFileList&&a(Vt,null,o)))}}),ni={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ri=_n('<rect x="48" y="48" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect><rect x="200" y="48" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect><rect x="352" y="48" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect><rect x="48" y="200" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect><rect x="200" y="200" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect><rect x="352" y="200" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect><rect x="48" y="352" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect><rect x="200" y="352" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect><rect x="352" y="352" width="112" height="112" rx="8" ry="8" fill="currentColor"></rect>',9),oi=[ri],ii=A({name:"AppsSharp",render:function(t,n){return Y(),ne("svg",ni,oi)}}),li={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ai=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M328 112L184 256l144 144"},null,-1),si=[ai],di=A({name:"ChevronBack",render:function(t,n){return Y(),ne("svg",li,si)}}),ci={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ui=H("path",{d:"M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8c-69 0-113.44 45.79-128 91.2c-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),fi=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M320 255.79l-64-64l-64 64"},null,-1),hi=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 448.21V207.79"},null,-1),pi=[ui,fi,hi],mt=A({name:"CloudUploadOutline",render:function(t,n){return Y(),ne("svg",ci,pi)}}),gi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},mi=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 152h336"},null,-1),vi=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 256h336"},null,-1),yi=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"48",d:"M88 360h336"},null,-1),xi=[mi,vi,yi],bi=A({name:"Menu",render:function(t,n){return Y(),ne("svg",gi,xi)}}),wi={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ci=H("path",{d:"M320 146s24.36-12-64-12a160 160 0 1 0 160 160",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),_i=H("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 58l80 80l-80 80"},null,-1),ki=[Ci,_i],Si=A({name:"Refresh",render:function(t,n){return Y(),ne("svg",wi,ki)}}),vt=e=>e>=0&&e<1e5?(e/1024).toFixed(2)+"KB":e>=1e5&&e<1e8?(e/1024**2).toFixed(2)+"MB":e>=1e8&&e<1e9?(e/1e3**2/1024).toFixed(2)+"GB":"0KB";const Ri={class:"drag-upload flex flex-col justify-center"},Pi=["onClick"],Ti={depth:"2",class:"my-1 text-sm"},zi={class:"flex justify-between flex-none bg-green-100"},Li={class:"text-xs text-primary"},Fi={key:1,class:"text-xs text-center"},Bi={class:"flex items-center mr-3"},$i={key:0,class:"animate-ping w-2 h-2 text-green-800"},Ni={class:"text-green-600 mx-2"},Oi=be(" \u6E05\u7A7A "),Ii=H("div",null,[H("span",{class:"text-gray-500"},"\u4E0A\u4F20\u5217\u8868")],-1),Ei=H("div",{class:"flex items-center mr-3"},null,-1),Di=H("div",{class:""},[H("span",{class:"text-gray-500"},"\u4E0B\u8F7D\u5217\u8868")],-1),Mi=A({__name:"trigger-upload",props:{action:{type:String,default:""},max:{type:Number,default:10},title:{type:String,default:""},description:{type:String,default:""},currentFolder:{type:Object}},setup(e){var G,C,N,p;const t=e,n=re(()=>oe(()=>import("./index.373c2dce.js"),["index.373c2dce.js","index.090d1b34.js","robot.e45a1a5b.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","date.c25f3370.js","Input.6483b170.js","index.a1c9fab8.js","Eye.80ba4262.js"],import.meta.url)),r=re(()=>oe(()=>import("./index.e7e341a7.js"),["index.e7e341a7.js","index.c8008c01.css","index.acf5d929.js","index.090d1b34.js","Tree.2da8011b.js","Checkbox.b58d1322.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","index.a1c9fab8.js","Folder.237eb5ae.js","Scrollbar.0b118b5e.js","robot.e45a1a5b.js","date.c25f3370.js","Eye.80ba4262.js","Tag.e096baa9.js"],import.meta.url)),o=Je(),{total_size:l,onAddUploadFiles:i,onRemoveUploadFile:d,onUploadFilesToUser:s}=zt(),u=X(null),c=X([]),f=X({id:(C=(G=t.currentFolder)==null?void 0:G.value)!=null?C:0,name:(p=(N=t.currentFolder)==null?void 0:N.label)!=null?p:"\u9ED8\u8BA4\u6587\u4EF6\u5939"}),m=X("https://gcloud.aoau.top/file/upload"),v={Authorization:On("token")},g=w=>{c.value=w.fileList,i(w.file)},b=w=>(d(w.file),w.file),_=w=>{var L,O;return console.log((L=w.file.file)==null?void 0:L.size),w.file.file&&((O=w.file.file)==null?void 0:O.size)>10*1024*1024?(it("\u5355\u6587\u4EF6\u4E0A\u4F20\u9650\u523610M\u53CA\u4EE5\u5185"),!1):l>=1024*1024*1e3?(it("\u563F\uFF0C\u4F60\u7684\u7A7A\u95F4\u4E0D\u591F\u4E86"),!1):!0},S=w=>(In(`\u4E0A\u4F20\u5931\u8D25\uFF1A${w.file.name}`),w.file),P=w=>{if((event==null?void 0:event.currentTarget).status===200){const L=JSON.parse((event==null?void 0:event.currentTarget).response);L.msg==="success"&&s({repositoryIdentity:L.identity,parentId:f.value.id,ext:L.ext,name:L.name})}return w.file},F=()=>{var w;(w=u.value)==null||w.clear(),d()},y=()=>{},h=({option:w})=>({onClick(){w.path===""&&(f.value=w)}}),{upload_files:R,origin_folders:$}=Ye(o);return kn(t),(w,L)=>(Y(),ne("div",Ri,[W(T(ti),{ref:"upload","file-list":T(R),"onUpdate:file-list":L[1]||(L[1]=O=>Sn(R)?R.value=O:null),action:m.value,headers:v,multiple:"",abstract:"","directory-dnd":"","show-download-button":"",max:e.max,"on-remove":b,"on-error":S,"on-finish":P,"onUpdate:fileList":y,onChange:g,onBeforeUpload:_},{default:Z(()=>[W(T(nt),{abstract:""},{default:Z(({handleClick:O})=>[H("div",{class:Pe(["w-full flex flex-col justify-center items-center text-center bg-gradient-to-t from-green-100 hover:bg-green-100 cursor-pointer transition-all duration-150",[T(R).length<=0?"h-5/6":""]]),onClick:O},[W(T(mt),{class:"animate-pulse w-9 text-gray-500 mt-3"}),H("p",Ti,ce(e.title),1),W(T(Fo),{depth:"3",style:{margin:"8px 0 0 0"}},{default:Z(()=>[be(ce(e.description),1)]),_:1})],10,Pi)]),_:1}),H("div",zi,[W(T(uo),{value:f.value.value,"onUpdate:value":L[0]||(L[0]=O=>f.value.value=O),size:"medium",scrollable:"",trigger:"hover"},{empty:Z(()=>[H("span",Li,ce(T($).length===0?"\u5EFA\u8BAE\u65B0\u5EFA\u6587\u4EF6\u5939":"\u5355\u6587\u4EF6\u4E0A\u4F20\u9650\u523610MB"),1)]),action:Z(()=>[T($).length>0?(Y(),ae(T(r),{key:0,data:T($),"node-props":h},null,8,["data"])):(Y(),ne("div",Fi,"\u53F3\u4FA7\u65B0\u5EFA\u6587\u4EF6\u5939"))]),default:Z(()=>[W(T(se),{quaternary:"",type:"primary",size:"small"},{default:Z(()=>[be(" \u4E0A\u4F20\u5230\uFF1A"+ce(f.value.name),1)]),_:1})]),_:1},8,["value"]),W(T(n),{class:"float-right",folder:f.value},null,8,["folder"])]),W(T(no),{class:"upload-list",accordion:""},{default:Z(()=>[T(R).length>0?(Y(),ae(T(ht),{key:0,name:"1",arrow:!1},{"header-extra":Z(()=>[H("div",Bi,[T(R).length>0?(Y(),ne("svg",$i,[W(T(mt))])):ue("",!0),H("span",Ni,ce(T(R).length),1),T(R).length>0?(Y(),ae(T(se),{key:1,size:"small",onClick:F},{default:Z(()=>[Oi]),_:1})):ue("",!0)])]),header:Z(()=>[Ii]),default:Z(()=>[W(T(He),{style:{"max-height":"95px"},class:"h-54"},{default:Z(()=>[W(T(Vt))]),_:1})]),_:1})):ue("",!0),T(R).length>0?(Y(),ae(T(ht),{key:1,name:"2",arrow:!1},{"header-extra":Z(()=>[Ei]),header:Z(()=>[Di]),_:1})):ue("",!0)]),_:1})]),_:1},8,["file-list","action","max"])]))}});const Ai={class:"main-nav"},ji={class:"flex flex-wrap grid-cols-2 sm:grid-cols-2 mx-3 mt-3 gap-1"},Ui=A({__name:"index",setup(e){const t=Je(),n=["rounded","hover:shadow"];return Ye(t),(r,o)=>{const l=Rn("Vue3Lottie");return Y(),ne("div",Ai,[H("div",ji,[H("div",{class:Pe([...n,"flex items-center flex-1 col-auto transition-all duration-200 ease-in-out"])},[W(Mi,{class:"w-full h-full shadow-sm",title:"\u7ACB\u5373\u4E0A\u4F20"}),W(l,{class:"robot w-1/5 bg-gradient-to-t from-green-100","animation-data":T(Tn)},null,8,["animation-data"])],2),H("div",{class:Pe([...n,"other w-full bg-gradient-to-b from-green-100"])},null,2),H("div",{class:Pe([...n])},null,2)])])}}}),Hi=Tt(Ui,[["__scopeId","data-v-240cfd07"]]);const Vi={class:"home flex"},Ki={class:"file-tree-bar w-60 animate__animated animate__fadeIn faster"},Wi={class:"main-container shadow-inner w-screen z-10"},Gi={key:0,class:"main-nav bg-gray-100 flex items-center shadow"},qi=be(" \u4E0B\u8F7D "),Xi={class:"main-bar flex"},Zi={class:"main-files-bar flex-auto"},Yi=A({__name:"index",setup(e){const t=re(()=>oe(()=>import("./file-menu.0b9c0fbd.js"),["file-menu.0b9c0fbd.js","file-menu.736f5e3a.css","index.090d1b34.js","robot.e45a1a5b.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","date.c25f3370.js","index.13989b66.js","Folder.237eb5ae.js","Input.6483b170.js","index.a1c9fab8.js","Eye.80ba4262.js","Tree.2da8011b.js","Checkbox.b58d1322.js","Skeleton.885738e7.js","Scrollbar.0b118b5e.js","Tag.e096baa9.js"],import.meta.url)),n=re(()=>oe(()=>import("./overview.abd3332a.js"),["overview.abd3332a.js","overview.f43eac12.css","index.090d1b34.js","robot.e45a1a5b.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","date.c25f3370.js","NumberAnimation.e23131a0.js","Divider.c2b567d7.js","Skeleton.885738e7.js","index.a1c9fab8.js","Scrollbar.0b118b5e.js","Eye.80ba4262.js","Tag.e096baa9.js"],import.meta.url)),r=re(()=>oe(()=>import("./community-status.c84be49e.js"),["community-status.c84be49e.js","index.090d1b34.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","Divider.c2b567d7.js","NumberAnimation.e23131a0.js","Skeleton.885738e7.js","index.a1c9fab8.js"],import.meta.url)),o=re(()=>oe(()=>import("./file-list.e12390fe.js"),["file-list.e12390fe.js","file-list.d2969fd1.css","index.090d1b34.js","robot.e45a1a5b.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","date.c25f3370.js","index.a1c9fab8.js","Checkbox.b58d1322.js","Scrollbar.0b118b5e.js","Input.6483b170.js","Eye.80ba4262.js","Dropdown.a9b19800.js","Tag.e096baa9.js","attribute.dd679ec7.js","index.20db2190.js"],import.meta.url)),l=re(()=>oe(()=>import("./file-graphical.28432573.js"),["file-graphical.28432573.js","file-graphical.afec0b03.css","index.090d1b34.js","robot.e45a1a5b.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","date.c25f3370.js","Folder.237eb5ae.js","FileTraySharp.0a315314.js","Scrollbar.0b118b5e.js","Skeleton.885738e7.js","index.a1c9fab8.js"],import.meta.url)),i=re(()=>oe(()=>import("./file-detail.cb6d7fee.js"),["file-detail.cb6d7fee.js","file-detail.d0434828.css","index.090d1b34.js","robot.e45a1a5b.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","date.c25f3370.js","Tag.e096baa9.js","Card.78ffe8ba.js","index.a1c9fab8.js","Eye.80ba4262.js","Folder.237eb5ae.js","FileTraySharp.0a315314.js","Scrollbar.0b118b5e.js","Skeleton.885738e7.js"],import.meta.url)),d=re(()=>oe(()=>import("./file-folder-route.332b9463.js"),["file-folder-route.332b9463.js","robot.e45a1a5b.js","index.090d1b34.js","index.5e4b8f88.js","color-to-class.6a5641e4.js","date.c25f3370.js"],import.meta.url)),s=re(()=>oe(()=>import("./index.13989b66.js"),["index.13989b66.js","index.090d1b34.js","index.5e4b8f88.js","color-to-class.6a5641e4.js"],import.meta.url)),u=Je(),{onGetFileList:c,onAddToFolderRoutes:f,onRemoveFromFolderRoutes:m,onJumpToFile:v,onDeleteFile:g}=zt(),b=X(),_=X("graphical"),S=X(),P=X([]),F=p=>{p&&(v(p),S.value=p)},y=p=>{p&&(f(p),b.value=p,S.value=p)},h=p=>{P.value=p},R=p=>{p&&P.value.length>0&&g(P.value)},$=()=>{m()},G=()=>{_.value=_.value==="list"?"graphical":"list"},{folder_routes:C,files_size:N}=Ye(u);return(p,w)=>(Y(),ne("div",Vi,[H("div",Ki,[W(T(He),{style:{"max-height":"calc(100vh - 60px)"}},{default:Z(()=>[W(T(t),{onSelectedKeys:F,onExpandedKeys:y,onCheckedKeys:h,onDelete:R}),W(T(n)),W(T(r))]),_:1})]),H("div",Wi,[T(C).length>1?(Y(),ne("div",Gi,[W(T(s),{class:"px-3",size:"small",onClick:$},{default:Z(()=>[W(T(di),{class:"w-4"})]),_:1}),W(T(se),{class:"px-1",size:"small",onClick:G},{icon:Z(()=>[_.value==="list"?(Y(),ae(T(ii),{key:0})):(Y(),ae(T(bi),{key:1}))]),_:1}),W(T(se),{class:"px-1",size:"small",onClick:T(c)},{icon:Z(()=>[W(T(Si))]),_:1},8,["onClick"]),W(T(se),{class:"mr-3 px-2 text-xs",size:"small",type:P.value.length>0?"primary":"default"},{default:Z(()=>[qi]),_:1},8,["type"]),W(T(d),{routes:T(C)},null,8,["routes"]),W(T(Zn),{bordered:!1,size:"small",type:"info"},{default:Z(()=>{var L,O;return[be(" \u5171"+ce(T(C).at(-1).size===-1?`${T(vt)(T(N))}`:`${T(vt)(T(C).at(-1).size)}`)+" ("+ce((O=(L=T(C).at(-1))==null?void 0:L.children)==null?void 0:O.length)+") ",1)]}),_:1})])):ue("",!0),H("div",Xi,[H("div",Zi,[W(T(He),{style:{"max-height":"calc(100vh - 60px)"}},{default:Z(()=>[_.value==="list"&&T(C).length>1?(Y(),ae(T(o),{key:0,values:T(C).at(-1),onSelectedKeys:F,onExpandedKeys:y},null,8,["values"])):_.value==="graphical"&&T(C).length>1?(Y(),ae(T(l),{key:1,values:T(C).at(-1),onSelectedKeys:F,onExpandedKeys:y},null,8,["values"])):ue("",!0),T(C).length===1?(Y(),ae(Hi,{key:2})):ue("",!0)]),_:1})]),wt(W(T(i),{class:"flex-none",file:S.value},null,8,["file"]),[[Ct,S.value&&T(C).length>1]])])])]))}}),Ji=Tt(Yi,[["__scopeId","data-v-4f295efe"]]),cl=Object.freeze(Object.defineProperty({__proto__:null,default:Ji},Symbol.toStringTag,{value:"Module"}));export{lr as C,Hr as N,tr as V,Mi as _,kr as a,To as b,Er as c,dl as d,Nt as e,Or as f,sl as g,Ke as h,Ot as i,Xr as j,Zr as k,Dt as l,uo as m,Yn as n,cl as o,al as p,vt as t,nr as u};
