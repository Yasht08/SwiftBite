(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,a){},22:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),s=(a(28),a(4)),i=a(7),m=a(21),o=a(10);const u=Object(m.a)({apiKey:"AIzaSyBufNbLcCqttNi7XBh8c9UCkqw9CXw9wIU",authDomain:"swiftbite-131f8.firebaseapp.com",projectId:"swiftbite-131f8",storageBucket:"swiftbite-131f8.appspot.com",messagingSenderId:"994960913394",appId:"1:994960913394:web:6058531733e4ab82df316b",measurementId:"G-G5HSQ0CBM6"}),g=Object(o.c)(u),p=new o.a,d=()=>{const[e,t]=Object(n.useState)(null);Object(n.useEffect)(()=>{const e=g.onAuthStateChanged(e=>{t(e)});return()=>e()},[]);return{user:e,logout:async()=>{await g.signOut()}}};var E=()=>{const{user:e,logout:t}=d(),a=Object(s.p)(),n={textDecoration:"none",color:"#faa700",transition:"color 0.3s ease"};return r.a.createElement("nav",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#f8f9fa",padding:"10px 20px"}},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(i.b,{to:"/home"},r.a.createElement("img",{src:"/images/akasa.png",alt:"Akasa Logo",style:{width:"40px",height:"auto",marginRight:"10px",verticalAlign:"middle"}})),r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"rgb(61, 6, 163)",margin:0}},"Akasa Air"),r.a.createElement("p",{style:{color:"#faa700",margin:0,fontSize:"smaller"}},"Taste the Journey with Every Bite!"))),r.a.createElement("ul",{style:{listStyleType:"none",display:"flex",gap:"20px"}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/home",style:n},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/cart",style:n},r.a.createElement("img",{src:"/images/cart.gif",alt:"Cart",style:{width:"20px",height:"20px",marginRight:"5px",verticalAlign:"middle"}}),"Cart")),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/orders",style:n},"Orders")),r.a.createElement("li",null,r.a.createElement("button",{onClick:()=>{t(),localStorage.removeItem("token"),a("/signin")},style:{background:"none",border:"none",color:"#faa700",cursor:"pointer",fontSize:"16px"}},"Logout")))))};a(19);var h=()=>{const[e,t]=Object(n.useState)(""),[a,l]=Object(n.useState)(""),[c,i]=Object(n.useState)(""),m=Object(s.p)();return r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:"/images/logo.png",alt:"Logo"})),r.a.createElement("div",{className:"form-container"},r.a.createElement("h2",null,"Sign In"),r.a.createElement("form",{onSubmit:async t=>{t.preventDefault();try{await Object(o.d)(g,e,a),m("/home")}catch(c){i("Failed to sign in: "+c.message)}}},r.a.createElement("input",{type:"email",placeholder:"Email",value:e,onChange:e=>t(e.target.value),required:!0}),r.a.createElement("input",{type:"password",placeholder:"Password",value:a,onChange:e=>l(e.target.value),required:!0}),r.a.createElement("button",{type:"submit"},"Sign In")),r.a.createElement("button",{onClick:async()=>{try{await Object(o.e)(g,p),m("/home")}catch(c){i("Failed to sign in with Google: "+c.message)}}},"Sign in with Google"),c&&r.a.createElement("p",null,c)))},b=a(36);var y=()=>{const[e,t]=Object(n.useState)(""),[a,l]=Object(n.useState)(""),[c,i]=Object(n.useState)(""),[m,u]=Object(n.useState)(!1),d=Object(s.p)();return r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:"/images/logo.png",alt:"Logo"})," "),r.a.createElement("div",{className:"form-container"},r.a.createElement("h2",null,"Sign Up"),m&&r.a.createElement("p",{className:"success-message"},"Sign up successful! Redirecting to sign-in..."),r.a.createElement("form",{onSubmit:async t=>{t.preventDefault(),i(""),u(!1);try{const t=await Object(o.b)(g,e,a),n=await t.user.getIdToken();await b.a.post("http://localhost:5000/api/auth/register",{idToken:n}),u(!0),setTimeout(()=>d("/signin"),2e3)}catch(c){i("Failed to sign up: "+c.message)}}},r.a.createElement("input",{type:"email",placeholder:"Email",value:e,onChange:e=>t(e.target.value),required:!0}),r.a.createElement("input",{type:"password",placeholder:"Password",value:a,onChange:e=>l(e.target.value),required:!0}),r.a.createElement("button",{type:"submit"},"Sign Up")),r.a.createElement("button",{onClick:async()=>{i(""),u(!1);try{const e=await Object(o.e)(g,p),t=await e.user.getIdToken();await b.a.post("http://localhost:5000/api/auth/register",{idToken:t}),u(!0),setTimeout(()=>d("/signin"),2e3)}catch(c){i("Failed to sign up with Google: "+c.message)}}},"Sign up with Google"),c&&r.a.createElement("p",{className:"error-message"},c)))};a(33);var f=()=>{const e=Object(s.p)(),[t]=Object(n.useState)([{name:"BBQS",image:"/images/bbq.jpg"},{name:"BEST-FOODS",image:"/images/best-foods.jpg"},{name:"BREADS",image:"/images/bread.jpg"},{name:"BURGERS",image:"/images/burger.jpg"},{name:"CHOCOLATES",image:"/images/chocolate.png"},{name:"DESSERTS",image:"/images/dessert.jpg"},{name:"DRINKS",image:"/images/drinks.jpg"},{name:"FRIED-CHICKEN",image:"/images/fried-chicken.jpg"},{name:"ICE-CREAM",image:"/images/ice-cream.jpg"},{name:"PIZZAS",image:"/images/pizzas.jpg"},{name:"PORKS",image:"/images/porks.jpg"},{name:"SANDWICHES",image:"/images/sandwhiche.jpg"},{name:"SAUSAGES",image:"/images/sausages.jpg"},{name:"STEAKS",image:"/images/steak.jpg"}]),[a,l]=Object(n.useState)([]),[c,i]=Object(n.useState)(null),[m,o]=Object(n.useState)(""),[u,g]=Object(n.useState)(""),p=t=>{(async e=>{try{const t=await b.a.get("https://free-food-menus-api-two.vercel.app/"+e);l(t.data),i(e)}catch(m){console.error("Error fetching items:",m),o("Failed to load items.")}})(t.name.toUpperCase()),e("/category/"+encodeURIComponent(t.name.toUpperCase()))};return r.a.createElement("div",{className:"home-container"},r.a.createElement("h2",null,"Food Categories"),m&&r.a.createElement("p",{className:"error-message"},m),u&&r.a.createElement("p",{className:"success-message"},u),r.a.createElement("div",{className:"category-list"},t.map(e=>r.a.createElement("div",{key:e.name,className:"category-card",onClick:()=>p(e)},r.a.createElement("img",{src:e.image,alt:e.name,className:"category-image"}),r.a.createElement("h3",null,e.name.charAt(0).toUpperCase()+e.name.slice(1))))),c&&r.a.createElement("div",null,r.a.createElement("h3",null,c.charAt(0).toUpperCase()+c.slice(1)," Items"),r.a.createElement("div",{className:"item-list"},a.length>0?a.map(e=>r.a.createElement("div",{key:e.id,className:"food-item"},r.a.createElement("img",{src:e.img||"default-image-url.jpg",alt:e.name}),r.a.createElement("h4",null,e.name),r.a.createElement("p",null,e.dsc),r.a.createElement("p",null,"$",e.price.toFixed(2)),r.a.createElement("button",{onClick:()=>(async e=>{try{const t="currentUserId";await b.a.post("http://localhost:5000/api/cart/add",{userId:t,itemId:e.id,name:e.name,price:e.price}),g(e.name+" has been added to your cart!"),setTimeout(()=>g(""),3e3)}catch(m){console.error("Error adding item to cart:",m),o("Failed to add item to cart.")}})(e)},"Add to Cart"))):r.a.createElement("p",null,"No items available in this category."))))};var S=()=>{const[e,t]=Object(n.useState)([]),[a,l]=Object(n.useState)("");Object(n.useEffect)(()=>{l("someUserId"),a&&c()},[a]);const c=async()=>{if(a)try{const e=await fetch("/api/cart/"+a);if(!e.ok){const t=await e.text();throw console.error("Error response:",t),new Error("Network response was not ok")}const n=e.headers.get("content-type");if(!n||!n.includes("application/json"))throw console.error("Unexpected content type:",n),new Error("Received non-JSON response");{const a=await e.json();t(a)}}catch(e){console.error("Error fetching cart items:",e)}else console.error("User ID is undefined")};return r.a.createElement("div",null,r.a.createElement("h1",null,"Your Cart"),0===e.length?r.a.createElement("p",null,"Your cart is empty."):r.a.createElement("ul",null,e.map(e=>r.a.createElement("li",{key:e.id},e.name," - Quantity: ",e.quantity))))};var v=()=>r.a.createElement("div",null,r.a.createElement("h2",null,"Your Orders"));var j=()=>{const{categoryName:e}=Object(s.r)(),[t,a]=Object(n.useState)([]),[l,c]=Object(n.useState)(""),[i,m]=Object(n.useState)("");Object(n.useEffect)(()=>{(async()=>{try{const t=await b.a.get("https://free-food-menus-api-two.vercel.app/"+e);a(t.data)}catch(l){c("Failed to load items."),console.error("Fetch items error:",l)}})()},[e]);return r.a.createElement("div",null,r.a.createElement("h3",null,e.charAt(0).toUpperCase()+e.slice(1)," Items"),l&&r.a.createElement("p",{className:"error-message"},l),i&&r.a.createElement("p",{className:"success-message"},i),r.a.createElement("div",{className:"item-list"},t.length>0?t.map(e=>r.a.createElement("div",{key:e.id,className:"food-item"},r.a.createElement("img",{src:e.img||"https://example.com/default-image.jpg",alt:e.name}),r.a.createElement("h4",null,e.name),r.a.createElement("p",null,e.dsc),r.a.createElement("p",null,"$",e.price.toFixed(2)),r.a.createElement("button",{onClick:()=>(async e=>{try{const t="currentUserId";200===(await b.a.post("http://localhost:5000/api/cart/add",{userId:t,itemId:e.id.toString(),name:e.name,price:e.price,image:e.img||"https://example.com/default-image.jpg",description:e.dsc||"No description available"})).status&&(m(e.name+" has been added to your cart!"),setTimeout(()=>m(""),3e3))}catch(l){c("Failed to add item to cart."),console.error("Add to cart error:",l),setTimeout(()=>c(""),3e3)}})(e)},"Add to Cart"))):r.a.createElement("p",null,"No items available in this category.")))};a(34);var w=()=>{const{user:e}=d(),[t,a]=Object(n.useState)([]),[l,c]=Object(n.useState)("");Object(n.useEffect)(()=>{(async()=>{if(e)try{const t=await b.a.get("http://localhost:5000/api/cart/fetch/"+e.id);a(t.data)}catch(l){c("Failed to load cart items."),console.error("Fetch cart items error:",l)}})()},[e]);return r.a.createElement("div",null,r.a.createElement("h3",null,"Your Cart"),l&&r.a.createElement("p",{className:"error-message"},l),r.a.createElement("div",{className:"item-list"},t.length>0?t.map(n=>r.a.createElement("div",{key:n.itemId,className:"cart-item"},r.a.createElement("img",{src:n.image,alt:n.name}),r.a.createElement("h4",null,n.name),r.a.createElement("p",null,"$",n.price.toFixed(2)),r.a.createElement("button",{onClick:()=>(async n=>{try{await b.a.delete(`http://localhost:5000/api/cart/delete/${e.id}/${n}`),a(t.filter(e=>e.itemId!==n))}catch(l){c("Failed to remove item from cart."),console.error("Remove from cart error:",l)}})(n.itemId)},"Remove"))):r.a.createElement("p",null,"Your cart is empty.")))};const O=()=>{const e=Object(s.n)(),t="/signup"===e.pathname||"/signin"===e.pathname;return r.a.createElement("div",{className:"App"},!t&&r.a.createElement(E,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/signup",element:r.a.createElement(y,null)}),r.a.createElement(s.b,{path:"/signin",element:r.a.createElement(h,null)}),r.a.createElement(s.b,{path:"/home",element:r.a.createElement(f,null)}),r.a.createElement(s.b,{path:"/cart",element:r.a.createElement(S,null)}),r.a.createElement(s.b,{path:"/orders",element:r.a.createElement(v,null)}),r.a.createElement(s.b,{path:"/category/:categoryName",element:r.a.createElement(j,null)}),r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:"/signup"})}),r.a.createElement(s.b,{path:"/cart",element:r.a.createElement(w,null)})))};var C=function(){return r.a.createElement(i.a,null,r.a.createElement(O,null))};var N=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:l,getTTFB:c}=t;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null))),N()}},[[22,1,2]]]);
//# sourceMappingURL=main.af7e8213.chunk.js.map