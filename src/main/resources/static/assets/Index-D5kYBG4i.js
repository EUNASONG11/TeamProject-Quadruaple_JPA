import{u as h,j as e,Q as N,M as R,r,a7 as k,Z as I,L as A,bm as P,g as F,J as E,W as B,bs as D,I as O,e as V}from"./index-DZF_lMwV.js";import{F as z}from"./index-Calry11s.js";import{u as Y}from"./userAtom-DuRkhM4A.js";import{D as _}from"./DockBar-BF300Wdg.js";/* empty css               */import{S as w,a as b}from"./swiper-react-DGr9Ps00.js";import{R as H}from"./index-DZ82jsPs.js";import{F as M}from"./Footer-Bb0Sd1vO.js";import"./userSelector-CpBdYzbB.js";import{N as U}from"./NotificationComponent-KOCupr6q.js";import{j as q}from"./jwt-C3mglyXF.js";import"./index-CqiZLVFA.js";import"./searchAtom-CgiKEGyj.js";import"./index-Cbswu_Hk.js";import"./index-D-wHe6FV.js";import"./Portal-hI7XGsNB.js";import"./useId-DRiPHj_v.js";import"./isMobile-DjGTsQxe.js";import"./motion-DnGLBzQj.js";import"./roundedArrow-7xBDnTzZ.js";import"./zoom-CNuMB0di.js";const W=({festivities:a})=>{const l=h();return e.jsx("div",{children:e.jsx(w,{slidesPerView:1.3,spaceBetween:12,className:"mySwiper",children:a.map(s=>e.jsxs(b,{className:"aspect-[3/4] cursor-pointer relative text-white rounded-tl-[32px] rounded-br-[32px] overflow-hidden after:absolute after:left-0 after:bottom-0 after:w-full after:h-[50%] after:bg-gradient-to-b after:from-transparent after:to-black after:opacity-70",onClick:()=>l(`/contents/index?strfId=${s.strfId}`),children:[e.jsx("img",{src:`${N}/${s.strfId}/${s.strfPic}`,alt:s.festTitle,className:"w-full h-full object-cover"}),e.jsxs("div",{className:"absolute bottom-10 right-8 text-right z-[99] pl-8",children:[s.open&&e.jsx("span",{className:"text-xs inline-block bg-secondary3 px-2 py-1 font-light ",children:"개최중"}),e.jsx("h2",{className:"text-xl font-semibold",style:{wordBreak:"auto-phrase"},children:s.festTitle}),e.jsxs("h4",{className:"text-sm font-medium ",children:[s.startAt.replaceAll("-","."),"~",s.endAt.replaceAll("-",".")]}),e.jsx("p",{className:"text-sm font-normal",children:s.locationTitle})]})]},s.strfId))})})},G=({locations:a})=>e.jsxs("div",{children:[e.jsxs("h1",{className:"text-2xl font-bold text-slate-700",children:["국내 여행지 ",e.jsx("b",{className:"text-secondary3 font-bold",children:"BEST 10"})]}),e.jsx(w,{slidesPerView:3,spaceBetween:12,className:"mySwiper ",children:a.map((l,s)=>e.jsx(b,{className:"relative pt-5",children:e.jsxs("div",{className:"relative bg-black rounded-lg overflow-hidden ",children:[e.jsx("img",{src:`${R}/${l.locationPic}`,alt:l.locationTitle,className:"opacity-70 w-full aspect-square object-cover"}),e.jsx("p",{className:"absolute z-[999] bg-secondary3 text-white w-6 h-6 leading-6 left-0 top-0 text-center inline-block text-xs rounded-br-lg",children:s+1}),e.jsxs("div",{className:"absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center text-white ",children:[e.jsx("p",{className:"text-xs",children:"대한민국"}),e.jsx("h3",{className:"font-semibold text-lg mt-1",children:l.locationTitle})]})]})},l.locationId))})]}),J=({recent:a,getMainList:l,setFestivities:s,setLocations:v,setRecent:f,setRecommend:u})=>{const d=h(),[c,m]=r.useState("STAY"),j={STAY:"숙소",RESTAUR:"맛집",TOUR:"관광지"},p=a.find(t=>t.category===c),g=async t=>{const n={strfId:t.strfId};console.log("찜하기 데이터:",n);try{const i=await axios.post("/api/wish-list",{...n},{headers:{Authorization:`Bearer ${accessToken}`}});console.log("찜하기",i.data),i.data.code==="200 성공"&&l()}catch(i){console.log("찜하기",i)}};return!a||a.length===0?null:e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-slate-700",children:"최근 본 목록"}),e.jsx("div",{children:a.map(t=>e.jsx("button",{onClick:()=>m(t.category),className:`px-4 py-1.5 my-5 border cursor-pointer text-base mr-3 rounded-2xl ${c===t.category?"bg-primary text-white border-none":"bg-white text-slate-500 border-1 border-slate-300"}`,children:j[t.category]},t.category))}),e.jsx("div",{className:" flex flex-wrap ",children:p==null?void 0:p.recent.slice(0,6).map(t=>e.jsxs("div",{className:"w-full flex items-center gap-5 mb-5 cursor-pointer",onClick:()=>{d(`/contents/index?strfId=${t.strfId}`)},children:[e.jsxs("div",{className:"w-[14vw] min-w-32 aspect-square rounded-lg relative overflow-hidden",children:[e.jsx("img",{src:`${N}/${t.strfId}/${t.strfPic}`,alt:t.strfTitle,className:"w-full h-full object-cover"}),e.jsx("i",{className:"absolute top-2.5 right-2.5 cursor-pointer",onClick:()=>g(item),children:t.wishIn?e.jsx(k,{className:"text-secondary3 text-lg"}):e.jsx(I,{className:"text-white text-lg"})})]}),e.jsxs("div",{className:"flex-1 pr-3",children:[e.jsx("h3",{className:"text-lg font-semibold text-slate-700 break-keep",children:t.strfTitle}),e.jsxs("p",{className:"font-light text-sm text-slate-400",children:[t.locationName," · ",j[c]]}),e.jsx("div",{children:e.jsx(H,{disabled:!0,allowHalf:!0,defaultValue:t.averageRating,className:"custom-star"})}),e.jsxs("div",{className:"flex text-slate-400 text-sm items-center gap-1",children:[t.wishIn?e.jsx(k,{className:"text-secondary3 text-lg"}):e.jsx(I,{className:"text-slate-400 text-lg"}),t.wishCnt]})]})]},t.strfId))})]})},Q=({recommend:a})=>{const l=h();return!a||a.length===0?null:e.jsxs("div",{children:[e.jsx("h1",{className:"px-4 text-2xl font-bold text-slate-700",children:"회원님에게 추천하는 여행지"}),e.jsx(w,{slidesPerView:2.3,breakpoints:{420:{slidesPerView:2.3},0:{slidesPerView:1}},className:"mySwiper mt-5",children:a.map(s=>e.jsxs(b,{className:"align-middle justify-center  px-3 cursor-pointer",onClick:()=>l(`/contents/index?strfId=${s.strfId}`),children:[e.jsx("img",{src:`${N}/${s.strfId}/${s.strfPic}`,alt:s.strfTitle,className:"w-full aspect-[6/4] rounded-tr-[32px] rounded-bl-[32px]"}),e.jsxs("div",{className:" gap-[6px] mt-3 ml-3 w-full",children:[e.jsx("span",{className:"bg-slate-800 text-white py-1 px-2 rounded-2xl font-light text-xs inline",children:s.locationTitle}),e.jsx("h2",{className:"text-xl font-semibold break-keep mt-1",children:s.strfTitle}),e.jsx("p",{className:"text-lg font-light text-slate-600 break-keep mt-1",children:s.explain}),e.jsxs(A,{to:"",className:"py-2 text-sm text-slate-400 flex items-center font-light",children:["자세히보기 ",e.jsx(P,{className:"text-lg"})]})]})]},s.strfId))})]})},Ne=()=>{const a=F("accessToken"),[l,s]=r.useState([]),[v,f]=r.useState([]),[u,d]=r.useState([]),[c,m]=r.useState([]),[j,p]=r.useState(!1),[g,t]=r.useState(0),n=async()=>{try{let o;a?o=await q.get("/api/home"):o=await V.get("/api/home"),console.log("메인",o.data.data);const{festivalList:T,locationList:$,recentList:C,recommendList:L}=o.data.data;s(T),f($),d(C),m(L)}catch(o){console.log(o)}};r.useEffect(()=>{n()},[]);const i=()=>{window.scrollY>0?t(!0):t(!1)};window.addEventListener("scroll",i);const[y,Z]=E(Y),x=h();r.useEffect(()=>{},[y]);const S=()=>{x("/search/before")};return e.jsxs("div",{children:[e.jsxs("header",{className:`flex h-auto items-center px-4 py-3 max-w-3xl w-full sticky top-0 left-0 z-10 duration-300 ${g?"shadow-sm":"shadow-none"} z-50 bg-white `,children:[e.jsx("h1",{className:"w-[32vw] max-w-32 mr-auto",children:e.jsx("img",{src:"/images/logo_1.png",alt:"main_logo",className:"cursor-pointer",onClick:()=>{x("/")}})}),e.jsxs("nav",{className:" flex gap-5",children:[e.jsxs("div",{className:"relative",children:[e.jsx(B,{onClick:()=>x("/user/notification"),className:"text-2xl text-slate-400 cursor-pointer"}),e.jsx(U,{token:a})]}),e.jsx(D,{className:"text-2xl text-slate-400 cursor-pointer",onClick:()=>{x(a?"/user/index":"/signin")}})]})]}),e.jsxs("main",{className:"pb-10",children:[e.jsx("section",{className:"px-4 mt-3",children:e.jsx(O,{className:"h-auto text-sm rounded-lg  !bg-slate-100 !border-slate-300 py-[14px] px-3",placeholder:" 지금 어디로 여행을 떠나고 싶으신가요?",readOnly:!0,prefix:e.jsx(z,{className:"text-slate-400 text-sm"}),onClick:()=>S()})}),e.jsx("section",{className:"px-4 mt-5",children:e.jsx(W,{festivities:l})}),e.jsx("section",{className:"px-4 mt-10",children:e.jsx(G,{locations:v})}),e.jsxs("section",{className:"bg-[#E8F6EF] px-4 mt-10 mx-4 h-[100px] xs:h-28 md:h-36 max-h-[140px] rounded-2xl flex items-center relative",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-light text-[#4C4C6D]",children:"신규회원 가입시 누구나"}),e.jsx("p",{className:"text-lg font-semibold text-[#4C4C6D]",children:"최대 20만원 쿠폰팩 증정"})]}),e.jsx("img",{src:"/images/main-banner_img.png",alt:"",className:"w-36 xs:w-40 md:w-42 absolute right-6 -top-5 md:!-top-7"})]}),u&&e.jsx("section",{className:"px-4 mt-10",children:e.jsx(J,{recent:u,getMainList:n,setFestivities:s,setLocations:f,setRecent:d,setRecommend:m})}),e.jsx("section",{className:"mt-10 w-full",children:e.jsx(Q,{recommend:c})})]}),e.jsx(M,{}),e.jsx(_,{})]})};export{Ne as default};
