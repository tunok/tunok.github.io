(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],d=0,h=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],n=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},r={app:0},a=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"2f30":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("MainScreen")],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("About"),s("h5",[t._v("Набранные баллы: "+t._s(t.score))]),s("h5",[t._v("Время: "+t._s(t.timer.minutes)+" : "+t._s(t.timer.seconds))]),s("p",{staticClass:"getDataBtn styleBtn",on:{click:t.skipWord}},[t._v("Пропустить слово")]),s("div",{staticClass:"rightWordWrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newLetters,expression:"newLetters"}],staticClass:"rightWord",attrs:{placeholder:"Отгадайте слово"},domProps:{textContent:t._s(t.newLetters),value:t.newLetters},on:{input:function(e){e.target.composing||(t.newLetters=e.target.value)}}}),s("div",{staticClass:"delBtn styleBtn",attrs:{title:"Сбросить"},on:{click:t.deleteLastLetter}},[t._v("⇐")]),s("div",{staticClass:"delBtn styleBtn",attrs:{title:"Сбросить"},on:{click:t.deleteInputWord}},[t._v("✘")])]),s("Preloader",{directives:[{name:"show",rawName:"v-show",value:!t.img_src,expression:"!img_src"}]}),s("img",{staticClass:"descriptionImg",attrs:{src:t.img_src}}),s("div",{staticClass:"randomLetterWrapper"},t._l(t.shuffledWord,function(e){return s("div",{staticClass:"randomLetter",on:{click:function(e){return t.updateHiddenWord(e)}}},[t._v(t._s(e.toUpperCase()))])}),0),s("ModalTable"),s("ModalWindow",{on:{reRunGame:t.letStartTheGame}})],1)},i=[],l=(s("28a5"),s("7f7f"),s("bc3a")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h6",{staticClass:"styleBtn aboutBtn",on:{click:t.showAbout}},[t._v(t._s(t.aboutBtnText)),s("div",{directives:[{name:"show",rawName:"v-show",value:t.about,expression:"about"}],staticClass:"aboutGame"},[s("p",[t._v("Кто-то перемешал буквы в наших словах!!!")]),s("p",[t._v("Необходимо угадать правильное слово и собрать его в полях наверху, выбирая правильные буквы.")]),s("p",[t._v("(или слова, да... их может быть несколько! Если в перепутанном слове есть пробелы, вставляй их тоже в слово наверху)")]),s("p",[t._v("Если ошибся с буквой - не беда - всегда можно убрать последнюю обратно, нажав на неё в отгаданном слове.")]),s("p",[t._v("Правильно угаданное слово +1 балл.")]),s("p",[t._v("Пропущенное слово -1 балл.")]),s("p",[t._v("Успехов в игре!)")])])])])},u=[],d={name:"appAbout",data:function(){return{aboutBtnText:"Об игре",about:!1}},methods:{showAbout:function(){return this.aboutBtnText=this.about?"Об игре":"Свернуть",this.about=!this.about}}},h=d,m=(s("ff37"),s("2877")),p=Object(m["a"])(h,c,u,!1,null,null,null),f=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.isNeedShow,expression:"isNeedShow"}],staticClass:"scoreTable modalWindowWrapper"},[s("div",{staticClass:"modalWindowContent modalTable"},[s("h5",[t._v("Уже уходите? "),s("br"),t._v(" Посмотрите вашу статистику"),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tableSuccessWord.length>0,expression:"tableSuccessWord.length > 0"}],staticClass:"tableWrapper"},[t._v("Отгаданные слова:"),s("b-table",{attrs:{hover:"",items:t.tableSuccessWord,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.tableSkipWord.length>0,expression:"tableSkipWord.length > 0"}],staticClass:"tableWrapper"},[t._v("Пропущенные слова:"),s("b-table",{attrs:{hover:"",items:t.tableSkipWord,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}}})],1)])])])},b=[],_={name:"appModalTable",data:function(){return{fields:[{key:"№",sortable:!0},{key:"Слово",sortable:!0},{key:"Время",sortable:!0}],sortBy:"age",sortDesc:!1}},computed:{isNeedShow:function(){return this.$store.state.modalScoreTable},tableSuccessWord:function(){return this.$store.state.tableSuccessWord},tableSkipWord:function(){return this.$store.state.tableSkipWord}}},g=_,w=(s("f7fb"),Object(m["a"])(g,v,b,!1,null,null,null)),W=w.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.isNeedShow,expression:"isNeedShow"}],staticClass:"modalWindowWrapper"},[s("div",{staticClass:"modalWindowContent modalWin"},[s("h3",{staticClass:"modalWindow_title"},[t._v("Поздравляем, вы выиграли!!!")]),s("h2",{staticClass:"modalWindow_title"},[t._v("Хотите повторить?")]),s("span",{staticClass:"modalWindow_onemore",on:{click:t.continueGame}},[t._v("Конечно!")]),s("span",{staticClass:"modalWindow_exit",on:{click:t.endGame}},[t._v("Я уже устал"),s("span",{staticClass:"modalWindow_exit_smile"},[t._v(" :(")])])])])},S=[],k={name:"appModalWindow",data:function(){return{}},computed:{isNeedShow:function(){return this.$store.state.modalWindow}},methods:{continueGame:function(){this.$store.commit("changeModalState","modalWindow"),this.$emit("reRunGame")},endGame:function(){this.$store.commit("changeModalState","modalWindow"),this.$store.commit("changeModalState","modalScoreTable")}}},y=k,j=(s("a4bb"),Object(m["a"])(y,C,S,!1,null,null,null)),x=j.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"item-1"},[s("div")]),s("div",{staticClass:"item-2"},[s("div")]),s("div",{staticClass:"item-3"},[s("div")]),s("div",{staticClass:"item-4"},[s("div")]),s("div",{staticClass:"item-5"},[s("div")]),s("div",{staticClass:"item-6"},[s("div")]),s("div",{staticClass:"item-7"},[s("div")]),s("div",{staticClass:"item-8"},[s("div")]),s("div",{staticClass:"item-9"},[s("div")])])}],D={name:"Preloader"},L=D,M=(s("7434"),Object(m["a"])(L,T,$,!1,null,null,null)),B=M.exports,O={name:"Start",components:{About:f,Preloader:B,ModalWindow:x,ModalTable:W},props:{},data:function(){return{url:"",newLetters:"",img_src:"",responseData:null,shuffledWord:"",hiddenWord:[],successWordCounter:1,skipWordsCounter:1,tableTime:"",score:0,timer:{start:!0,seconds:"00",minutes:"00"}}},created:function(){this.letStartTheGame()},mounted:function(){setInterval(this.goTimer,1e3)},computed:{},methods:{getData:function(){var t=Math.floor(1367*Math.random()+2),e="https://apidir.pfdo.ru/v1/directory-program-activities/"+t;return console.info("получим данные по ссылке",e),l["get"](e).then(function(t){return console.info("получили данные",t),t}).catch(function(t){return console.log(t)})},setData:function(t){if(console.info("установим данные",t),t.data.result_message){if("Запись не найдена"===t.data.result_message||null==t.data.data.img_src)this.letStartTheGame();else if("Полный успех"===t.data.result_message)return this.responseData=t.data.data,this.img_src=this.responseData.img_src,console.log(this.responseData.name),this.responseData.name;return"Ждём"}},letStartTheGame:function(){this.getData(this.url).catch(function(t){return console.log(t)}).then(this.setData).then(this.shuffle).catch(function(t){return console.log(t)})},shuffle:function(t){console.info("перемешаем");for(var e,s,n=t.split(""),r=n.length-1;r>0;r--)e=Math.floor(Math.random()*(r+1)),s=n[e],n[e]=n[r],n[r]=s;return this.shuffledWord=n.join("")},goTimer:function(){this.timer.seconds++,this.timer.seconds<=9?this.timer.seconds="0"+this.timer.seconds:this.timer.seconds,59===this.timer.seconds&&(this.timer.minutes<=9&&(this.timer.minutes="0"+this.timer.minutes),this.timer.minutes++,this.timer.seconds=0),this.timer.minutes<=9&&(this.timer.minutes="00")},deleteLastLetter:function(){this.newLetters=this.newLetters.slice(0,this.newLetters.length-1)},deleteInputWord:function(){this.newLetters=""},skipWord:function(){this.score--,this.tableTime=this.timer.minutes+":"+this.timer.seconds,this.$store.commit("changeWordTable",{table:"tableSkipWord",pushing:{"№":this.skipWordsCounter,"Слово":this.responseData.name,"Время":this.tableTime}}),this.skipWordsCounter++,this.letStartTheGame()},updateHiddenWord:function(t){this.newLetters+=t.target.textContent,this.newLetters.length===this.shuffledWord.length&&this.newLetters.toUpperCase()===this.responseData.name.toUpperCase()&&(this.score++,this.tableTime=this.timer.minutes+":"+this.timer.seconds,this.$store.commit("changeWordTable",{table:"tableSuccessWord",pushing:{"№":this.successWordCounter,"Слово":this.responseData.name,"Время":this.tableTime}}),this.successWordCounter++,this.newLetters="",this.$store.commit("changeModalState","modalWindow"))}}},E=O,N=(s("6ac4"),Object(m["a"])(E,o,i,!1,null,null,null)),G=N.exports,P={name:"app",components:{MainScreen:G}},I=P,A=(s("5c0b"),Object(m["a"])(I,r,a,!1,null,null,null)),H=A.exports,U=s("8c4f"),F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"})},J=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._m(0),s("h3",[t._v("Installed CLI Plugins")]),t._m(1),s("h3",[t._v("Essential Links")]),t._m(2),s("h3",[t._v("Ecosystem")]),t._m(3)])},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),s("br"),t._v("\n    check out the\n    "),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),s("li",[s("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),s("li",[s("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],q={name:"HelloWorld",props:{msg:String}},K=q,Q=(s("fc00"),Object(m["a"])(K,R,z,!1,null,"498f8676",null)),V=Q.exports,X={name:"home",components:{HelloWorld:V}},Y=X,Z=Object(m["a"])(Y,F,J,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("p",[t._v("Кто-то перемешал буквы в наших словах!!!")]),s("p",[t._v("Необходимо угадать правильное слово и собрать его в полях на верху, выбирая правильные буквы")])])}],nt={},rt=Object(m["a"])(nt,et,st,!1,null,null,null),at=rt.exports;n["default"].use(U["a"]);var ot=new U["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:tt},{path:"/about",name:"about",component:at}]}),it=s("2f62");n["default"].use(it["a"]);var lt=new it["a"].Store({state:{modalWindow:!1,modalScoreTable:!1,tableSuccessWord:[],tableSkipWord:[]},mutations:{changeModalState:function(t,e){t[e]=!t[e]},changeWordTable:function(t,e){t[e.table].push(e.pushing)}},actions:{}}),ct=s("5f5b");s("f9e3"),s("2dd8");n["default"].use(ct["a"]),n["default"].config.productionTip=!1,new n["default"]({router:ot,store:lt,render:function(t){return t(H)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("e332"),r=s.n(n);r.a},"5d65":function(t,e,s){},6017:function(t,e,s){},"67ae":function(t,e,s){},"6ac4":function(t,e,s){"use strict";var n=s("c966"),r=s.n(n);r.a},7434:function(t,e,s){"use strict";var n=s("6017"),r=s.n(n);r.a},a4bb:function(t,e,s){"use strict";var n=s("d489"),r=s.n(n);r.a},c966:function(t,e,s){},d489:function(t,e,s){},e332:function(t,e,s){},f7fb:function(t,e,s){"use strict";var n=s("5d65"),r=s.n(n);r.a},fc00:function(t,e,s){"use strict";var n=s("67ae"),r=s.n(n);r.a},ff37:function(t,e,s){"use strict";var n=s("2f30"),r=s.n(n);r.a}});
//# sourceMappingURL=app.37293a0d.js.map