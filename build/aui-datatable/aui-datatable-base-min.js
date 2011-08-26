AUI.add("aui-datatable-base",function(e){var j=e.Lang,c=e.ArraySort.compare,o=j.isNumber,d=j.isString,h="change",m="childNodes",i="columnset",f="data",k="headers",l="id",b="recordset",g="recordsetChange",a="#",n=" ";e.DataTable.Base=e.Base.create("datatable",e.DataTable.Base,[],{initializer:function(){var p=this;p._bindRecordsetRecordChange();p.after(g,p._afterRecordsetChangeExt);p.after(p._uiSetRecordsetExt,p,"_uiSetRecordset");},getCellNode:function(q,r){var p=this;return p.getRowNode(q).get(m).item(r.keyIndex);},getColNode:function(q){var p=this;var s=p.get(i);var r=s.getColumnIndex(s.getColumnByCell(q));return p._colgroupNode.get(m).item(r);},getRowNode:function(p){return e.one(a+p.get(l));},_afterRecordsetChangeExt:function(q){var p=this;p._bindRecordsetRecordChange();},_afterRecordsetRecordChange:function(q){var p=this;p._uiSetRecordset(p.get(b));},_bindRecordsetRecordChange:function(q){var p=this;p.get(b).after(h,e.bind(p._afterRecordsetRecordChange,p));},_fixPluginsUI:function(){var q=this;var r=q.sort;var p=q.scroll;if(r&&p){p.syncUI();p._syncWidths();}},_uiSetRecordsetExt:function(q){var p=this;p._fixPluginsUI();}},{});e.Column=e.Base.create("column",e.Column,[],{},{ATTRS:{sortFn:{value:function(r,p,s,t){var q=c(r.getValue(s),p.getValue(s),t);if(q===0){q=c(r.get("id"),p.get("id"),t);}return q;}}}});e.Columnset=e.Base.create("columnset",e.Columnset,[],{getColumn:function(q){var p=this;if(d(q)){return this.idHash[q];}else{if(o(q)){return p.keys[q];}}return null;},getColumnByCell:function(q){var p=this;var r=q.getAttribute(k).split(n).pop()||q.get(l);return p.getColumn(r);},getColumnIndex:function(p){return p.keyIndex;},getLength:function(){var p=this;return p.keys.length;},_setDefinitions:function(p){return p;}},{});e.Recordset=e.Base.create("recordset",e.Recordset,[],{getRecordByRow:function(q){var p=this;return p.getRecord(q.get(l));},getRecordIndex:function(q){var p=this;return e.Array.indexOf(p._items,q);},updateRecordDataByKey:function(q,r,t){var p=this;var s=q.get(f);if(s){s[r]=t;q.set(f,s);}p.update(q,p.getRecordIndex(q));}},{});e.Plugin.DataTableScroll=e.Base.create("dataTableScroll",e.Plugin.DataTableScroll,[],{_syncWidths:function(){try{e.Plugin.DataTableScroll.superclass._syncWidths.apply(this,arguments);}catch(p){}}},{NS:"scroll",NAME:"dataTableScroll"});},"@VERSION@",{requires:["aui-base","datatable","plugin"]});