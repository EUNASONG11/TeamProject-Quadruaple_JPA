import{u as i,c as r,j as e,b as n,aa as x,B as a}from"./index-DZF_lMwV.js";const o=()=>{const s=i(),[t]=r(),l=Number(t.get("amount")).toLocaleString(),c=Number(t.get("remain_point")).toLocaleString();return e.jsxs("div",{children:[e.jsx(n,{icon:"close",title:"결제 완료"}),e.jsxs("div",{className:"flex flex-col justify-center items-center gap-6 h-screen px-4",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center gap-3",children:[e.jsx("h2",{className:"p-3 bg-primary rounded-full",children:e.jsx(x,{className:"text-4xl text-white"})}),e.jsx("h2",{className:"text-xl text-slate-700 font-semibold",children:"포인트 충전완료"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"w-full flex flex-col gap-3 py-6 border-t border-b border-slate-100",children:[e.jsxs("dl",{className:"flex items-center justify-between",children:[e.jsx("dt",{className:"text-base text-slate-500",children:"충전 금액"}),e.jsxs("dd",{className:"text-base text-slate-700 font-semibold",children:[l,"원"]})]}),e.jsxs("dl",{className:"flex items-center justify-between",children:[e.jsx("dt",{className:"text-base text-slate-500",children:"포인트 잔액"}),e.jsxs("dd",{className:"text-base text-slate-700 font-semibold",children:[c,"원"]})]})]}),e.jsx("p",{className:"text-xs tracking-tight text-slate-500 mt-3",children:"* 충전된 포인트는 환불이 제한될 수 있습니다. 결제 오류 발생 시 고객센터로 문의해 주세요."})]}),e.jsxs("div",{className:"w-full flex gap-3",children:[e.jsx(a,{className:"w-full h-auto py-3 text-slate-500 text-base",onClick:()=>s("/"),children:"홈으로"}),e.jsx(a,{onClick:()=>s("/user/point"),className:"w-full h-auto py-3 text-base",type:"primary",children:"포인트 내역"})]})]})]})};export{o as default};
