import{r as l,g as N,u as I,j as e,W as y,I as C,B as R}from"./index-B-t7JaaM.js";/* empty css                    */import{j as w}from"./jwt-Bl-NaAJk.js";import{a as S}from"./index-BQ6e9REa.js";import{B as k}from"./BottomSheet-CLsMzzT7.js";import{g as $,h as B}from"./index-CIW6QNLh.js";import{T}from"./TitleHeader-CbY5H8BK.js";import{R as U}from"./index-B2JJb4AZ.js";import"./index-Box-1SdA.js";import"./index-B2p7BWkp.js";import"./index-C2GtDL4h.js";import"./Portal-CwazXomh.js";import"./useId-Dwe9TA6R.js";import"./zoom-BYTBG-Mc.js";const A=({images:r})=>{const a=r.length,i={1:"grid-cols-1 grid-rows-1",2:"grid-cols-2 grid-rows-1",3:"grid-cols-2 grid-rows-2",4:"grid-cols-2 grid-rows-2",5:"grid-cols-4 grid-rows-2"}[a]||"grid-cols-3 grid-rows-2";return e.jsx("div",{className:`grid gap-1 ${i} w-full aspect-[3/2] rounded-lg overflow-hidden`,children:r.map((c,o)=>{let n="";return a===3&&o===0&&(n="row-span-2"),a===5&&o===0&&(n="row-span-2 col-span-2"),e.jsx("img",{src:c,alt:`image-${o}`,className:`w-full h-full overflow-hidden object-cover ${n}`},o)})})},J=()=>{const[r,a]=l.useState([]),[i,c]=l.useState(0),[o,n]=l.useState(!0),[u,d]=l.useState(!1),[x,h]=l.useState(null);N("accessToken");const m=async()=>{try{const s=await w.get(`/api/review/my?start_idx=${i}`);a(t=>[...t,...s.data]),s.data&&c(t=>t+10),console.log("✅  getUserReview  res.data.data:",s.data)}catch(s){console.log("✅  getUserReview  error:",s)}},j=async s=>{console.log(s);try{await w.delete(`/api/review/del?review_id=${s.reviewId}`),c(0),a([]),console.log("리뷰 삭제:",res.data)}catch(t){console.log("리뷰 삭제:",t)}};l.useEffect(()=>{r.length===0&&m()},[i]);const v=()=>{m()},p=I(),b=s=>[{label:e.jsxs("div",{className:"flex items-center gap-3 text-lg",children:[e.jsx($,{className:"text-slate-400"})," 수정하기"]}),onClick:()=>{console.log("인식")}},{label:e.jsxs("div",{className:"flex items-center gap-3 text-lg",children:[e.jsx(B,{className:"text-slate-400"}),"삭제하기"]}),onClick:()=>{j(s),d(!1)}}];return e.jsxs("div",{children:[e.jsx(T,{icon:"back",title:"리뷰",onClick:()=>p(-2)}),e.jsx("div",{className:"flex justify-between py-[14px] px-4 border-b-[1px] border-t-[1px] border-slate-100 ",children:e.jsxs("p",{className:"text-sm font-semibold",children:["총 ",r.length,"개"]})}),e.jsx("div",{children:r.map((s,t)=>{const g=s.myReviewPic.map(f=>`${y}${s.reviewId}/${f.pic}`);return e.jsxs("div",{className:"py-8 px-4 border-b-[10px] border-slate-100 last:border-none",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsxs("h1",{className:"flex items-center gap-2 h text-lg font-semibold text-slate-700 mb-2 cursor-pointer",onClick:()=>p(`/contents/index?strfId=${s.strfId}`),children:[s.strfTitle,e.jsx(C,{})]})}),e.jsx(S,{className:"text-slate-400 text-2xl cursor-pointer",onClick:f=>{d(!0),h(s)}})]}),e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(U,{className:"custom-rate flex items-center gap-[2px]",disabled:!0,allowHalf:!0,defaultValue:s.rating}),e.jsx("p",{className:"text-slate-400 text-base",children:s.reviewWriteDate.split(" ")[0].replace(/-/g,".")})]}),e.jsx("p",{className:"text-base text-slate-700 mb-2",children:s.content}),g.length>0&&e.jsx(A,{images:g})]},t)})}),o&&e.jsx("div",{className:"flex justify-center py-[14px]",children:e.jsx(R,{className:"text-slate-500 text-base !h-auto py-2 px-5 border-1 border-slate-200 rounded-full",onClick:()=>v(),children:"더보기"})}),e.jsx(k,{open:u,onClose:()=>d(!1),actions:x?b(x):[]})]})};export{J as default};
