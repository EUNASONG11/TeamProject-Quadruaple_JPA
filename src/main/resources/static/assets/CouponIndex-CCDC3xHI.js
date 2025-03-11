import{u as v,r as n,j as e,I as C,h as I,g as w,B as S,c as A,m as $}from"./index-B-t7JaaM.js";import{d as g}from"./dayjs.min-Du6NfNaN.js";import"./ko-DcW15Vpk.js";import{c as k}from"./customParseFormat-CzCxXzWi.js";import{a as D}from"./index-BQ6e9REa.js";import{B as E}from"./BottomSheet-CLsMzzT7.js";import{g as P}from"./index-CIW6QNLh.js";import{f as y,S as B}from"./StrfInfo-ChU05r6P.js";import{S as T}from"./index-CKioIcqV.js";g.locale("ko");g.extend(k);const Y=({strfId:p,item:m,selected:l,onClick:h})=>{const{couponId:r,title:a,discountPer:c,expiredAt:u,distributeAt:i}=m,x=v(),d=()=>{x(`/business/coupon/edit?strfId=${p}&couponId=${r}&title=${a}&discountPer=${c}&expiredAt=${u}&distributeAt=${i}`)},[o,j]=n.useState(!1),f=t=>g(t).format("YYYY-MM-DD(ddd)"),b=[{label:e.jsxs("div",{className:"flex items-center gap-3 px-4 py-[14px] text-lg text-slate-500",children:[e.jsx(P,{className:"text-slate-300"}),"수정하기"]}),onClick:()=>{d()}}],s=()=>{j(!o)};return e.jsxs("div",{className:"px-2 pt-2 pb-5 flex flex-col gap-3 border-b border-slate-200",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("ul",{className:"flex flex-col gap-1 w-full ",children:[e.jsxs("li",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"text-lg text-slate-700 font-semibold",children:"쿠폰 ID"}),e.jsx("p",{className:"text-base text-slate-500 font-semibold",children:y(r??0)})]}),e.jsxs("li",{className:"flex justify-between items-center",children:[e.jsx("h4",{className:"text-lg text-slate-700 font-semibold",children:"쿠폰 관리명"}),e.jsx("p",{className:"text-base text-slate-500 font-semibold",children:a})]})]}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsxs("button",{type:"button",className:"flex items-center gap-2 text-base text-slate-500",onClick:h,children:["자세히",e.jsx("i",{className:`text-base text-slate-500 ${l?"rotate-90":"rotate-0"} transition-transform duration-300`,children:e.jsx(C,{})})]}),e.jsx("button",{type:"button",className:"text-base text-slate-500",onClick:s,children:e.jsx(D,{})})]})]}),e.jsx("div",{className:`${l?"visible h-auto opacity-100 relative":"invisible max-h-0 opacity-0 absolute"}
          overflow-hidden transition-[max-height] duration-300 ease-in-out opacity-transition`,style:{transitionProperty:"opacity, max-height, visibility",transitionDuration:l?"400ms":"300ms"},children:l&&e.jsxs("ul",{className:"px-4 py-4 bg-slate-100",children:[e.jsxs("li",{className:"flex justify-between items-center",children:[e.jsx("h5",{className:"text-base text-slate-700 font-semibold",children:"쿠폰 ID"}),e.jsx("p",{className:"text-sm text-slate-500 ",children:y(r??0)})]}),e.jsxs("li",{className:"flex justify-between items-center",children:[e.jsx("h5",{className:"text-base text-slate-700 font-semibold",children:"쿠폰 관리명"}),e.jsx("p",{className:"text-sm text-slate-500 ",children:a})]}),e.jsxs("li",{className:"flex justify-between items-center",children:[e.jsx("h5",{className:"text-base text-slate-700 font-semibold",children:"쿠폰 할인"}),e.jsxs("p",{className:"text-sm text-slate-500 ",children:[c,"%"]})]}),e.jsxs("li",{className:"flex justify-between items-center",children:[e.jsx("h5",{className:"text-base text-slate-700 font-semibold",children:"쿠폰 유효기간"}),e.jsxs("p",{className:"text-sm text-slate-500",children:[f(i)," ~ ",f(u)]})]})]})}),e.jsx(E,{open:o,onClose:s,actions:b})]})},H=()=>{const[p]=I(),m=Number(p.get("strfId")),l=w("accessToken"),h=v(),r=()=>{h(`/business/coupon/create?strfId=${m}`)},[a,c]=n.useState([]),[u,i]=n.useState(!1),[x,d]=n.useState(!1),[o,j]=n.useState(0),f=s=>{x===!1&&(o===s&&d(!0),o!==s&&(j(s),d(!0))),x===!0&&d(!1)},b=async()=>{const s="/api/coupon/business/issuance";i(!0);try{const t=await $.get(s,{headers:{Authorization:`Bearer ${l}`}}),N=t.data;return Array.isArray(N)&&c(N),t.data&&i(!1),N}catch(t){return console.log(t),c([]),i(!1),null}};return n.useEffect(()=>{b()},[]),e.jsxs("div",{children:[e.jsx(B,{}),e.jsx(T,{spinning:u,children:e.jsxs("section",{className:"px-4 py-3 flex flex-col gap-5",children:[e.jsxs("div",{className:"px-4 py-4 bg-[rgba(165,238,254,0.31)] rounded-lg",children:[e.jsx("p",{className:"text-base font-semibold text-slate-700",children:"쿠폰의 발급을 신청해보세요!"}),e.jsx("p",{className:"text-sm font-medium text-slate-500",children:"신청이 승인되어을 때, 쿠폰을 발급 받을 수 있어요."})]}),e.jsx("div",{children:e.jsxs(S,{type:"primary",className:"w-full py-2 max-h-[60px] h-[13.33vw] text-xl font-medium",onClick:r,children:[e.jsx(A,{}),"혜택 등록"]})}),e.jsx("div",{children:e.jsx("ul",{className:"flex flex-col gap-5",children:a==null?void 0:a.map((s,t)=>e.jsx("li",{children:e.jsx(Y,{strfId:m,item:s,selected:!!(o===t&&x),onClick:()=>f(t)})},t))})})]})})]})};export{H as default};
