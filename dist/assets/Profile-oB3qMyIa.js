import{P as v,b as N,A as j,r as n,f as p,j as e,c as x,d as f,a as C,e as k,L as M,g as P,M as D}from"./index-D_wrdjgj.js";import{I as F}from"./InfinitePosts-BLFgWfcn.js";import{Chat as S}from"./Inbox-5yGksQId.js";g.propTypes={setModal:v.func};function g({setModal:m}){const c=N(),{user:t}=j(),[l,r]=n.useState(t.bio),[s,u]=n.useState(""),[o,y]=n.useState("image"),[b,w]=n.useState("");async function h(a){a==null||a.preventDefault();const i=new FormData;i.append("bio",l),i.append("content_type",o),i.append("content_url",b),s&&i.append("avatar",s,s.name),await f.patch("/api/user",i,{headers:{"Content-Type":"multipart/form-data"}}).then(d=>{m(!1),c.setQueryData({queryKey:["user",t.username]},()=>d.data),c.setQueryData({queryKey:["user"]},()=>d.data)}).catch(d=>alert(`${d.message} check your fields`))}return n.useEffect(()=>(p.setFocused(!1),()=>p.setFocused(!0)),[]),e.jsxs("div",{className:"flex flex-col p-5 space-y-5 w-5/6 rounded-md min-h-3/6 md:w-3/4 md:p-10 bg-theme-cultured",children:[e.jsxs("div",{className:"flex flex-col justify-between items-center p-4 space-y-3 bg-white rounded-xl md:flex-row md:space-y-0",children:[e.jsx("p",{children:"Updating Profile for"}),e.jsx("img",{src:t.avatar||x,className:"object-cover w-10 h-10 rounded-full md:w-14 md:h-14",alt:""}),e.jsx("p",{children:t.username})]}),e.jsxs("form",{className:"flex flex-col p-5 space-y-5 bg-white rounded-md",onSubmit:h,children:[e.jsxs("label",{htmlFor:"bio",className:"flex flex-col p-2 md:space-x-3 md:flex-row",children:[e.jsx("span",{className:"text-sm font-light",children:"Bio"}),e.jsx("textarea",{value:l,onChange:a=>r(a.target.value),type:"text",name:"bio",id:"bio",className:"w-full h-20 max-h-28 border-b border-gray-800 focus:outline-none"})]}),e.jsxs("label",{htmlFor:"media",className:"flex flex-col items-center space-y-3 md:space-y-0 md:space-x-5 md:flex-row",children:[e.jsxs("select",{className:"px-10 py-2 bg-white rounded-md border md:px-12",name:"media",id:"media",onChange:a=>y(a.target.value),children:[e.jsx("option",{value:"image",children:"Image"}),e.jsx("option",{value:"url",children:"URL"})]}),o==="image"?e.jsx("input",{onChange:a=>{a.target.files[0].size>10485760?alert("File too large, only upload files less than 10MB"):u(a.target.files[0])},type:"file",name:"file",accept:"image/*",id:"image",className:"w-full focus:outline-none"}):e.jsx("input",{type:"text",name:"media_url",id:"media_url",className:"p-2 w-full rounded-md border border-gray-800 focus:outline-none",onChange:a=>w(a.target.value)})]}),e.jsx("span",{className:"text-sm font-semibold text-red-500",children:"Only Add Image if you want to modify the original image if empty the original will be used."}),e.jsx("button",{onClick:h,className:"py-2 font-semibold text-white rounded-md bg-theme-orange active:scale-95",children:"Submit"})]})]})}function K(){const{logout:m,user:c}=j(),{username:t}=C(),[l,r]=n.useState(!1),{data:s,isFetching:u}=k({queryKey:["user",t],queryFn:async()=>await f.get(`/api/user/${t}`).then(o=>o.data)});return n.useEffect(()=>{switch(l){case"message":r(e.jsx(S,{sender:s,setCurChat:r,newChat:!0}));break;case"edit":r(e.jsx(g,{setModal:r}));break;case"delete":window.confirm("Are you sure you want to delete your account?")&&f.delete("/api/user").then(()=>m()),r(!1);break}},[l,s,t,m]),n.useEffect(()=>(document.title="u/"+t,()=>document.title="Mebe"),[t]),e.jsxs("div",{className:"flex flex-col flex-1 items-center w-full bg-theme-cultured",children:[u?e.jsx(M,{forPosts:!0}):e.jsx("div",{className:"flex flex-col items-center w-full bg-theme-cultured",children:e.jsxs("div",{className:"flex flex-col p-2 w-full bg-white rounded-md md:p-5",children:[e.jsxs("div",{className:"flex flex-col flex-1 justify-between items-center p-2 w-full rounded-md md:flex-row md:rounded-full bg-theme-cultured",children:[e.jsx("img",{src:s.avatar||x,className:"object-cover w-24 h-24 bg-white rounded-full cursor-pointer md:w-36 md:h-36",alt:"",onClick:()=>r(e.jsx("img",{src:s.avatar||x,className:"object-cover w-11/12 max-h-5/6 md:w-max md:max-h-screen",alt:""}))}),e.jsxs("div",{className:"flex flex-col flex-1 items-center w-full md:p-2",children:[e.jsxs("h1",{className:"mt-2 text-lg font-semibold md:m-0",children:["u/",s.username]}),e.jsx("p",{className:"my-4 w-11/12 text-sm text-center md:my-2 md:text-base",children:s==null?void 0:s.bio}),e.jsxs("div",{className:"flex justify-between items-center w-full md:w-11/12",children:[e.jsxs("p",{className:"text-xs md:text-sm",children:["Karma: ",s==null?void 0:s.karma.user_karma]}),e.jsxs("p",{className:"text-xs md:text-sm",children:["Cake Day On: ",new Date(s==null?void 0:s.registrationDate).toDateString()]})]})]})]}),e.jsxs("div",{className:"flex flex-col my-2 text-sm md:text-sm",children:[e.jsxs("div",{className:"flex justify-between space-x-2",children:[e.jsxs("p",{className:"",children:["Total Posts: ",s==null?void 0:s.karma.posts_count]}),e.jsxs("p",{className:"",children:["Posts Karma: ",s==null?void 0:s.karma.posts_karma]})]}),e.jsxs("div",{className:"flex justify-between space-x-2",children:[e.jsxs("p",{className:"",children:["Total Comments: ",s==null?void 0:s.karma.comments_count]}),e.jsxs("p",{className:"",children:["Comments Karma: ",s==null?void 0:s.karma.comments_karma]})]})]}),e.jsxs("select",{name:"options",id:"options",className:"p-2 mt-2 bg-white rounded-md border-2",value:l,onChange:o=>r(o.target.value),children:[e.jsx("option",{value:!1,children:"Choose an action"}),c.username===(s==null?void 0:s.username)&&e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"edit",children:"Update Profile"}),e.jsx("option",{value:"delete",children:"Delete Account"})]}),e.jsx("option",{value:"message",children:"Message"})]})]})}),e.jsx(F,{apiQueryKey:s==null?void 0:s.username,linkUrl:`posts/user/${s==null?void 0:s.username}`,enabled:(s==null?void 0:s.username)!==void 0}),e.jsx(P,{children:l!==!1&&l!=="delete"&&e.jsx(D,{showModal:l,setShowModal:r,children:l})})]})}export{K as Profile,K as default};
