import{r as o,j as e,i as k}from"./index-CTnDyMBX.js";const h=10;function y(){const[i,x]=o.useState(1),[g,p]=o.useState(""),[l,N]=o.useState([]),c=[{id:1,name:"Tỉnh thành",total:[{id:1,name:"Gia Lai"},{id:2,name:"Kon Tum"},{id:3,name:"Đắk Lắk"},{id:4,name:"Đắk Nông"},{id:5,name:"Lâm Đồng"},{id:6,name:"Bình Phước"},{id:7,name:"Bình Dương"},{id:8,name:"Bình Thuận"},{id:9,name:"Ninh Thuận"},{id:10,name:"Khánh Hòa"},{id:11,name:"Phú Yên"},{id:12,name:"Đà Nẵng"},{id:1,name:"Gia Lai"},{id:2,name:"Kon Tum"},{id:3,name:"Đắk Lắk"},{id:4,name:"Đắk Nông"},{id:5,name:"Lâm Đồng"},{id:6,name:"Bình Phước"},{id:7,name:"Bình Dương"},{id:8,name:"Bình Thuận"},{id:9,name:"Ninh Thuận"},{id:10,name:"Khánh Hòa"},{id:11,name:"Phú Yên"},{id:12,name:"Đà Nẵng"},{id:1,name:"Gia Lai"},{id:2,name:"Kon Tum"},{id:3,name:"Đắk Lắk"},{id:4,name:"Đắk Nông"},{id:5,name:"Lâm Đồng"},{id:6,name:"Bình Phước"},{id:7,name:"Bình Dương"},{id:8,name:"Bình Thuận"},{id:9,name:"Ninh Thuận"},{id:10,name:"Khánh Hòa"},{id:11,name:"Phú Yên"},{id:12,name:"Đà Nẵng"},{id:1,name:"Gia Lai"},{id:2,name:"Kon Tum"},{id:3,name:"Đắk Lắk"},{id:4,name:"Đắk Nông"},{id:5,name:"Lâm Đồng"},{id:6,name:"Bình Phước"},{id:7,name:"Bình Dương"},{id:8,name:"Bình Thuận"},{id:9,name:"Ninh Thuận"},{id:10,name:"Khánh Hòa"},{id:11,name:"Phú Yên"},{id:12,name:"Đà Nẵng"},{id:1,name:"Gia Lai"},{id:2,name:"Kon Tum"},{id:3,name:"Đắk Lắk"},{id:4,name:"Đắk Nông"},{id:5,name:"Lâm Đồng"},{id:6,name:"Bình Phước"},{id:7,name:"Bình Dương"},{id:8,name:"Bình Thuận"},{id:9,name:"Ninh Thuận"},{id:10,name:"Khánh Hòa"},{id:11,name:"Phú Yên"},{id:12,name:"Đà Nẵng"},{id:1,name:"Gia Lai"},{id:2,name:"Kon Tum"},{id:3,name:"Đắk Lắk"},{id:4,name:"Đắk Nông"},{id:5,name:"Lâm Đồng"},{id:6,name:"Bình Phước"},{id:7,name:"Bình Dương"},{id:8,name:"Bình Thuận"},{id:9,name:"Ninh Thuận"},{id:10,name:"Khánh Hòa"},{id:11,name:"Phú Yên"},{id:12,name:"Đà Nẵng"},{id:1,name:"Gia Lai"},{id:2,name:"Kon Tum"},{id:3,name:"Đắk Lắk"},{id:4,name:"Đắk Nông"},{id:5,name:"Lâm Đồng"},{id:6,name:"Bình Phước"},{id:7,name:"Bình Dương"},{id:8,name:"Bình Thuận"},{id:9,name:"Ninh Thuận"},{id:10,name:"Khánh Hòa"},{id:11,name:"Phú Yên"},{id:12,name:"Đà Nẵng"},{id:1,name:"Gia Lai"},{id:2,name:"Kon Tum"},{id:3,name:"Đắk Lắk"},{id:4,name:"Đắk Nông"},{id:5,name:"Lâm Đồng"},{id:6,name:"Bình Phước"},{id:7,name:"Bình Dương"},{id:8,name:"Bình Thuận"},{id:9,name:"Ninh Thuận"},{id:10,name:"Khánh Hòa"},{id:11,name:"Phú Yên"},{id:12,name:"Đà Nẵng"}]}],b=l.length?l.length:c[0].total.length,d=Math.ceil(b/h),m=a=>{a>=1&&a<=d&&x(a)},f=()=>{const a=c[0].total.filter(s=>s.name.toLowerCase().includes(g.toLowerCase()));N(a),x(1)},j=a=>{p(a.target.value)},u=l.length?l.slice((i-1)*h,i*h):c[0].total.slice((i-1)*h,i*h),w=()=>{const a=[],t=3-Math.floor(1.5),r=3-t;if(d<=7)for(let n=1;n<=d;n++)a.push(e.jsx("button",{onClick:()=>m(n),className:`px-3 py-1 mx-1 ${i===n?"bg-blue-500 text-white":" text-gray-700"} rounded`,children:n},n));else{for(let n=1;n<=t;n++)a.push(e.jsx("button",{onClick:()=>m(n),className:`px-3 py-1 mx-1 ${i===n?"bg-[#7AC0F8] text-white rounded-3xl":" text-gray-700"} rounded`,children:n},n));i>t+1&&a.push(e.jsx("span",{children:"..."},"left-ellipsis"));for(let n=Math.max(i-r,t+1);n<=Math.min(i+r,d-t);n++)a.push(e.jsx("button",{onClick:()=>m(n),className:`px-3 py-1 mx-1 ${i===n?"bg-[#7AC0F8] text-white rounded-3xl":" text-gray-700"} rounded`,children:n},n));i<d-r&&a.push(e.jsx("span",{children:"..."},"right-ellipsis"));for(let n=d-t+1;n<=d;n++)a.push(e.jsx("button",{onClick:()=>m(n),className:`px-3 py-1 mx-1 ${i===n?"bg-[#7AC0F8] text-white rounded-3xl":" text-gray-700"} rounded`,children:n},n))}return a};return e.jsx("div",{id:"main-content",className:"md:ml-56 flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg p-0.5 bg-theme-cultured md:bg-white md:p-3",children:e.jsx("div",{className:"flex flex-col mx-0 space-y-2 md:space-y-3 flex-1 mt-2 md:mt-0 ",children:e.jsxs("div",{className:"flex flex-col md:flex-row",children:[e.jsxs("div",{className:"w-full md:w-2/3 p-2 md:px-4",children:[e.jsxs("div",{className:"flex items-center justify-between md:justify-center mb-4  md:items-center",children:[e.jsx("input",{type:"text",value:g,onChange:j,placeholder:"Tỉnh thành",className:"flex items-center py-1.5 pl-2 md:p-1.5 space-x-14  rounded-3xl bg-neutral-100 relative md:w-96 md:ml-10 md:mr-5 md:pl-5 md:pr-5 "}),e.jsx("button",{onClick:f,className:"px-7 py-1 bg-[#F8BBD9] text-white rounded-3xl hover:bg-[#F48FB1]",children:"Tìm kiếm"})]}),c.map(a=>e.jsxs("div",{className:"relative overflow-x-auto sm:rounded-lg",children:[e.jsx("div",{className:"mb-4 rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-[#7AC0F8] bg-white rounded-lg border border-gray-200",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-[#7AC0F8]",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-10 py-3 text-white font-medium",children:"Tỉnh thành"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-white font-medium",children:"Số danh mục"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-white font-medium",children:"Số người tham gia"})]})}),e.jsx("tbody",{children:u.map((s,t)=>e.jsxs("tr",{className:`bg-white border-b border-gray-200 ${t===u.length-1?"rounded-b-3xl":""} hover:bg-gray-100`,children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("div",{className:"flex justify-start items-center",children:e.jsx("div",{className:"ml-4",children:e.jsx(k,{to:"/community",className:"text-sm font-medium text-gray-900",children:s.name})})})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"ml-8 text-[#878787]",children:"42"})})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"ml-8 text-[#878787]",children:"42"})})})]},s.id))})]})}),e.jsxs("div",{className:"flex justify-center items-center mt-4",children:[e.jsx("button",{onClick:()=>m(i-1),disabled:i===1,className:"p-2 bg-[#F6F6F6] rounded-3xl disabled:opacity-50",children:e.jsx("svg",{width:"6",height:"8",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7 1L2 6L7 11",stroke:"#878787",strokeWidth:"2"})})}),e.jsx("div",{children:w()}),e.jsx("button",{onClick:()=>m(i+1),disabled:i===d,className:"p-2 bg-[#F6F6F6] rounded-3xl disabled:opacity-50",children:e.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 11L6 6L1 0.999999",stroke:"#878787",strokeWidth:"2"})})})]})]},a.id))]}),e.jsx("div",{className:"w-full md:w-1/3 hidden md:block",children:e.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/weloveschool-212d8.appspot.com/o/asd1.png?alt=media&token=5229bcab-5620-4393-aabb-b52eb3ba7369",alt:"",className:"w-full h-auto rounded-lg"})})]})})})}export{y as default};
