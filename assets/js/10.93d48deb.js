(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{59:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"iterator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iterator","aria-hidden":"true"}},[t._v("#")]),t._v(" iterator")]),a("p",[t._v("イテレータ"),a("code",[t._v("iterator")]),t._v("は"),a("code",[t._v("for")]),t._v("や"),a("code",[t._v("while")]),t._v("使うことが出来ます。")]),a("p",[t._v("ループごとに値を反復処理するのを便利にします。")]),a("p",[a("code",[t._v("iterator")]),t._v("で定義し、値を返す際に"),a("code",[t._v("return")]),t._v("の代わりに"),a("code",[t._v("yield")]),t._v("を使います。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("iterator")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("countup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" int "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" b"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" s\n    "),a("span",{attrs:{class:"token function"}},[t._v("inc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("countup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  echo i\n")])]),a("p",[t._v("また、"),a("code",[t._v("iterator")]),t._v("を変数に入れて"),a("code",[t._v("finished")]),t._v("でチェックすることで"),a("code",[t._v("while")]),t._v("を使ってこのように書くことが出来ます。")]),a("p",[t._v("イテレータは最後の値が返った後に呼ばれた後に終了状態になるため、"),a("code",[t._v("not finisehd(イテレータ)")]),t._v("では1つ余分にループが周ります。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("iterator")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mycount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" int"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" int "),a("span",{attrs:{class:"token punctuation"}},[t._v("{.")]),t._v("closure"),a("span",{attrs:{class:"token punctuation"}},[t._v(".}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" b"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" s\n    "),a("span",{attrs:{class:"token function"}},[t._v("inc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mycount\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# while not finished(c):")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#   echo c(0 ,5)")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 0")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 2")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 3")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 4")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# 0 <- intのデフォルト値である0")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" true"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" value "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("c")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("finished")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n  echo value\n")])])])}],!1,null,null,null);s.default=o.exports}}]);