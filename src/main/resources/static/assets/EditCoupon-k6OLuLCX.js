import{a as f,b as l,r as p,j as o}from"./index-ztVTG9lp.js";import{C as x}from"./CouponForm-C4MsLLb2.js";import{S as b}from"./StrfInfo-9f_nBVWJ.js";import"./dayjs.min-Ti2bJ-a6.js";import"./index-DB63C6vj.js";import"./motion-Cigbmjr9.js";import"./collapse-BbEVqHco.js";import"./zoom-CZRi_VRg.js";import"./Portal-Q4ncUo3s.js";import"./responsiveObserver-s_X0FfS_.js";import"./index-BoQfDuur.js";import"./index-Cyve9Zid.js";import"./index-CFriIEhO.js";import"./useId-z-Hxf0DT.js";import"./roundedArrow-BEsDa3vf.js";import"./useLocale-u_29S4ue.js";import"./index-CUoWmka9.js";import"./index-DSbsU2wv.js";import"./useIcons-CeeGwwsM.js";import"./CheckOutlined-B5MpEWXu.js";import"./index-BYtpHuTx.js";import"./customParseFormat-9muvjb3f.js";import"./PurePanel-wLdZvyoL.js";import"./Overflow-BJnMDnoT.js";const K=()=>{const n=f(),[t]=l(),a=Number(t.get("strfId")),c=Number(t.get("couponId")),r=t.get("title"),e=Number(t.get("discountPer")),i=t.get("expiredAt"),s=t.get("distributeAt"),[u,d]=p.useState(null),m=n.pathname.includes("edit")?"edit":"create";return console.log(m),p.useEffect(()=>{r&&e&&i&&s&&d({title:r,discountPer:Number(e),expiredAt:i,distributeAt:s})},[]),o.jsxs("div",{children:[o.jsx(b,{}),o.jsx(x,{formType:m,strfId:a,couponId:c,couponData:u})]})};export{K as default};
