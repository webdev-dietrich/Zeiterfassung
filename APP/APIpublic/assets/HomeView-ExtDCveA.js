import{u,r as c,o as t,c as i,a as s,w as d,v as p,b as w,t as f,d as m,e as _}from"./index-IR2a_sRS.js";const g={class:"login_element"},h=s("label",{for:"username"},"Username",-1),v=s("label",{for:"password"},"Password",-1),b=s("button",{type:"submit"},"Login",-1),k={__name:"LoginUser",setup(l){const r=u(),e=c({username:"",password:""}),n=()=>{r.loginUser(e.username,e.password)};return(y,o)=>(t(),i("div",g,[s("form",{onSubmit:w(n,["prevent"])},[h,d(s("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.username=a),type:"text",name:"username",id:"username"},null,512),[[p,e.username]]),v,d(s("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>e.password=a),type:"password",name:"password",id:"password"},null,512),[[p,e.password]]),b],32)]))}},x={__name:"TimeTraking",setup(l){const r=u();return(e,n)=>(t(),i("h1",null,"Hallo "+f(m(r).user.username),1))}},U={__name:"HomeView",setup(l){const r=u();return(e,n)=>(t(),i("div",null,[m(r).userIsLoaded?(t(),_(x,{key:1})):(t(),_(k,{key:0}))]))}};export{U as default};
