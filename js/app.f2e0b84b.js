(function(){"use strict";var e={9858:function(e,t,a){var l=a(3751),o=a(641);const n=e=>((0,o.Qi)("data-v-fd919ef8"),e=e(),(0,o.jt)(),e),i=n((()=>(0,o.Lk)("span",null,"Home",-1))),s=n((()=>(0,o.Lk)("span",null,"About",-1)));function r(e,t,a,l,n,r){const d=(0,o.g2)("v-app-bar-nav-icon"),u=(0,o.g2)("v-toolbar-title"),c=(0,o.g2)("v-spacer"),m=(0,o.g2)("v-icon"),p=(0,o.g2)("v-btn"),f=(0,o.g2)("v-app-bar"),g=(0,o.g2)("v-list-item-icon"),k=(0,o.g2)("v-list-item-title"),h=(0,o.g2)("v-list-item"),v=(0,o.g2)("v-list-item-group"),b=(0,o.g2)("v-list"),y=(0,o.g2)("v-navigation-drawer"),F=(0,o.g2)("router-view"),w=(0,o.g2)("v-main"),_=(0,o.g2)("v-bottom-navigation"),L=(0,o.g2)("v-app");return(0,o.uX)(),(0,o.Wv)(L,null,{default:(0,o.k6)((()=>[(0,o.bF)(f,{app:"",color:"primary",dark:""},{default:(0,o.k6)((()=>[(0,o.bF)(d,{onClick:t[0]||(t[0]=e=>n.drawer=!n.drawer)}),(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)("Unify Promotion")])),_:1}),(0,o.bF)(c),l.authStore.isAuthenticated?((0,o.uX)(),(0,o.Wv)(p,{key:0,onClick:r.logout,icon:""},{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-logout")])),_:1})])),_:1},8,["onClick"])):(0,o.Q3)("",!0)])),_:1}),(0,o.bF)(y,{modelValue:n.drawer,"onUpdate:modelValue":t[1]||(t[1]=e=>n.drawer=e),app:"",temporary:""},{default:(0,o.k6)((()=>[(0,o.bF)(b,{nav:""},{default:(0,o.k6)((()=>[l.authStore.isAuthenticated?((0,o.uX)(),(0,o.Wv)(v,{key:0},{default:(0,o.k6)((()=>[(0,o.bF)(h,{to:"/home",exact:""},{default:(0,o.k6)((()=>[(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-home")])),_:1})])),_:1}),(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1})])),_:1}),(0,o.bF)(h,{to:"/about",exact:""},{default:(0,o.k6)((()=>[(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-information")])),_:1})])),_:1}),(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.eW)("About")])),_:1})])),_:1})])),_:1})):(0,o.Q3)("",!0),(0,o.bF)(h,{to:"/",exact:""},{default:(0,o.k6)((()=>[(0,o.bF)(g,null,{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-login")])),_:1})])),_:1}),(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.eW)("Login")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(w,null,{default:(0,o.k6)((()=>[(0,o.bF)(F)])),_:1}),l.authStore.isAuthenticated?((0,o.uX)(),(0,o.Wv)(_,{key:0,app:""},{default:(0,o.k6)((()=>[(0,o.bF)(p,{to:"/home",exact:""},{default:(0,o.k6)((()=>[i,(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-home")])),_:1})])),_:1}),(0,o.bF)(p,{to:"/about",exact:""},{default:(0,o.k6)((()=>[s,(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-information")])),_:1})])),_:1})])),_:1})):(0,o.Q3)("",!0)])),_:1})}a(4114);var d=a(953);const u=(0,d.Kh)({isAuthenticated:"true"===localStorage.getItem("authenticated"),login(){this.isAuthenticated=!0,localStorage.setItem("authenticated","true")},logout(){this.isAuthenticated=!1,localStorage.removeItem("authenticated")}});var c={name:"App",setup(){return{authStore:u}},data(){return{drawer:!1}},methods:{logout(){this.authStore.logout(),this.$router.push({name:"Login"})}}},m=a(6262);const p=(0,m.A)(c,[["render",r],["__scopeId","data-v-fd919ef8"]]);var f=p,g=a(6166),k=a(33);function h(e,t,a,n,i,s){const r=(0,o.g2)("v-img"),d=(0,o.g2)("v-toolbar-title"),u=(0,o.g2)("v-spacer"),c=(0,o.g2)("v-btn"),m=(0,o.g2)("v-btn-toggle"),p=(0,o.g2)("v-icon"),f=(0,o.g2)("v-toolbar"),g=(0,o.g2)("v-text-field"),h=(0,o.g2)("v-form"),v=(0,o.g2)("v-card-text"),b=(0,o.g2)("v-card-actions"),y=(0,o.g2)("v-card"),F=(0,o.g2)("v-col"),w=(0,o.g2)("v-row"),_=(0,o.g2)("v-alert"),L=(0,o.g2)("v-fade-transition"),C=(0,o.g2)("v-container");return(0,o.uX)(),(0,o.Wv)(C,{class:"fill-height",fluid:""},{default:(0,o.k6)((()=>[(0,o.bF)(w,{align:"center",justify:"center"},{default:(0,o.k6)((()=>[(0,o.bF)(F,{cols:"12",sm:"8",md:"6",lg:"4"},{default:(0,o.k6)((()=>[(0,o.bF)(y,{class:"elevation-12 rounded-lg"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{src:"https://unifydigital.co.nz/wp-content/uploads/2020/01/Unify-Digital-Logo.jpg","max-width":"100%",class:"rounded-t-lg"}),(0,o.bF)(f,{color:"primary",dark:"",flat:""},{default:(0,o.k6)((()=>[(0,o.bF)(d,{class:"text-h5 font-weight-medium"},{default:(0,o.k6)((()=>[(0,o.eW)((0,k.v_)(s.formTitle),1)])),_:1}),(0,o.bF)(u),(0,o.bF)(m,{modelValue:i.formType,"onUpdate:modelValue":t[0]||(t[0]=e=>i.formType=e),mandatory:"",class:"mr-4"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{value:"login",small:""},{default:(0,o.k6)((()=>[(0,o.eW)("Login")])),_:1}),(0,o.bF)(c,{value:"signup",small:""},{default:(0,o.k6)((()=>[(0,o.eW)("Sign Up")])),_:1}),(0,o.bF)(c,{value:"resetPassword",small:""},{default:(0,o.k6)((()=>[(0,o.eW)("Reset Password")])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(c,{icon:"",onClick:s.toggleDarkMode},{default:(0,o.k6)((()=>[(0,o.bF)(p,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,k.v_)(i.isDarkMode?"mdi-weather-sunny":"mdi-weather-night"),1)])),_:1})])),_:1},8,["onClick"])])),_:1}),(0,o.bF)(v,{class:"mt-4"},{default:(0,o.k6)((()=>[(0,o.bF)(h,{onSubmit:(0,l.D$)(s.submitForm,["prevent"]),ref:"form",modelValue:i.isFormValid,"onUpdate:modelValue":t[5]||(t[5]=e=>i.isFormValid=e)},{default:(0,o.k6)((()=>[(0,o.bF)(g,{modelValue:i.email,"onUpdate:modelValue":t[1]||(t[1]=e=>i.email=e),label:"Email",name:"email","prepend-icon":"mdi-email",type:"email",rules:i.emailRules,required:"",outlined:"",dense:""},null,8,["modelValue","rules"]),(0,o.bF)(g,{modelValue:i.password,"onUpdate:modelValue":t[2]||(t[2]=e=>i.password=e),label:"Password",name:"password","prepend-icon":"mdi-lock",type:i.showPassword?"text":"password","append-icon":i.showPassword?"mdi-eye":"mdi-eye-off","onClick:append":t[3]||(t[3]=e=>i.showPassword=!i.showPassword),rules:i.passwordRules,required:"",outlined:"",dense:""},null,8,["modelValue","type","append-icon","rules"]),"signup"===i.formType?((0,o.uX)(),(0,o.Wv)(g,{key:0,modelValue:i.confirmPassword,"onUpdate:modelValue":t[4]||(t[4]=e=>i.confirmPassword=e),label:"Confirm Password",name:"confirmPassword","prepend-icon":"mdi-lock-check",type:i.showPassword?"text":"password",rules:i.confirmPasswordRules,required:"",outlined:"",dense:""},null,8,["modelValue","type","rules"])):(0,o.Q3)("",!0)])),_:1},8,["onSubmit","modelValue"])])),_:1}),(0,o.bF)(b,{class:"pb-4 px-4"},{default:(0,o.k6)((()=>[(0,o.bF)(c,{block:"",color:"primary",onClick:s.submitForm,disabled:!i.isFormValid,class:"mb-2",large:""},{default:(0,o.k6)((()=>[(0,o.eW)((0,k.v_)(s.submitButtonText),1)])),_:1},8,["onClick","disabled"]),(0,o.bF)(c,{block:"",text:"",onClick:t[6]||(t[6]=e=>s.toggleForm("resetPassword"))},{default:(0,o.k6)((()=>[(0,o.eW)(" Forgot Password? ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.bF)(L,null,{default:(0,o.k6)((()=>[i.snackbar?((0,o.uX)(),(0,o.Wv)(_,{key:0,color:i.snackbarColor,dark:"",dense:"",dismissible:"",onInput:t[7]||(t[7]=e=>i.snackbar=!1),class:"custom-snackbar"},{default:(0,o.k6)((()=>[(0,o.eW)((0,k.v_)(i.snackbarText),1)])),_:1},8,["color"])):(0,o.Q3)("",!0)])),_:1})])),_:1})}var v={name:"logIn",data(){return{formType:"login",email:"",password:"",confirmPassword:"",resetRequested:!1,showPassword:!1,isFormValid:!1,isDarkMode:!1,snackbar:!1,snackbarText:"",snackbarColor:"success",emailRules:[e=>!!e||"E-mail is required",e=>/.+@.+\..+/.test(e)||"E-mail must be valid"],passwordRules:[e=>!!e||"Password is required",e=>e.length>=8||"Password must be at least 8 characters"],confirmPasswordRules:[e=>!!e||"Please confirm your password",e=>e===this.password||"Passwords must match"]}},computed:{formTitle(){switch(this.formType){case"login":return"Welcome Back";case"signup":return"Create Account";case"resetPassword":return"Reset Password";default:return"Authentication"}},submitButtonText(){switch(this.formType){case"login":return"Log In";case"signup":return"Sign Up";case"resetPassword":return this.resetRequested?"Reset Password":"Request Reset";default:return"Submit"}}},methods:{submitForm(){if(this.$refs.form.validate())switch(this.formType){case"login":console.log("Login",this.email,this.password),u.login(),this.showSnackbar("Logged in successfully","success"),this.$router.push({name:"HomePage"});break;case"signup":console.log("Sign Up",this.email,this.password),this.showSnackbar("Account created successfully","success");break;case"resetPassword":this.resetRequested?(console.log("Reset Password",this.email,this.password),this.showSnackbar("Password reset successfully","success")):(console.log("Request Password Reset",this.email),this.showSnackbar("Password reset email sent","info"),this.resetRequested=!0);break}},toggleForm(e){this.formType=e,this.email="",this.password="",this.confirmPassword="",this.resetRequested=!1,this.$refs.form.reset()},toggleDarkMode(){this.isDarkMode=!this.isDarkMode,this.$vuetify.theme.dark=this.isDarkMode},showSnackbar(e,t="success"){this.snackbarText=e,this.snackbarColor=t,this.snackbar=!0,setTimeout((()=>{this.snackbar=!1}),3e3)}}};const b=(0,m.A)(v,[["render",h],["__scopeId","data-v-be650a36"]]);var y=b;function F(e,t,a,l,n,i){const s=(0,o.g2)("MyCarousel"),r=(0,o.g2)("MySelector"),d=(0,o.g2)("MyPackage"),u=(0,o.g2)("MyReg"),c=(0,o.g2)("LaunchButton"),m=(0,o.g2)("tmReg");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(s),(0,o.bF)(r),(0,o.bF)(d),(0,o.bF)(u),n.showLaunchButton?((0,o.uX)(),(0,o.Wv)(c,{key:0})):(0,o.Q3)("",!0),(0,o.bF)(m,{project:e.selectedPackage,onClose:t[0]||(t[0]=t=>e.showRegistration=!1)},null,8,["project"])],64)}function w(e,t,a,l,n,i){return(0,o.uX)(),(0,o.CE)("button",{onClick:t[0]||(t[0]=(...e)=>l.goToAdContacts&&l.goToAdContacts(...e))},"View Ad Contacts")}var _={name:"LaunchButton",setup(){const e=(0,g.rd)(),t=()=>{e.push("/ad-contacts")};return{goToAdContacts:t}}};const L=(0,m.A)(_,[["render",w],["__scopeId","data-v-3c496bee"]]);var C=L;const I={class:"carousel-container"},P=["src"];function R(e,t,a,l,n,i){return(0,o.uX)(),(0,o.CE)("div",I,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.images,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:(0,k.C4)(["carousel-slide",{active:t===n.currentIndex}]),key:t},[(0,o.Lk)("img",{src:e,alt:"Slide {{ index + 1 }}",style:{width:"100%"}},null,8,P)],2)))),128))])}var A={name:"MyCariousel",data(){return{images:["img/1.png","img/2.png","img/3.png"],currentIndex:0,intervalId:null}},mounted(){this.startAutoPlay()},methods:{startAutoPlay(){this.intervalId=setInterval(this.nextSlide,3e3)},stopAutoPlay(){clearInterval(this.intervalId)},prevSlide(){this.stopAutoPlay(),this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length,this.startAutoPlay()},nextSlide(){this.stopAutoPlay(),this.currentIndex=(this.currentIndex+1)%this.images.length,this.startAutoPlay()}}};const $=(0,m.A)(A,[["render",R],["__scopeId","data-v-68e6cc0c"]]);var S=$;const U={class:"pricing-container"},T={class:"pricing-table"},x={class:"pricing-card"},M={class:"pricing-title"},D={class:"pricing-action"},E=["onClick"],B={class:"pricing-details"},W={class:"pricing-features-list"},V={class:"pricing-image"},j=["src","alt"],N={class:"pricing-info"},q={class:"pricing-content"};function X(e,t,a,l,n,i){return(0,o.uX)(),(0,o.CE)("div",U,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.plans,((e,t)=>((0,o.uX)(),(0,o.CE)("section",{key:t,class:"pricing-section"},[(0,o.Lk)("div",T,[(0,o.Lk)("div",x,[(0,o.Lk)("h3",M,(0,k.v_)(e.title),1),(0,o.Lk)("div",D,[(0,o.Lk)("button",{class:"apply-now-btn",onClick:t=>i.fillPackageName(e.title)},"Apply Now",8,E)]),(0,o.Lk)("div",B,[(0,o.Lk)("ul",W,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.features,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t},(0,k.v_)(e),1)))),128))]),(0,o.Lk)("div",V,[(0,o.Lk)("img",{loading:"lazy",src:e.image,alt:e.title},null,8,j)]),(0,o.Lk)("div",N,[(0,o.Lk)("p",null,(0,k.v_)(e.promo),1),(0,o.Lk)("p",null,(0,k.v_)(e.price),1)]),(0,o.Lk)("div",q,[(0,o.Lk)("p",null,(0,k.v_)(e.extra),1)])])])])])))),128))])}var O={name:"MyPackage",data(){return{plans:[{title:"Unifi Home 100Mbps",features:["Unlimited Data","Download speed: 100mbps","Upload speed: 50mbps","Recommended for 2 - 3 users on up to 5 devices","Free Wi-Fi 5 router","Voice call flat rate 20 sen/min to all lines","24 months contract","Add On RM28/Month For Netflix"],image:"img/6month.jpeg",promo:"PROMO: 1 MONTH FREE",price:"RM89/Month",extra:"FREE Wi-Fi 5 CERTIFIED ROUTER"},{title:"Unifi Home 300Mbps",features:["Unlimited Data","Download speed: 300mbps","Upload speed: 150mbps","Recommended for 5 - 8 users on up to 10 devices","Free Wi-Fi 6 router","Voice call flat rate 20 sen/min to all lines","24 months contract","Add On RM28/Month For Netflix"],image:"img/6month.jpeg",promo:"PROMO: 1 MONTH FREE",price:"RM129/Month",extra:"FREE Wi-Fi 6 CERTIFIED ROUTER"},{title:"Unifi Home 500Mbps",features:["Unlimited Data","Download speed: 500mbps","Upload speed: 250mbps","Recommended for 8 - 10 users on up to 15 devices","Free Wi-Fi 6 router","Voice call flat rate 20 sen/min to all lines","24 months contract","Add On RM28/Month For Netflix"],image:"img/6month.jpeg",promo:"PROMO: 1 MONTH FREE",price:"RM189/Month",extra:"FREE Wi-Fi 6 CERTIFIED ROUTER"}]}},methods:{fillPackageName(e){console.log(e),this.packageName=e,document.getElementById("registration-form").scrollIntoView({behavior:"smooth"})}}};const K=(0,m.A)(O,[["render",X]]);var Q=K;const H={class:"container"},J={class:"selector-wrapper"},z={class:"sd-label selector-label"},Y=(0,o.Lk)("input",{type:"radio",class:"sd-radio",name:"plan",value:"h"},null,-1),G=(0,o.Lk)("span",{class:"sd-tick"},null,-1),Z=(0,o.Lk)("div",{class:"selector-title"},"RM 89",-1),ee={class:"sd-label selector-label"},te=(0,o.Lk)("input",{type:"radio",class:"sd-radio",name:"plan",value:"t"},null,-1),ae=(0,o.Lk)("span",{class:"sd-tick"},null,-1),le=(0,o.Lk)("div",{class:"selector-title"},"RM 129",-1),oe={class:"sd-label selector-label"},ne=(0,o.Lk)("input",{type:"radio",class:"sd-radio",name:"plan",value:"m"},null,-1),ie=(0,o.Lk)("span",{class:"sd-tick"},null,-1),se=(0,o.Lk)("div",{class:"selector-title"},"RM 149",-1),re=(0,o.Lk)("div",{class:"device-pair txt-small d-none"}," Pair with your Unifi subscription ",-1);function de(e,t,a,l,n,i){return(0,o.uX)(),(0,o.CE)("div",H,[(0,o.Lk)("div",J,[(0,o.Lk)("label",z,[(0,o.Lk)("img",{id:"scroll-to-section",class:"svg-icon",src:"img/unifihome1a.svg",alt:"Unifi Home",onClick:t[0]||(t[0]=e=>i.scrollToSection("pricing-section-1"))}),Y,G,Z]),(0,o.Lk)("label",ee,[(0,o.Lk)("img",{id:"scroll-to-section",class:"svg-icon",src:"img/unifihome1b.svg",alt:"Unifi Home",onClick:t[1]||(t[1]=e=>i.scrollToSection("pricing-section-2"))}),te,ae,le]),(0,o.Lk)("label",oe,[(0,o.Lk)("img",{id:"scroll-to-section",class:"svg-icon",src:"img/unifihome1b.svg",alt:"Unifi Home",onClick:t[2]||(t[2]=e=>i.scrollToSection("pricing-section-3"))}),ne,ie,se]),re])])}var ue={name:"MySelector",methods:{scrollToSection:function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}}};document.querySelectorAll(".svg-icon").forEach((e=>{e.addEventListener("click",(e=>{document.querySelectorAll(".svg-icon").forEach((e=>{e.classList.remove("selected")})),e.target.classList.add("selected")}))}));const ce=(0,m.A)(ue,[["render",de]]);var me=ce;const pe=e=>((0,o.Qi)("data-v-a8f7f8b4"),e=e(),(0,o.jt)(),e),fe=pe((()=>(0,o.Lk)("h1",{id:"registration-form"},"Registration Form",-1))),ge={class:"form-container"},ke=pe((()=>(0,o.Lk)("h3",null,"Fill up your details and we would be delighted to assist you",-1))),he={class:"form-group"},ve={key:0,for:"project"},be={class:"form-group"},ye={key:0,for:"name"},Fe={class:"form-group"},we={key:0,for:"phone"},_e={class:"form-group"},Le={key:0,for:"email"},Ce={class:"form-group"},Ie={key:0,for:"address"},Pe={class:"form-group"},Re={key:0,for:"message"},Ae=pe((()=>(0,o.Lk)("label",{for:"appointmentDate"},"Installation Schedule:",-1))),$e={class:"form-group"},Se={class:"form-row"},Ue={class:"form-group"},Te=pe((()=>(0,o.Lk)("label",{for:"preferredInstallationDate"},"Preferred Installation Date (dd/mm/yyyy):",-1))),xe={class:"form-group"},Me=pe((()=>(0,o.Lk)("label",{for:"nationality"},"Nationality:",-1))),De={class:"form-group"},Ee=pe((()=>(0,o.Lk)("label",{for:"icFront"},"IC Front:",-1))),Be={class:"form-group"},We=pe((()=>(0,o.Lk)("label",{for:"icBack"},"IC Back:",-1))),Ve={class:"form-group"},je=pe((()=>(0,o.Lk)("label",{for:"utilityBills"},"Utility Bills (Electric or Water):",-1))),Ne=["disabled"],qe=pe((()=>(0,o.Lk)("br",null,null,-1)));function Xe(e,t,a,n,i,s){const r=(0,o.g2)("popUp2"),d=(0,o.g2)("TermsConditions");return(0,o.uX)(),(0,o.CE)(o.FK,null,[fe,(0,o.Lk)("div",ge,[ke,(0,o.Lk)("form",{onSubmit:t[15]||(t[15]=(0,l.D$)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent"]))},[(0,o.Lk)("div",he,[a.project?((0,o.uX)(),(0,o.CE)("label",ve,"Package Name:")):(0,o.Q3)("",!0),(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"text",id:"project","onUpdate:modelValue":t[0]||(t[0]=e=>n.localProject=e),name:"package-name",placeholder:"Package*",required:""},null,512),[[l.Jo,n.localProject]])]),(0,o.Lk)("div",be,[n.name?((0,o.uX)(),(0,o.CE)("label",ye,"Name:")):(0,o.Q3)("",!0),(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"text",id:"name","onUpdate:modelValue":t[1]||(t[1]=e=>n.name=e),placeholder:"Name*",required:""},null,512),[[l.Jo,n.name]])]),(0,o.Lk)("div",Fe,[n.phone?((0,o.uX)(),(0,o.CE)("label",we,"Phone:")):(0,o.Q3)("",!0),(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"tel",id:"phone","onUpdate:modelValue":t[2]||(t[2]=t=>e.formattedPhone=t),onInput:t[3]||(t[3]=(...e)=>n.formatPhone&&n.formatPhone(...e)),placeholder:"Phone*",required:""},null,544),[[l.Jo,e.formattedPhone]])]),(0,o.Lk)("div",_e,[n.email?((0,o.uX)(),(0,o.CE)("label",Le,"Email:")):(0,o.Q3)("",!0),(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"email",id:"email","onUpdate:modelValue":t[4]||(t[4]=e=>n.email=e),placeholder:"Email*",required:""},null,512),[[l.Jo,n.email]])]),(0,o.Lk)("div",Ce,[n.address?((0,o.uX)(),(0,o.CE)("label",Ie,"Installation Address:")):(0,o.Q3)("",!0),(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"text",id:"address","onUpdate:modelValue":t[5]||(t[5]=e=>n.address=e),placeholder:"Installation Address*",required:""},null,512),[[l.Jo,n.address]])]),(0,o.Lk)("div",Pe,[n.message?((0,o.uX)(),(0,o.CE)("label",Re,"Additional Info:")):(0,o.Q3)("",!0),(0,o.bo)((0,o.Lk)("textarea",{class:"white-text",id:"message","onUpdate:modelValue":t[6]||(t[6]=e=>n.message=e),placeholder:"Additional Info*",required:""},null,512),[[l.Jo,n.message]])]),Ae,(0,o.Lk)("div",$e,[(0,o.Lk)("div",Se,[(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"date",id:"appointmentDate","onUpdate:modelValue":t[7]||(t[7]=e=>n.appointmentDate=e),placeholder:"Appointment Date*",required:""},null,512),[[l.Jo,n.appointmentDate]]),(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"time",id:"appointmentTime","onUpdate:modelValue":t[8]||(t[8]=e=>n.appointmentTime=e),placeholder:"Appointment Time*",required:""},null,512),[[l.Jo,n.appointmentTime]])])]),(0,o.Lk)("div",Ue,[Te,(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"text",id:"preferredInstallationDate","onUpdate:modelValue":t[9]||(t[9]=e=>n.preferredInstallationDate=e),placeholder:"Preferred Installation Date*",required:""},null,512),[[l.Jo,n.preferredInstallationDate]])]),(0,o.Lk)("div",xe,[Me,(0,o.bo)((0,o.Lk)("input",{class:"white-text",type:"text",id:"nationality","onUpdate:modelValue":t[10]||(t[10]=e=>n.nationality=e),placeholder:"Nationality*",required:""},null,512),[[l.Jo,n.nationality]])]),(0,o.Lk)("div",De,[Ee,(0,o.Lk)("input",{type:"file",id:"icFront",onChange:t[11]||(t[11]=e=>n.handleFileUpload(e,"icFront")),required:""},null,32),(0,o.Lk)("p",null,(0,k.v_)(n.icFrontName||"No file chosen"),1)]),(0,o.Lk)("div",Be,[We,(0,o.Lk)("input",{type:"file",id:"icBack",onChange:t[12]||(t[12]=e=>n.handleFileUpload(e,"icBack")),required:""},null,32),(0,o.Lk)("p",null,(0,k.v_)(n.icBackName||"No file chosen"),1)]),(0,o.Lk)("div",Ve,[je,(0,o.Lk)("input",{type:"file",id:"utilityBills",onChange:t[13]||(t[13]=e=>n.handleFileUpload(e,"utilityBills")),required:""},null,32),(0,o.Lk)("p",null,(0,k.v_)(n.utilityBillsName||"No file chosen"),1)]),(0,o.bF)(r,{"is-visible":n.showModal,"modal-message":n.modalMessage,onClose:t[14]||(t[14]=e=>n.showModal=!1)},null,8,["is-visible","modal-message"]),(0,o.Lk)("button",{type:"submit",class:"ff-btn ff-btn-submit white-text",disabled:n.formSubmitted},(0,k.v_)(n.formSubmitted?"Submitting...":"Yes! Contact Me Now"),9,Ne)],32),qe,(0,o.bF)(d)])],64)}var Oe=a(1186),Ke=a(6679);const Qe=e=>((0,o.Qi)("data-v-007d3544"),e=e(),(0,o.jt)(),e),He={key:0,class:"modal"},Je={class:"modal-content"},ze=Qe((()=>(0,o.Lk)("h1",null,"I love U",-1)));function Ye(e,t,a,l,n,i){return a.isVisible?((0,o.uX)(),(0,o.CE)("div",He,[(0,o.Lk)("div",Je,[(0,o.Lk)("span",{class:"close",onClick:t[0]||(t[0]=(...e)=>i.closeModal&&i.closeModal(...e))},"×"),(0,o.Lk)("p",null,(0,k.v_)(a.modalMessage),1),ze])])):(0,o.Q3)("",!0)}var Ge={props:{isVisible:{type:Boolean,default:!1},modalMessage:String},methods:{closeModal(){this.$emit("close")}}};const Ze=(0,m.A)(Ge,[["render",Ye],["__scopeId","data-v-007d3544"]]);var et=Ze;const tt=e=>((0,o.Qi)("data-v-60364b3c"),e=e(),(0,o.jt)(),e),at=tt((()=>(0,o.Lk)("h1",{id:"registration-form"},"Registration Form",-1))),lt=tt((()=>(0,o.Lk)("a",{href:"https://unifi.com.my/personal/home/fibre-broadband/tnc",target:"_blank"},"this link",-1)));function ot(e,t,a,l,n,i){const s=(0,o.g2)("v-card-title"),r=(0,o.g2)("v-icon"),d=(0,o.g2)("v-list-item-icon"),u=(0,o.g2)("v-list-item-title"),c=(0,o.g2)("v-list-item-content"),m=(0,o.g2)("v-list-item"),p=(0,o.g2)("v-list"),f=(0,o.g2)("v-card-text"),g=(0,o.g2)("v-card");return(0,o.uX)(),(0,o.CE)(o.FK,null,[at,(0,o.bF)(g,{class:"pa-4"},{default:(0,o.k6)((()=>[(0,o.bF)(s,null,{default:(0,o.k6)((()=>[(0,o.eW)("Terms & Conditions")])),_:1}),(0,o.bF)(f,null,{default:(0,o.k6)((()=>[(0,o.bF)(p,{dense:""},{default:(0,o.k6)((()=>[(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-check-circle")])),_:1})])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)(" I hereby consent to subscribe to the service with a subscription contract of 24 months. ")])),_:1})])),_:1})])),_:1}),(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-check-circle")])),_:1})])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)(" I have been informed on the Terms & Conditions as at "),lt,(0,o.eW)(" and Privacy Notice of TM. ")])),_:1})])),_:1})])),_:1}),(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-check-circle")])),_:1})])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)(" I agree to pay an advance payment of RM 100 for Malaysian and RM 500 for foreigners within 10 days after installation is complete. ")])),_:1})])),_:1})])),_:1}),(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-check-circle")])),_:1})])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)(" I hereby agree all the information provided to TM is correct and genuine. ")])),_:1})])),_:1})])),_:1}),(0,o.bF)(m,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.eW)("mdi-check-circle")])),_:1})])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)(" I hereby consent TM representative to proceed and process my order. Kindly notify me if there are any issues pertaining to my request. ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)}var nt={name:"TermsConditions"};const it=(0,m.A)(nt,[["render",ot],["__scopeId","data-v-60364b3c"]]);var st=it,rt={name:"tmReg",components:{TermsConditions:st,popUp2:et},props:{project:{type:String,required:!0}},setup(e,{emit:t}){const a=(0,d.KR)(e.project),l=(0,d.KR)(!1),n=(0,d.KR)(!1),i=(0,d.KR)(""),s=(0,d.KR)(""),r=(0,d.KR)(""),u=(0,d.KR)(""),c=(0,d.KR)(""),m=(0,d.KR)(""),p=(0,d.KR)(""),f=(0,d.KR)(""),g=(0,d.KR)(""),k=(0,d.KR)(""),h=(0,d.KR)(null),v=(0,d.KR)(null),b=(0,d.KR)(null),y=(0,d.KR)(""),F=(0,d.KR)(""),w=(0,d.KR)(""),_=e=>{const t=e.target,a=t.value.replace(/\D/g,"").substring(0,10),l=a.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3");t.value=l,r.value=a};(0,o.wB)((()=>e.project),(e=>{a.value=e}));const L=(e,t)=>{const a=e.target.files[0];"icFront"===t?(h.value=a,y.value=a.name):"icBack"===t?(v.value=a,F.value=a.name):"utilityBills"===t&&(b.value=a,w.value=a.name)},C=()=>{t("close")},I=Ke.J1`
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
    `,P=Ke.J1`
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
    `,R=Ke.J1`
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
    `,{mutate:A}=(0,Oe.n_)(P),{mutate:$}=(0,Oe.n_)(R),{refetch:S,loading:U,error:T}=(0,Oe.IT)(I,{variables:{phone:r.value},skip:!0}),x=async()=>{l.value=!0;try{const{data:e}=await S({phone:r.value});if(T.value)return void console.error("Error fetching contact:",T.value);if(U.value)return void console.log("Waiting for contact check...");if(!e.contacts.data||0===e.contacts.data.length){console.log("Contact does not exist. Creating new contact.");const e=await A({project:a.value,name:s.value,phone:r.value,email:u.value,address:c.value,message:m.value,AppointmentDate:p.value,AppointmentTime:f.value+":00",PreferredInstallationDate:g.value,Nationality:k.value,ICFront:h.value,ICBack:v.value,UtilityBills:b.value});return console.log("Create Success:",e),l.value=!1,n.value=!0,void(i.value="Record created.")}const t=e.contacts.data[0];console.log("Contact exists. Updating contact with ID:",t.id);const o=await $({id:t.id,project:a.value,name:s.value,phone:r.value,email:u.value,address:c.value,message:m.value,AppointmentDate:p.value,AppointmentTime:f.value+":00",PreferredInstallationDate:g.value,Nationality:k.value,ICFront:h.value,ICBack:v.value,UtilityBills:b.value});console.log("Update Success:",o),l.value=!1,n.value=!0,i.value="Record updated."}catch(e){l.value=!1,console.error("Error:",e)}};return{localProject:a,name:s,phone:r,email:u,address:c,message:m,appointmentDate:p,appointmentTime:f,preferredInstallationDate:g,nationality:k,icFront:h,icBack:v,utilityBills:b,icFrontName:y,icBackName:F,utilityBillsName:w,formSubmitted:l,submitForm:x,formatPhone:_,showModal:n,modalMessage:i,close:C,handleFileUpload:L}}};const dt=(0,m.A)(rt,[["render",Xe],["__scopeId","data-v-a8f7f8b4"]]);var ut=dt,ct={components:{tmReg:ut,MyCarousel:S,MyPackage:Q,MySelector:me,LaunchButton:C},data(){return{showLaunchButton:!1}}};const mt=(0,m.A)(ct,[["render",F]]);var pt=mt;const ft=e=>((0,o.Qi)("data-v-d1f5a34e"),e=e(),(0,o.jt)(),e),gt=ft((()=>(0,o.Lk)("h1",{class:"title"},"About Page",-1))),kt=ft((()=>(0,o.Lk)("p",null,"This is the about page of the application.",-1)));function ht(e,t,a,l,n,i){const s=(0,o.g2)("v-col"),r=(0,o.g2)("v-row"),d=(0,o.g2)("v-container"),u=(0,o.g2)("v-main"),c=(0,o.g2)("v-app");return(0,o.uX)(),(0,o.Wv)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.bF)(r,null,{default:(0,o.k6)((()=>[(0,o.bF)(s,null,{default:(0,o.k6)((()=>[gt,kt])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var vt={name:"AboutPage"};const bt=(0,m.A)(vt,[["render",ht],["__scopeId","data-v-d1f5a34e"]]);var yt=bt;const Ft=[{path:"/",name:"Login",component:y},{path:"/home",name:"HomePage",component:pt,meta:{requiresAuth:!0}},{path:"/about",name:"AboutPage",component:yt,meta:{requiresAuth:!0}}],wt=(0,g.aE)({history:(0,g.Bt)(),routes:Ft});wt.beforeEach(((e,t,a)=>{const l="true"===localStorage.getItem("authenticated");e.matched.some((e=>e.meta.requiresAuth))&&!l?a("/"):a()}));var _t=wt,Lt=a(4825),Ct=a(2938),It=a(3379),Pt=(a(5524),a(5317)),Rt=a(2391),At=a(88);const $t=new Pt.P({uri:"https://your-graphql-endpoint.com/graphql"}),St=new Rt.R({link:$t,cache:new At.D});(0,Oe._5)(St);const Ut=(0,l.Ef)(f),Tt=(0,Lt.$N)({components:Ct,directives:It});Ut.use(_t),Ut.use(Tt),Ut.mount("#app")}},t={};function a(l){var o=t[l];if(void 0!==o)return o.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,l,o,n){if(!l){var i=1/0;for(u=0;u<e.length;u++){l=e[u][0],o=e[u][1],n=e[u][2];for(var s=!0,r=0;r<l.length;r++)(!1&n||i>=n)&&Object.keys(a.O).every((function(e){return a.O[e](l[r])}))?l.splice(r--,1):(s=!1,n<i&&(i=n));if(s){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[l,o,n]}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,n,i=l[0],s=l[1],r=l[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(r)var u=r(a)}for(t&&t(l);d<i.length;d++)n=i[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},l=self["webpackChunkvue5"]=self["webpackChunkvue5"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(9858)}));l=a.O(l)})();
//# sourceMappingURL=app.f2e0b84b.js.map