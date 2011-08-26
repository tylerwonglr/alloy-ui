AUI.add('aui-ace-editor-theme-crimson_editor', function(A) {
define("ace/theme/crimson_editor",["require","exports","module"],function(a,b,c){var d=a("pilot/dom"),e=".ace-crimson-editor .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-crimson-editor .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-crimson-editor .ace_gutter {\n  width: 50px;\n  background: #e8e8e8;\n  color: #333;\n  overflow : hidden;\n}\n\n.ace-crimson-editor .ace_gutter-layer {\n  width: 100%;\n  text-align: right;\n}\n\n.ace-crimson-editor .ace_gutter-layer .ace_gutter-cell {\n  padding-right: 6px;\n}\n\n.ace-crimson-editor .ace_print_margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-crimson-editor .ace_text-layer {\n  cursor: text;\n  color: rgb(64, 64, 64);\n}\n\n.ace-crimson-editor .ace_cursor {\n  border-left: 2px solid black;\n}\n\n.ace-crimson-editor .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid black;\n}\n\n.ace-crimson-editor .ace_line .ace_invisible {\n  color: rgb(191, 191, 191);\n}\n\n.ace-crimson-editor .ace_line .ace_identifier {\n  color: black;\n}\n\n.ace-crimson-editor .ace_line .ace_keyword {\n  color: blue;\n}\n\n.ace-crimson-editor .ace_line .ace_constant.ace_buildin {\n  color: rgb(88, 72, 246);\n}\n\n.ace-crimson-editor .ace_line .ace_constant.ace_language {\n  color: rgb(255, 156, 0);\n}\n\n.ace-crimson-editor .ace_line .ace_constant.ace_library {\n  color: rgb(6, 150, 14);\n}\n\n.ace-crimson-editor .ace_line .ace_invalid {\n  text-decoration: line-through;\n  color: rgb(224, 0, 0);\n}\n\n.ace-crimson-editor .ace_line .ace_fold {\n    background-color: #E4E4E4;\n    border-radius: 3px;\n}\n\n.ace-crimson-editor .ace_line .ace_support.ace_function {\n  color: rgb(192, 0, 0);\n}\n\n.ace-crimson-editor .ace_line .ace_support.ace_constant {\n  color: rgb(6, 150, 14);\n}\n\n.ace-crimson-editor .ace_line .ace_support.ace_type,\n.ace-crimson-editor .ace_line .ace_support.ace_class {\n  color: rgb(109, 121, 222);\n}\n\n.ace-crimson-editor .ace_line .ace_keyword.ace_operator {\n  color: rgb(49, 132, 149);\n}\n\n.ace-crimson-editor .ace_line .ace_string {\n  color: rgb(128, 0, 128);\n}\n\n.ace-crimson-editor .ace_line .ace_comment {\n  color: rgb(76, 136, 107);\n}\n\n.ace-crimson-editor .ace_line .ace_comment.ace_doc {\n  color: rgb(0, 102, 255);\n}\n\n.ace-crimson-editor .ace_line .ace_comment.ace_doc.ace_tag {\n  color: rgb(128, 159, 191);\n}\n\n.ace-crimson-editor .ace_line .ace_constant.ace_numeric {\n  color: rgb(0, 0, 64);\n}\n\n.ace-crimson-editor .ace_line .ace_variable {\n  color: rgb(0, 64, 128);\n}\n\n.ace-crimson-editor .ace_line .ace_xml_pe {\n  color: rgb(104, 104, 91);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_selection {\n  background: rgb(181, 213, 255);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_step {\n  background: rgb(252, 255, 0);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_stack {\n  background: rgb(164, 229, 101);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgb(192, 192, 192);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_active_line {\n  background: rgb(232, 242, 254);\n}\n\n.ace-crimson-editor .ace_meta.ace_tag {\n  color:rgb(28, 2, 255);\n}\n\n.ace-crimson-editor .ace_marker-layer .ace_selected_word {\n  background: rgb(250, 250, 255);\n  border: 1px solid rgb(200, 200, 250);\n}\n\n.ace-crimson-editor .ace_string.ace_regex {\n  color: rgb(192, 0, 192);\n}";d.importCssString(e),b.cssClass="ace-crimson-editor"})

}, '@VERSION@' ,{skinnable:false, requires:['aui-ace-editor-base']});
