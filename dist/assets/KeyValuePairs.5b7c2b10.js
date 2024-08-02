import{b as C,d as D,a as N,_ as S,r,o,h as V,g as d,z as T,t as q,e as n,F as w,i as B,c as m,w as p,j as b,n as M,k as J}from"./index.f821c4c4.js";import{m as L,v as R}from"./VueOpenapiForm.5c175d11.js";import{t as z}from"./tabs.3e42e776.js";import{s as E}from"./size.dad4bd14.js";import"./SchemaModel.606a4b05.js";const F=D({name:"KeyValuePairs",components:{KeyValuePairItems:N(()=>S(()=>import("./KeyValuePairItems.a30e3d2c.js"),["assets/KeyValuePairItems.a30e3d2c.js","assets/VueOpenapiForm.5c175d11.js","assets/VueOpenapiForm.15c6fa25.css","assets/index.f821c4c4.js","assets/index.d6734c14.css","assets/SchemaModel.606a4b05.js","assets/SchemaModel.b73a45ab.css"]).then(e=>e.default))},mixins:[L,z,R,E],props:{schema:{type:Object,default:()=>({})},fieldName:{type:String,default:""},modelValue:{type:Object,default:()=>({})},errors:{type:Object,default:()=>({})},isLastChild:{type:Boolean,default:!1}},data(){return{newData:null,updatePass:0,keyValueArray:null,referencekeyValueArray:null,newKey:"",newValue:null}},computed:{additionalProperties(){return this.schema.additionalProperties||{}}},watch:{keyValueArray:{immediate:!0,deep:!0,handler(e,a){if(a!=null){const u=JSON.stringify(e);this.modelData=this.reconstructObject(JSON.parse(u))}}},activeTab(){this.initKeyValueArray(),this.initReferenceKeyValueArray()},modelValue:{deep:!0,immediate:!0,handler(e,a){const u=JSON.stringify(e),c=JSON.stringify(a);u!==c&&this.initKeyValueArray(),this.initReferenceKeyValueArray()}}},methods:{initKeyValueArray(){this.keyValueArray=Object.keys(this.modelValue).map(e=>({key:e,value:this.modelValue[e]||null}))},initReferenceKeyValueArray(){this.referencekeyValueArray=Object.keys(this.referenceModel).map(e=>({key:e,value:this.referenceModel[e]||null}))},updateKeyValueArray(e){this.keyValueArray=Object.keys(e).map(a=>({key:a,value:e[a]}))},reconstructObject(e){let a={};return e.forEach(u=>{a=Object.assign({},{...a},{[`${u.key}`]:u.value})}),a},async addProp(e){const{valid:a}=await e();a&&(this.keyValueArray.push({key:this.newKey,value:this.newValue}),this.newKey="",this.newValue=null,this.updatePass+=1)},deleteProp(e){this.keyValueArray.splice(e,1),this.updatePass+=1}}}),I={class:"nested-header mb-5"},G={class:"is-flex is-semi-normal"},H=d("div",{class:"collaps-icon is-disabled"},[d("i",{"aria-hidden":"true",class:"fa fa-minus"})],-1),Q=["onClick"],W=d("span",{class:"icon"},[d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})])],-1),X=[W];function Y(e,a,u,c,Z,_){const k=r("component-errors"),P=r("tabs"),g=r("key-value-pair-items"),h=r("simple-input"),y=r("v-field"),A=r("object-form-wrapper"),U=r("key-value-pairs",!0),K=r("array-input"),j=r("v-form"),$=r("yaml-form"),O=r("json-form");return o(),V("div",{class:M(["ac-nested-elements key-value-pairs is-flex is-flex-direction-column gap-8",{"stop-line":e.isLastChild}])},[d("div",I,[d("h6",G,[H,T(" "+q(e.schema.title||"Array Item Description"),1),n(k,{errors:e.calcFormErrors(e.errors,e.fieldName)},null,8,["errors"])]),n(P,{modelValue:e.activeTab,"onUpdate:modelValue":a[0]||(a[0]=s=>e.activeTab=s)},null,8,["modelValue"])]),e.activeTab==="form"?(o(),V(w,{key:0},[(o(!0),V(w,null,B(e.keyValueArray,(s,t)=>(o(),V("div",{key:`${t}-${e.schema.title}-form`},[n(g,{modelValue:e.keyValueArray[t],"onUpdate:modelValue":l=>e.keyValueArray[t]=l,"field-name":e.fieldName,"reference-model":e.referencekeyValueArray[t]||{},index:t,schema:e.schema,"additional-properties":e.additionalProperties,errors:e.errors,onDeleteKeyValue:e.deleteProp},null,8,["modelValue","onUpdate:modelValue","field-name","reference-model","index","schema","additional-properties","errors","onDeleteKeyValue"])]))),128)),(o(),m(j,{id:`${e.schema.title.replace(/ /g,"-")}-new-observer`,key:e.updatePass,as:"div",class:"key-value-save"},{default:p(({validate:s,errors:t})=>[n(y,{id:`${e.schema.title.replace(/ /g,"-")}-key-provider`,modelValue:e.newKey,"onUpdate:modelValue":a[1]||(a[1]=l=>e.newKey=l),rules:"required",name:"newKey",label:`${e.schema.title} new key`,as:"div"},{default:p(({field:l,handleChange:i,errors:f,meta:v})=>[n(h,{"model-value":l.value,schema:{title:"Key",type:"string",ui:{tag:"input",type:"text"}},type:"string","validation-ob":{errors:f,...v},"reference-model":"","onUpdate:modelValue":i},null,8,["model-value","validation-ob","onUpdate:modelValue"])]),_:1},8,["id","modelValue","label"]),e.additionalProperties.type==="object"?(o(),m(y,{key:0,id:`${e.schema.title.replace(/ /g,"-")}-value-provider`,modelValue:e.newValue,"onUpdate:modelValue":a[2]||(a[2]=l=>e.newValue=l),rules:"required",name:"newValue",label:`${e.schema.title} new value`,as:""},{default:p(({field:l,handleChange:i})=>[n(A,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,"is-self-required":!0,schema:e.additionalProperties,type:e.additionalProperties.type,errors:t,"reference-model":{},"onUpdate:modelValue":i},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]),_:2},1032,["id","modelValue","label"])):e.additionalProperties.type==="key-value-pairs"?(o(),m(y,{key:1,id:`${e.schema.title.replace(/ /g,"-")}-value-provider`,modelValue:e.newValue,"onUpdate:modelValue":a[3]||(a[3]=l=>e.newValue=l),rules:"required",name:"newValue",label:`${e.schema.title} new value`,as:""},{default:p(({field:l,handleChange:i})=>[n(U,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,schema:e.additionalProperties,type:e.additionalProperties.type,errors:t,"reference-model":{},"onUpdate:modelValue":i},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]),_:2},1032,["id","modelValue","label"])):e.additionalProperties.type==="array"?(o(),m(y,{key:2,id:`${e.schema.title.replace(/ /g,"-")}-value-provider`,modelValue:e.newValue,"onUpdate:modelValue":a[4]||(a[4]=l=>e.newValue=l),rules:"required",name:"newValue",label:`${e.schema.title} new value`,as:""},{default:p(({field:l,handleChange:i})=>[n(K,{"field-name":"newValue","model-value":l.value,"is-last-child":!0,schema:e.additionalProperties,type:e.additionalProperties.type,errors:t,"reference-model":[],"onUpdate:modelValue":i},null,8,["model-value","schema","type","errors","onUpdate:modelValue"])]),_:2},1032,["id","modelValue","label"])):(o(),m(y,{key:3,id:`${e.schema.title.replace(/ /g,"-")}-value-provider`,modelValue:e.newValue,"onUpdate:modelValue":a[5]||(a[5]=l=>e.newValue=l),rules:"required",name:"newValue",label:`${e.schema.title} new value`,as:""},{default:p(({field:l,handleChange:i,errors:f,meta:v})=>[n(h,{"model-value":l.value,schema:e.additionalProperties,type:e.additionalProperties.type,"validation-ob":{errors:f,...v},"reference-model":"","onUpdate:modelValue":i},null,8,["model-value","schema","type","validation-ob","onUpdate:modelValue"])]),_:1},8,["id","modelValue","label"])),d("button",{class:"button ac-button is-medium is-square is-primary is-outlined",onClick:J(l=>e.addProp(s),["prevent"])},X,8,Q)]),_:1},8,["id"]))],64)):b("",!0),e.activeTab==="yaml"?(o(),m($,{key:1,modelValue:e.modelData,"onUpdate:modelValue":a[6]||(a[6]=s=>e.modelData=s),"reference-model":e.referenceModel||{},"onCode::modelDataUpdated":e.updateKeyValueArray},null,8,["modelValue","reference-model","onCode::modelDataUpdated"])):e.activeTab==="json"?(o(),m(O,{key:2,modelValue:e.modelData,"onUpdate:modelValue":a[7]||(a[7]=s=>e.modelData=s),"reference-model":e.referenceModel||{},"onCode::modelDataUpdated":e.updateKeyValueArray},null,8,["modelValue","reference-model","onCode::modelDataUpdated"])):b("",!0)],2)}var oe=C(F,[["render",Y]]);export{oe as default};
