import{r as e,C as y,q as E}from"./index-H5Y2xFEd.js";import{u as w}from"./useId-D0Wg6OZK.js";function z(r){return s=>e.createElement(y,{theme:{token:{motion:!1,zIndexPopupBase:0}}},e.createElement(r,Object.assign({},s)))}const H=(r,s,R,g,a)=>z(o=>{const{prefixCls:m,style:v}=o,i=e.useRef(null),[P,b]=e.useState(0),[h,O]=e.useState(0),[c,C]=w(!1,{value:o.open}),{getPrefixCls:j}=e.useContext(E),l=j(g||"select",m);e.useEffect(()=>{if(C(!0),typeof ResizeObserver<"u"){const f=new ResizeObserver(t=>{const n=t[0].target;b(n.offsetHeight+8),O(n.offsetWidth)}),p=setInterval(()=>{var t;const n=a?`.${a(l)}`:`.${l}-dropdown`,d=(t=i.current)===null||t===void 0?void 0:t.querySelector(n);d&&(clearInterval(p),f.observe(d))},10);return()=>{clearInterval(p),f.disconnect()}}},[]);let u=Object.assign(Object.assign({},o),{style:Object.assign(Object.assign({},v),{margin:0}),open:c,visible:c,getPopupContainer:()=>i.current});s&&Object.assign(u,{[s]:{overflow:{adjustX:!1,adjustY:!1}}});const x={paddingBottom:P,position:"relative",minWidth:h};return e.createElement("div",{ref:i,style:x},e.createElement(r,Object.assign({},u)))});export{H as g,z as w};
