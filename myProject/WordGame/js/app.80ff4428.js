(function(t){function e(e){for(var s,a,i=e[0],l=e[1],c=e[2],d=0,h=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},o={app:0},n=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"3e49":function(t,e,r){"use strict";var s=r("ee90"),o=r.n(s);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Start")],1)},n=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("h6",{staticClass:"styleBtn aboutBtn",on:{click:t.showAbout}},[t._v(t._s(t.aboutBtnText))]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.about,expression:"about"}],staticClass:"aboutGame"},[r("p",[t._v("Кто-то перемешал буквы в наших словах!!!")]),r("p",[t._v("Необходимо угадать правильное слово")]),r("p",[t._v("(или слова, да... их может быть несколько, если в перепутанном слове есть пробелы)")]),r("p",[t._v("и собрать его в полях наверху, выбирая правильные буквы.")]),r("p",[t._v("Если ошибся с буквой - не беда - всегда можно убрать последнюю обратно, нажав на неё в отгаданном слове)")]),r("p",[t._v("Правильно угаданное слово +1 балл.")]),r("p",[t._v("Пропущенное слово -1 балл")]),r("p",[t._v("Успехов в игре!)")])]),r("h4",[t._v("Набранные баллы: "+t._s(t.score))]),r("p",{staticClass:"getDataBtn styleBtn",on:{click:t.skipWord}},[t._v("Пропустить слово")]),r("div",{staticClass:"randomLetterWrapper"},[t._l(t.hiddenWord,function(e){return t.hiddenWord.length>1?r("div",{staticClass:"randomLetter",on:{click:t.correctLetter},model:{value:t.hiddenWord,callback:function(e){t.hiddenWord=e},expression:"hiddenWord"}},[t._v(t._s(e))]):t._e()}),r("div",{staticClass:"delBtn styleBtn",attrs:{title:"Сбросить"},on:{click:t.createHiddenWord}},[t._v("✘")])],2),r("img",{staticClass:"descriptionImg",attrs:{src:t.img_src}}),r("div",{staticClass:"randomLetterWrapper"},t._l(t.shuffledWord,function(e){return r("div",{staticClass:"randomLetter",on:{click:t.updateHiddenWord}},[t._v(t._s(e.toUpperCase()))])}),0),r("div",{directives:[{name:"show",rawName:"v-show",value:t.scoreTable,expression:"scoreTable"}],staticClass:"scoreTable modalWindowWrapper"},[r("div",{staticClass:"modalWindowContent modalTable"},[r("h5",[t._v("Уже уходите? "),r("br"),t._v(" Посмотрите вашу статистику"),r("div",{directives:[{name:"show",rawName:"v-show",value:t.tableSuccessWord.length>0,expression:"tableSuccessWord.length > 0"}],staticClass:"tableWrapper"},[t._v("Отгаданные слова:"),r("b-table",{attrs:{hover:"",items:t.tableSuccessWord,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:t.tableSkipWord.length>0,expression:"tableSkipWord.length > 0"}],staticClass:"tableWrapper"},[t._v("Пропущенные слова:"),r("b-table",{attrs:{hover:"",items:t.tableSkipWord,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}}})],1)])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],staticClass:"modalWindowWrapper"},[r("div",{staticClass:"modalWindowContent modalWin"},[r("h3",{staticClass:"modalWindow_title"},[t._v("Поздравляем, вы выиграли!!!")]),r("h2",{staticClass:"modalWindow_title"},[t._v("Хотите повторить?")]),r("span",{staticClass:"modalWindow_onemore",on:{click:t.continueGame}},[t._v("Конечно!")]),r("span",{staticClass:"modalWindow_exit",on:{click:t.endGame}},[t._v("Я уже устал"),r("span",{staticClass:"modalWindow_exit_smile"},[t._v(" :(")])])])]),r("div",[t._v("Sorting By: "+t._s(t.sortBy)+", Sort Direction: "+t._s(t.sortDesc?"Descending":"Ascending"))])])},i=[],l=(r("28a5"),r("7f7f"),r("bc3a")),c={name:"Start",props:{},data:function(){return{img_src:r("c746"),aboutBtnText:"Об игре",responseData:Object,shuffledWord:String,hiddenWord:[],tableSuccessWord:[],successWordCounter:1,tableSkipWord:[],fields:[{key:"№",sortable:!0},{key:"Слово",sortable:!0}],skipWordsCounter:1,tableTime:"",score:0,clickCounter:0,modal:!1,about:!1,scoreTable:!1,sortBy:"age",sortDesc:!1}},mounted:function(){this.getData()},computed:{},methods:{getData:function(){var t=this;this.img_src=r("c746");var e=Math.floor(1367*Math.random()+2),s="https://apidir.pfdo.ru/v1/directory-program-activities/"+e;console.log(s),l["get"](s).then(function(e){"Запись не найдена"!==e.data.result_message&&e.data.data.img_src?(console.log(e.data),t.responseData=e.data.data,e.data.data.img_src&&(t.img_src=e.data.data.img_src)):t.getData()}).then(function(){t.responseData&&t.shuffle(t.responseData.name)}).then(function(){t.createHiddenWord()}).catch(function(t){console.log(t)})},shuffle:function(t){for(var e,r,s=t.split(""),o=s.length-1;o>0;o--)e=Math.floor(Math.random()*(o+1)),r=s[e],s[e]=s[o],s[o]=r;return this.shuffledWord=s.join("")},correctLetter:function(){this.$set(this.hiddenWord,this.clickCounter-1,"?"),this.clickCounter--},createHiddenWord:function(){this.clickCounter=0;for(var t=[],e=0;e<this.shuffledWord.length;e++)t[e]="?";this.hiddenWord=t},showAbout:function(){return this.aboutBtnText=this.about?"Об игре":"Свернуть",this.about=!this.about},skipWord:function(){this.score--,this.tableSkipWord.push({"№":this.skipWordsCounter,"Слово":this.responseData.name}),this.getData(),this.skipWordsCounter++},updateHiddenWord:function(t){this.clickCounter<this.shuffledWord.length&&(this.$set(this.hiddenWord,this.clickCounter,t.target.textContent),this.clickCounter++),this.clickCounter===this.shuffledWord.length&&this.hiddenWord.join("")===this.responseData.name.toUpperCase()&&(this.score++,this.tableSuccessWord.push({"№":this.successWordCounter,"Слово":this.responseData.name}),this.modal=!0)},continueGame:function(){this.modal=!1,this.getData(),this.successWordCounter++},endGame:function(){return this.modal=!1,this.scoreTable=!this.scoreTable},addToTable:function(t,e){}}},u=c,d=(r("3e49"),r("2877")),h=Object(d["a"])(u,a,i,!1,null,null,null),p=h.exports,v={name:"app",components:{Start:p}},f=v,m=(r("5c0b"),Object(d["a"])(f,o,n,!1,null,null,null)),_=m.exports,b=r("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"})},W=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},w=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],C={name:"HelloWorld",props:{msg:String}},y=C,j=(r("fc00"),Object(d["a"])(y,k,w,!1,null,"498f8676",null)),x=j.exports,D={name:"home",components:{HelloWorld:x}},S=D,B=Object(d["a"])(S,g,W,!1,null,null,null),O=B.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("p",[t._v("Кто-то перемешал буквы в наших словах!!!")]),r("p",[t._v("Необходимо угадать правильное слово и собрать его в полях на верху, выбирая правильные буквы")])])}],E={},L=Object(d["a"])(E,T,$,!1,null,null,null),M=L.exports;s["default"].use(b["a"]);var P=new b["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:M}]}),H=r("2f62");s["default"].use(H["a"]);var N=new H["a"].Store({state:{},mutations:{},actions:{}}),G=r("5f5b");r("f9e3"),r("2dd8");s["default"].use(G["a"]),s["default"].config.productionTip=!1,new s["default"]({router:P,store:N,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var s=r("e332"),o=r.n(s);o.a},"67ae":function(t,e,r){},c746:function(t,e,r){t.exports=r.p+"img/noimage.48cd39a2.png"},e332:function(t,e,r){},ee90:function(t,e,r){},fc00:function(t,e,r){"use strict";var s=r("67ae"),o=r.n(s);o.a}});
//# sourceMappingURL=app.80ff4428.js.map