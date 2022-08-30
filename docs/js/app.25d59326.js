(function(t){function e(e){for(var n,s,_=e[0],o=e[1],c=e[2],u=0,d=[];u<_.length;u++)s=_[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,_=1;_<i.length;_++){var o=i[_];0!==r[o]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var _=window["webpackJsonp"]=window["webpackJsonp"]||[],o=_.push.bind(_);_.push=e,_=_.slice();for(var c=0;c<_.length;c++)e(_[c]);var l=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("EM4305 utils")]),t._m(0),i("p",[i("label",{attrs:{for:"Input"}},[t._v("Value to write")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.hex,expression:"hex"}],attrs:{type:"text",id:"input"},domProps:{value:t.hex},on:{input:function(e){e.target.composing||(t.hex=e.target.value)}}})]),i("table",[i("tr",[i("td",[t._v("Cleaned ("+t._s(t.cleaned_data.length/2)+" bytes)")]),i("td",[t._v(t._s(t.cleaned_data))])]),i("tr",[i("td",[t._v("Binary")]),i("td",[t._v(t._s(t.hex_to_bin(t.cleaned_data)))])]),i("tr",[i("td",[t._v("EM4100 decoded (binary) ("+t._s(t.em4100_decoding.output.length)+")")]),i("td",[t._v(t._s(t.em4100_decoding.output))])]),i("tr",[i("td",[t._v("EM4100 decoded (Hex)")]),i("td",[t._v(t._s(t.bin_to_hex(t.em4100_decoding.output)))])]),i("tr",[i("td",[t._v("Word 5")]),i("td",[t._v("0x"+t._s(t.bin_to_hex(t.em4100_decoding.output).slice(0,8)))])]),i("tr",[i("td",[t._v("Word 6")]),i("td",[t._v("0x"+t._s(t.bin_to_hex(t.em4100_decoding.output).slice(8,16)))])])]),i("table",[i("tr",t._l(t.hex_to_bin(t.cleaned_data).slice(""),(function(e,n){return i("td",{key:"bit_"+n,staticClass:"data_bit"},[i("div",{staticClass:"bit_label"},[t._v("D"+t._s(n))]),i("div",{staticClass:"bit"},[t._v(t._s(e))])])})),0)]),i("table",[t._l(t.em4100_decoding.data_bits_table,(function(e,n){return i("tr",{key:"row_"+n},[t._l(e,(function(e,r){return i("td",{key:"row_"+r,staticClass:"data_bit"},[i("div",{staticClass:"bit_label"},[t._v("D"+t._s(4*n+r))]),i("div",{staticClass:"bit"},[t._v(t._s(e))])])})),i("td",{staticClass:"row_parity_bit"},[i("div",{staticClass:"bit_label"},[t._v("P"+t._s(n))]),i("div",{staticClass:"bit"},[t._v(t._s(t.em4100_decoding.row_parity_bits[n]))])])],2)})),i("tr",[t._l(t.em4100_decoding.column_parity_bits,(function(e,n){return i("td",{key:"column_parity_bit_"+n,staticClass:"column_parity_bit"},[i("div",{staticClass:"bit_label"},[t._v("PC"+t._s(n))]),i("div",{staticClass:"bit"},[t._v(t._s(e))])])})),t._m(1)],2)],2),i("table",[i("tr",[t._l(9,(function(e,n){return i("td",{key:"header_bint_"+n,staticClass:"header_bit"},[i("div",{staticClass:"bit_label"},[t._v("H"+t._s(n))]),i("div",{staticClass:"bit"},[t._v("1")])])})),t._l(t.em4100_decoding.data_bits_table,(function(e,n){return[t._l(e,(function(e,r){return i("td",{key:"row_"+n+"_col_"+r,staticClass:"data_bit"},[i("div",{staticClass:"bit_label"},[t._v("D"+t._s(4*n+r))]),i("div",{staticClass:"bit"},[t._v(t._s(e))])])})),i("td",{key:"row_"+n+"_parity",staticClass:"row_parity_bit"},[i("div",{staticClass:"bit_label"},[t._v("P"+t._s(n))]),i("div",{staticClass:"bit"},[t._v(t._s(t.em4100_decoding.row_parity_bits[n]))])])]})),t._l(t.em4100_decoding.column_parity_bits,(function(e,n){return i("td",{key:"column_parity_bit_"+n,staticClass:"column_parity_bit"},[i("div",{staticClass:"bit_label"},[t._v("PC"+t._s(n))]),i("div",{staticClass:"bit"},[t._v(t._s(e))])])})),t._m(2)],2)])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("a",{attrs:{href:"/assets/EM4205-4305.pdf"}},[t._v("Reference")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{staticClass:"stop_bit"},[i("div",{staticClass:"bit_label"},[t._v("S0")]),i("div",{staticClass:"bit"},[t._v("0")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("td",{staticClass:"stop_bit"},[i("div",{staticClass:"bit_label"},[t._v("S0")]),i("div",{staticClass:"bit"},[t._v("0")])])}],s=(i("fb6a"),i("4d90"),i("d3b7"),i("25f0"),i("ac1f"),i("1276"),i("5319"),i("d81d"),i("a9e3"),i("159b"),{name:"App",data:function(){return{hex:"0x0000CDB71C"}},methods:{bin_to_hex:function(t){for(var e=t.length/8,i="",n=0;n<e;n++){var r=8*n,a=8*n+8,s=t.slice(r,a),_=parseInt(s,2).toString(16).toUpperCase().padStart(2,"0");i+=_}return i},hex_to_bin:function(t){for(var e=t.length/2,i="",n=0;n<e;n++){var r=2*n,a=2*n+2,s=t.slice(r,a),_=parseInt(s,16).toString(2).padStart(8,"0");i+=_}return i},reverse_bytes:function(t){for(var e=t.length/8,i="",n=0;n<e;n++)for(var r=7;r>=0;r--){var a=8*n+r;i+=t[a]}return i}},computed:{cleaned_data:function(){var t=this.hex.split("0x"),e=t[t.length-1].replace(/\s/g,"");return e},em4100_decoding:function(){for(var t=this.hex_to_bin(this.cleaned_data),e=t.split("").map((function(t){return Number(t)})),i=[],n=0;n<10;n++){i[n]=[];for(var r=0;r<4;r++)i[n][r]=e[4*n+r]}for(var a=i.map((function(t){return t.reduce((function(t,e){return t+e}),0)%2})),s=i.reduce((function(t,e){return e.map((function(e,i){return t[i]+e}))}),[0,0,0,0]).map((function(t){return t%2})),_="",o=0;o<9;o++)_+=1;i.forEach((function(t,e){t.forEach((function(t){_+=t})),_+=a[e]})),s.forEach((function(t){_+=t})),_+=0;var c=this.reverse_bytes(_);return{output:c,data_bits_table:i,row_parity_bits:a,column_parity_bits:s}}}}),_=s,o=(i("034f"),i("2877")),c=Object(o["a"])(_,r,a,!1,null,null,null),l=c.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.25d59326.js.map