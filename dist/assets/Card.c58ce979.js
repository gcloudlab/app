import{l as U,b as t,f as v,bd as X,g as d,j as n,p as Y,q as Z,d as oo,s as eo,x as P,D as ro,c as w,y as $,z as to,h as i,K as no}from"./index.af57445c.js";import{g as ao}from"./index.a1c9fab8.js";import{r as p,b as lo}from"./color-to-class.0332f98b.js";import{k as io}from"./Eye.6d434294.js";const so={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"},co=r=>{const{primaryColor:m,borderRadius:b,lineHeight:o,fontSize:s,cardColor:c,textColor2:f,textColor1:a,dividerColor:e,fontWeightStrong:l,closeIconColor:h,closeIconColorHover:u,closeIconColorPressed:x,closeColorHover:z,closeColorPressed:C,modalColor:S,boxShadow1:y,popoverColor:k,actionColor:g}=r;return Object.assign(Object.assign({},so),{lineHeight:o,color:c,colorModal:S,colorPopover:k,colorTarget:m,colorEmbedded:g,colorEmbeddedModal:g,colorEmbeddedPopover:g,textColor:f,titleTextColor:a,borderColor:e,actionColor:g,titleFontWeight:l,closeColorHover:z,closeColorPressed:C,closeBorderRadius:b,closeIconColor:h,closeIconColorHover:u,closeIconColorPressed:x,fontSizeSmall:s,fontSizeMedium:s,fontSizeLarge:s,fontSizeHuge:s,boxShadow:y,borderRadius:b})},bo={name:"Card",common:U,self:co},go=bo,po=t([v("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[X({background:"var(--n-color-modal)"}),d("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),d("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),d("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),d("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),d("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[v("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),v("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),d("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),d("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Y(v("card",`
 background: var(--n-color-modal);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Z(v("card",`
 background: var(--n-color-popover);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),T={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},xo=io(T),mo=Object.assign(Object.assign({},P.props),T),zo=oo({name:"Card",props:mo,setup(r){const m=()=>{const{onClose:l}=r;l&&lo(l)},{inlineThemeDisabled:b,mergedClsPrefixRef:o,mergedRtlRef:s}=eo(r),c=P("Card","-card",po,go,r,o),f=ro("Card",s,o),a=w(()=>{const{size:l}=r,{self:{color:h,colorModal:u,colorTarget:x,textColor:z,titleTextColor:C,titleFontWeight:S,borderColor:y,actionColor:k,borderRadius:g,lineHeight:R,closeIconColor:B,closeIconColorHover:E,closeIconColorPressed:_,closeColorHover:M,closeColorPressed:O,closeBorderRadius:j,closeIconSize:H,closeSize:F,boxShadow:I,colorPopover:L,colorEmbedded:V,colorEmbeddedModal:W,colorEmbeddedPopover:K,[$("padding",l)]:N,[$("fontSize",l)]:D,[$("titleFontSize",l)]:q},common:{cubicBezierEaseInOut:A}}=c.value,{top:G,left:J,bottom:Q}=ao(N);return{"--n-bezier":A,"--n-border-radius":g,"--n-color":h,"--n-color-modal":u,"--n-color-popover":L,"--n-color-embedded":V,"--n-color-embedded-modal":W,"--n-color-embedded-popover":K,"--n-color-target":x,"--n-text-color":z,"--n-line-height":R,"--n-action-color":k,"--n-title-text-color":C,"--n-title-font-weight":S,"--n-close-icon-color":B,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":_,"--n-close-color-hover":M,"--n-close-color-pressed":O,"--n-border-color":y,"--n-box-shadow":I,"--n-padding-top":G,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":D,"--n-title-font-size":q,"--n-close-size":F,"--n-close-icon-size":H,"--n-close-border-radius":j}}),e=b?to("card",w(()=>r.size[0]),a,r):void 0;return{rtlEnabled:f,mergedClsPrefix:o,mergedTheme:c,handleCloseClick:m,cssVars:b?void 0:a,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){const{segmented:r,bordered:m,hoverable:b,mergedClsPrefix:o,rtlEnabled:s,onRender:c,embedded:f,$slots:a}=this;return c==null||c(),i("div",{class:[`${o}-card`,this.themeClass,f&&`${o}-card--embedded`,{[`${o}-card--rtl`]:s,[`${o}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${o}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${o}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${o}-card--bordered`]:m,[`${o}-card--hoverable`]:b}],style:this.cssVars,role:this.role},p(a.cover,e=>e&&i("div",{class:`${o}-card-cover`,role:"none"},e)),p(a.header,e=>e||this.title||this.closable?i("div",{class:`${o}-card-header`,style:this.headerStyle},i("div",{class:`${o}-card-header__main`,role:"heading"},e||this.title),p(a["header-extra"],l=>l&&i("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},l)),this.closable?i(no,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),p(a.default,e=>e&&i("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},e)),p(a.footer,e=>e&&[i("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},e)]),p(a.action,e=>e&&i("div",{class:`${o}-card__action`,role:"none"},e)))}});export{zo as N,T as a,xo as b,go as c};
