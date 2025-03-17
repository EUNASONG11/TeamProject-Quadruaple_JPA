import{r as l,D as ie,ag as Y,v as rt,au as He,l as ee,w as ot,c0 as $e,ae as Ce,ah as X,bd as lt,c1 as at,c2 as st,c3 as it,ax as ct,b1 as ut,c4 as dt,c5 as ft,bR as mt,c6 as pt,c7 as Ae,c8 as re,c9 as gt,aD as ht,aw as fe,al as Ie,bn as bt,ay as yt,bT as $t,ca as Ee,cb as Ct,F as De,am as xt,ak as vt,y as wt,bV as St,bU as Ot,aG as It,aI as Et,bp as Ft,af as jt,cc as qe,cd as Mt,ce as Nt,bP as Pt,cf as Rt,ba as _t,aZ as Vt,bl as Lt,cg as Tt,ch as zt}from"./index-BimvysYt.js";import{i as Fe}from"./motion-DYW1fBvL.js";import{g as Wt}from"./collapse-BbEVqHco.js";import{z as Be}from"./zoom-C5LY8eIZ.js";import{u as Ht,r as me}from"./responsiveObserver-Cnio7K9H.js";import{u as At,a as Dt}from"./index-CGcwtSLS.js";import{T as qt}from"./index-CqxRxLoj.js";import{u as Bt}from"./useLocale-DPSLmQeZ.js";const je=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Me=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",ue=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return Me(r.overflowY,t)||Me(r.overflowX,t)||(n=>{const o=(a=>{if(!a.ownerDocument||!a.ownerDocument.defaultView)return null;try{return a.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!o&&(o.clientHeight<n.scrollHeight||o.clientWidth<n.scrollWidth)})(e)}return!1},de=(e,t,r,n,o,a,s,u)=>a<e&&s>t||a>e&&s<t?0:a<=e&&u<=r||s>=t&&u>=r?a-e-n:s>t&&u<r||a<e&&u>r?s-t+o:0,Gt=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Ne=(e,t)=>{var r,n,o,a;if(typeof document>"u")return[];const{scrollMode:s,block:u,inline:c,boundary:m,skipOverflowHiddenElements:O}=t,y=typeof m=="function"?m:A=>A!==m;if(!je(e))throw new TypeError("Invalid target");const I=document.scrollingElement||document.documentElement,R=[];let v=e;for(;je(v)&&y(v);){if(v=Gt(v),v===I){R.push(v);break}v!=null&&v===document.body&&ue(v)&&!ue(document.documentElement)||v!=null&&ue(v,O)&&R.push(v)}const w=(n=(r=window.visualViewport)==null?void 0:r.width)!=null?n:innerWidth,E=(a=(o=window.visualViewport)==null?void 0:o.height)!=null?a:innerHeight,{scrollX:f,scrollY:N}=window,{height:i,width:h,top:p,right:b,bottom:_,left:x}=e.getBoundingClientRect(),{top:$,right:g,bottom:P,left:H}=(A=>{const d=window.getComputedStyle(A);return{top:parseFloat(d.scrollMarginTop)||0,right:parseFloat(d.scrollMarginRight)||0,bottom:parseFloat(d.scrollMarginBottom)||0,left:parseFloat(d.scrollMarginLeft)||0}})(e);let j=u==="start"||u==="nearest"?p-$:u==="end"?_+P:p+i/2-$+P,S=c==="center"?x+h/2-H+g:c==="end"?b+g:x-H;const L=[];for(let A=0;A<R.length;A++){const d=R[A],{height:T,width:F,top:q,right:z,bottom:B,left:U}=d.getBoundingClientRect();if(s==="if-needed"&&p>=0&&x>=0&&_<=E&&b<=w&&(d===I&&!ue(d)||p>=q&&_<=B&&x>=U&&b<=z))return L;const te=getComputedStyle(d),J=parseInt(te.borderLeftWidth,10),G=parseInt(te.borderTopWidth,10),C=parseInt(te.borderRightWidth,10),V=parseInt(te.borderBottomWidth,10);let M=0,D=0;const k="offsetWidth"in d?d.offsetWidth-d.clientWidth-J-C:0,Q="offsetHeight"in d?d.offsetHeight-d.clientHeight-G-V:0,oe="offsetWidth"in d?d.offsetWidth===0?0:F/d.offsetWidth:0,ne="offsetHeight"in d?d.offsetHeight===0?0:T/d.offsetHeight:0;if(I===d)M=u==="start"?j:u==="end"?j-E:u==="nearest"?de(N,N+E,E,G,V,N+j,N+j+i,i):j-E/2,D=c==="start"?S:c==="center"?S-w/2:c==="end"?S-w:de(f,f+w,w,J,C,f+S,f+S+h,h),M=Math.max(0,M+N),D=Math.max(0,D+f);else{M=u==="start"?j-q-G:u==="end"?j-B+V+Q:u==="nearest"?de(q,B,T,G,V+Q,j,j+i,i):j-(q+T/2)+Q/2,D=c==="start"?S-U-J:c==="center"?S-(U+F/2)+k/2:c==="end"?S-z+C+k:de(U,z,F,J,C+k,S,S+h,h);const{scrollLeft:W,scrollTop:Z}=d;M=ne===0?0:Math.max(0,Math.min(Z+M/ne,d.scrollHeight-T/ne+Q)),D=oe===0?0:Math.max(0,Math.min(W+D/oe,d.scrollWidth-F/oe+k)),j+=Z-M,S+=W-D}L.push({el:d,top:M,left:D})}return L},kt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Xt(e,t){if(!e.isConnected||!(o=>{let a=o;for(;a&&a.parentNode;){if(a.parentNode===document)return!0;a=a.parentNode instanceof ShadowRoot?a.parentNode.host:a.parentNode}return!1})(e))return;const r=(o=>{const a=window.getComputedStyle(o);return{top:parseFloat(a.scrollMarginTop)||0,right:parseFloat(a.scrollMarginRight)||0,bottom:parseFloat(a.scrollMarginBottom)||0,left:parseFloat(a.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Ne(e,t));const n=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:a,left:s}of Ne(e,kt(t))){const u=a-r.top+r.bottom,c=s-r.left+r.right;o.scroll({top:u,left:c,behavior:n})}}const Ge=l.createContext({});var Kt=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Pe(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const Yt=["xs","sm","md","lg","xl","xxl"],ke=l.forwardRef((e,t)=>{const{getPrefixCls:r,direction:n}=l.useContext(ie),{gutter:o,wrap:a}=l.useContext(Ge),{prefixCls:s,span:u,order:c,offset:m,push:O,pull:y,className:I,children:R,flex:v,style:w}=e,E=Kt(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),f=r("col",s),[N,i,h]=At(f),p={};let b={};Yt.forEach($=>{let g={};const P=e[$];typeof P=="number"?g.span=P:typeof P=="object"&&(g=P||{}),delete E[$],b=Object.assign(Object.assign({},b),{[`${f}-${$}-${g.span}`]:g.span!==void 0,[`${f}-${$}-order-${g.order}`]:g.order||g.order===0,[`${f}-${$}-offset-${g.offset}`]:g.offset||g.offset===0,[`${f}-${$}-push-${g.push}`]:g.push||g.push===0,[`${f}-${$}-pull-${g.pull}`]:g.pull||g.pull===0,[`${f}-rtl`]:n==="rtl"}),g.flex&&(b[`${f}-${$}-flex`]=!0,p[`--${f}-${$}-flex`]=Pe(g.flex))});const _=Y(f,{[`${f}-${u}`]:u!==void 0,[`${f}-order-${c}`]:c,[`${f}-offset-${m}`]:m,[`${f}-push-${O}`]:O,[`${f}-pull-${y}`]:y},I,b,i,h),x={};if(o&&o[0]>0){const $=o[0]/2;x.paddingLeft=$,x.paddingRight=$}return v&&(x.flex=Pe(v),a===!1&&!x.minWidth&&(x.minWidth=0)),N(l.createElement("div",Object.assign({},E,{style:Object.assign(Object.assign(Object.assign({},x),w),p),className:_,ref:t}),R))});var Ut=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Re(e,t){const[r,n]=l.useState(typeof e=="string"?e:""),o=()=>{if(typeof e=="string"&&n(e),typeof e=="object")for(let a=0;a<me.length;a++){const s=me[a];if(!t[s])continue;const u=e[s];if(u!==void 0){n(u);return}}};return l.useEffect(()=>{o()},[JSON.stringify(e),t]),r}const Jt=l.forwardRef((e,t)=>{const{prefixCls:r,justify:n,align:o,className:a,style:s,children:u,gutter:c=0,wrap:m}=e,O=Ut(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:y,direction:I}=l.useContext(ie),[R,v]=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[w,E]=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),f=Re(o,w),N=Re(n,w),i=l.useRef(c),h=Ht();l.useEffect(()=>{const d=h.subscribe(T=>{E(T);const F=i.current||0;(!Array.isArray(F)&&typeof F=="object"||Array.isArray(F)&&(typeof F[0]=="object"||typeof F[1]=="object"))&&v(T)});return()=>h.unsubscribe(d)},[]);const p=()=>{const d=[void 0,void 0];return(Array.isArray(c)?c:[c,void 0]).forEach((F,q)=>{if(typeof F=="object")for(let z=0;z<me.length;z++){const B=me[z];if(R[B]&&F[B]!==void 0){d[q]=F[B];break}}else d[q]=F}),d},b=y("row",r),[_,x,$]=Dt(b),g=p(),P=Y(b,{[`${b}-no-wrap`]:m===!1,[`${b}-${N}`]:N,[`${b}-${f}`]:f,[`${b}-rtl`]:I==="rtl"},a,x,$),H={},j=g[0]!=null&&g[0]>0?g[0]/-2:void 0;j&&(H.marginLeft=j,H.marginRight=j);const[S,L]=g;H.rowGap=L;const A=l.useMemo(()=>({gutter:[S,L],wrap:m}),[S,L,m]);return _(l.createElement(Ge.Provider,{value:A},l.createElement("div",Object.assign({},O,{className:P,style:Object.assign(Object.assign({},H),s),ref:t}),u)))});function pe(e){const[t,r]=l.useState(e);return l.useEffect(()=>{const n=setTimeout(()=>{r(e)},e.length?0:10);return()=>{clearTimeout(n)}},[e]),t}const Qt=e=>{const{componentCls:t}=e,r=`${t}-show-help`,n=`${t}-show-help-item`;return{[r]:{transition:`opacity ${e.motionDurationFast} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationFast} ${e.motionEaseInOut},
                     opacity ${e.motionDurationFast} ${e.motionEaseInOut},
                     transform ${e.motionDurationFast} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},Zt=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${ee(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),_e=(e,t)=>{const{formItemCls:r}=e;return{[r]:{[`${r}-label > label`]:{height:t},[`${r}-control-input`]:{minHeight:t}}}},en=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},He(e)),Zt(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},_e(e,e.controlHeightSM)),"&-large":Object.assign({},_e(e,e.controlHeightLG))})}},tn=e=>{const{formItemCls:t,iconCls:r,componentCls:n,rootPrefixCls:o,antCls:a,labelRequiredMarkColor:s,labelColor:u,labelFontSize:c,labelHeight:m,labelColonMarginInlineStart:O,labelColonMarginInlineEnd:y,itemMarginBottom:I}=e;return{[t]:Object.assign(Object.assign({},He(e)),{marginBottom:I,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden${a}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:m,color:u,fontSize:c,[`> ${r}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:s,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:O,marginInlineEnd:y},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-additional":{display:"flex",flexDirection:"column"},"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:Be,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Ve=(e,t)=>{const{formItemCls:r}=e;return{[`${t}-horizontal`]:{[`${r}-label`]:{flexGrow:0},[`${r}-control`]:{flex:"1 1 0",minWidth:0},[`${r}-label[class$='-24'], ${r}-label[class*='-24 ']`]:{[`& + ${r}-control`]:{minWidth:"unset"}}}}},nn=e=>{const{componentCls:t,formItemCls:r,inlineItemMarginBottom:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[r]:{flex:"none",marginInlineEnd:e.margin,marginBottom:n,"&-row":{flexWrap:"nowrap"},[`> ${r}-label,
        > ${r}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${r}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${r}-has-feedback`]:{display:"inline-block"}}}}},K=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),Xe=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${r} ${r}-label`]:K(e),[`${t}:not(${t}-inline)`]:{[r]:{flexWrap:"wrap",[`${r}-label, ${r}-control`]:{[`&:not([class*=" ${n}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},rn=e=>{const{componentCls:t,formItemCls:r,antCls:n}=e;return{[`${t}-vertical`]:{[`${r}:not(${r}-horizontal)`]:{[`${r}-row`]:{flexDirection:"column"},[`${r}-label > label`]:{height:"auto"},[`${r}-control`]:{width:"100%"},[`${r}-label,
        ${n}-col-24${r}-label,
        ${n}-col-xl-24${r}-label`]:K(e)}},[`@media (max-width: ${ee(e.screenXSMax)})`]:[Xe(e),{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-xs-24${r}-label`]:K(e)}}}],[`@media (max-width: ${ee(e.screenSMMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-sm-24${r}-label`]:K(e)}}},[`@media (max-width: ${ee(e.screenMDMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-md-24${r}-label`]:K(e)}}},[`@media (max-width: ${ee(e.screenLGMax)})`]:{[t]:{[`${r}:not(${r}-horizontal)`]:{[`${n}-col-lg-24${r}-label`]:K(e)}}}}},on=e=>{const{formItemCls:t,antCls:r}=e;return{[`${t}-vertical`]:{[`${t}-row`]:{flexDirection:"column"},[`${t}-label > label`]:{height:"auto"},[`${t}-control`]:{width:"100%"}},[`${t}-vertical ${t}-label,
      ${r}-col-24${t}-label,
      ${r}-col-xl-24${t}-label`]:K(e),[`@media (max-width: ${ee(e.screenXSMax)})`]:[Xe(e),{[t]:{[`${r}-col-xs-24${t}-label`]:K(e)}}],[`@media (max-width: ${ee(e.screenSMMax)})`]:{[t]:{[`${r}-col-sm-24${t}-label`]:K(e)}},[`@media (max-width: ${ee(e.screenMDMax)})`]:{[t]:{[`${r}-col-md-24${t}-label`]:K(e)}},[`@media (max-width: ${ee(e.screenLGMax)})`]:{[t]:{[`${r}-col-lg-24${t}-label`]:K(e)}}}},ln=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0,inlineItemMarginBottom:0}),Ke=(e,t)=>ot(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),xe=rt("Form",(e,t)=>{let{rootPrefixCls:r}=t;const n=Ke(e,r);return[en(n),tn(n),Qt(n),Ve(n,n.componentCls),Ve(n,n.formItemCls),nn(n),rn(n),on(n),Wt(n),Be]},ln,{order:-1e3}),Le=[];function ye(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${n}`,error:e,errorStatus:r}}const Ye=e=>{let{help:t,helpStatus:r,errors:n=Le,warnings:o=Le,className:a,fieldId:s,onVisibleChanged:u}=e;const{prefixCls:c}=l.useContext($e),m=`${c}-item-explain`,O=Ce(c),[y,I,R]=xe(c,O),v=l.useMemo(()=>Fe(c),[c]),w=pe(n),E=pe(o),f=l.useMemo(()=>t!=null?[ye(t,"help",r)]:[].concat(X(w.map((h,p)=>ye(h,"error","error",p))),X(E.map((h,p)=>ye(h,"warning","warning",p)))),[t,r,w,E]),N=l.useMemo(()=>{const h={};return f.forEach(p=>{let{key:b}=p;h[b]=(h[b]||0)+1}),f.map((p,b)=>Object.assign(Object.assign({},p),{key:h[p.key]>1?`${p.key}-fallback-${b}`:p.key}))},[f]),i={};return s&&(i.id=`${s}_help`),y(l.createElement(lt,{motionDeadline:v.motionDeadline,motionName:`${c}-show-help`,visible:!!N.length,onVisibleChanged:u},h=>{const{className:p,style:b}=h;return l.createElement("div",Object.assign({},i,{className:Y(m,p,R,O,a,I),style:b,role:"alert"}),l.createElement(at,Object.assign({keys:N},Fe(c),{motionName:`${c}-show-help-item`,component:!1}),_=>{const{key:x,error:$,errorStatus:g,className:P,style:H}=_;return l.createElement("div",{key:x,className:Y(P,{[`${m}-${g}`]:g}),style:H},$)}))}))},an=["parentNode"],sn="form_item";function se(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ue(e,t){if(!e.length)return;const r=e.join("_");return t?`${t}_${r}`:an.includes(r)?`${sn}_${r}`:r}function Je(e,t,r,n,o,a){let s=n;return a!==void 0?s=a:r.validating?s="validating":e.length?s="error":t.length?s="warning":(r.touched||o&&r.validated)&&(s="success"),s}function Te(e){return se(e).join("_")}function ze(e,t){const r=t.getFieldInstance(e),n=it(r);if(n)return n;const o=Ue(se(e),t.__INTERNAL__.name);if(o)return document.getElementById(o)}function Qe(e){const[t]=st(),r=l.useRef({}),n=l.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>a=>{const s=Te(o);a?r.current[s]=a:delete r.current[s]}},scrollToField:function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=ze(o,n);s&&Xt(s,Object.assign({scrollMode:"if-needed",block:"nearest"},a))},focusField:o=>{var a;const s=ze(o,n);s&&((a=s.focus)===null||a===void 0||a.call(s))},getFieldInstance:o=>{const a=Te(o);return r.current[a]}}),[e,t]);return[n]}var cn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const un=(e,t)=>{const r=l.useContext(ct),{getPrefixCls:n,direction:o,form:a}=l.useContext(ie),{prefixCls:s,className:u,rootClassName:c,size:m,disabled:O=r,form:y,colon:I,labelAlign:R,labelWrap:v,labelCol:w,wrapperCol:E,hideRequiredMark:f,layout:N="horizontal",scrollToFirstError:i,requiredMark:h,onFinishFailed:p,name:b,style:_,feedbackIcons:x,variant:$}=e,g=cn(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),P=ut(m),H=l.useContext(dt),j=l.useMemo(()=>h!==void 0?h:f?!1:a&&a.requiredMark!==void 0?a.requiredMark:!0,[f,h,a]),S=I??(a==null?void 0:a.colon),L=n("form",s),A=Ce(L),[d,T,F]=xe(L,A),q=Y(L,`${L}-${N}`,{[`${L}-hide-required-mark`]:j===!1,[`${L}-rtl`]:o==="rtl",[`${L}-${P}`]:P},F,A,T,a==null?void 0:a.className,u,c),[z]=Qe(y),{__INTERNAL__:B}=z;B.name=b;const U=l.useMemo(()=>({name:b,labelAlign:R,labelCol:w,labelWrap:v,wrapperCol:E,vertical:N==="vertical",colon:S,requiredMark:j,itemRef:B.itemRef,form:z,feedbackIcons:x}),[b,R,w,E,N,S,j,z,x]),te=l.useRef(null);l.useImperativeHandle(t,()=>{var C;return Object.assign(Object.assign({},z),{nativeElement:(C=te.current)===null||C===void 0?void 0:C.nativeElement})});const J=(C,V)=>{if(C){let M={block:"nearest"};typeof C=="object"&&(M=Object.assign(Object.assign({},M),C)),z.scrollToField(V,M),M.focus&&z.focusField(V)}},G=C=>{if(p==null||p(C),C.errorFields.length){const V=C.errorFields[0].name;if(i!==void 0){J(i,V);return}a&&a.scrollToFirstError!==void 0&&J(a.scrollToFirstError,V)}};return d(l.createElement(ft.Provider,{value:$},l.createElement(mt,{disabled:O},l.createElement(pt.Provider,{value:P},l.createElement(Ae,{validateMessages:H},l.createElement(re.Provider,{value:U},l.createElement(gt,Object.assign({id:b},g,{name:b,onFinishFailed:G,form:z,ref:te,style:Object.assign(Object.assign({},a==null?void 0:a.style),_),className:q}))))))))},dn=l.forwardRef(un);function fn(e){if(typeof e=="function")return e;const t=ht(e);return t.length<=1?t[0]:t}const Ze=()=>{const{status:e,errors:t=[],warnings:r=[]}=l.useContext(fe);return{status:e,errors:t,warnings:r}};Ze.Context=fe;function mn(e){const[t,r]=l.useState(e),n=l.useRef(null),o=l.useRef([]),a=l.useRef(!1);l.useEffect(()=>(a.current=!1,()=>{a.current=!0,Ie.cancel(n.current),n.current=null}),[]);function s(u){a.current||(n.current===null&&(o.current=[],n.current=Ie(()=>{n.current=null,r(c=>{let m=c;return o.current.forEach(O=>{m=O(m)}),m})})),o.current.push(u))}return[t,s]}function pn(){const{itemRef:e}=l.useContext(re),t=l.useRef({});function r(n,o){const a=o&&typeof o=="object"&&bt(o),s=n.join("_");return(t.current.name!==s||t.current.originRef!==a)&&(t.current.name=s,t.current.originRef=a,t.current.ref=yt(e(n),a)),t.current.ref}return r}const gn=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},hn=$t(["Form","item-item"],(e,t)=>{let{rootPrefixCls:r}=t;const n=Ke(e,r);return[gn(n)]});var bn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const yn=24,$n=e=>{const{prefixCls:t,status:r,labelCol:n,wrapperCol:o,children:a,errors:s,warnings:u,_internalItemRender:c,extra:m,help:O,fieldId:y,marginBottom:I,onErrorVisibleChanged:R,label:v}=e,w=`${t}-item`,E=l.useContext(re),f=l.useMemo(()=>{let S=Object.assign({},o||E.wrapperCol||{});return v===null&&!n&&!o&&E.labelCol&&[void 0,"xs","sm","md","lg","xl","xxl"].forEach(A=>{const d=A?[A]:[],T=Ee(E.labelCol,d),F=typeof T=="object"?T:{},q=Ee(S,d),z=typeof q=="object"?q:{};"span"in F&&!("offset"in z)&&F.span<yn&&(S=Ct(S,[].concat(d,["offset"]),F.span))}),S},[o,E]),N=Y(`${w}-control`,f.className),i=l.useMemo(()=>bn(E,["labelCol","wrapperCol"]),[E]),h=l.useRef(null),[p,b]=l.useState(0);De(()=>{m&&h.current?b(h.current.clientHeight):b(0)},[m]);const _=l.createElement("div",{className:`${w}-control-input`},l.createElement("div",{className:`${w}-control-input-content`},a)),x=l.useMemo(()=>({prefixCls:t,status:r}),[t,r]),$=I!==null||s.length||u.length?l.createElement($e.Provider,{value:x},l.createElement(Ye,{fieldId:y,errors:s,warnings:u,help:O,helpStatus:r,className:`${w}-explain-connected`,onVisibleChanged:R})):null,g={};y&&(g.id=`${y}_extra`);const P=m?l.createElement("div",Object.assign({},g,{className:`${w}-extra`,ref:h}),m):null,H=$||P?l.createElement("div",{className:`${w}-additional`,style:I?{minHeight:I+p}:{}},$,P):null,j=c&&c.mark==="pro_table_render"&&c.render?c.render(e,{input:_,errorList:$,extra:P}):l.createElement(l.Fragment,null,_,H);return l.createElement(re.Provider,{value:i},l.createElement(ke,Object.assign({},f,{className:N}),j),l.createElement(hn,{prefixCls:t}))};var Cn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},xn=function(t,r){return l.createElement(xt,vt({},t,{ref:r,icon:Cn}))},vn=l.forwardRef(xn),wn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Sn(e){return e?typeof e=="object"&&!l.isValidElement(e)?e:{title:e}:null}const On=e=>{let{prefixCls:t,label:r,htmlFor:n,labelCol:o,labelAlign:a,colon:s,required:u,requiredMark:c,tooltip:m,vertical:O}=e;var y;const[I]=Bt("Form"),{labelAlign:R,labelCol:v,labelWrap:w,colon:E}=l.useContext(re);if(!r)return null;const f=o||v||{},N=a||R,i=`${t}-item-label`,h=Y(i,N==="left"&&`${i}-left`,f.className,{[`${i}-wrap`]:!!w});let p=r;const b=s===!0||E!==!1&&s!==!1;b&&!O&&typeof r=="string"&&r.trim()&&(p=r.replace(/[:|：]\s*$/,""));const x=Sn(m);if(x){const{icon:H=l.createElement(vn,null)}=x,j=wn(x,["icon"]),S=l.createElement(qt,Object.assign({},j),l.cloneElement(H,{className:`${t}-item-tooltip`,title:"",onClick:L=>{L.preventDefault()},tabIndex:null}));p=l.createElement(l.Fragment,null,p,S)}const $=c==="optional",g=typeof c=="function";g?p=c(p,{required:!!u}):$&&!u&&(p=l.createElement(l.Fragment,null,p,l.createElement("span",{className:`${t}-item-optional`,title:""},(I==null?void 0:I.optional)||((y=wt.Form)===null||y===void 0?void 0:y.optional))));const P=Y({[`${t}-item-required`]:u,[`${t}-item-required-mark-optional`]:$||g,[`${t}-item-no-colon`]:!b});return l.createElement(ke,Object.assign({},f,{className:h}),l.createElement("label",{htmlFor:n,className:P,title:typeof r=="string"?r:""},p))},In={success:St,warning:Ot,error:It,validating:Et};function et(e){let{children:t,errors:r,warnings:n,hasFeedback:o,validateStatus:a,prefixCls:s,meta:u,noStyle:c}=e;const m=`${s}-item`,{feedbackIcons:O}=l.useContext(re),y=Je(r,n,u,null,!!o,a),{isFormItemInput:I,status:R,hasFeedback:v,feedbackIcon:w}=l.useContext(fe),E=l.useMemo(()=>{var f;let N;if(o){const h=o!==!0&&o.icons||O,p=y&&((f=h==null?void 0:h({status:y,errors:r,warnings:n}))===null||f===void 0?void 0:f[y]),b=y&&In[y];N=p!==!1&&b?l.createElement("span",{className:Y(`${m}-feedback-icon`,`${m}-feedback-icon-${y}`)},p||l.createElement(b,null)):null}const i={status:y||"",errors:r,warnings:n,hasFeedback:!!o,feedbackIcon:N,isFormItemInput:!0};return c&&(i.status=(y??R)||"",i.isFormItemInput=I,i.hasFeedback=!!(o??v),i.feedbackIcon=o!==void 0?i.feedbackIcon:w),i},[y,o,c,I,R]);return l.createElement(fe.Provider,{value:E},t)}var En=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Fn(e){const{prefixCls:t,className:r,rootClassName:n,style:o,help:a,errors:s,warnings:u,validateStatus:c,meta:m,hasFeedback:O,hidden:y,children:I,fieldId:R,required:v,isRequired:w,onSubItemMetaChange:E,layout:f}=e,N=En(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange","layout"]),i=`${t}-item`,{requiredMark:h,vertical:p}=l.useContext(re),b=p||f==="vertical",_=l.useRef(null),x=pe(s),$=pe(u),g=a!=null,P=!!(g||s.length||u.length),H=!!_.current&&Ft(_.current),[j,S]=l.useState(null);De(()=>{if(P&&_.current){const F=getComputedStyle(_.current);S(parseInt(F.marginBottom,10))}},[P,H]);const L=F=>{F||S(null)},d=function(){let F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const q=F?x:m.errors,z=F?$:m.warnings;return Je(q,z,m,"",!!O,c)}(),T=Y(i,r,n,{[`${i}-with-help`]:g||x.length||$.length,[`${i}-has-feedback`]:d&&O,[`${i}-has-success`]:d==="success",[`${i}-has-warning`]:d==="warning",[`${i}-has-error`]:d==="error",[`${i}-is-validating`]:d==="validating",[`${i}-hidden`]:y,[`${i}-${f}`]:f});return l.createElement("div",{className:T,style:o,ref:_},l.createElement(Jt,Object.assign({className:`${i}-row`},jt(N,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(On,Object.assign({htmlFor:R},e,{requiredMark:h,required:v??w,prefixCls:t,vertical:b})),l.createElement($n,Object.assign({},e,m,{errors:x,warnings:$,prefixCls:t,status:d,help:a,marginBottom:j,onErrorVisibleChanged:L}),l.createElement(qe.Provider,{value:E},l.createElement(et,{prefixCls:t,meta:m,errors:m.errors,warnings:m.warnings,hasFeedback:O,validateStatus:d},I)))),!!j&&l.createElement("div",{className:`${i}-margin-offset`,style:{marginBottom:-j}}))}const jn="__SPLIT__";function Mn(e,t){const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(o=>{const a=e[o],s=t[o];return a===s||typeof a=="function"||typeof s=="function"})}const Nn=l.memo(e=>{let{children:t}=e;return t},(e,t)=>Mn(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((r,n)=>r===t.childProps[n]));function We(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Pn(e){const{name:t,noStyle:r,className:n,dependencies:o,prefixCls:a,shouldUpdate:s,rules:u,children:c,required:m,label:O,messageVariables:y,trigger:I="onChange",validateTrigger:R,hidden:v,help:w,layout:E}=e,{getPrefixCls:f}=l.useContext(ie),{name:N}=l.useContext(re),i=fn(c),h=typeof i=="function",p=l.useContext(qe),{validateTrigger:b}=l.useContext(Mt),_=R!==void 0?R:b,x=t!=null,$=f("form",a),g=Ce($),[P,H,j]=xe($,g);Lt();const S=l.useContext(Nt),L=l.useRef(null),[A,d]=mn({}),[T,F]=Pt(()=>We()),q=C=>{const V=S==null?void 0:S.getKey(C.name);if(F(C.destroy?We():C,!0),r&&w!==!1&&p){let M=C.name;if(C.destroy)M=L.current||M;else if(V!==void 0){const[D,k]=V;M=[D].concat(X(k)),L.current=M}p(C,M)}},z=(C,V)=>{d(M=>{const D=Object.assign({},M),Q=[].concat(X(C.name.slice(0,-1)),X(V)).join(jn);return C.destroy?delete D[Q]:D[Q]=C,D})},[B,U]=l.useMemo(()=>{const C=X(T.errors),V=X(T.warnings);return Object.values(A).forEach(M=>{C.push.apply(C,X(M.errors||[])),V.push.apply(V,X(M.warnings||[]))}),[C,V]},[A,T.errors,T.warnings]),te=pn();function J(C,V,M){return r&&!v?l.createElement(et,{prefixCls:$,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:T,errors:B,warnings:U,noStyle:!0},C):l.createElement(Fn,Object.assign({key:"row"},e,{className:Y(n,j,g,H),prefixCls:$,fieldId:V,isRequired:M,errors:B,warnings:U,meta:T,onSubItemMetaChange:z,layout:E}),C)}if(!x&&!h&&!o)return P(J(i));let G={};return typeof O=="string"?G.label=O:t&&(G.label=String(t)),y&&(G=Object.assign(Object.assign({},G),y)),P(l.createElement(Rt,Object.assign({},e,{messageVariables:G,trigger:I,validateTrigger:_,onMetaChange:q}),(C,V,M)=>{const D=se(t).length&&V?V.name:[],k=Ue(D,N),Q=m!==void 0?m:!!(u!=null&&u.some(W=>{if(W&&typeof W=="object"&&W.required&&!W.warningOnly)return!0;if(typeof W=="function"){const Z=W(M);return(Z==null?void 0:Z.required)&&!(Z!=null&&Z.warningOnly)}return!1})),oe=Object.assign({},C);let ne=null;if(Array.isArray(i)&&x)ne=i;else if(!(h&&(!(s||o)||x))){if(!(o&&!h&&!x))if(l.isValidElement(i)){const W=Object.assign(Object.assign({},i.props),oe);if(W.id||(W.id=k),w||B.length>0||U.length>0||e.extra){const ae=[];(w||B.length>0)&&ae.push(`${k}_help`),e.extra&&ae.push(`${k}_extra`),W["aria-describedby"]=ae.join(" ")}B.length>0&&(W["aria-invalid"]="true"),Q&&(W["aria-required"]="true"),_t(i)&&(W.ref=te(D,i)),new Set([].concat(X(se(I)),X(se(_)))).forEach(ae=>{W[ae]=function(){for(var ve,we,ge,Se,he,Oe=arguments.length,be=new Array(Oe),ce=0;ce<Oe;ce++)be[ce]=arguments[ce];(ge=oe[ae])===null||ge===void 0||(ve=ge).call.apply(ve,[oe].concat(be)),(he=(Se=i.props)[ae])===null||he===void 0||(we=he).call.apply(we,[Se].concat(be))}});const nt=[W["aria-required"],W["aria-invalid"],W["aria-describedby"]];ne=l.createElement(Nn,{control:oe,update:i,childProps:nt},Vt(i,W))}else h&&(s||o)&&!x?ne=i(M):ne=i}return J(ne,k,Q)}))}const tt=Pn;tt.useStatus=Ze;var Rn=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const _n=e=>{var{prefixCls:t,children:r}=e,n=Rn(e,["prefixCls","children"]);const{getPrefixCls:o}=l.useContext(ie),a=o("form",t),s=l.useMemo(()=>({prefixCls:a,status:"error"}),[a]);return l.createElement(Tt,Object.assign({},n),(u,c,m)=>l.createElement($e.Provider,{value:s},r(u.map(O=>Object.assign(Object.assign({},O),{fieldKey:O.key})),c,{errors:m.errors,warnings:m.warnings})))};function Vn(){const{form:e}=l.useContext(re);return e}const le=dn;le.Item=tt;le.List=_n;le.ErrorList=Ye;le.useForm=Qe;le.useFormInstance=Vn;le.useWatch=zt;le.Provider=Ae;le.create=()=>{};export{le as F,Qe as u};
