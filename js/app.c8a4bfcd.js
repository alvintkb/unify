(function(){"use strict";var e={5057:function(e,t,a){var i=a(3751),n=a(641);const l=e=>((0,n.Qi)("data-v-3bed2534"),e=e(),(0,n.jt)(),e),o=l((()=>(0,n.Lk)("img",{id:"scroll-to-section",class:"svg-icon",src:"img/Unifi-logo.svg",alt:"Unifi Home"},null,-1))),r=l((()=>(0,n.Lk)("span",null,"Home",-1))),s=l((()=>(0,n.Lk)("span",null,"About",-1)));function c(e,t,a,i,l,c){const d=(0,n.g2)("v-icon"),u=(0,n.g2)("v-btn"),m=(0,n.g2)("v-app-bar-nav-icon"),p=(0,n.g2)("v-toolbar-title"),g=(0,n.g2)("v-spacer"),h=(0,n.g2)("v-app-bar"),v=(0,n.g2)("v-list-item-icon"),f=(0,n.g2)("v-list-item-title"),k=(0,n.g2)("v-list-item"),y=(0,n.g2)("v-list-item-group"),b=(0,n.g2)("v-list"),I=(0,n.g2)("v-navigation-drawer"),C=(0,n.g2)("router-view"),F=(0,n.g2)("v-main"),L=(0,n.g2)("v-bottom-navigation"),_=(0,n.g2)("v-app");return(0,n.uX)(),(0,n.Wv)(_,null,{default:(0,n.k6)((()=>[(0,n.bF)(h,{app:"",color:"primary",dark:""},{default:(0,n.k6)((()=>[c.isSubPage?((0,n.uX)(),(0,n.Wv)(u,{key:0,onClick:c.goBack,icon:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-arrow-left")])),_:1})])),_:1},8,["onClick"])):((0,n.uX)(),(0,n.Wv)(m,{key:1,onClick:t[0]||(t[0]=e=>l.drawer=!l.drawer)})),(0,n.bF)(p,null,{default:(0,n.k6)((()=>[o])),_:1}),(0,n.bF)(g),i.authStore.isAuthenticated?((0,n.uX)(),(0,n.Wv)(u,{key:2,onClick:c.logout,icon:""},{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-logout")])),_:1})])),_:1},8,["onClick"])):(0,n.Q3)("",!0)])),_:1}),(0,n.bF)(I,{modelValue:l.drawer,"onUpdate:modelValue":t[1]||(t[1]=e=>l.drawer=e),app:"",temporary:""},{default:(0,n.k6)((()=>[(0,n.bF)(b,{nav:""},{default:(0,n.k6)((()=>[i.authStore.isAuthenticated?((0,n.uX)(),(0,n.Wv)(y,{key:0},{default:(0,n.k6)((()=>[(0,n.bF)(k,{to:"/home",exact:""},{default:(0,n.k6)((()=>[(0,n.bF)(v,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-home")])),_:1})])),_:1}),(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.eW)("Home")])),_:1})])),_:1}),(0,n.bF)(k,{to:"/about",exact:""},{default:(0,n.k6)((()=>[(0,n.bF)(v,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-information")])),_:1})])),_:1}),(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.eW)("About")])),_:1})])),_:1})])),_:1})):(0,n.Q3)("",!0),(0,n.bF)(k,{to:"/",exact:""},{default:(0,n.k6)((()=>[(0,n.bF)(v,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-login")])),_:1})])),_:1}),(0,n.bF)(f,null,{default:(0,n.k6)((()=>[(0,n.eW)("Login")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,n.bF)(F,null,{default:(0,n.k6)((()=>[(0,n.bF)(C)])),_:1}),i.authStore.isAuthenticated?((0,n.uX)(),(0,n.Wv)(L,{key:0,app:""},{default:(0,n.k6)((()=>[(0,n.bF)(u,{to:"/home",exact:""},{default:(0,n.k6)((()=>[r,(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-home")])),_:1})])),_:1}),(0,n.bF)(u,{to:"/about",exact:""},{default:(0,n.k6)((()=>[s,(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-information")])),_:1})])),_:1})])),_:1})):(0,n.Q3)("",!0)])),_:1})}a(4114);var d=a(953);const u=(0,d.Kh)({isAuthenticated:"true"===localStorage.getItem("authenticated"),login(){this.isAuthenticated=!0,localStorage.setItem("authenticated","true")},logout(){this.isAuthenticated=!1,localStorage.removeItem("authenticated")}});var m={name:"App",setup(){return{authStore:u}},data(){return{drawer:!1}},computed:{isSubPage(){const e=["/"];return!e.includes(this.$route.path)}},methods:{goBack(){this.$router.go(-1)},logout(){this.authStore.logout(),this.$router.push({name:"Login"})}},watch:{$route(e,t){console.log("Route changed from",t.path,"to",e.path)}}},p=a(6262);const g=(0,p.A)(m,[["render",c],["__scopeId","data-v-3bed2534"]]);var h=g,v=a(6166),f=a(33);const k={class:"header"},y={class:"page-title"};function b(e,t,a,i,l,o){const r=(0,n.g2)("MySlider"),s=(0,n.g2)("MySelector"),c=(0,n.g2)("MyPackage"),d=(0,n.g2)("MyReg"),u=(0,n.g2)("LaunchButton"),m=(0,n.g2)("tmReg"),p=(0,n.g2)("ImageUpLoader"),g=(0,n.g2)("CameraCapture");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("div",k,[(0,n.Lk)("h1",y,(0,f.v_)(l.pageTitle),1)]),(0,n.bF)(r,{pageTitle:l.pageTitle,images:l.filteredImages},null,8,["pageTitle","images"]),(0,n.bF)(s,{plans:l.filteredPlans},null,8,["plans"]),(0,n.bF)(c,{pageTitle:l.pageTitle,plans:l.filteredPlans},null,8,["pageTitle","plans"]),(0,n.bF)(d),l.showLaunchButton?((0,n.uX)(),(0,n.Wv)(u,{key:0})):(0,n.Q3)("",!0),(0,n.bF)(m,{project:e.selectedPackage,onClose:t[0]||(t[0]=t=>e.showRegistration=!1)},null,8,["project"]),(0,n.bF)(p),(0,n.bF)(g)])}const I={key:0},C={key:1},F=["href"],L={key:2};function _(e,t,a,i,l,o){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("input",{type:"file",onChange:t[0]||(t[0]=(...e)=>o.onFileChange&&o.onFileChange(...e))},null,32),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>o.uploadImage&&o.uploadImage(...e))},"Upload"),l.uploading?((0,n.uX)(),(0,n.CE)("p",I,"Uploading...")):(0,n.Q3)("",!0),l.imageUrl?((0,n.uX)(),(0,n.CE)("p",C,[(0,n.eW)("Image URL: "),(0,n.Lk)("a",{href:l.imageUrl,target:"_blank"},(0,f.v_)(l.imageUrl),9,F)])):(0,n.Q3)("",!0),l.error?((0,n.uX)(),(0,n.CE)("p",L,(0,f.v_)(l.error),1)):(0,n.Q3)("",!0)])}var E=a(4335),w={name:"ImageUploader",data(){return{file:null,imageUrl:"",uploading:!1,error:""}},methods:{onFileChange(e){this.file=e.target.files[0]},async uploadImage(){if(!this.file)return void(this.error="Please select an image file first.");this.uploading=!0,this.error="";const e=new FormData;e.append("file",this.file),e.append("upload_preset","YOUR_UPLOAD_PRESET");try{const t=await E.A.post("https://api.cloudinary.com/v1_1/alvin-tan/image/upload",e,{headers:{"X-Requested-With":"XMLHttpRequest"}});this.imageUrl=t.data.secure_url}catch(t){this.error="Error uploading image: "+t.message,console.error("Error uploading image:",t.response?t.response.data:t.message)}finally{this.uploading=!1}}}};const M=(0,p.A)(w,[["render",_],["__scopeId","data-v-467d7f2e"]]);var S=M;function U(e,t,a,i,l,o){return(0,n.uX)(),(0,n.CE)("button",{onClick:t[0]||(t[0]=(...e)=>i.goToAdContacts&&i.goToAdContacts(...e))},"View Ad Contacts")}var A={name:"LaunchButton",setup(){const e=(0,v.rd)(),t=()=>{e.push("/ad-contacts")};return{goToAdContacts:t}}};const R=(0,p.A)(A,[["render",U],["__scopeId","data-v-3c496bee"]]);var T=R;const $={class:"slider-container"},P=["src","alt"];function D(e,t,a,i,l,o){return(0,n.uX)(),(0,n.CE)("div",$,[(0,n.Lk)("div",{class:"slider-wrapper",style:(0,f.Tr)({transform:`translateX(-${100*l.currentIndex}%)`})},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.images,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"slider-slide",key:t},[(0,n.Lk)("img",{src:e.src,alt:`Slide ${t+1}`,style:{width:"100%"}},null,8,P)])))),128))],4),(0,n.Lk)("button",{class:"prev-btn",onClick:t[0]||(t[0]=(...e)=>o.prevSlide&&o.prevSlide(...e))},"❮"),(0,n.Lk)("button",{class:"next-btn",onClick:t[1]||(t[1]=(...e)=>o.nextSlide&&o.nextSlide(...e))},"❯")])}var x={name:"MySlider",props:{pageTitle:{type:String,default:""},images:{type:Array,required:!0}},data(){return{currentIndex:0,intervalId:null}},mounted(){},beforeUnmount(){this.stopAutoPlay()},methods:{startAutoPlay(){this.intervalId=setInterval(this.nextSlide,3e3)},stopAutoPlay(){clearInterval(this.intervalId)},prevSlide(){this.stopAutoPlay(),this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length},nextSlide(){this.stopAutoPlay(),this.currentIndex=(this.currentIndex+1)%this.images.length}}};const B=(0,p.A)(x,[["render",D],["__scopeId","data-v-0d359bc3"]]);var X=B;const N={class:"pricing-container"},j=["id"],O={class:"pricing-table"},W={class:"pricing-card"},H={class:"pricing-details"},q={key:0},K={class:"image-and-text"},V=["src","alt"],Q={key:1},J={class:"svg-and-text"},z=["innerHTML"],Y={key:2},Z={key:3},G={class:"pricing-info"},ee={class:"pricing-content"},te={class:"pricing-action"},ae=["onClick"];function ie(e,t,a,i,l,o){return(0,n.uX)(),(0,n.CE)("div",N,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.plans,((e,t)=>((0,n.uX)(),(0,n.CE)("section",{key:t,id:"pricing-section-"+(t+1),class:"pricing-section"},[(0,n.Lk)("div",O,[(0,n.Lk)("div",W,[(0,n.Lk)("div",H,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.features,((t,a)=>((0,n.uX)(),(0,n.CE)("div",{key:a},[o.isImage(t)?((0,n.uX)(),(0,n.CE)("div",q,[(0,n.Lk)("div",K,[(0,n.Lk)("img",{src:o.getImagePath(t).src,alt:e.title+" feature image",style:(0,f.Tr)(o.getImageStyle(t)),class:"feature-image"},null,12,V),(0,n.Lk)("h2",null,(0,f.v_)(o.getImagePath(t).text),1)])])):o.isSvg(t)?((0,n.uX)(),(0,n.CE)("div",Q,[(0,n.Lk)("div",J,[(0,n.Lk)("div",{innerHTML:o.getSvgContent(t).svg},null,8,z),(0,n.Lk)("span",null,(0,f.v_)(o.getSvgContent(t).text),1)])])):o.isHtmlTag(t)?((0,n.uX)(),(0,n.CE)("div",Y,[((0,n.uX)(),(0,n.Wv)((0,n.$y)(o.getHtmlTagName(t)),null,{default:(0,n.k6)((()=>[(0,n.eW)((0,f.v_)(o.getHtmlTagContent(t)),1)])),_:2},1024))])):((0,n.uX)(),(0,n.CE)("div",Z,(0,f.v_)(t),1))])))),128)),(0,n.Lk)("div",G,[(0,n.Lk)("p",null,(0,f.v_)(e.promo),1),(0,n.Lk)("p",null,(0,f.v_)(e.price),1)]),(0,n.Lk)("div",ee,[(0,n.Lk)("p",null,(0,f.v_)(e.extra),1)]),(0,n.Lk)("div",te,[(0,n.Lk)("button",{class:"apply-now-btn",onClick:t=>o.fillPackageName(e.title)},"Apply Now",8,ae)])])])])],8,j)))),128))])}var ne={name:"MyPackage",props:{pageTitle:{type:String,default:""},plans:{type:Array,required:!0}},methods:{fillPackageName(e){console.log(e),this.packageName=e,document.getElementById("registration-form").scrollIntoView({behavior:"smooth"})},isImage(e){return e.startsWith("image:")},getImagePath(e){const t=e.split(","),a=t[0].split("image:")[1].trim(),i=t[3]?t[3].trim():"";return{src:a,text:i}},getImageStyle(e){const t=e.split(","),a=t[1]?t[1].split("=")[1].trim()+"px":"auto",i=t[2]?t[2].split("=")[1].trim()+"px":"auto";return{width:a,height:i}},isSvg(e){return e.startsWith("svg:")},getSvgContent(e){const[t,...a]=e.split("svg:")[1].split(","),i=t.trim(),n=a.shift().trim();return{svg:`<svg ${i}>${n}</svg>`,text:a.join(",").trim()}},isHtmlTag(e){return e.match(/^[a-zA-Z0-9]+:/)},getHtmlTagName(e){return e.split(":")[0]},getHtmlTagContent(e){return e.split(":")[1].trim()}}};const le=(0,p.A)(ne,[["render",ie]]);var oe=le;const re={class:"container"},se={class:"selector-wrapper"},ce=["src","alt","onClick"],de=["value"],ue=(0,n.Lk)("span",{class:"sd-tick"},null,-1),me={class:"selector-title"},pe=(0,n.Lk)("div",{class:"device-pair txt-small d-none"}," Pair with your Unifi subscription ",-1);function ge(e,t,a,l,o,r){return(0,n.uX)(),(0,n.CE)("div",re,[(0,n.Lk)("div",se,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.plans,((a,l)=>((0,n.uX)(),(0,n.CE)("label",{key:l,class:"sd-label selector-label"},[(0,n.Lk)("img",{class:"svg-icon",src:a.image,alt:a.title,onClick:e=>r.scrollToSection("pricing-section-"+(l+1))},null,8,ce),(0,n.bo)((0,n.Lk)("input",{type:"radio",class:"sd-radio",name:"plan",value:a.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedPlan=t)},null,8,de),[[i.XL,e.selectedPlan]]),ue,(0,n.Lk)("div",me,(0,f.v_)(a.price),1)])))),128)),pe])])}var he={name:"MySelector",props:{pageTitle:{type:String,default:""},plans:{type:Array,required:!0}},methods:{scrollToSection(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}}};const ve=(0,p.A)(he,[["render",ge]]);var fe=ve;const ke=e=>((0,n.Qi)("data-v-540ee8e8"),e=e(),(0,n.jt)(),e),ye=ke((()=>(0,n.Lk)("h1",{id:"registration-form"},"Registration Form",-1))),be={class:"form-container"},Ie=ke((()=>(0,n.Lk)("h3",null,"Fill up your details and we would be delighted to assist you",-1))),Ce={class:"form-group"},Fe={key:0,for:"project"},Le={class:"form-group"},_e={key:0,for:"name"},Ee={class:"form-group"},we={key:0,for:"phone"},Me={class:"form-group"},Se={key:0,for:"email"},Ue={class:"form-group"},Ae={key:0,for:"address"},Re={class:"form-group"},Te={key:0,for:"message"},$e=ke((()=>(0,n.Lk)("label",{for:"appointmentDate"},"Installation Schedule:",-1))),Pe={class:"form-group"},De={class:"form-row"},xe={class:"form-group"},Be=ke((()=>(0,n.Lk)("label",{for:"preferredInstallationDate"},"Preferred Installation Date (dd/mm/yyyy):",-1))),Xe={class:"form-group"},Ne=ke((()=>(0,n.Lk)("label",{for:"nationality"},"Nationality:",-1))),je={class:"form-group"},Oe=ke((()=>(0,n.Lk)("label",{for:"icFront"},"IC Front:",-1))),We={class:"form-group"},He=ke((()=>(0,n.Lk)("label",{for:"icBack"},"IC Back:",-1))),qe={class:"form-group"},Ke=ke((()=>(0,n.Lk)("label",{for:"utilityBills"},"Utility Bills (Electric or Water):",-1))),Ve=["disabled"],Qe=ke((()=>(0,n.Lk)("br",null,null,-1)));function Je(e,t,a,l,o,r){const s=(0,n.g2)("popUp2"),c=(0,n.g2)("TermsConditions");return(0,n.uX)(),(0,n.CE)(n.FK,null,[ye,(0,n.Lk)("div",be,[Ie,(0,n.Lk)("form",{onSubmit:t[15]||(t[15]=(0,i.D$)(((...e)=>l.submitForm&&l.submitForm(...e)),["prevent"]))},[(0,n.Lk)("div",Ce,[a.project?((0,n.uX)(),(0,n.CE)("label",Fe,"Package Name:")):(0,n.Q3)("",!0),(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"text",id:"project","onUpdate:modelValue":t[0]||(t[0]=e=>l.localProject=e),name:"package-name",placeholder:"Package*",required:""},null,512),[[i.Jo,l.localProject]])]),(0,n.Lk)("div",Le,[l.name?((0,n.uX)(),(0,n.CE)("label",_e,"Name:")):(0,n.Q3)("",!0),(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>l.name=e),placeholder:"Name*",required:""},null,512),[[i.Jo,l.name]])]),(0,n.Lk)("div",Ee,[l.phone?((0,n.uX)(),(0,n.CE)("label",we,"Phone:")):(0,n.Q3)("",!0),(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"tel",id:"phone","onUpdate:modelValue":t[2]||(t[2]=t=>e.formattedPhone=t),onInput:t[3]||(t[3]=(...e)=>l.formatPhone&&l.formatPhone(...e)),placeholder:"Phone*",required:""},null,544),[[i.Jo,e.formattedPhone]])]),(0,n.Lk)("div",Me,[l.email?((0,n.uX)(),(0,n.CE)("label",Se,"Email:")):(0,n.Q3)("",!0),(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>l.email=e),placeholder:"Email*",required:""},null,512),[[i.Jo,l.email]])]),(0,n.Lk)("div",Ue,[l.address?((0,n.uX)(),(0,n.CE)("label",Ae,"Installation Address:")):(0,n.Q3)("",!0),(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"text",id:"address","onUpdate:modelValue":t[5]||(t[5]=e=>l.address=e),placeholder:"Installation Address*",required:""},null,512),[[i.Jo,l.address]])]),(0,n.Lk)("div",Re,[l.message?((0,n.uX)(),(0,n.CE)("label",Te,"Additional Info:")):(0,n.Q3)("",!0),(0,n.bo)((0,n.Lk)("textarea",{class:"white-text",id:"message","onUpdate:modelValue":t[6]||(t[6]=e=>l.message=e),placeholder:"Additional Info*",required:""},null,512),[[i.Jo,l.message]])]),$e,(0,n.Lk)("div",Pe,[(0,n.Lk)("div",De,[(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"date",id:"appointmentDate","onUpdate:modelValue":t[7]||(t[7]=e=>l.appointmentDate=e),placeholder:"Appointment Date*",required:""},null,512),[[i.Jo,l.appointmentDate]]),(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"time",id:"appointmentTime","onUpdate:modelValue":t[8]||(t[8]=e=>l.appointmentTime=e),placeholder:"Appointment Time*",required:""},null,512),[[i.Jo,l.appointmentTime]])])]),(0,n.Lk)("div",xe,[Be,(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"text",id:"preferredInstallationDate","onUpdate:modelValue":t[9]||(t[9]=e=>l.preferredInstallationDate=e),placeholder:"Preferred Installation Date*",required:""},null,512),[[i.Jo,l.preferredInstallationDate]])]),(0,n.Lk)("div",Xe,[Ne,(0,n.bo)((0,n.Lk)("input",{class:"white-text",type:"text",id:"nationality","onUpdate:modelValue":t[10]||(t[10]=e=>l.nationality=e),placeholder:"Nationality*",required:""},null,512),[[i.Jo,l.nationality]])]),(0,n.Lk)("div",je,[Oe,(0,n.Lk)("input",{type:"file",id:"icFront",onChange:t[11]||(t[11]=e=>l.handleFileUpload(e,"icFront")),required:""},null,32),(0,n.Lk)("p",null,(0,f.v_)(l.icFrontName||"No file chosen"),1)]),(0,n.Lk)("div",We,[He,(0,n.Lk)("input",{type:"file",id:"icBack",onChange:t[12]||(t[12]=e=>l.handleFileUpload(e,"icBack")),required:""},null,32),(0,n.Lk)("p",null,(0,f.v_)(l.icBackName||"No file chosen"),1)]),(0,n.Lk)("div",qe,[Ke,(0,n.Lk)("input",{type:"file",id:"utilityBills",onChange:t[13]||(t[13]=e=>l.handleFileUpload(e,"utilityBills")),required:""},null,32),(0,n.Lk)("p",null,(0,f.v_)(l.utilityBillsName||"No file chosen"),1)]),(0,n.bF)(s,{"is-visible":l.showModal,"modal-message":l.modalMessage,onClose:t[14]||(t[14]=e=>l.showModal=!1)},null,8,["is-visible","modal-message"]),(0,n.Lk)("button",{type:"submit",class:"submit-button white-text",disabled:l.formSubmitted},(0,f.v_)(l.formSubmitted?"Submitting...":"Yes! Contact Me Now"),9,Ve)],32),Qe,(0,n.bF)(c)])],64)}var ze=a(1186),Ye=a(6679);const Ze=e=>((0,n.Qi)("data-v-007d3544"),e=e(),(0,n.jt)(),e),Ge={key:0,class:"modal"},et={class:"modal-content"},tt=Ze((()=>(0,n.Lk)("h1",null,"I love U",-1)));function at(e,t,a,i,l,o){return a.isVisible?((0,n.uX)(),(0,n.CE)("div",Ge,[(0,n.Lk)("div",et,[(0,n.Lk)("span",{class:"close",onClick:t[0]||(t[0]=(...e)=>o.closeModal&&o.closeModal(...e))},"×"),(0,n.Lk)("p",null,(0,f.v_)(a.modalMessage),1),tt])])):(0,n.Q3)("",!0)}var it={props:{isVisible:{type:Boolean,default:!1},modalMessage:String},methods:{closeModal(){this.$emit("close")}}};const nt=(0,p.A)(it,[["render",at],["__scopeId","data-v-007d3544"]]);var lt=nt;const ot=e=>((0,n.Qi)("data-v-99eb664a"),e=e(),(0,n.jt)(),e),rt=ot((()=>(0,n.Lk)("h1",{id:"registration-form"},"Registration Form",-1))),st=ot((()=>(0,n.Lk)("h1",{id:"registration-form",class:"text-center mb-4"},"Terms & Conditions",-1)));function ct(e,t,a,i,l,o){const r=(0,n.g2)("v-icon"),s=(0,n.g2)("v-list-item-icon"),c=(0,n.g2)("v-list-item-title"),d=(0,n.g2)("v-list-item-content"),u=(0,n.g2)("v-list-item"),m=(0,n.g2)("v-list"),p=(0,n.g2)("v-card-text"),g=(0,n.g2)("v-card"),h=(0,n.g2)("v-col"),v=(0,n.g2)("v-row"),f=(0,n.g2)("v-container");return(0,n.uX)(),(0,n.CE)(n.FK,null,[rt,(0,n.bF)(f,{class:"py-5",fluid:""},{default:(0,n.k6)((()=>[(0,n.bF)(v,{align:"center",justify:"center"},{default:(0,n.k6)((()=>[(0,n.bF)(h,{cols:"12",sm:"10",md:"8",lg:"6"},{default:(0,n.k6)((()=>[st,(0,n.bF)(g,{class:"pa-4"},{default:(0,n.k6)((()=>[(0,n.bF)(p,null,{default:(0,n.k6)((()=>[(0,n.bF)(m,{dense:""},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.terms,((e,t)=>((0,n.uX)(),(0,n.Wv)(u,{key:t},{default:(0,n.k6)((()=>[(0,n.bF)(s,null,{default:(0,n.k6)((()=>[(0,n.bF)(r,null,{default:(0,n.k6)((()=>[(0,n.eW)("mdi-check-circle")])),_:1})])),_:1}),(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.bF)(c,{innerHTML:e,class:"wrap-text"},null,8,["innerHTML"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)}var dt={name:"TermsConditions",data(){return{terms:["I hereby consent to subscribe to the service with a subscription contract of 24 months.",'I have been informed on the Terms & Conditions as at <a href="https://unifi.com.my/personal/home/fibre-broadband/tnc" target="_blank">this link</a> and Privacy Notice of TM.',"I agree to pay an advance payment of RM 100 for Malaysian and RM 500 for foreigners within 10 days after installation is complete.","I hereby agree all the information provided to TM is correct and genuine.","I hereby consent TM representative to proceed and process my order. Kindly notify me if there are any issues pertaining to my request."]}}};const ut=(0,p.A)(dt,[["render",ct],["__scopeId","data-v-99eb664a"]]);var mt=ut,pt={name:"tmReg",components:{TermsConditions:mt,popUp2:lt},props:{project:{type:String,required:!0}},setup(e,{emit:t}){const a=(0,d.KR)(e.project),i=(0,d.KR)(!1),l=(0,d.KR)(!1),o=(0,d.KR)(""),r=(0,d.KR)(""),s=(0,d.KR)(""),c=(0,d.KR)(""),u=(0,d.KR)(""),m=(0,d.KR)(""),p=(0,d.KR)(""),g=(0,d.KR)(""),h=(0,d.KR)(""),v=(0,d.KR)(""),f=(0,d.KR)(null),k=(0,d.KR)(null),y=(0,d.KR)(null),b=(0,d.KR)(""),I=(0,d.KR)(""),C=(0,d.KR)(""),F=e=>{const t=e.target,a=t.value.replace(/\D/g,"").substring(0,10),i=a.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");t.value=i,s.value=a};(0,n.wB)((()=>e.project),(e=>{a.value=e}));const L=(e,t)=>{const a=e.target.files[0];"icFront"===t?(f.value=a,b.value=a.name):"icBack"===t?(k.value=a,I.value=a.name):"utilityBills"===t&&(y.value=a,C.value=a.name)},_=()=>{t("close")},E=Ye.J1`
      query ($phone: String) {
        contacts(filters: { phone: { eq: $phone } }) {
          data {
            id
            attributes {
              name
              phone
            }
          }
        }
      }
    `,w=Ye.J1`
      mutation AddContact($name: String!, $project: String!, $email: String!, $phone: String!, $address: String!, $message: String!, $AppointmentDate: Date!, $AppointmentTime: Time!, $PreferredInstallationDate: String!, $Nationality: String!, $ICFront: Upload!, $ICBack: Upload!, $UtilityBills: Upload!) {
        createContact(data: { project: $project, name: $name, email: $email, phone: $phone, address: $address, message: $message, AppointmentDate: $AppointmentDate, AppointmentTime: $AppointmentTime, PreferredInstallationDate: $PreferredInstallationDate, Nationality: $Nationality, ICFront: $ICFront, ICBack: $ICBack, UtilityBills: $UtilityBills }) {
          data {
            id
            attributes {
              project
              name
              email
              phone
              address
              message
              AppointmentDate
              AppointmentTime
              PreferredInstallationDate
              Nationality
              ICFront {
                name
              }
              ICBack {
                name
              }
              UtilityBills {
                name
              }
            }
          }
        }
      }
    `,M=Ye.J1`
      mutation UpdateContact($id: ID!, $project: String!, $name: String!, $email: String!, $phone: String!, $address: String!, $message: String!, $AppointmentDate: Date!, $AppointmentTime: Time!, $PreferredInstallationDate: String!, $Nationality: String!, $ICFront: Upload!, $ICBack: Upload!, $UtilityBills: Upload!) {
        updateContact(id: $id, data: { project: $project, name: $name, email: $email, phone: $phone, address: $address, message: $message, AppointmentDate: $AppointmentDate, AppointmentTime: $AppointmentTime, PreferredInstallationDate: $PreferredInstallationDate, Nationality: $Nationality, ICFront: $ICFront, ICBack: $ICBack, UtilityBills: $UtilityBills }) {
          data {
            id
            attributes {
              project
              name
              email
              phone
              address
              message
              AppointmentDate
              AppointmentTime
              PreferredInstallationDate
              Nationality
              ICFront {
                name
              }
              ICBack {
                name
              }
              UtilityBills {
                name
              }
            }
          }
        }
      }
    `,{mutate:S}=(0,ze.n_)(w),{mutate:U}=(0,ze.n_)(M),{refetch:A,loading:R,error:T}=(0,ze.IT)(E,{variables:{phone:s.value},skip:!0}),$=async()=>{i.value=!0;try{const{data:e}=await A({phone:s.value});if(T.value)return void console.error("Error fetching contact:",T.value);if(R.value)return void console.log("Waiting for contact check...");if(!e.contacts.data||0===e.contacts.data.length){console.log("Contact does not exist. Creating new contact.");const e=await S({project:a.value,name:r.value,phone:s.value,email:c.value,address:u.value,message:m.value,AppointmentDate:p.value,AppointmentTime:g.value+":00",PreferredInstallationDate:h.value,Nationality:v.value,ICFront:f.value,ICBack:k.value,UtilityBills:y.value});return console.log("Create Success:",e),i.value=!1,l.value=!0,void(o.value="Record created.")}const t=e.contacts.data[0];console.log("Contact exists. Updating contact with ID:",t.id);const n=await U({id:t.id,project:a.value,name:r.value,phone:s.value,email:c.value,address:u.value,message:m.value,AppointmentDate:p.value,AppointmentTime:g.value+":00",PreferredInstallationDate:h.value,Nationality:v.value,ICFront:f.value,ICBack:k.value,UtilityBills:y.value});console.log("Update Success:",n),i.value=!1,l.value=!0,o.value="Record updated."}catch(e){i.value=!1,console.error("Error:",e)}};return{localProject:a,name:r,phone:s,email:c,address:u,message:m,appointmentDate:p,appointmentTime:g,preferredInstallationDate:h,nationality:v,icFront:f,icBack:k,utilityBills:y,icFrontName:b,icBackName:I,utilityBillsName:C,formSubmitted:i,submitForm:$,formatPhone:F,showModal:l,modalMessage:o,close:_,handleFileUpload:L}}};const gt=(0,p.A)(pt,[["render",Je],["__scopeId","data-v-540ee8e8"]]);var ht=gt;const vt=e=>((0,n.Qi)("data-v-1355d3ea"),e=e(),(0,n.jt)(),e),ft={class:"camera-capture"},kt={key:0},yt={ref:"video",autoplay:"",playsinline:""},bt={ref:"canvas",style:{display:"none"}},It=["src"],Ct={key:1},Ft=vt((()=>(0,n.Lk)("p",null,"Your device does not support camera access.",-1))),Lt=[Ft];function _t(e,t,a,i,l,o){return(0,n.uX)(),(0,n.CE)("div",ft,[l.hasMediaDevices?((0,n.uX)(),(0,n.CE)("div",kt,[(0,n.Lk)("video",yt,null,512),(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>o.takePicture&&o.takePicture(...e))},"Take Picture"),(0,n.Lk)("canvas",bt,null,512),l.imageData?((0,n.uX)(),(0,n.CE)("img",{key:0,src:l.imageData,alt:"Captured Image"},null,8,It)):(0,n.Q3)("",!0)])):((0,n.uX)(),(0,n.CE)("div",Ct,Lt))])}var Et={name:"CameraCapture",data(){return{hasMediaDevices:!1,imageData:null}},mounted(){this.initializeCamera()},methods:{async initializeCamera(){if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){this.hasMediaDevices=!0;try{const e=await navigator.mediaDevices.getUserMedia({video:!0});this.$refs.video.srcObject=e}catch(e){console.error("Error accessing camera:",e),this.hasMediaDevices=!1}}else this.hasMediaDevices=!1},takePicture(){const e=this.$refs.canvas,t=this.$refs.video;e.width=t.videoWidth,e.height=t.videoHeight;const a=e.getContext("2d");a.drawImage(t,0,0,e.width,e.height),this.imageData=e.toDataURL("image/png")}}};const wt=(0,p.A)(Et,[["render",_t],["__scopeId","data-v-1355d3ea"]]);var Mt=wt,St={components:{CameraCapture:Mt,ImageUpLoader:S,tmReg:ht,MySlider:X,MyPackage:oe,MySelector:fe,LaunchButton:T},created(){const e=this.$route.query.param||"Default Title";this.pageTitle=e,console.log("Received parameter:",e),this.filterPlans(e),this.filterImages(e)},data(){return{showLaunchButton:!1,pageTitle:"",imagesArray:[{src:"img/1.png",category:"HOME"},{src:"img/2.png",category:"HOME"},{src:"img/3.png",category:"HOME"},{src:"img/4.png",category:"BUSINESS"},{src:"img/5.png",category:"BUSINESS"}],plansArray:[{category:"HOME",title:"Unifi Home 100Mbps",image:"img/unifihome1a.svg",price:"RM 89",features:["image: img/unifihome1a.svg, width=100, height=100, Unifi Home 100Mbps","Unlimited Data",'svg:width="20" height="20",<circle cx="10" cy="10" r="8" stroke="green" stroke-width="4" fill="yellow" />,Download speed: 100mbps',"Upload speed: 50mbps","Recommended for 2 - 3 users on up to 5 devices","Free Wi-Fi 5 router","Voice call flat rate 20 sen/min to all lines","24 months contract","Add On RM28/Month For Netflix","image: img/freeInternet.png","PROMO: 1 MONTH FREE",'svg:width="20" height="20",<circle cx="10" cy="10" r="8" stroke="green" stroke-width="4" fill="yellow" />,RM89/Month',"FREE Wi-Fi 5 CERTIFIED ROUTER"]},{category:"HOME",title:"Unifi Home 300Mbps",image:"img/unifihome1b.svg",price:"RM 129",features:["h2: Unifi Home 300Mbps","Unlimited Data","Download speed: 300mbps","Upload speed: 150mbps","Recommended for 5 - 8 users on up to 10 devices","Free Wi-Fi 6 router","Voice call flat rate 20 sen/min to all lines","24 months contract","Add On RM28/Month For Netflix","image: img/freeInternet.png, width=100, height=100, Free Internet!","PROMO: 1 MONTH FREE","RM129/Month","FREE Wi-Fi 6 CERTIFIED ROUTER"]},{category:"HOME",title:"Unifi Home 500Mbps",image:"img/unifihome1b.svg",price:"RM 149",features:["h2: Unifi Home 500Mbps","Unlimited Data","Download speed: 500mbps","Upload speed: 250mbps","Recommended for 8 - 10 users on up to 15 devices","Free Wi-Fi 6 router","Voice call flat rate 20 sen/min to all lines","24 months contract","Add On RM28/Month For Netflix","image: img/freeInternet.png, width=100, height=100, Free Internet!","PROMO: 1 MONTH FREE","RM189/Month","FREE Wi-Fi 6 CERTIFIED ROUTER"]},{category:"BUSINESS",title:"Unifi Home 100Mbps",image:"img/unifihome1a.svg",price:"RM 89",features:["image: img/unifihome1a.svg, width=100, height=100, Unifi BUSINESS 100Mbps","Unlimited Data",'svg:width="20" height="20",<circle cx="10" cy="10" r="8" stroke="green" stroke-width="4" fill="yellow" />,Download speed: 100mbps',"Upload speed: 50mbps","Recommended for 2 - 3 users on up to 5 devices","Free Wi-Fi 5 router","Voice call flat rate 20 sen/min to all lines","24 months contract","Add On RM28/Month For Netflix","image: img/freeInternet.png","PROMO: 1 MONTH FREE",'svg:width="20" height="20",<circle cx="10" cy="10" r="8" stroke="green" stroke-width="4" fill="yellow" />,RM89/Month',"FREE Wi-Fi 5 CERTIFIED ROUTER"]}],filteredPlans:[],filteredImages:[]}},methods:{goBack(){this.$router.go(-1)},filterPlans(e){this.filteredPlans=this.plansArray.filter((t=>t.category===e))},filterImages(e){this.filteredImages=this.imagesArray.filter((t=>t.category===e))}}};const Ut=(0,p.A)(St,[["render",b]]);var At=Ut;const Rt=e=>((0,n.Qi)("data-v-d1f5a34e"),e=e(),(0,n.jt)(),e),Tt=Rt((()=>(0,n.Lk)("h1",{class:"title"},"About Page",-1))),$t=Rt((()=>(0,n.Lk)("p",null,"This is the about page of the application.",-1)));function Pt(e,t,a,i,l,o){const r=(0,n.g2)("v-col"),s=(0,n.g2)("v-row"),c=(0,n.g2)("v-container"),d=(0,n.g2)("v-main"),u=(0,n.g2)("v-app");return(0,n.uX)(),(0,n.Wv)(u,null,{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.bF)(c,null,{default:(0,n.k6)((()=>[(0,n.bF)(s,null,{default:(0,n.k6)((()=>[(0,n.bF)(r,null,{default:(0,n.k6)((()=>[Tt,$t])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var Dt={name:"AboutPage"};const xt=(0,p.A)(Dt,[["render",Pt],["__scopeId","data-v-d1f5a34e"]]);var Bt=xt;function Xt(e,t,a,i,l,o){const r=(0,n.g2)("v-img"),s=(0,n.g2)("v-col"),c=(0,n.g2)("v-row"),d=(0,n.g2)("v-container");return(0,n.uX)(),(0,n.Wv)(d,{fluid:"",class:"d-flex align-center justify-center",style:{height:"100vh"}},{default:(0,n.k6)((()=>[(0,n.bF)(c,{justify:"center",align:"center"},{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.images,((e,t)=>((0,n.uX)(),(0,n.Wv)(s,{key:t,cols:"12",sm:"4",class:"d-flex justify-center"},{default:(0,n.k6)((()=>[(0,n.bF)(r,{src:e.src,alt:e.alt,class:"selectable-image",onClick:t=>o.navigateTo(e.route,e.param)},null,8,["src","alt","onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})}var Nt={name:"MainPage",data(){return{images:[{src:"img/home.jpeg",alt:"Image 1",route:"/home",param:"HOME"},{src:"img/business.jpeg",alt:"Image 2",route:"/home",param:"BUSINESS"},{src:"img/winback.jpeg",alt:"Image 3",route:"/home",param:"WIN BACK"}]}},methods:{navigateTo(e,t){this.$router.push({path:e,query:{param:t}})}}};const jt=(0,p.A)(Nt,[["render",Xt],["__scopeId","data-v-92635302"]]);var Ot=jt;const Wt=[{path:"/",name:"MainPage",component:Ot,meta:{requiresAuth:!1}},{path:"/home",name:"HomePage",component:At,meta:{requiresAuth:!1}},{path:"/about",name:"AboutPage",component:Bt,meta:{requiresAuth:!1}}],Ht=(0,v.aE)({history:(0,v.Bt)(),routes:Wt});Ht.beforeEach(((e,t,a)=>{const i="true"===localStorage.getItem("authenticated");e.matched.some((e=>e.meta.requiresAuth))&&!i?a("/"):a()}));var qt=Ht,Kt=a(4825),Vt=a(2938),Qt=a(3379),Jt=(a(5524),a(5317)),zt=a(2391),Yt=a(88);const Zt=new Jt.P({uri:"https://your-graphql-endpoint.com/graphql"}),Gt=new zt.R({link:Zt,cache:new Yt.D});(0,ze._5)(Gt);const ea=(0,i.Ef)(h),ta=(0,Kt.$N)({components:Vt,directives:Qt});ea.use(qt),ea.use(ta),ea.mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var l=t[i]={exports:{}};return e[i].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,l){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],l=e[d][2];for(var r=!0,s=0;s<i.length;s++)(!1&l||o>=l)&&Object.keys(a.O).every((function(e){return a.O[e](i[s])}))?i.splice(s--,1):(r=!1,l<o&&(o=l));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[i,n,l]}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,l,o=i[0],r=i[1],s=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(s)var d=s(a)}for(t&&t(i);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},i=self["webpackChunkvue5"]=self["webpackChunkvue5"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(5057)}));i=a.O(i)})();
//# sourceMappingURL=app.c8a4bfcd.js.map