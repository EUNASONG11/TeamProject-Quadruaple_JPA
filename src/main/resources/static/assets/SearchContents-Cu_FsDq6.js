import{g as R,J as I,S as _,r as c,u as T,j as e,Q as $,m as S,c as L,a as B}from"./index-DH-Wz4Mj.js";import{a as u,S as P}from"./SearchItems-yB1NRKCs.js";import{c as U}from"./index-BuUvWuki.js";import{u as v}from"./userAtom-DgR9NHTV.js";import{c as F}from"./match-BxFHeRf5.js";import{L as z}from"./index-BynuhZRZ.js";import{j as O}from"./jwt-DnEXN_lJ.js";import{D as Y}from"./DockBar-CuwC-lSB.js";import"./searchAtom-Cy7CarFV.js";import"./index-CQz5_Up4.js";import"./index-DF0SKG1Y.js";import"./index-BN-dWTgu.js";import"./index-Bl6CWuDB.js";import"./Portal-65BEOyHw.js";import"./useId-3Ovjxdih.js";import"./isMobile-DjGTsQxe.js";import"./motion-DegXBH0O.js";import"./roundedArrow-C05pmbq5.js";import"./zoom-U1mf4JTG.js";import"./Skeleton-BOmxZydq.js";import"./index-CGzPRLSl.js";import"./index-C50gSxXV.js";import"./index-Zf4BwBOc.js";const J=({searchData:p,setSearchData:s,setSearchValue:l,searchValue:a,setSearchState:n})=>{const o=R("accessToken"),[r,h]=I(v),{userId:g}=_(v),[d,y]=c.useState([]),[i,x]=c.useState([]),j=T(),b=async()=>{try{const m=(await S.get("/api/search/popular")).data;y(m.data)}catch(t){console.log("인기검색어 결과",t)}};c.useEffect(()=>{},[d]);const A=async()=>{try{const m=(await S.get(`/api/search/basic?user_id=${g}`,{headers:{Authorization:`Bearer ${o}`}})).data;x(m.data)}catch(t){console.log("최근 본 검색 결과",t)}};c.useEffect(()=>{},[i]);const w=t=>{console.log("클릭한 인기 검색어:",t),l(t.strfName),j(`/contents/index?strfId=${t.strfId}`)},E=t=>{console.log(t),j(`/contents/index?strfId=${t.strfId}`)},k=async t=>{const m={strf_id:t.strfId};try{const N=await S.patch(`/api/recent/hide?strf_id=${t.strfId}`,{...m},{headers:{Authorization:`Bearer ${o}`}});console.log(N.data),N.data&&A()}catch(N){console.log("개별 삭제",N)}},C=async()=>{try{const t=await S.patch("/api/recent/hide/all",{},{headers:{Authorization:`Bearer ${o}`}});console.log(t.data),t.data&&A()}catch(t){console.log("개별 삭제",t)}};return c.useEffect(()=>{b(),r.accessToken&&A()},[]),e.jsxs("div",{className:"px-[32px] flex flex-col gap-[50px]",children:[e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"인기 검색어"}),e.jsx("ul",{className:"flex gap-[20px] flex-wrap",children:d?d==null?void 0:d.map((t,m)=>e.jsx("li",{className:"cursor-pointer text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",onClick:()=>w(t),children:t.strfName},m)):e.jsx("li",{className:"text-slate-700 bg-slate-50 px-[20px] py-[10px] rounded-[20px]",children:"데이터 없음"})})]}),r.accessToken?e.jsxs("div",{className:"flex flex-col gap-[30px]",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-[24px] font-semibold text-slate-700",children:"최근 본 목록"}),e.jsx("button",{type:"button",className:"text-slate-400 text-[18px]",onClick:()=>C(),children:"모두 삭제"})]}),e.jsx("ul",{className:"flex flex-col gap-[20px]",children:i?i==null?void 0:i.map((t,m)=>e.jsxs("li",{className:"flex cursor-pointer items-center justify-between",children:[e.jsxs("div",{className:"flex gap-[15px]",onClick:()=>E(t),children:[e.jsx("div",{className:"w-[80px] h-[80px] rounded-2xl overflow-hidden",children:e.jsx("img",{className:"w-full h-full object-cover",src:t.strfPic?`${$}${t.strfId}/${t.strfPic}`:"/images/logo_icon_4.png",alt:t.strfName})}),e.jsxs("div",{className:"flex flex-col gap-[5px] justify-center",children:[e.jsx("div",{className:"text-[18px] text-slate-700 font-semibold",children:t.strfName}),e.jsxs("div",{className:"flex gap-[5px]",children:[e.jsx("span",{className:"text-slate-500 text-[14px]",children:F(t.category)}),e.jsx("span",{className:"text-slate-500 text-[14px]",children:"•"}),e.jsx("span",{className:"text-slate-500 text-[14px]",children:t.locationTitle})]})]})]}),e.jsx("button",{type:"button",className:"text-slate-400 text-[20px]",onClick:()=>k(t),children:e.jsx(U,{})})]},m)):null})]}):null]})},f=[{type:"all",name:"전체"},{type:"TOUR",name:"관광지"},{type:"STAY",name:"숙소"},{type:"RESTAUR",name:"맛집"},{type:"FEST",name:"축제"}],K=({searchValue:p,searchData:s,setSearchData:l})=>{const[a,n]=c.useState(0),[o,r]=c.useState(0);c.useEffect(()=>{console.log("selectedCate",a),r(0)},[a]),c.useEffect(()=>{},[s]);const h=c.useRef(null),g=Array.isArray(s)?s.filter(x=>x.category==="TOUR"):[],d=Array.isArray(s)?s.filter(x=>x.category==="STAY"):[],y=Array.isArray(s)?s.filter(x=>x.category==="RESTAUR"):[],i=Array.isArray(s)?s.filter(x=>x.category==="FEST"):[];return e.jsxs("div",{className:"px-[32px] py-[30px] flex flex-col gap-[30px] min-h-screen",children:[e.jsx("ul",{className:"flex gap-[10px]",ref:h,children:f.map((x,j)=>e.jsx("li",{className:`cursor-pointer font-semibold text-[16px] w-[124px] flex justify-center items-center px-[15px] py-[10px] gap-[10px] rounded-[8px] ${j===a?"bg-primary text-white":"bg-white text-slate-500"}`,onClick:()=>{n(j)},children:x.name},j))}),s.length===0?e.jsxs("div",{className:"flex flex-col gap-[20px] items-center py-[100px]",children:[e.jsx("i",{className:"text-slate-300 text-[100px] ",children:e.jsx(z,{})}),e.jsx("p",{className:"text-slate-400 text-[20px]",children:"검색 결과가 없습니다."})]}):e.jsxs(e.Fragment,{children:[" ",a===0&&e.jsxs("div",{children:[e.jsx(u,{type:f[1].type,name:f[1].name,data:g,setSelectedCate:n,searchValue:p,searchData:s,setSearchData:l,dataIndex:o,setDataIndex:r,category:1}),e.jsx(u,{type:f[2].type,name:f[2].name,data:d,setSelectedCate:n,searchValue:p,searchData:s,setSearchData:l,dataIndex:o,setDataIndex:r,category:2}),e.jsx(u,{type:f[3].type,name:f[3].name,data:y,setSelectedCate:n,searchValue:p,searchData:s,setSearchData:l,dataIndex:o,setDataIndex:r,category:3}),e.jsx(u,{type:f[4].type,name:f[4].name,data:i,setSelectedCate:n,searchValue:p,searchData:s,setSearchData:l,dataIndex:o,setDataIndex:r,category:4})]}),a===1&&e.jsx("div",{children:e.jsx(u,{type:"TOUR",data:g,searchValue:p,searchData:s,setSearchData:l,dataIndex:o,setDataIndex:r,setSelectedCate:n,category:1})}),a===2&&e.jsx("div",{children:e.jsx(u,{type:"STAY",data:d,searchValue:p,searchData:s,setSearchData:l,dataIndex:o,setDataIndex:r,setSelectedCate:n,category:2})}),a===3&&e.jsx("div",{children:e.jsx(u,{type:"RESTAUR",data:y,searchValue:p,searchData:s,setSearchData:l,dataIndex:o,setDataIndex:r,setSelectedCate:n,category:3})}),a===4&&e.jsx("div",{children:e.jsx(u,{type:"FEST",data:i,searchValue:p,searchData:s,setSearchData:l,dataIndex:o,setDataIndex:r,setSelectedCate:n,category:4})})]})]})},me=()=>{L(),R("accessToken"),T(),B().state;const[s,l]=c.useState(!1),[a,n]=c.useState(""),[o,r]=c.useState([]),[h,g]=c.useState("");c.useEffect(()=>{},[o]);const d=async()=>{const y={search_word:a,start_idx:0};console.log("검색:",y);try{const i=await O.post(`/api/search/all?search_word=${a}`,{...y});console.log("검색 결과 호출",i.data);const x=i.data;r([...x.data])}catch(i){console.log(i)}};return c.useEffect(()=>{console.log("searchValue:",a),d()},[a]),e.jsxs("div",{className:"w-full flex flex-col gap-[30px]",children:[e.jsx(P,{searchValue:a,setSearchValue:n,setSearchState:l,inputValue:h,setInputValue:g,searchData:o,setSearchData:r}),s?e.jsx(K,{searchValue:a,searchData:o,setSearchData:r}):e.jsx(J,{setSearchState:l,searchData:o,setSearchData:r,setSearchValue:n,searchValue:a}),e.jsx(Y,{})]})};export{me as default};
