import{r as s,g as y,u as I,j as t,T as N,a1 as C,a8 as R,B as S,a9 as k}from"./index-DH-Wz4Mj.js";/* empty css                    */import{j as i}from"./jwt-DnEXN_lJ.js";import{B}from"./BottomSheet-DU6y7FlW.js";import{D as T}from"./DynamicGrid-C-XS4jYf.js";import{R as E}from"./index-DF0SKG1Y.js";import"./proxy-AvwZpyC7.js";import"./index-Dvz-Q9PH.js";import"./index-C3h-G8YL.js";import"./Portal-65BEOyHw.js";import"./useId-3Ovjxdih.js";import"./index-DhdEoO5n.js";import"./fade-BkDnt_Sp.js";import"./zoom-U1mf4JTG.js";import"./addEventListener-BBQjqPbJ.js";import"./motion-DegXBH0O.js";import"./RightOutlined-D2ucT0M2.js";import"./useLocale-DoMzA6HJ.js";import"./index-BN-dWTgu.js";import"./index-Bl6CWuDB.js";import"./isMobile-DjGTsQxe.js";import"./roundedArrow-C05pmbq5.js";const se=()=>{const[a,l]=s.useState([]),[m,u]=s.useState(0),[n,c]=s.useState(0),[f,L]=s.useState(!0),[v,o]=s.useState(!1),[d,w]=s.useState(null);y("accessToken");const x=async()=>{try{const e=await i.get(`/api/review/my?start_idx=${n}`);l(r=>[...r,...e.data.data.dtoList]),e.data.data.dtoList&&c(r=>r+10),console.log("✅  getUserReview  res.data.data:",e.data.data.dtoList)}catch(e){console.log("✅  getUserReview  error:",e)}},g=async()=>{try{const e=await i.get("/api/review/count");console.log("✅  reviewCount  res:",e.data),u(e.data)}catch(e){console.log("✅  reviewCount  error:",e)}};console.log(" reviewInfo",a);const j=async e=>{console.log(e);try{await i.delete(`/api/review/del?review_id=${e.reviewId}`),c(0),l([]),console.log("리뷰 삭제:",res.data)}catch(r){console.log("리뷰 삭제:",r)}};s.useEffect(()=>{a.length===0&&x()},[n]),s.useEffect(()=>{g()},[]);const h=()=>{x()},p=I(),b=e=>[{label:t.jsxs("div",{className:"flex items-center gap-3 text-lg",children:[t.jsx(k,{className:"text-slate-400"}),"삭제하기"]}),onClick:()=>{j(e),o(!1)}}];return t.jsxs("div",{children:[t.jsx(N,{icon:"back",title:"리뷰",onClick:()=>p(-2)}),t.jsx("div",{className:"flex justify-between py-[14px] px-4 border-b-[1px] border-t-[1px] border-slate-100 ",children:t.jsxs("p",{className:"text-sm font-semibold",children:["총 ",m,"개"]})}),t.jsx("div",{children:a.map((e,r)=>t.jsxs("div",{className:"py-8 px-4 border-b-[10px] border-slate-100 last:border-none",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsx("div",{children:t.jsxs("h1",{className:"flex items-center gap-2 h text-lg font-semibold text-slate-700 mb-2 cursor-pointer",onClick:()=>p(`/contents/index?strfId=${e.strfId}`),children:[e.strfTitle,t.jsx(C,{})]})}),t.jsx(R,{className:"text-slate-400 text-2xl cursor-pointer",onClick:M=>{o(!0),w(e)}})]}),t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[t.jsx(E,{className:"custom-rate flex items-center gap-[2px]",disabled:!0,allowHalf:!0,defaultValue:e.rating}),t.jsx("p",{className:"text-slate-400 text-base",children:e.reviewWriteDate.split(" ")[0].replace(/-/g,".")})]}),t.jsx("p",{className:"text-base text-slate-700 mb-2",children:e.content}),e.myReviewPic&&e.myReviewPic.length>0&&t.jsx(T,{reviewPics:e,type:"myReview"})]},r))}),f&&t.jsx("div",{className:"flex justify-center py-[14px]",children:t.jsx(S,{className:"text-slate-500 text-base !h-auto py-2 px-5 border-1 border-slate-200 rounded-full",onClick:()=>h(),children:"더보기"})}),t.jsx(B,{open:v,onClose:()=>o(!1),actions:d?b(d):[]})]})};export{se as default};
