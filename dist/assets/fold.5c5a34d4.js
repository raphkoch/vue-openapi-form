import{d}from"./index.f821c4c4.js";var t=d({props:{isSelfFolded:{type:Boolean,default:()=>!1},expandForm:{type:Boolean,default:()=>!1}},data(){return{isFolded:!0}},watch:{expandForm:{immediate:!0,handler(e){this.isFolded=!e}}},methods:{toggleFold(){this.isFolded=!this.isFolded}}});export{t as f};
