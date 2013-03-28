AUI.add("aui-state-interaction",function(t){var g=t.Lang,n=g.isBoolean,o=g.isString,m=t.getClassName,k="active",e="activeChange",y="bubbleTarget",h="click",r="contentBox",B="default",b="defaultChange",w="defaultState",z="disabled",l="disabledChange",j="disabledState",p="hover",s="hoverChange",v="mouseenter",i="mouseleave",u="mouseout",a="mouseover",D="node",x="state",C=m(x,k),f=m(x,B),d=m(x,z),q=m(x,p);var c=t.Component.create({NAME:"stateinteraction",NS:"StateInteraction",ATTRS:{active:{value:false},activeState:{value:true,validator:n},bubbleTarget:{value:null},classNames:{value:{}},"default":{value:false},defaultState:{value:true,validator:n},disabled:{value:false,validator:n},disabledState:{value:true,validator:n},hover:{value:false},hoverState:{value:true,validator:n},node:{value:null}},EXTENDS:t.Plugin.Base,constructor:function(A){var F=A.host;var E=F;if(t.Widget&&F instanceof t.Widget){E=F.get(r);}A.node=E;c.superclass.constructor.apply(this,arguments);},prototype:{initializer:function(){var A=this;var F=A.get("classNames.active");var E=A.get("classNames.default");var I=A.get("classNames.disabled");var H=A.get("classNames.hover");var G=A.get(D);A._CSS_STATES={active:o(F)?F:C,"default":o(E)?E:f,disabled:o(I)?I:d,hover:o(H)?H:q};if(A.get(w)){G.addClass(A._CSS_STATES[B]);}if(A.get(z)){G.addClass(A._CSS_STATES[z]);}else{A._createEvents();}A._attachInteractionEvents();},_attachInteractionEvents:function(){var A=this;var E=A.get(D);if(!A.get(z)){E.on(h,A._fireEvents,A);E.on(v,t.rbind(A._fireEvents,A,a));E.on(i,t.rbind(A._fireEvents,A,u));}A.after(e,A._uiSetState);A.after(s,A._uiSetState);A.after(b,A._uiSetState);A.after(l,A._uiSetState);},_fireEvents:function(G,F){var A=this;var E=A.get(y);F=F||G.type;if(E){E.fire(F);}return A.fire(F);},_createEvents:function(){var A=this;var E=A.get(y);if(E){A.addTarget(E);}A.publish(h,{defaultFn:A._defClickFn,emitFacade:true});A.publish(u,{defaultFn:A._defMouseOutFn,emitFacade:true});A.publish(a,{defaultFn:A._defMouseOverFn,emitFacade:true});},_defClickFn:function(E){var A=this;A.set(k,!A.get(k));},_defMouseOutFn:function(){var A=this;A.set(p,false);},_defMouseOverFn:function(){var A=this;A.set(p,true);},_uiSetState:function(F){var A=this;var E=F.attrName;if(A.get(E+"State")){var G="addClass";if(!F.newVal){G="removeClass";}A.get(D)[G](A._CSS_STATES[E]);}}}});t.namespace("Plugin").StateInteraction=c;},"@VERSION@",{requires:["aui-base","plugin"],skinnable:false});