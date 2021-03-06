(function(styleText){var d=document,n=d.createElement('style'),s,t;n.type='text/css';if(s=n.styleSheet){s.cssText=styleText;}else{t=d.createTextNode(styleText);n.appendChild(t);}(d.head || d.documentElement).appendChild(n);})(
'html{ _background:url(about:blank);  }\
.consoleBox{ display:none; position:fixed; _position: absolute; _top:expression(documentElement.scrollTop+documentElement.clientHeight-this.offsetHeight); _left:expression(documentElement.scrollLeft+documentElement.clientWidth-this.offsetWidth-200); right: 200px; bottom: 30px; z-index: 10000000; border: 2px solid #fff; padding: 2px; width: 300px; height:310px; background: #000; opacity: 0.75; filter: Alpha(opacity:75); font-family: \'Courier New\', Consolas, \'LucidaConsole\', Monaco, monospace; font-size: 12px; color: #fff; }\
html.chrome .consoleBox{ opacity: 1; background: #34210a; }\
.consoleBoxHead{ height:20px; background: #666; overflow:hidden; cursor:default; }\
.consoleBoxHead .title{ margin:0; padding: 0 0 0 3px; height:20px; line-height:20px; font-family: Verdana; }\
.consoleBoxHead .consoleCloseButton{ float:right; border:0px solid #000; width:20px; height:18px; line-height:16px; background: #333; margin:1px 1px; padding:0px; color:#fff; font-family: Verdana; font-weight:bold; cursor:pointer; border-radius:3px; -moz-border-radius:3px; -webkit-border-radius:3px; }\
.consoleBoxHead .consoleCloseButton:hover{ background: #999; }\
.consoleMain{ position:relative; top:2px; bottom:0px; width:100%; height:255px; overflow:auto; }\
html.mobileSafari .consoleMain{ overflow:hidden; }\
ul.consoleOutput{ display:block; margin:0; padding:0; width:100%; list-style:none; }\
ul.consoleOutput li{ list-style:none; padding:3px; border-bottom:1px solid #333333; word-break: break-all; word-wrap: break-word; overflow: hidden; zoom: 1; }\
.consoleOutput .log_icon{ width:13px; height:13px; background:#fff; overflow:hidden; float:left; margin-top:2px; font-weight:bold; text-align:center; font-size:12px; color:#8B8B8B; line-height:135%; cursor:default; border-radius:3px; -moz-border-radius:3px; -webkit-border-radius:3px; }\
.consoleOutput .log_text{ margin: 0px 0px 0px 20px; line-height:150%;   zoom: 1; }\
.log_error_type{}\
.log_error_type .log_icon{ background:#FF0000; color:#660000; }\
.log_error_type .log_text{ color:#FF0000; }\
.log_warning_type{}\
.log_warning_type .log_icon{ background:#FFFF00; color:#8C7E00; }\
.log_warning_type .log_text{ color:#FFFF00; }\
.log_debug_type{}\
.log_debug_type .log_icon{ background:#33CC00; color:#006600; }\
.log_debug_type .log_text{ color:#33cc00; }\
.log_info_type{}\
.log_info_type .log_icon{ background:#0066FF; color:#000066 }\
.log_info_type .log_text{ color:#0066FF; }\
.log_profile_type{}\
.log_profile_type .log_icon{ }\
.log_profile_type .log_text{ color:white; }\
#JxConsole .consoleInputBox{ font-family: Verdana; font-size:12px; margin:5px 0; padding:2px 0; border-top:1px solid #aaa; width:100%; color:#CCFF00; }\
#JxConsole input.consoleInput{ border:0px solid #666; background:transparent; color:#CCFF00; font-family: \'Courier New\', Consolas, \'LucidaConsole\', Monaco, monospace; font-size:12px; width:285px; height:25px; margin-left:4px; outline:none; }');