eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(p($){$.R.I=p(j){o(!y.S("2I"))B;r k=y.2J.2K(1);j=$.1s({},$.I.22,j||{});o(!j.1b){$(\'2L\').L(p(a,b){1t=$(b).2M(0).23.24(/(.*)2N\\.2O\\.1\\.5(\\.2P)?\\.2Q$/);o(1t!==1c)j.1b=1t[1]})}o(!j.1d)j.1d=j.1b+\'2R/2S.2T\';o($("27[1u$=28.Y]").D==0){r l=j.1b+\'Y/28.Y\';r m=2U.2V("27");m.1v(\'M\',\'1w/Y\');m.1v(\'2W\',\'2X\');m.1v(\'1u\',l);$("2Y")[0].2Z(m)}o($("#1g").D==0){$("32").33(\'<2a 11="1g" 34="35:36;1w-37:38;39:3a;z-3b:3c;1x:0;1y:0;3d:3e;3f:3g"><3h 23="\'+j.1d+\'" 11="2b"></2a>\')}j.1z=$("#2b");j.2c=$("#1g");r n="",K=y,1h=F,V=$.I.V,1e,N=p(a){a=a.2d(/(\\.|\\[|\\])/g,\'\');B k+"3i"+a.2d(/([a-1A-2e-9])/g,"-$1")},1B=p(){r a=F,14=2f;o(V.3j(14[0])){r t=V[14[0]][0],v=14[1];a=14.D>2?t.2g(2f,[].3k.3l(14,1)):($.3m(t)?t(v):t.3n(v))}B a},O=p(a,b,c){1h=H;r d=$("#"+N(b));o(d.D>0)d.1i();r e=a.1j().D>0?a.1k(":1C"):a;e.1l("<T 1m=\'3o\' 11=\'"+N(b)+"\'> "+c+" </T>");o(j.1D&&1e)n+="\\n"+c},15=p(a,b,c){r d=$("#"+N(b));o(d.D>0)d.1i();r e=a.1j().D>0?a.1k(":1C"):a;o(!c){c=\'填写正确\'}e.1l("<T 1m=\'3p\' 11=\'"+N(b)+"\'> "+c+" </T>")},2h=p(a){r i=a,U=$("[u=\'"+i.u+"\']",K[0]);r b=$("#"+N(i.u));o(b.D>0)b.1i();r c=U.1j().D>0?U.1k(":1C"):U;o(i.2i){c.1l("<T 1m=\'2j\' 11=\'"+N(i.u)+"\'>"+i.2i+"</T>")}},2k=p(a){r b;$.L(j.1n,p(){o(y.u==a&&y.J){b=y.J;B H}});o(!b)b=$("[u=\'"+a+"\']")[0].u;B b},P=p(b,c,d){r i=b,U=$("[u=\'"+i.u+"\']",K[0]);r e=$("#"+N(i.u));o(e.D>0)e.1i();r f=U.1j().D>0?U.1k().1E(y.D):U.1E(y.D-1);f.1l("<T 1m=\'2j\' 11=\'"+N(i.u)+"\'>检测中......</T>");c=3q(c);$.P({M:b.P.2l||\'1F\',17:b.P.17,1G:b.u+"="+c,3r:H,3s:!1e,1f:p(a){o(a==1){15(d,b.u,b.P.3t)}G o(a==0){O(d,b.u,b.P.3u)}G{O(d,b.u,a)}}})},1H=p(a){r i=a,C=$("[u=\'"+i.u+"\']",K[0]),1I=C.D;o(1I==0)B;r b,Q=$.1J(C.2m()),1K=3v i.2n==="3w"?i.2n:F;o(1I==1){o(1K&&((C.S(":2o")||C.S(":1L"))&&!C.S(":1M"))){b=i.18||"请选择"+i.J;O(C,i.u,b)}G o(1K&&Q==""){b=i.18||(C.S("1o")?"请选择":"请填写")+i.J;O(C,i.u,b)}G o(Q!=""){o(i.2p||i.E){r c=Q.D,h=i.2p||0,E=i.E;b=i.18||(E?i.J+"长度范围应在"+h+"~"+E+"之间":i.J+"长度应大于"+h);o((E&&(c>E||c<h))||(!E&&c<h)){O(C,i.u,b);B}}o(i.M){r d=i.W?$.1J($("[u=\'"+i.W+"\']",K[0]).2m()):i.1N;r e=d?1B(i.M,Q,d):1B(i.M,Q);b=i.18||i.J+V[i.M][1];o(d&&i.J)b+=(i.W?2k(i.W)+"的值":i.1N);o(!e){O(C,i.u,b);B}G{15(C,i.u)}}o(i.1O){r f=i.1O[0],W=i.1O[1];b=i.18||i.J+"的值必须在"+f+"和"+W+"之间";o(Q>=+f&&Q<=+W){15(C,i.u)}G{O(C,i.u,b);B}}o(i.P){P(i,Q,C)}G{15(C,i.u)}}}G{o(C.S("1p:1L")){r g=0;C.L(p(){o(y.1M==F){g++}});o(i.1P){r h=i.1P[0]||1,E=i.1P[1]||1c;b=i.18||h==E?"请必须选择"+h+"项"+i.J:(E?"请选择"+i.J+h+"到"+E+"项目":"请至少选择"+h+"项"+i.J);o((E&&(g>E||g<h))||(!E&&g<h)){O(C,i.u,b);B}G{15(C,i.u,\'正确\')}}}}},1Q=p(){1h=F;$.L(j.1n,p(){1e=F;1H(y)});o(j.1D&&n!=""){3x(n);n=""}B 1h};$.L(j.1n,p(){r a=$("[u=\'"+y.u+"\']",K[0]);r b=y,1R=p(){2h(b)},1S=p(){1e=H;1H(b)};o(a.S(":3y")||a.S("1o")){a.3z(1S).2q(1R)}G{a.3A(1S).2q(1R)}});B y.L(p(){o(j.2r){K.1q(p(){o(1Q()){o(j.2s){$.R.I.2t(K,j)}$(\'1p:1q\',K).1T(\'1U\',\'1U\');K.2u(j)}B H})}G{K.1q(1Q)}})};$.I=p(){};$.I.22={1n:[],1D:H,2r:H,1f:$.3B,2s:F,1r:F,1b:\'\',1d:1c};$.I.V={"3C":[/^[A-1V-z]+$/,"只能输入英文"],"3D":[/^[\\3E-\\3F]+$/,"只能输入汉字"],"3G":[/\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/,"格式不正确"],"17":[/^3H[s]?:\\/\\/[A-1V-2v-9]+\\.[A-1V-2v-9]+[\\/=\\?%\\-&2w~`@[\\]\\\':+!]*([^<>\\"\\"])*$/,"格式不正确"],"3I":[/^\\d+(\\.\\d+)?$/,"数字格式有误"],"3J":[/^\\d+$/,"只能为数字"],"3K":[/^[0-9]{1,30}$/,"只能为整数"],"3L":[/^[-\\+]?\\d+(\\.\\d+)?$/,"只能为带小数的数字"],"3M":[/^[a-1A-Z]{1}([a-1A-2e-9]|[.2w]){3,19}$/,"用户名不合法"],"2x":[/^(\\w){6,20}$/,"只能为数字和英文及下划线的组合，6-20个字符"],"3N":[/>|<|,|\\[|\\]|\\{|\\}|\\?|\\/|\\+|=|\\||\\\'|\\\\|\\"|:|;|\\~|\\!|\\@|\\#|\\*|\\$|\\%|\\^|\\&|\\(|\\)|`/i,"不能有特殊字符"],"3O":[/[ａ-ｚＡ-Ｚ０-９！＠＃￥％＾＆＊（）＿＋｛｝［］｜：＂＇；．，／？＜＞｀～　]/,"不能有全角字符"],"3P":[/[1-9][0-9]{4,}/,"格式不正确"],"3Q":[/^((((1[6-9]|[2-9]\\d)\\d{2})-(0?[2y]|1[1W])-(0?[1-9]|[12]\\d|3[3R]))|(((1[6-9]|[2-9]\\d)\\d{2})-(0?[3S]|1[2z])-(0?[1-9]|[12]\\d|30))|(((1[6-9]|[2-9]\\d)\\d{2})-0?2-(0?[1-9]|1\\d|2[0-8]))|(((1[6-9]|[2-9]\\d)(0[48]|[1X][1Y]|[2A][26])|((16|[1X][1Y]|[3T][26])3U))-0?2-29-))$/,"格式不正确"],"3V":[/^1\\d{10}$/,"格式不正确"],"3W":[/^[1-9]\\d{5}$/,"格式不正确"],"3X":[/^((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6[1-5])|3Y|(8[12])|3Z)\\d{4}((19\\d{2}(0[13-9]|1[2z])(0[1-9]|[12]\\d|30))|(19\\d{2}(0[2y]|1[1W])31)|(19\\d{2}1W(0[1-9]|1\\d|2[0-8]))|(19([2A][26]|[1X][1Y]|0[48])40))\\d{3}(\\d|X|x)?$/,"格式不正确"],"41":[/^(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d{1,2}|1\\d\\d|2[0-4]\\d|25[0-5])$/,"42不正确"],"1E":[p(a,b){B a==b?F:H},"必须等于"],"43":[p(a,b){B a>b?F:H},"必须大于"],"44":[p(a,b){B a>=b?F:H},"必须大于或等于"],"45":[p(a,b){B a<b?F:H},"必须小于"],"46":[p(a,b){B a<=b?F:H},"必须小于或等于"]};$.I.2B=p(a,b){$.1s(a,b);2C(r c 47 b)o(b[c]==1c||b[c]==49)a[c]=b[c];B a};$.I.4a=p(a){$.I.2B($.I.V,a||{});B y};$.R.I.2t=p(a,b){r c=a.4b();b.2c.Y({\'4c\':a.4d(),\'2D\':a.2E(),\'1y\':c.1y,\'1x\':c.1x,\'4e\':\'0.5\'}).4f();r d=b.1z[0].2D;r e=4g((a.2E()-d)/2,10);o(b.1d)b.1z.Y(\'4h\',e)};$.R.2u=p(g){o(!y.D){B y}B y.L(p(){r e=$(y),1a=[];r f=$.1J(e.1T(\'4i\'));o(f)f=(f.24(/^([^#]+)/)||[])[1];f=f||4j.4k.1u||\'\';g=$.1s(F,{17:f,M:e.1T(\'2l\')||\'1F\',4l:\'4m\'},g);r q=e.4n();o(g.M.4o()==\'1F\'){g.17+=(g.17.4p(\'?\')>=0?\'&\':\'?\')+q;g.1G=1c}G{g.1G=q}o(g.1r){1a.1Z(p(){e.1r()})}1a.1Z(p(){$.R.2F(e)});o(g.1f){1a.1Z(g.1f)}g.1f=p(a,b,c){r d=g.4q||g;2C(r i=0,E=1a.D;i<E;i++){1a[i].2g(d,[a,b,c||e,e])}};$.P(g)})};$.R.2F=p(a){$(\'#1g\').4r();$(\'1p:1q\',a[0]).4s(\'1U\')};$.R.1r=p(){B y.L(p(){$(\'1p,1o,2G\',y).2H()})};$.R.2H=p(){B y.L(p(){r t=y.M,21=y.4t.4u();o(t==\'1w\'||t==\'2x\'||21==\'2G\'){y.1N=\'\'}G o(t==\'1L\'||t==\'2o\'){y.1M=H}G o(21==\'1o\'){y.4v=-1}})}})(4w);',62,281,'||||||||||||||||||||||||if|function||var|||name||||this|||return|field|length|max|true|else|false|skygqCheckAjaxForm|simple|formObj|each|type|tipname|showError|ajax|fv|fn|is|span|fieldObj|rule|to||css|||id|||args|showRight||url|message||callbacks|root|null|ajaxImage|isAll|success|skygqCheckAjaxFormOverlay|checkRet|remove|next|nextAll|after|class|items|select|input|submit|clearForm|extend|miuScript|href|setAttribute|text|left|top|ajaxImageObj|zA|typeTest|last|isAlert|eq|GET|data|fieldCheck|filed_length|trim|isRq|checkbox|checked|value|between|checked_limit|validate|toExp|toCheck|attr|disabled|Za|02|2468|048|push||tag|defaultSettings|src|match|||link|skygq_valid||div|skygqCheckAjaxForm_image|overLayObj|replace|Z0|arguments|apply|showExp|focusMsg|Exp|findTo|method|val|require|radio|min|focus|isAjaxSubmit|isBg|setPosition|skygqajaxSubmit|z0|_|password|13578|012|13579|extendRemove|for|height|outerHeight|removeBg|textarea|clearFields|form|selector|substring|script|get|jquery|skygqCheckAjaxform|mini|js|images|loading|gif|document|createElement|rel|stylesheet|head|appendChild|||body|append|style|display|none|align|center|position|absolute|index|2000|background|black|cursor|hand|img|tip_|hasOwnProperty|slice|call|isFunction|test|Wrong|Correct|encodeURI|cache|async|success_msg|failure_msg|typeof|boolean|alert|file|change|blur|noop|eng|chn|u0391|uFFE5|mail|http|currency|number|int|double|username|safe|dbc|qq|date|01|13456789|3579|00|telephone|zipcode|bodycard|71|91|0229|ip|IP|gt|gte|lt|lte|in||undefined|addRules|offset|width|outerWidth|opacity|fadeIn|parseInt|marginTop|action|window|location|dataType|html|serialize|toUpperCase|indexOf|context|fadeOut|removeAttr|tagName|toLowerCase|selectedIndex|jQuery'.split('|'),0,{}))