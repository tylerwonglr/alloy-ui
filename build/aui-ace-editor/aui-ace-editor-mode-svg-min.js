AUI.add("aui-ace-editor-mode-svg",function(a){define("ace/mode/svg",["require","exports","module","pilot/oop","ace/mode/text","ace/mode/javascript","ace/tokenizer","ace/mode/svg_highlight_rules","ace/mode/behaviour/xml"],function(t,s,r){var q=t("pilot/oop"),p=t("ace/mode/text").Mode,o=t("ace/mode/javascript").Mode,n=t("ace/tokenizer").Tokenizer,m=t("ace/mode/svg_highlight_rules").SvgHighlightRules,l=t("ace/mode/behaviour/xml").XmlBehaviour,k=function(){this.highlighter=new m,this.$tokenizer=new n(this.highlighter.getRules()),this.$behaviour=new l,this.$embeds=this.highlighter.getEmbeds(),this.createModeDelegates({"js-":o});};q.inherits(k,p),function(){this.toggleCommentLines=function(f,e,h,g){return 0;},this.getNextLineIndent=function(e,d,f){return this.$getIndent(d);},this.checkOutdent=function(e,d,f){return !1;};}.call(k.prototype),s.Mode=k;}),define("ace/mode/javascript",["require","exports","module","pilot/oop","ace/mode/text","ace/tokenizer","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/worker/worker_client","ace/mode/behaviour/cstyle"],function(x,w,v){var u=x("pilot/oop"),t=x("ace/mode/text").Mode,s=x("ace/tokenizer").Tokenizer,r=x("ace/mode/javascript_highlight_rules").JavaScriptHighlightRules,q=x("ace/mode/matching_brace_outdent").MatchingBraceOutdent,p=x("ace/range").Range,o=x("ace/worker/worker_client").WorkerClient,n=x("ace/mode/behaviour/cstyle").CstyleBehaviour,m=function(){this.$tokenizer=new s((new r).getRules()),this.$outdent=new q,this.$behaviour=new n;};u.inherits(m,t),function(){this.toggleCommentLines=function(H,G,F,E){var D=!0,C=[],B=/^(\s*)\/\//;for(var A=F;A<=E;A++){if(!B.test(G.getLine(A))){D=!1;break;}}if(D){var z=new p(0,0,0,0);for(var A=F;A<=E;A++){var y=G.getLine(A),i=y.match(B);z.start.row=A,z.end.row=A,z.end.column=i[0].length,G.replace(z,i[1]);}}else{G.indentRows(F,E,"//");}},this.getNextLineIndent=function(j,i,B){var A=this.$getIndent(i),z=this.$tokenizer.getLineTokens(i,j),y=z.tokens,l=z.state;if(y.length&&y[y.length-1].type=="comment"){return A;}if(j=="start"){var k=i.match(/^.*[\{\(\[\:]\s*$/);k&&(A+=B);}else{if(j=="doc-start"){if(l=="start"){return"";}var k=i.match(/^\s*(\/?)\*/);k&&(k[1]&&(A+=" "),A+="* ");}}return A;},this.checkOutdent=function(e,d,f){return this.$outdent.checkOutdent(d,f);},this.autoOutdent=function(e,d,f){this.$outdent.autoOutdent(d,f);},this.createWorker=function(e){var d=e.getDocument(),f=new o(["ace","pilot"],"worker-javascript.js","ace/mode/javascript_worker","JavaScriptWorker");f.call("setValue",[d.getValue()]),d.on("change",function(b){b.range={start:b.data.range.start,end:b.data.range.end},f.emit("change",b);}),f.on("jslint",function(g){var j=[];for(var i=0;i<g.data.length;i++){var h=g.data[i];h&&j.push({row:h.line-1,column:h.character-1,text:h.reason,type:"warning",lint:h});}e.setAnnotations(j);}),f.on("narcissus",function(c){e.setAnnotations([c.data]);}),f.on("terminate",function(){e.clearAnnotations();});return f;};}.call(m.prototype),w.Mode=m;}),define("ace/mode/javascript_highlight_rules",["require","exports","module","pilot/oop","pilot/lang","ace/unicode","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(r,q,p){var o=r("pilot/oop"),n=r("pilot/lang"),m=r("ace/unicode"),l=r("ace/mode/doc_comment_highlight_rules").DocCommentHighlightRules,k=r("ace/mode/text_highlight_rules").TextHighlightRules,j=function(){var f=n.arrayToMap("break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|const|yield|import|get|set".split("|")),e=n.arrayToMap("null|Infinity|NaN|undefined".split("|")),h=n.arrayToMap("class|enum|extends|super|export|implements|private|public|interface|package|protected|static".split("|")),g="["+m.packages.L+"\\$_]["+m.packages.L+m.packages.Mn+m.packages.Mc+m.packages.Nd+m.packages.Pc+"\\$_]*\\b";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},(new l).getStartRule("doc-start"),{token:"comment",merge:!0,regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",merge:!0,regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",merge:!0,regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(b){return b=="this"?"variable.language":f.hasOwnProperty(b)?"keyword":e.hasOwnProperty(b)?"constant.language":h.hasOwnProperty(b)?"invalid.illegal":b=="debugger"?"invalid.deprecated":"identifier";},regex:g},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)",next:"regex_allowed"},{token:"lparen",regex:"[[({]",next:"regex_allowed"},{token:"rparen",regex:"[\\])}]"},{token:"keyword.operator",regex:"\\/=?",next:"regex_allowed"},{token:"comment",regex:"^#!.*$"},{token:"text",regex:"\\s+"}],regex_allowed:[{token:"string.regexp",regex:"\\/(?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*",next:"start"},{token:"text",regex:"\\s+"},{token:"empty",regex:"",next:"start"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",merge:!0,regex:".+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",merge:!0,regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",merge:!0,regex:".+"}]},this.embedRules(l,"doc-",[(new l).getEndRule("start")]);};o.inherits(j,k),q.JavaScriptHighlightRules=j;}),define("ace/mode/doc_comment_highlight_rules",["require","exports","module","pilot/oop","ace/mode/text_highlight_rules"],function(h,g,l){var k=h("pilot/oop"),j=h("ace/mode/text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc",merge:!0,regex:"\\s+"},{token:"comment.doc",merge:!0,regex:"TODO"},{token:"comment.doc",merge:!0,regex:"[^@\\*]+"},{token:"comment.doc",merge:!0,regex:"."}]};
};k.inherits(i,j),function(){this.getStartRule=function(b){return{token:"comment.doc",merge:!0,regex:"\\/\\*(?=\\*)",next:b};},this.getEndRule=function(b){return{token:"comment.doc",merge:!0,regex:"\\*\\/",next:b};};}.call(i.prototype),g.DocCommentHighlightRules=i;}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(g,f,j){var i=g("ace/range").Range,h=function(){};(function(){this.checkOutdent=function(d,c){return/^\s+$/.test(d)?/^\s*\}/.test(c):!1;},this.autoOutdent=function(k,d){var p=k.getLine(d),o=p.match(/^(\s*\})/);if(!o){return 0;}var n=o[1].length,m=k.findMatchingBracket({row:d,column:n});if(!m||m.row==d){return 0;}var l=this.$getIndent(k.getLine(m.row));k.replace(new i(d,0,d,n-1),l);},this.$getIndent=function(d){var c=d.match(/^(\s+)/);return c?c[1]:"";};}).call(h.prototype),f.MatchingBraceOutdent=h;}),define("ace/worker/worker_client",["require","exports","module","pilot/oop","pilot/event_emitter"],function(h,g,l){var k=h("pilot/oop"),j=h("pilot/event_emitter").EventEmitter,i=function(y,x,w,v){this.callbacks=[];if(h.packaged){var u=this.$guessBasePath(),t=this.$worker=new Worker(u+x);}else{var s=this.$normalizePath(h.nameToUrl("ace/worker/worker",null,"_")),t=this.$worker=new Worker(s),r={};for(var q=0;q<y.length;q++){var p=y[q],o=this.$normalizePath(h.nameToUrl(p,null,"_").replace(/.js$/,""));r[p]=o;}}this.$worker.postMessage({init:!0,tlns:r,module:w,classname:v}),this.callbackId=1,this.callbacks={};var n=this;this.$worker.onerror=function(b){window.console&&console.log&&console.log(b);throw b;},this.$worker.onmessage=function(e){var d=e.data;switch(d.type){case"log":window.console&&console.log&&console.log(d.data);break;case"event":n._dispatchEvent(d.name,{data:d.data});break;case"call":var f=n.callbacks[d.id];f&&(f(d.data),delete n.callbacks[d.id]);}};};(function(){k.implement(this,j),this.$normalizePath=function(b){b.match(/^\w+:/)||(b=location.protocol+"//"+location.host+location.pathname.replace(/\/.*?$/,"")+"/"+b.replace(/^\//,""));return b;},this.$guessBasePath=function(){if(h.aceBaseUrl){return h.aceBaseUrl;}var m=document.getElementsByTagName("script");for(var r=0;r<m.length;r++){var q=m[r],p=q.getAttribute("data-ace-base");if(p){return p.replace(/\/*$/,"/");}var o=q.src||q.getAttribute("src");if(!o){continue;}var n=o.match(/^(?:(.*\/)ace\.js|(.*\/)ace-uncompressed\.js)(?:\?|$)/);if(n){return n[1]||n[2];}}return"";},this.terminate=function(){this._dispatchEvent("terminate",{}),this.$worker.terminate();},this.send=function(d,c){this.$worker.postMessage({command:d,args:c});},this.call=function(f,e,n){if(n){var m=this.callbackId++;this.callbacks[m]=n,e.push(m);}this.send(f,e);},this.emit=function(d,c){this.$worker.postMessage({event:d,data:c});};}).call(i.prototype),g.WorkerClient=i;}),define("ace/mode/behaviour/cstyle",["require","exports","module","pilot/oop","ace/mode/behaviour"],function(h,g,l){var k=h("pilot/oop"),j=h("ace/mode/behaviour").Behaviour,i=function(){this.add("braces","insertion",function(B,A,z,y,x){if(x=="{"){var w=z.getSelectionRange(),v=y.doc.getTextRange(w);return v!==""?{text:"{"+v+"}",selection:!1}:{text:"{}",selection:[1,1]};}if(x=="}"){var u=z.getCursorPosition(),t=y.doc.getLine(u.row),s=t.substring(u.column,u.column+1);if(s=="}"){var r=y.$findOpeningBracket("}",{column:u.column+1,row:u.row});if(r!==null){return{text:"",selection:[1,1]};}}}else{if(x=="\n"){var u=z.getCursorPosition(),t=y.doc.getLine(u.row),s=t.substring(u.column,u.column+1);if(s=="}"){var q=y.findMatchingBracket({row:u.row,column:u.column+1});if(!q){return !1;}var p=this.getNextLineIndent(B,t.substring(0,t.length-1),y.getTabString()),o=this.$getIndent(y.doc.getLine(q.row));return{text:"\n"+p+"\n"+o,selection:[1,p.length,1,p.length]};}}}return !1;}),this.add("braces","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=="{"){var p=s.doc.getLine(r.start.row),o=p.substring(r.end.column,r.end.column+1);if(o=="}"){r.end.column++;return r;}}return !1;}),this.add("parens","insertion",function(w,v,u,t,s){if(s=="("){var r=u.getSelectionRange(),q=t.doc.getTextRange(r);return q!==""?{text:"("+q+")",selection:!1}:{text:"()",selection:[1,1]};}if(s==")"){var p=u.getCursorPosition(),o=t.doc.getLine(p.row),n=o.substring(p.column,p.column+1);if(n==")"){var m=t.$findOpeningBracket(")",{column:p.column+1,row:p.row});if(m!==null){return{text:"",selection:[1,1]};}}}return !1;}),this.add("parens","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=="("){var p=s.doc.getLine(r.start.row),o=p.substring(r.start.column+1,r.start.column+2);if(o==")"){r.end.column++;return r;}}return !1;}),this.add("string_dquotes","insertion",function(F,E,D,C,B){if(B=='"'){var A=D.getSelectionRange(),z=C.doc.getTextRange(A);if(z!==""){return{text:'"'+z+'"',selection:!1};}var y=D.getCursorPosition(),x=C.doc.getLine(y.row),w=x.substring(y.column-1,y.column);if(w=="\\"){return !1;}var v=C.getTokens(A.start.row,A.start.row)[0].tokens,u=0,t,s=-1;for(var r=0;r<v.length;r++){t=v[r],t.type=="string"?s=-1:s<0&&(s=t.value.indexOf('"'));if(t.value.length+u>A.start.column){break;}u+=v[r].value.length;}if(!t||s<0&&t.type!=="comment"&&(t.type!=="string"||A.start.column!==t.value.length+u-1&&t.value.lastIndexOf('"')===t.value.length-1)){return{text:'""',selection:[1,1]};}if(t&&t.type==="string"){var q=x.substring(y.column,y.column+1);if(q=='"'){return{text:"",selection:[1,1]};}}}return !1;}),this.add("string_dquotes","deletion",function(n,m,t,s,r){var q=s.doc.getTextRange(r);if(!r.isMultiLine()&&q=='"'){var p=s.doc.getLine(r.start.row),o=p.substring(r.start.column+1,r.start.column+2);if(o=='"'){r.end.column++;return r;}}return !1;});};k.inherits(i,j),g.CstyleBehaviour=i;}),define("ace/mode/svg_highlight_rules",["require","exports","module","pilot/oop","ace/mode/javascript_highlight_rules","ace/mode/xml_highlight_rules"],function(i,h,n){var m=i("pilot/oop"),l=i("ace/mode/javascript_highlight_rules").JavaScriptHighlightRules,k=i("ace/mode/xml_highlight_rules").XmlHighlightRules,j=function(){k.call(this),this.$rules.start.splice(3,0,{token:"text",regex:"<(?=s*script)",next:"script"}),this.$rules.script=[{token:"text",regex:">",next:"js-start"},{token:"keyword",regex:"[-_a-zA-Z0-9:]+"},{token:"text",regex:"\\s+"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"}],this.embedRules(l,"js-",[{token:"comment",regex:"\\/\\/.*(?=<\\/script>)",next:"tag"},{token:"text",regex:"<\\/(?=script)",next:"tag"}]);
};m.inherits(j,k),h.SvgHighlightRules=j;}),define("ace/mode/xml_highlight_rules",["require","exports","module","pilot/oop","ace/mode/text_highlight_rules"],function(h,g,l){var k=h("pilot/oop"),j=h("ace/mode/text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"text",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:"xml_pe",regex:"<\\?.*?\\?>"},{token:"comment",merge:!0,regex:"<\\!--",next:"comment"},{token:"text",regex:"<\\/?",next:"tag"},{token:"text",regex:"\\s+"},{token:"text",regex:"[^<]+"}],tag:[{token:"text",regex:">",next:"start"},{token:"keyword",regex:"[-_a-zA-Z0-9:]+"},{token:"text",regex:"\\s+"},{token:"string",regex:'".*?"'},{token:"string",merge:!0,regex:'["].*$',next:"qqstring"},{token:"string",regex:"'.*?'"},{token:"string",merge:!0,regex:"['].*$",next:"qstring"}],qstring:[{token:"string",regex:".*'",next:"tag"},{token:"string",merge:!0,regex:".+"}],qqstring:[{token:"string",regex:'.*"',next:"tag"},{token:"string",merge:!0,regex:".+"}],cdata:[{token:"text",regex:"\\]\\]>",next:"start"},{token:"text",regex:"\\s+"},{token:"text",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment",regex:".*?-->",next:"start"},{token:"comment",merge:!0,regex:".+"}]};};k.inherits(i,j),g.XmlHighlightRules=i;}),define("ace/mode/behaviour/xml",["require","exports","module","pilot/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle"],function(i,h,n){var m=i("pilot/oop"),l=i("ace/mode/behaviour").Behaviour,k=i("ace/mode/behaviour/cstyle").CstyleBehaviour,j=function(){this.inherit(k,["string_dquotes"]),this.add("brackets","insertion",function(A,z,y,x,w){if(w=="<"){var v=y.getSelectionRange(),u=x.doc.getTextRange(v);return u!==""?!1:{text:"<>",selection:[1,1]};}if(w==">"){var t=y.getCursorPosition(),s=x.doc.getLine(t.row),r=s.substring(t.column,t.column+1);if(r==">"){return{text:"",selection:[1,1]};}}else{if(w=="\n"){var t=y.getCursorPosition(),s=x.doc.getLine(t.row),q=s.substring(t.column,t.column+2);if(q=="</"){var p=this.$getIndent(x.doc.getLine(t.row))+x.getTabString(),o=this.$getIndent(x.doc.getLine(t.row));return{text:"\n"+p+"\n"+o,selection:[1,p.length,1,p.length]};}}}return !1;});};m.inherits(j,l),h.XmlBehaviour=j;});},"@VERSION@",{skinnable:false,requires:["aui-ace-editor-base"]});