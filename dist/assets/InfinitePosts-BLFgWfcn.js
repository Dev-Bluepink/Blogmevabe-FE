import{Q as N,k as v,l as y,n as P,o as k,r as h,j as e,p as A,i as F,P as u,d as S}from"./index-D_wrdjgj.js";var M=class extends N{constructor(t,s){super(t,s)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,s){super.setOptions({...t,behavior:v()},s)}getOptimisticResult(t){return t.behavior=v(),super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,s){var a,o;const{state:c}=t,r=super.createResult(t,s),{isFetching:l,isRefetching:i,isError:n,isRefetchError:p}=r,d=(o=(a=c.fetchMeta)==null?void 0:a.fetchMore)==null?void 0:o.direction,m=n&&d==="forward",x=l&&d==="forward",g=n&&d==="backward",f=l&&d==="backward";return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:y(s,c.data),hasPreviousPage:P(s,c.data),isFetchNextPageError:m,isFetchingNextPage:x,isFetchPreviousPageError:g,isFetchingPreviousPage:f,isRefetchError:p&&!m&&!g,isRefetching:i&&!x&&!f}}};function D(t,s){return k(t,M)}const E=()=>{const t=[{id:1,image:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/z5578863238987_b222508a6437215998fd3e60bd42e4ad.jpg?alt=media&token=7d54b91b-a786-49b6-ad05-8232e18b0b41",avatar:"https://via.placeholder.com/150",name:"Hồ Lê",content:"Chồng 1997 vợ 1997 sinh con năm nào..."},{id:2,image:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/z5578863239018_63801e3c4d29e3bd1faaf4db71114030.jpg?alt=media&token=91b310b3-fdf1-4a0b-b9bc-1716e5e8adba",avatar:"https://via.placeholder.com/150",name:"Hồ Lê",content:"Trẻ sơ sinh thở nhanh và mạnh khi ngủ là..."},{id:3,image:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/z5578863258511_373c25e106e4688a3fbc4c5ea2184767.jpg?alt=media&token=be4db9fc-5712-4ea1-b311-ff3d016a7fee",avatar:"https://via.placeholder.com/150",name:"Hồ Lê",content:"Hết kinh bao nhiêu ngày thì rụng trứng..."},{id:4,image:"https://via.placeholder.com/250",avatar:"https://via.placeholder.com/150",name:"Hồ Lê",content:"Một nội dung khác..."},{id:5,image:"https://via.placeholder.com/250",avatar:"https://via.placeholder.com/150",name:"Hồ Lê",content:"Một nội dung khác..."},{id:6,image:"https://via.placeholder.com/250",avatar:"https://via.placeholder.com/150",name:"Hồ Lê",content:"Một nội dung khác..."}],[s,c]=h.useState(0),r=()=>{const n=s===0?Math.ceil(t.length/3)-1:s-1;c(n)},l=()=>{const n=s===Math.ceil(t.length/3)-1?0:s+1;c(n)};return h.useEffect(()=>{const i=setInterval(()=>{l()},3e3);return()=>clearInterval(i)},[s]),e.jsxs("div",{className:"relative mx-auto p-4",children:[e.jsx("div",{className:"relative w-full overflow-hidden",children:e.jsx("div",{className:"flex transition-transform duration-500",style:{transform:`translateX(-${s*100/3}%)`},children:t.map(i=>e.jsx("div",{className:"flex-shrink-0 w-1/3 h-64 bg-cover bg-center rounded-lg relative mr-4",style:{backgroundImage:`url(${i.image})`},children:e.jsxs("div",{className:"absolute bottom-10 ml-4",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:i.content}),e.jsxs("div",{className:"flex items-center mt-4",children:[e.jsx("img",{src:i.avatar,alt:"",className:"w-8 h-8 rounded-full"}),e.jsx("p",{className:"ml-2 text-sm text-white",children:i.name})]})]})},i.id))})}),e.jsx("button",{className:"absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-500 bg-opacity-50 text-white",onClick:r,children:"❮"}),e.jsx("button",{className:"absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-500 bg-opacity-50 text-white",onClick:l,children:"❯"})]})},L=E;_.propTypes={linkUrl:u.string,apiQueryKey:u.string,forSaved:u.bool,enabled:u.bool};function _({linkUrl:t,apiQueryKey:s,forSaved:c=!1,enabled:r=!0}){const[l,i]=A(),n=l.get("sortBy")||"top",p=l.get("duration")||"alltime",{data:d,isFetching:m,hasNextPage:x,fetchNextPage:g}=D({queryKey:["posts",s,n,p],queryFn:async({pageParam:a=0})=>await S.get(`/api/${t}?limit=20&offset=${a*20}&sortby=${n}&duration=${p}`).then(o=>o.data),enabled:r,getNextPageParam:(a,o)=>{if(!(a.length<20))return o.length}});h.useEffect(()=>{const a=o=>{const{scrollTop:j,scrollHeight:w,clientHeight:C}=o.target.scrollingElement;w-j<=C*2&&x&&!m&&g()};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[g,m,x]),h.useState([{categoryid:1,category:"Cộng đồng mẹ & bé",subcategories:["Mang thai","Kinh nghiệm sinh nở","Làm đẹp cho mẹ bầu","Giải trí đời sống gia đình","Sức khỏe sau sinh","Review đồ cho bé"]},{categoryid:2,category:"Kiến thức",subcategories:["Sức khỏe mẹ & bé","Sự phát triển của bé","Gia đình","Đàn ông chăm con"]}]);const[f,b]=h.useState([{id:1,avatar:"https://picsum.photos/200/300",name:"Hồ Lê",time:"1 giờ trước",title:"Mẹ không tiêm vắc xin trước khi mang thai, sinh con có sao không?",banner:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post1.png?alt=media&token=5b330a42-e221-4f2b-9868-9e491ff59a08",content:"Việc lên kế hoạch tiêm chủng trước khi mang thai là rất cần thiết và quan trọng đối với mẹ bầu và thai nhi. Tuy nhiên, không tránh được trường hợp một số mẹ đã mang bầu trước khi tiêm chủng...",like:100,dislike:10,comment:20},{id:2,avatar:"https://picsum.photos/200/301",name:"Hà Phan",time:"2 giờ trước",title:"Tác hại của việc cho trẻ học tiếng Hàn sớm",banner:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/post2.png?alt=media&token=a12f6549-4e78-4ef3-8a5d-a884c4a76653",content:"Việc học tiếng Hàn sớm cho trẻ có thể gây ra những tác hại không mong muốn cho sự phát triển của trẻ. Bài viết dưới đây sẽ giúp bạn hiểu rõ hơn về vấn đề này...",like:100,dislike:10,comment:20}]);return e.jsx("div",{id:"main-content",className:`
       md:ml-56
      flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3`,children:e.jsx("div",{className:"flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 md:mx-48",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex flex-col md:flex-row",children:[e.jsxs("div",{className:"w-full md:w-2/3  p-2 md:p-2",children:[e.jsx(L,{}),e.jsxs("div",{className:"text-white mt-4 border-b-[1px] border-[#A7A7A7] pb-2 mb-2",style:{color:"#A7A7A7",fontSize:"0.725rem"},children:[" ","Post mới nhất"]}),e.jsx("div",{className:"flex flex-col space-y-4 font-family-mulish",children:f.map(a=>e.jsxs("div",{className:"flex flex-col bg-white p-4 space-y-2 border-b-[1px] border-[#A7A7A7] pb-2 mb-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("img",{src:a.avatar,alt:"",className:"w-8 h-8 rounded-full"}),e.jsx("div",{children:e.jsxs("div",{children:[" ",e.jsxs("p",{className:"font-semibold text-[#7AC0F8]",children:[a.name," ",e.jsx("span",{className:"text-xs text-gray-400",children:a.time})]}),e.jsx("span",{className:"text-xs text-gray-400",children:"TP. Hồ Chí Minh"})]})})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(F,{to:"/bai-dang",children:e.jsx("button",{className:`flex flex-end space-x-2 bg-[#A9D4F8] px-6 py-1 rounded-3xl text-white
                        hover:bg-[#F8BBD9] hover:text-white
                        `,children:"Tham gia"})}),e.jsx("button",{children:e.jsxs("svg",{width:"18",height:"4",viewBox:"0 0 18 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"2",cy:"2",r:"2",fill:"#D9D9D9"}),e.jsx("circle",{cx:"9",cy:"2",r:"2",fill:"#D9D9D9"}),e.jsx("circle",{cx:"16",cy:"2",r:"2",fill:"#D9D9D9"})]})})]})]}),e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("h1",{className:"text-xl font-semibold",children:a.title}),e.jsx("img",{src:a.banner,alt:"",className:"w-full  object-cover rounded-lg"}),e.jsx("p",{className:"text-gray-600",children:a.content})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(H,{}),e.jsx(B,{comment:a.comment})]}),e.jsx("div",{className:"flex space-x-4",children:e.jsx(I,{saved:!1})})]})]},a.id))})]}),e.jsx("div",{className:"w-full md:w-1/3 px-4 hidden md:block",children:e.jsxs("div",{className:"flex flex-col space-y-2 list-none  p-4 rounded-lg ",children:[e.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2012.png?alt=media&token=13f610b2-28c8-451e-95bf-e5a08ea3a00f",alt:""}),e.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2013.png?alt=media&token=f383abb6-22da-4a37-81f5-c34f9e7600e3",alt:""}),e.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/image%2014.png?alt=media&token=134f3ce3-ab6e-4429-8395-bb9397b75fc4",alt:""})]})})]})})})})}function H(){const[t,s]=h.useState(0),c=()=>s(n=>n+1),r=()=>s(n=>n-1),l=t==0?"#7AC0F8":"#A8A8A8",i=t==0?"#F8ADD2":"#A8A8A8";return e.jsxs("div",{className:"flex justify-between bg-[#F5F5F5] rounded-2xl px-2",children:[e.jsx("button",{className:`flex  items-center bg-[#CCEDFF]
         rounded-2xl px-2  active:bg-[#CCEDFF] active:text-white`,onClick:c,children:e.jsx("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3.63757 13C3.46799 12.9212 3.42476 12.7824 3.42476 12.6152C3.42809 10.458 3.42809 8.29767 3.42809 6.14047C3.42809 6.08685 3.42809 6.03324 3.42809 5.96385C3.36492 5.96385 3.31171 5.96385 3.25852 5.96385C2.30091 5.96385 1.3433 5.96385 0.389022 5.96385C0.325846 5.96385 0.262671 5.9607 0.20282 5.94493C0.0199439 5.89762 -0.0598558 5.70209 0.0432193 5.54755C0.0731446 5.5034 0.11637 5.4624 0.156271 5.42455C2.00498 3.66788 3.85369 1.91121 5.70573 0.154537C5.92186 -0.0504604 6.05486 -0.0504613 6.27098 0.151382C8.12967 1.90805 9.98503 3.66473 11.8404 5.4214C11.8803 5.45924 11.9235 5.50024 11.9534 5.5444C12.0565 5.69578 11.98 5.89132 11.7972 5.94178C11.7373 5.95755 11.6741 5.9607 11.611 5.9607C10.66 5.9607 9.70573 5.9607 8.75477 5.9607C8.70157 5.9607 8.64837 5.9607 8.58187 5.9607C8.58187 6.02693 8.58187 6.08054 8.58187 6.13416C8.58187 8.30082 8.58187 10.4675 8.5852 12.6342C8.5852 12.8045 8.53532 12.9306 8.36575 13C6.78636 13 5.21363 13 3.63757 13Z",fill:l})})}),e.jsx("span",{className:"flex justify-center items-center mx-2",children:t}),e.jsx("button",{className:"flex justify-center items-center  bg-[#FFDAEC] rounded-2xl px-2",onClick:r,children:e.jsxs("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_33_553)",children:e.jsx("path",{d:"M8.36243 0C8.532 0.0788452 8.57523 0.217613 8.57523 0.384765C8.5719 2.54197 8.5719 4.70233 8.5719 6.85953C8.5719 6.91315 8.5719 6.96676 8.5719 7.03615C8.63508 7.03615 8.68828 7.03615 8.74148 7.03615C9.69908 7.03615 10.6567 7.03615 11.611 7.03615C11.6741 7.03615 11.7373 7.0393 11.7972 7.05507C11.98 7.10238 12.0598 7.29791 11.9568 7.45245C11.9268 7.4966 11.8836 7.5376 11.8437 7.57545C9.99501 9.33212 8.1463 11.0888 6.29426 12.8455C6.07814 13.0505 5.94514 13.0505 5.72901 12.8486C3.87032 11.0919 2.01496 9.33527 0.1596 7.5786C0.1197 7.54076 0.0764743 7.49976 0.0465491 7.4556C-0.0565266 7.30422 0.0199489 7.10868 0.202825 7.05822C0.262675 7.04245 0.325851 7.0393 0.389026 7.0393C1.33998 7.0393 2.29426 7.0393 3.24522 7.0393C3.29842 7.0393 3.35162 7.0393 3.41812 7.0393C3.41812 6.97307 3.41812 6.91946 3.41812 6.86584C3.41812 4.69918 3.41812 2.53251 3.4148 0.365842C3.4148 0.195536 3.46467 0.0693838 3.63425 0C5.21363 0 6.78637 0 8.36243 0Z",fill:i})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_33_553",children:e.jsx("rect",{width:"12",height:"13",fill:"white"})})})]})})]})}function B({comment:t}){const s=t;return e.jsxs("div",{className:"flex justify-between items-center rounded-2xl bg-[#F5F5F5] px-2",children:[e.jsx("span",{className:"mr-2",children:e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_33_442)",children:e.jsx("path",{d:"M15 7.49557C14.9823 11.1413 12.341 14.2815 8.76325 14.8936C7.0053 15.1863 5.35336 14.8936 3.79859 14.0243C3.71025 13.9799 3.63958 13.971 3.55124 14.0065C2.70318 14.317 1.84629 14.6274 0.998234 14.9379C0.706714 15.0444 0.441697 15.0266 0.220849 14.8049C-0.00883321 14.5742 -0.0265011 14.3081 0.0883399 14.0065C0.397527 13.1549 0.706714 12.3122 1.0159 11.4607C1.05124 11.3631 1.0424 11.2833 0.998234 11.1946C-1.43109 6.93673 0.812721 1.55234 5.53004 0.266121C9.75265 -0.887043 14.1078 1.88055 14.8498 6.20048C14.9205 6.62626 14.947 7.06092 15 7.49557Z",fill:"#A8A8A8"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_33_442",children:e.jsx("rect",{width:"15",height:"15",fill:"white"})})})]})}),e.jsxs("p",{children:[s," "]})]})}function I({saved:t}){const[s,c]=h.useState(t);return e.jsx("div",{className:"flex justify-between items-center px-2",children:s?"Đã lưu":e.jsx("span",{className:"mr-2",children:e.jsxs("svg",{width:"16",height:"20",viewBox:"0 0 16 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_33_512)",children:e.jsx("path",{d:"M1.54386 19.6277C1.4113 19.6277 1.27875 19.6277 1.1462 19.6277C0.725145 19.4862 0.483429 19.1958 0.413254 18.7789C0.389862 18.6597 0.397659 18.5406 0.397659 18.4215C0.397659 12.9859 0.405457 7.55772 0.389862 2.12213C0.389862 1.13925 1.23976 0.364868 2.21442 0.364868C6.08967 0.372314 9.97271 0.364868 13.848 0.364868C14.8538 0.364868 15.6023 1.07969 15.6023 2.04022C15.6023 7.52794 15.6023 13.0157 15.6023 18.5108C15.6023 19.0246 15.4308 19.4267 14.8928 19.6203C14.7602 19.6203 14.6277 19.6203 14.4951 19.6203C14.191 19.4267 13.8713 19.2629 13.5906 19.0395C11.9688 17.7364 10.3626 16.4185 8.74854 15.108C8.2963 14.7357 7.77388 14.7357 7.32164 15.1005C5.7076 16.4036 4.10136 17.7066 2.49513 19.0171C2.20663 19.2703 1.91813 19.5086 1.54386 19.6277Z",stroke:"#A8A8A8",strokeMiterlimit:"10"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_33_512",children:e.jsx("rect",{width:"16",height:"20",fill:"white"})})})]})})})}export{_ as I};