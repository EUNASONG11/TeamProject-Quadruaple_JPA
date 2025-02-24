import{r,j as e,W as g,B as b,h as N,m as v,u as y,e as w,L}from"./index-CT_B22pp.js";import{T as B}from"./TitleHeader-Aec0FNKR.js";import{L as n}from"./index-DrL_MOVE.js";import{F as k}from"./Footer-De5q11HN.js";import{d as A}from"./dayjs.min-BZzqxIsK.js";import"./index-B_Lpx87X.js";import"./index-fddQu95t.js";const C=({bookingStatus:l=1})=>(A().format("YYYY.MM.DD"),e.jsxs("div",{className:`w-full px-[30px] py-[30px]\r
    flex flex-col gap-[18px]`,children:[e.jsxs("div",{className:"flex justify-between items-start pb-[20px] border-b border-slate-200",children:[e.jsx("p",{className:"font-medium text-[16px] text-slate-700",children:"2025.01.01"}),e.jsxs("button",{type:"button",className:`flex items-center gap-[4px] \r
          text-[14px] text-primary font-medium`,children:["상세보기 ",e.jsx(g,{})]})]}),e.jsx("div",{className:`w-fit px-[10px] py-[5px] rounded-lg text-[12px] font-bold
          ${l===1?"bg-white border border-primary text-primary":l===2?"bg-[rgba(165,238,254,0.6)] border border-primary3 text-primary3":l===3||l===4?"bg-slate-100 border border-slate-300 text-slate-400":""}`,children:e.jsx("p",{children:"예약 상태"})}),e.jsx("div",{children:e.jsx("h3",{className:"text-[20px] font-bold text-slate-700",children:"숙소 이름"})}),e.jsxs("div",{className:"flex gap-[20px]",children:[e.jsx("div",{className:"w-[85px] h-[85px] rounded-2xl overflow-hidden bg-slate-100",children:e.jsx("img",{src:"",alt:"",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[10px]",children:[e.jsxs("div",{className:"flex items-center text-[16px] text-slate-700",children:[e.jsx("p",{children:"체크인 날짜"}),e.jsx("p",{children:"~"}),e.jsx("p",{children:"체크아웃 날짜"})]}),e.jsxs("div",{className:"text-[14px] text-slate-500 flex items-center gap-[5px]",children:[e.jsx("p",{children:"숙박일"}),e.jsx("p",{children:"|"}),e.jsxs("p",{children:[e.jsx("span",{children:"체크인"}),e.jsx("span",{children:"15:00"}),e.jsx("span",{children:"체크아웃"}),e.jsx("span",{children:"15:00"})]}),e.jsx("p",{children:"|"}),e.jsxs("p",{children:[e.jsx("span",{children:"체크아웃"}),e.jsx("span",{children:"15:00"})]})]}),e.jsxs("div",{className:"text-[14px] text-slate-500 flex items-center gap-[5px]",children:[e.jsx("p",{children:"결제 금액: "}),e.jsxs("p",{children:[1e5.toLocaleString(),"원"]})]})]})]}),e.jsx("div",{children:e.jsx(b,{type:"primary",className:"w-full h-[46px] rounded-lg text-[16px] font-bold",children:"예약 취소"})})]})),c=r.memo(C),F=["예약 목록","예약 완료 내역"],S=()=>{const{userId:l}=N(v),d=y(),o=()=>{d(-1)},[a,p]=r.useState(0),[x,m]=r.useState([]),[i,j]=r.useState([]),[h,f]=r.useState(!0),u=r.useCallback(async()=>{try{const t=await w.get(`/api/booking?userId=${l}`);console.log("예약 목록",t.data);const s=t.data;m(s.data.beforeList),j(s.data.afterList),t.data&&f(!0)}catch(t){console.log("예약 목록 불러오기 실패",t)}},[]);return r.useEffect(()=>{u()},[]),e.jsx("div",{className:`flex flex-col gap-[30px]\r
                `,children:h?e.jsxs(e.Fragment,{children:[e.jsx(B,{icon:"back",title:"내 예약",onClick:o}),e.jsxs("div",{className:"flex flex-col gap-[20px] px-[32px] w-full",children:[e.jsx("ul",{className:"flex gap-[10px] w-full",children:F.map((t,s)=>e.jsx("li",{onClick:()=>p(s),className:`w-full flex justify-center items-center 
                  pt-[17px] pb-[16px]
                  text-[16px] 
                  ${s===a?"border-b-[2px] border-primary text-primary":"border-b-[1px] border-slate-200 text-slate-500"}`,children:t},s))}),e.jsxs("div",{className:"min-h-[500px] flex flex-col justify-center items-center",children:[a===0?x.length>0?e.jsx("div",{children:x.map((t,s)=>e.jsx(c,{},s))}):e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"text-slate-300 text-[100px]",children:e.jsx(n,{})}),e.jsx("p",{className:"text-slate-400 text-[20px]",children:"예약 내역이 없습니다."})]}):null,a===1?i.length>0?e.jsx("div",{children:i.map((t,s)=>e.jsx(c,{},s))}):e.jsxs("div",{children:[e.jsx("i",{className:"text-slate-300 text-[100px]",children:e.jsx(n,{})}),e.jsx("p",{className:"text-slate-400 text-[20px]",children:"예약 내역이 없습니다."})]}):null]}),e.jsx(k,{})]})]}):e.jsx(L,{})})};export{S as default};
