import{j as e,d as D,c as J,J as K,g as Q,u as V,a as X,r as a,T as Z,ak as S,I as ee,B as I,e as b}from"./index-DZF_lMwV.js";import{u as se}from"./userAtom-DuRkhM4A.js";import{m as _}from"./proxy-sC5Jceop.js";import"./ko-DhUyhwCV.js";import{j as te}from"./jwt-C3mglyXF.js";import{R as le}from"./index-Bjd-If7g.js";import{C as L}from"./index-C8wTgk4K.js";import"./useBubbleLock-DIlnYmJl.js";import"./useId-DRiPHj_v.js";import"./Checkbox-ClYwGTmj.js";const ae=({setShowCouponModal:m,couponList:N,selectCoupon:y,setSelectCoupon:w})=>{const p=n=>{w(n),m(!1)};return e.jsx(_.div,{tabIndex:-1,className:"max-w-[768px] w-full left-1/2 -translate-x-1/2 fixed inset-0 bg-black/50 flex justify-center items-end z-[9999] overflow-hidden",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>m(!1),children:e.jsxs(_.div,{className:" bg-white w-full rounded-t-3xl py-5 shadow-lg px-4",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",stiffness:300,damping:30},drag:"y",dragConstraints:{top:0,bottom:100},dragElastic:.2,onDragEnd:(n,f)=>{f.offset.y>100&&m(!1)},onClick:n=>n.stopPropagation(),children:[e.jsx("div",{className:"w-12 h-1 bg-slate-400 rounded-full mx-auto mb-4"}),e.jsx("h2",{className:"text-xl text-slate-700 font-semibold mb-6",children:"쿠폰 선택"}),e.jsx("ul",{className:"max-h-[411px] overflow-y-scroll flex flex-col gap-3",children:N.map((n,f)=>e.jsxs("li",{className:"flex flex-col gap-1 py-5 px-4 border border-slate-200 rounded-lg",onClick:()=>p(n),children:[e.jsxs("p",{className:"text-xl text-primary font-semibold",children:[n.discountPer,"%"]}),e.jsx("h4",{className:"text-lg text-slate-700 font-semibold",children:n.title}),e.jsx("p",{className:"text-sm text-slate-400 font-light",children:`${D(n.expiredAt).format("YYYY.MM.DD")} 사용 가능`})]},f))})]})})};L.Group;const ne=[],Ne=()=>{const[m,N]=J();m.get("strfId");const[y,w]=K(se),p=Q("accessToken"),n=V(),s=X().state;console.log("locationState",s);const A=()=>{n(-1)},[c,E]=a.useState({}),[B,k]=a.useState(!1),[r,Y]=a.useState([]),[i,M]=a.useState({}),[ce,ie]=a.useState(ne),[P,T]=a.useState(!1),[re,oe]=a.useState(!1),[u,$]=a.useState(0),[h,o]=a.useState(0),[x,v]=a.useState(0),[q,U]=a.useState((s==null?void 0:s.item.menuPrice)||0);a.useEffect(()=>{console.log("userData",c)},[c]),a.useEffect(()=>{console.log("couponList",r)},[r]),a.useEffect(()=>{if(console.log("selectCoupon",i),i.discountPer){v(i.discountPer);const t=(s==null?void 0:s.item.menuPrice)*(s==null?void 0:s.quantity)||0,l=t-t*(i.discountPer/100);h>l&&o(l)}else v(0)},[i]),a.useEffect(()=>{U((s==null?void 0:s.item.menuPrice)-x/100*(s==null?void 0:s.item.menuPrice))},[x]);const z=async()=>{try{const l=(await b.get("/api/user/userInfo",{headers:{Authorization:`Bearer ${p}`}})).data;E(l.data)}catch(t){console.log("회원 정보:",t)}},R=async()=>{try{const t=await b.get("/api/coupon/available-coupons",{headers:{Authorization:`Bearer ${p}`}});console.log("쿠폰 불러오기",t.data);const l=t.data;Y(l.data.coupons)}catch(t){console.log("쿠폰 불러오기 결과:",t)}},O=async()=>{const t={num:1,point:5e3,strf_id:s.contentData.strfId,check_in:s.dates[0],check_out:s.dates[1],coupon_id:isNaN(parseInt(i.couponId))?null:parseInt(i.couponId),actual_paid:q,menu_id:s.item.menuId,room_id:1};console.log("sendData",t);try{const l=await b.post("/api/booking",{...t},{headers:{Authorization:`Bearer ${y.accessToken}`}});console.log("예약하기 결과",l.data);const d=l.data;d.code==="200 성공"&&d.data?(n("/booking/waiting"),console.log("카카오페이먼트 도전"),window.open(d.data,"_blank","width=500,height=700")||alert("팝업이 차단되었습니다. 팝업 차단을 해제해주세요.")):alert("결제 요청 실패")}catch(l){console.log("예약하기 결과:",l)}},F=async()=>{try{const t=await te.get("/api/point/remain-point");$(t.data.data),console.log("Point ",t.data.data)}catch(t){console.log(" error",t)}},C=t=>D(t).locale("ko").format("YYYY년 MM월 DD일 (ddd)"),W=t=>{const l=Number(t.target.value);if(isNaN(l))return;const j=((s==null?void 0:s.item.menuPrice)*(s==null?void 0:s.quantity)||0)-g();l>j?o(j):l>u?o(u):l<0?o(0):o(l)},G=()=>{const t=((s==null?void 0:s.item.menuPrice)*(s==null?void 0:s.quantity)||0)-g();o(Math.min(u,t))},g=()=>{if(!x||x===0)return 0;const t=(s==null?void 0:s.item.menuPrice)||0;return Math.floor(t*(x/100))},H=()=>{const t=(s==null?void 0:s.item.menuPrice)*(s==null?void 0:s.quantity)||0,l=x/100*t,d=t-l-h;return Math.max(0,d)};return a.useEffect(()=>{z(),F(),R()},[]),e.jsxs("div",{children:[e.jsx(Z,{icon:"back",title:"예약하기",onClick:A}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-col ",children:[e.jsx("h2",{className:"px-4  py-3 border-b border-slate-100 text-lg text-slate-700 font-semibold",children:(s==null?void 0:s.contentData.strfTitle)||"업체이름"}),e.jsxs("ul",{className:"flex flex-col gap-6 py-4 px-4",children:[e.jsxs("li",{className:"flex items-center",children:[e.jsx("h4",{className:"w-1/2 text-base text-slate-700 font-semibold",children:"객실명"}),e.jsx("p",{className:"w-1/2 text-base text-slate-700",children:(s==null?void 0:s.item.menuTitle)||"객실명"})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("h4",{className:"w-1/2 text-base text-slate-700 font-semibold",children:"입실일"}),e.jsx("p",{className:"w-1/2 text-base text-primary tracking-tight",children:C(s==null?void 0:s.dates[0])})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("h4",{className:"w-1/2 text-base text-slate-700 font-semibold",children:"퇴실일"}),e.jsx("p",{className:"w-1/2 text-base text-slate-700 tracking-tight",children:C(s==null?void 0:s.dates[1])})]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("h4",{className:"w-1/2 text-base text-slate-700 font-semibold",children:"인원"}),e.jsxs("p",{className:"w-1/2 text-base text-slate-700",children:["성인 ",s==null?void 0:s.quantity,"명"]})]})]})]}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"p-4 border-b border-slate-100 text-lg text-slate-700 font-semibold",children:"예약자 정보 입력"}),e.jsxs("ul",{className:"flex flex-col gap-3 py-3 px-4",children:[e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("h4",{className:"text-sm text-slate-700",children:"예약자"}),e.jsx("input",{type:"text",className:`flex-grow text-xs text-slate-400 \r
                          border border-slate-300 rounded-lg\r
                          p-3 outline-none bg-slate-50`,value:(c==null?void 0:c.name)||"이름입니다.",readOnly:!0})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("h4",{className:"text-sm text-slate-700",children:"이메일"}),e.jsx("input",{type:"text",className:`flex-grow text-xs text-slate-400 \r
                          border border-slate-300 rounded-lg\r
                          p-3 outline-none bg-slate-50`,value:(c==null?void 0:c.email)||"이메일입니다.",readOnly:!0})]}),e.jsxs("li",{className:"flex items-center gap-3",children:[e.jsx("h4",{className:"text-sm text-slate-700",children:"휴대폰"}),e.jsx("input",{type:"text",className:`flex-grow text-xs text-slate-400 \r
                          border border-slate-300 rounded-lg\r
                          p-3 outline-none bg-slate-50`,value:(c==null?void 0:c.tell)||"휴대폰 번호입니다.",readOnly:!0})]})]})]}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"p-4 border-b border-slate-100 text-lg text-slate-700 font-semibold",children:"할인쿠폰"}),e.jsxs("div",{className:"flex flex-col gap-3 py-3 px-4",children:[e.jsxs("button",{type:"button",onClick:()=>{r.length>0&&k(!0)},className:`p-3 rounded-lg
            border border-slate-300
            flex items-center justify-between
            ${r.length>0?"bg-white":"bg-slate-200"}`,children:[e.jsx("p",{className:"text-xs text-slate-500",children:i.title?i.title:r.length>0?`사용 가능한 쿠폰이 ${r.length}개 있어요.`:"사용 가능한 쿠폰이 없어요."}),e.jsx(S,{className:"text-[18px] text-slate-400"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("p",{className:"text-sm text-slate-700 whitespace-nowrap mr-[8px]",children:"포인트"}),e.jsx(ee,{type:"number",value:h,onChange:W,className:"text-xs text-right border p-3",min:0,max:u}),e.jsx(I,{onClick:G,className:"text-xs text-slate-500 h-auto py-3",children:"전액사용"})]}),e.jsxs("sub",{className:"w-full inline-block text-xs text-slate-500 text-right bottom-0",children:["보유 포인트 : ",u.toLocaleString(),"p"]})]})]})]}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"p-4 border-b border-slate-100 text-lg text-slate-700 font-semibold",children:"결제정보"}),e.jsxs("ul",{className:"flex flex-col gap-3 px-4 py-3 w-full",children:[e.jsxs("li",{className:"w-full flex items-center justify-between",children:[e.jsx("h4",{className:"text-sm text-slate-500",children:"예약 금액"}),e.jsxs("p",{className:"text-base text-slate-700",children:[((s==null?void 0:s.item.menuPrice)||0).toLocaleString(),"원"]})]}),e.jsxs("li",{className:"w-full flex items-center justify-between",children:[e.jsx("h4",{className:"text-sm text-slate-500",children:"상품 할인"}),e.jsx("p",{className:"text-base text-slate-700",children:"0원"})]}),e.jsxs("li",{className:"w-full flex items-center justify-between",children:[e.jsx("h4",{className:"text-sm text-slate-500",children:"포인트사용"}),e.jsx("p",{className:"text-base text-slate-700",children:h===0?"0원":`-${h.toLocaleString()}원`})]}),e.jsxs("li",{className:"w-full flex items-center justify-between",children:[e.jsx("h4",{className:"text-sm text-slate-500",children:"쿠폰 할인"}),e.jsxs("p",{className:"text-base text-slate-700",children:[g().toLocaleString(),"원"]})]})]}),e.jsxs("div",{className:"w-full flex items-center justify-between py-3 px-4 border-t border-slate-100",children:[e.jsx("h4",{className:"text-base text-primary font-semibold",children:"총 결제 금액"}),e.jsxs("p",{className:"text-lg text-primary font-semibold",children:[e.jsx("span",{children:H().toLocaleString()}),"원"]})]})]}),e.jsx("section",{className:"w-full h-[10px] bg-slate-100"}),e.jsxs("div",{className:"py-3 px-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-slate-700 ml-1 mb-3",children:"결제수단"}),e.jsx("div",{className:"px-3 py-4 border-[1px] border-slate-200 rounded-lg flex items-center justify-between mb-3",children:e.jsx(le,{defaultChecked:!0,className:"custom-payment-radio text-base text-slate-700",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("img",{src:"/images/payment/payment_icon_yellow_small.png",alt:"payment_icon_yellow_small",className:"w-[60px]"}),e.jsx("span",{children:"카카오페이"})]})})}),e.jsxs("div",{className:"bg-slate-50 p-5 rounded-lg",children:[e.jsx("p",{className:"text-lg text-slate-700 mb-[6px]",children:"결제혜택"}),e.jsx("p",{className:"text-sm text-slate-500 tracking-tight",children:'본 프로모션은 카카오페이 계정 기준 "기간 내 1회, 카카오페이머니 결제"에 한해 페이포인트 적립 가능합니다. - 포인트 적립은 장바구니 합산 기준으로 최종 결제 금액 4만원 이상 시 자동 적립되며, 카카오페이 톡채널로 안내됩니다. (기간 내 누적 결제금액이 아닌 단건 결제에 한함) - 기간 내 선착순 3천명 대상으로 예산 소진 시 별도 고지 없이 조기 종료 될 수 있습니다. - 예산 소진 시 페이포인트 적립 메세지가 발송되지 않습니다. - 포인트 사용 유효기간은 적립일로부터 60개월입니다. - 적립된 포인트는 카카오페이 제휴 가맹점에서 사용 가능합니다.'})]})]}),e.jsxs("div",{className:"py-3 px-4",children:[e.jsx("h2",{className:"text-lg font-semibold text-slate-700",children:"취소정책 및 이용 동의"}),e.jsx(L,{className:"custom-payment-checkbox w-full text-base rounded-lg my-3 text-slate-700",checked:P,onChange:t=>T(t.target.checked),children:"주문 내용과 아래 유의 사항을 확인하였으며 결제 진행에 동의합니다."}),e.jsx(I,{type:"primary",disabled:!P,onClick:()=>O(),className:"w-full text-base py-3 !h-auto",children:"결제하기"}),e.jsx("p",{className:"mt-3 text-sm text-slate-500",children:'• 본 약관은 주식회사 카카오페이(이하 "회사"라 합니다)가 제공하는 카카오페이 서비스의 이용과 관련하여 회사와 회원 사이의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.'})]})]}),B?e.jsx(ae,{setShowCouponModal:k,couponList:r,selectCoupon:i,setSelectCoupon:M}):null]})};export{Ne as default};
