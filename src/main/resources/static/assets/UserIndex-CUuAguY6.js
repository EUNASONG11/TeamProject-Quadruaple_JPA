import{R as b,m as w,r as x,g as m,u as y,j as e,y as v,k as s,I as C,b as d,z as k}from"./index-CT_B22pp.js";import{d as P,a as S,e as A}from"./index-fddQu95t.js";import{c as I,d as $,B}from"./index-B_Lpx87X.js";import{a as E}from"./index-BHf72p9s.js";import{H as U}from"./TitleHeader-Aec0FNKR.js";import{P as O,L as z}from"./pic-Jp7D6aQ0.js";/* empty css                    */import"./UserTrips-k1CHvryB.js";import{S as L,a as R}from"./swiper-react-ChLyC8SI.js";/* empty css               */import"./Footer-De5q11HN.js";import"./index-C3rZQhXi.js";import"./index-CxHXmojF.js";import"./Portal-CyQVYCSQ.js";import"./collapse-BbEVqHco.js";import"./zoom-D8-KKT2g.js";import"./index-CVGdG9nl.js";import"./index-C_vWVO0w.js";import"./index-B8WYdHps.js";import"./useId-B7bKw0hq.js";import"./useLocale-jzSsxWDR.js";const re=()=>{var n;const[r,p]=b(w),[a,f]=x.useState([]),[c,u]=x.useState(""),l=m("accessToken"),o=m("user"),h=async()=>{try{const t=await d.get("/api/home/user",{headers:{Authorization:`Bearer ${l}`}});f(t.data.data)}catch(t){console.log(t)}},j=async()=>{try{const t=await d.get("/api/coupon/available-coupons",{headers:{Authorization:`Bearer ${l}`}});console.log("✅  getCoupon  res.data.data:",t.data.data),u(t.data.data)}catch(t){console.log("✅  getCoupon  error:",t)}};x.useEffect(()=>{l&&(h(),j())},[]);const i=y(),N=()=>{p({userId:0,accessToken:""}),k("accessToken"),i("/signin")},g=()=>{i("useredit",{state:a})};return e.jsx("div",{className:" w-full flex justify-end",children:e.jsxs("div",{className:"w-full  h-screen bg-white ",onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:"px-8 py-8",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(v,{onClick:()=>i(-1),className:"text-3xl cursor-pointer text-slate-700"}),e.jsxs("h1",{className:"flex gap-5",children:[e.jsx(I,{className:"text-3xl text-slate-700 cursor-pointer"}),e.jsx(P,{className:"text-3xl text-slate-700 cursor-pointer",onClick:()=>g()})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"mx-auto w-32 h-32 rounded-full overflow-hidden",children:e.jsx("img",{src:a.profilePic?`${O}${o==null?void 0:o.userId}/${r==null?void 0:r.profilePic}`:"/images/user.png",alt:"User-Profile",className:"w-full h-full object-cover"})}),e.jsx("h1",{className:"text-3xl font-bold text-slate-700 mt-4 text-center",children:a.name}),e.jsx(L,{slidesPerView:1,className:"mySwiper",children:(n=a.tripList)==null?void 0:n.map(t=>e.jsxs(R,{children:[e.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 block w-0 h-0 border-transparent border-solid border-l-[12px] border-r-[12px] border-b-[20px] border-b-slate-100 z-[1]"}),e.jsxs("div",{className:"flex items-center justify-between bg-slate-100 mt-5 px-5 h-20 rounded-[36px] relative",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:`${z}${t.locationPic}`,alt:"",className:"w-8 h-8 rounded-full mr-3"}),e.jsx("span",{className:"text-xl text-slate-700 font-normal",children:t.title})]}),e.jsx("span",{className:"text-xl text-primary font-medium",children:t.dday>0?`D-${t.dday}`:"여행중"})]})]},t.tripId))})]}),e.jsxs("div",{className:"flex mt-10",children:[e.jsxs(s,{to:"/user/usertrips",className:"w-1/4 text-center text-lg text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx(U,{className:"w-full text-4xl text-slate-700 mb-2"}),"여행"]}),e.jsxs(s,{to:"/user/userwishlist",className:"w-1/4 text-center text-lg text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx(S,{className:"w-full text-4xl text-slate-700 mb-2"}),"찜하기"]}),e.jsxs(s,{to:"/user/userreview",className:"w-1/4 text-center text-lg text-slate-500 font-normal relative after:absolute after:top-1/2 after:-translate-y-1/2 after:right-0 after: after:bg-slate-200 after:w-[1px] after:h-14",children:[e.jsx(A,{className:"w-full text-4xl text-slate-700 mb-2"}),"리뷰"]}),e.jsxs(s,{to:"/user/usertrip",className:"w-1/4 text-center text-lg text-slate-500 font-normal",children:[e.jsx(C,{className:"w-full text-4xl text-slate-700 mb-2"}),"내 여행기"]})]})]})]}),e.jsx("p",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"w-full px-8 py-8",children:[e.jsxs(s,{to:"/user/userbooking",className:"flex items-center py-5 text-2xl text-slate-700 font-normal",children:[e.jsx(E,{className:"text-4xl text-slate-400 mr-4"}),"내예약"]}),e.jsxs(s,{to:"/user/usercoupon",className:"flex items-center py-5 text-2xl text-slate-700 font-normal",children:[e.jsx($,{className:"text-4xl text-slate-400 mr-4"}),"쿠폰함",c.availableCouponCount>0&&e.jsx("span",{className:"ml-auto w-9 h-6 rounded-2xl text-sm text-center leading-[1.45rem] text-primary3 bg-[#A5EEFE]/50",children:c.availableCouponCount})]}),e.jsxs(s,{to:"/user/recentlist",className:"flex items-center py-5 text-2xl text-slate-700 font-normal",children:[e.jsx(B,{className:"text-4xl text-slate-400 mr-4"}),"최근 본 목록"]})]}),e.jsx("p",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"px-8 pb-[130px]",children:[e.jsx(s,{to:"",className:"flex py-5 text-lg text-slate-500",children:"공지사항"}),e.jsx(s,{to:"",className:"flex text-lg text-slate-500 py-5",children:"FAQ"}),e.jsx(s,{to:"",className:"flex  text-lg text-slate-500 py-5",children:"고객센터"}),e.jsx(s,{to:"",className:"flex  text-lg text-slate-500 py-5",children:"1:1 문의하기"}),e.jsx(s,{to:"/user/changepw",className:"flex  text-lg text-slate-500 py-5",children:"비밀번호 변경"}),l&&e.jsx("button",{onClick:()=>N(),className:"w-full h-[60px] rounded-lg border border-slate-300 text-2xl font-bold text-slate-500",children:"로그아웃"})]})]})})};export{re as default};
