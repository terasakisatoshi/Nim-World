(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{64:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"when"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#when","aria-hidden":"true"}},[s._v("#")]),s._v(" when")]),n("p",[n("code",[s._v("when")]),s._v("は少し特殊で、コンパイル時に評価されます。")]),n("p",[s._v("なので、例えばWindowsとそれ以外のプラットフォームでインポートするモジュールを分けたい時などで重宝します。")]),n("pre",{pre:!0,attrs:{class:"language-nim"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("defined")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("windows"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" winlean\n  echo "),n("span",{attrs:{class:"token string"}},[s._v('"Windows !"')]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("else")]),n("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" posix\n  echo "),n("span",{attrs:{class:"token string"}},[s._v('"not Windows!"')]),s._v("\n")])]),n("p",[s._v("他にも、"),n("code",[s._v("int")]),s._v("型などはシステムによって違うサイズになったりするので、こんな例もあります。")]),n("pre",{pre:!0,attrs:{class:"language-nim"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("when")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("sizeof")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("2")]),n("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  echo "),n("span",{attrs:{class:"token string"}},[s._v('"running on a 16 bit system!"')]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("sizeof")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("4")]),n("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  echo "),n("span",{attrs:{class:"token string"}},[s._v('"running on a 32 bit system!"')]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("sizeof")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("8")]),n("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  echo "),n("span",{attrs:{class:"token string"}},[s._v('"running on a 64 bit system!"')]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("else")]),n("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  echo "),n("span",{attrs:{class:"token string"}},[s._v('"cannot happen!"')]),s._v("\n")])])])}],!1,null,null,null);t.default=e.exports}}]);