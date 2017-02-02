"use strict";$(function(){$("top-toggle-menu").click(function(){$(this).children("span").toggle()}),$(".js-slideout-toggle").on("click",function(){$("body, .panel, .slideout-menu, .tags-button, .menu").toggleClass("nav-active")})});var icons=["fa-wheelchair","fa-rub","fa-ruble","(alias)","fa-rouble","(alias)","fa-pagelines","fa-stack-exchange","fa-arrow-circle-o-right","fa-arrow-circle-o-left","fa-caret-square-o-left","fa-toggle-left","(alias)","fa-dot-circle-o","fa-wheelchair","fa-vimeo-square","fa-try","fa-turkish-lira","(alias)","fa-plus-square-o","fa-adjust","fa-anchor","fa-archive","fa-arrows","fa-arrows-h","fa-arrows-v","fa-asterisk","fa-ban","fa-bar-chart-o","fa-barcode","fa-bars","fa-beer","fa-bell","fa-bell-o","fa-bolt","fa-book","fa-bookmark","fa-bookmark-o","fa-briefcase","fa-bug","fa-building-o","fa-bullhorn","fa-bullseye","fa-calendar","fa-calendar-o","fa-camera","fa-camera-retro","fa-caret-square-o-down","fa-caret-square-o-left","fa-caret-square-o-right","fa-caret-square-o-up","fa-certificate","fa-check","fa-check-circle","fa-check-circle-o","fa-check-square","fa-check-square-o","fa-circle","fa-circle-o","fa-clock-o","fa-cloud","fa-cloud-download","fa-cloud-upload","fa-code","fa-code-fork","fa-coffee","fa-cog","fa-cogs","fa-comment","fa-comment-o","fa-comments","fa-comments-o","fa-compass","fa-credit-card","fa-crop","fa-crosshairs","fa-cutlery","fa-dashboard","(alias)","fa-desktop","fa-dot-circle-o","fa-download","fa-edit","(alias)","fa-ellipsis-h","fa-ellipsis-v","fa-envelope","fa-envelope-o","fa-eraser","fa-exchange","fa-exclamation","fa-exclamation-circle","fa-exclamation-triangle","fa-external-link","fa-external-link-square","fa-eye","fa-eye-slash","fa-female","fa-fighter-jet","fa-film","fa-filter","fa-fire","fa-fire-extinguisher","fa-flag","fa-flag-checkered","fa-flag-o","fa-flash","(alias)","fa-flask","fa-folder","fa-folder-o","fa-folder-open","fa-folder-open-o","fa-frown-o","fa-gamepad","fa-gavel","fa-gear","(alias)","fa-gears","(alias)","fa-gift","fa-glass","fa-globe","fa-group","(alias)","fa-hdd-o","fa-headphones","fa-heart","fa-heart-o","fa-home","fa-inbox","fa-info","fa-info-circle","fa-key","fa-keyboard-o","fa-laptop","fa-leaf","fa-legal","(alias)","fa-lemon-o","fa-level-down","fa-level-up","fa-lightbulb-o","fa-location-arrow","fa-lock","fa-magic","fa-magnet","fa-mail-forward","(alias)","fa-mail-reply","(alias)","fa-mail-reply-all","fa-male","fa-map-marker","fa-meh-o","fa-microphone","fa-microphone-slash","fa-minus","fa-minus-circle","fa-minus-square","fa-minus-square-o","fa-mobile","fa-mobile-phone","(alias)","fa-money","fa-moon-o","fa-music","fa-pencil","fa-pencil-square","fa-pencil-square-o","fa-phone","fa-phone-square","fa-picture-o","fa-plane","fa-plus","fa-plus-circle","fa-plus-square","fa-plus-square-o","fa-power-off","fa-print","fa-puzzle-piece","fa-qrcode","fa-question","fa-question-circle","fa-quote-left","fa-quote-right","fa-random","fa-refresh","fa-reply","fa-reply-all","fa-retweet","fa-road","fa-rocket","fa-rss","fa-rss-square","fa-search","fa-search-minus","fa-search-plus","fa-share","fa-share-square","fa-share-square-o","fa-shield","fa-shopping-cart","fa-sign-in","fa-sign-out","fa-signal","fa-sitemap","fa-smile-o","fa-sort","fa-sort-alpha-asc","fa-sort-alpha-desc","fa-sort-amount-asc","fa-sort-amount-desc","fa-sort-asc","fa-sort-desc","fa-sort-down","(alias)","fa-sort-numeric-asc","fa-sort-numeric-desc","fa-sort-up","(alias)","fa-spinner","fa-square","fa-square-o","fa-star","fa-star-half","fa-star-half-empty","(alias)","fa-star-half-full","(alias)","fa-star-half-o","fa-star-o","fa-subscript","fa-suitcase","fa-sun-o","fa-superscript","fa-tablet","fa-tachometer","fa-tag","fa-tags","fa-tasks","fa-terminal","fa-thumb-tack","fa-thumbs-down","fa-thumbs-o-down","fa-thumbs-o-up","fa-thumbs-up","fa-ticket","fa-times","fa-times-circle","fa-times-circle-o","fa-tint","fa-toggle-down","(alias)","fa-toggle-left","(alias)","fa-toggle-right","(alias)","fa-toggle-up","(alias)","fa-trash-o","fa-trophy","fa-truck","fa-umbrella","fa-unlock","fa-unlock-alt","fa-unsorted","(alias)","fa-upload","fa-user","fa-users","fa-video-camera","fa-volume-down","fa-volume-off","fa-volume-up","fa-warning","(alias)","fa-wheelchair","fa-wrench","fa-check-square","fa-check-square-o","fa-circle","fa-circle-o","fa-dot-circle-o","fa-minus-square","fa-minus-square-o","fa-plus-square","fa-plus-square-o","fa-square","fa-square-o","fa-bitcoin","(alias)","fa-btc","fa-cny","(alias)","fa-dollar","(alias)","fa-eur","fa-euro","(alias)","fa-gbp","fa-inr","fa-jpy","fa-krw","fa-money","fa-rmb","(alias)","fa-rouble","(alias)","fa-rub","fa-ruble","(alias)","fa-rupee","(alias)","fa-try","fa-turkish-lira","(alias)","fa-usd","fa-won","(alias)","fa-yen","(alias)","fa-align-center","fa-align-justify","fa-align-left","fa-align-right","fa-bold","fa-chain","(alias)","fa-chain-broken","fa-clipboard","fa-columns","fa-copy","(alias)","fa-cut","(alias)","fa-dedent","(alias)","fa-eraser","fa-file","fa-file-o","fa-file-text","fa-file-text-o","fa-files-o","fa-floppy-o","fa-font","fa-indent","fa-italic","fa-link","fa-list","fa-list-alt","fa-list-ol","fa-list-ul","fa-outdent","fa-paperclip","fa-paste","(alias)","fa-repeat","fa-rotate-left","(alias)","fa-rotate-right","(alias)","fa-save","(alias)","fa-scissors","fa-strikethrough","fa-table","fa-text-height","fa-text-width","fa-th","fa-th-large","fa-th-list","fa-underline","fa-undo","fa-unlink","(alias)","fa-angle-double-down","fa-angle-double-left","fa-angle-double-right","fa-angle-double-up","fa-angle-down","fa-angle-left","fa-angle-right","fa-angle-up","fa-arrow-circle-down","fa-arrow-circle-left","fa-arrow-circle-o-down","fa-arrow-circle-o-left","fa-arrow-circle-o-right","fa-arrow-circle-o-up","fa-arrow-circle-right","fa-arrow-circle-up","fa-arrow-down","fa-arrow-left","fa-arrow-right","fa-arrow-up","fa-arrows","fa-arrows-alt","fa-arrows-h","fa-arrows-v","fa-caret-down","fa-caret-left","fa-caret-right","fa-caret-square-o-down","fa-caret-square-o-left","fa-caret-square-o-right","fa-caret-square-o-up","fa-caret-up","fa-chevron-circle-down","fa-chevron-circle-left","fa-chevron-circle-right","fa-chevron-circle-up","fa-chevron-down","fa-chevron-left","fa-chevron-right","fa-chevron-up","fa-hand-o-down","fa-hand-o-left","fa-hand-o-right","fa-hand-o-up","fa-long-arrow-down","fa-long-arrow-left","fa-long-arrow-right","fa-long-arrow-up","fa-toggle-down","(alias)","fa-toggle-left","(alias)","fa-toggle-right","(alias)","fa-toggle-up","(alias)","fa-arrows-alt","fa-backward","fa-compress","fa-eject","fa-expand","fa-fast-backward","fa-fast-forward","fa-forward","fa-pause","fa-play","fa-play-circle","fa-play-circle-o","fa-step-backward","fa-step-forward","fa-stop","fa-youtube-play","fa-adn","fa-android","fa-apple","fa-bitbucket","fa-bitbucket-square","fa-bitcoin","(alias)","fa-btc","fa-css3","fa-dribbble","fa-dropbox","fa-facebook","fa-facebook-square","fa-flickr","fa-foursquare","fa-github","fa-github-alt","fa-github-square","fa-gittip","fa-google-plus","fa-google-plus-square","fa-html5","fa-instagram","fa-linkedin","fa-linkedin-square","fa-linux","fa-maxcdn","fa-pagelines","fa-pinterest","fa-pinterest-square","fa-renren","fa-skype","fa-stack-exchange","fa-stack-overflow","fa-trello","fa-tumblr","fa-tumblr-square","fa-twitter","fa-twitter-square","fa-vimeo-square","fa-vk","fa-weibo","fa-windows","fa-xing","fa-xing-square","fa-youtube","fa-youtube-play","fa-youtube-square","fa-ambulance","fa-h-square","fa-hospital-o","fa-medkit","fa-plus-square","fa-stethoscope","fa-user-md","fa-wheelchair"],$post=$(".post"),$first=$(".post.first"),$last=$(".post.last"),$fnav=$(".fixed-nav"),$postholder=$(".post-holder"),$postafter=$(".post-after"),$sitehead=$("#site-head");!function($){function e(e){$("html, body").animate({scrollTop:e.offset().top},1e3)}$(document).ready(function(){$(".post-holder").fitVids(),$postholder.each(function(e){e%2!=0&&$(this).css({background:"#343434",color:"#fff"})}),$postafter.each(function(e){var a=$(this).parent().css("background-color");$(this).css("border-top-color",a),e%2==0&&$(this).css("left","6%")}),$(".btn.first").click(function(){e($first)}),$(".btn.last").click(function(){e($last)}),$("#header-arrow").click(function(){e($first)}),$(".post-title").each(function(){var e=$(this).text(),a=$(this).parents(".post-holder").index();$fnav.append("<a class='fn-item' item_index='"+a+"'>"+e+"</a>"),$(".fn-item").click(function(){var e=$(this).attr("item_index"),a=$(".post[item_index='"+e+"']");$("html, body").animate({scrollTop:a.offset().top},400)})}),$(".post.last").next(".post-after").hide(),$(window).scroll(function(){var e=$(window).scrollTop(),a=$sitehead.offset().top,t=$sitehead.offset().top+$(this).height()-100;e>=a&&e<=t?$(".fixed-nav").fadeOut("fast"):$(window).width()>900&&$(".fixed-nav").fadeIn("fast"),$post.each(function(){var a=$(this).offset().top,t=$(this).offset().top+$(this).height(),i=$(this).parent(".post-holder").index(),n=$(".fn-item[item_index='"+i+"']"),s=$(this).parent(".post-holder").prev(".post-holder").find(".post-after");$(this).attr("item_index",i),e>=a&&e<=t?(n.addClass("active"),s.fadeOut("slow")):(n.removeClass("active"),s.fadeIn("slow"))})}),$("li").before('<span class="bult icon-asterisk"></span>'),$("blockquote p").prepend('<span class="quo icon-quote-left"></span>').append('<span class="quo icon-quote-right"></span>')}),$post.each(function(){for(var e=$(this).html(),a=[],t=0;t<icons.length;t++)if(a[t]={},a[t].str="@"+icons[t]+"@",a[t].icon=icons[t],a[t].int=e.search(a[t].str),a[t].int>-1){a[t].count=e.match(new RegExp(a[t].str,"g")).length,console.log(a[t].count);for(var i=0;i<a[t].count;i++)$(this).html($(this).html().replace(a[t].str,"<i class='fa "+a[t].icon+"'></i>"))}}),$(window).scroll(function(){$(this).scrollTop()>100?$(".top-toggle-menu").fadeOut(200):$(".top-toggle-menu").fadeIn(200)}),$("#menu-toggle").click(function(){$(this).toggleClass("open"),$("#top-menu").fadeToggle()}),$(window).scroll(function(){$(this).scrollTop()>600?$(".go-top").fadeIn(200):$(".go-top").fadeOut(200)}),$(".go-top").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},500)})}(jQuery),function($){$.fn.subbscribe=function(e){function a(e){return console.log(e),"MailChimp"===o.list?"success"!==e.result:"CampaignMonitor"!==o.list||400===e.Status}function t(){$("#subbscribe input").each(function(){$(this).val("")})}function i(e){var a=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(e)}function n(){var e=!0,a=$("#subb-NAME"),t=$("#subb-EMAIL");return o.emailonly||(a.val().length<2?(e=!1,a.addClass("error")):a.removeClass("error")),i(t.val())?t.removeClass("error"):(e=!1,t.addClass("error")),e}function s(e,a,t){var i=new Date;i.setTime(i.getTime()+24*t*60*60*1e3);var n="expires="+i.toUTCString();document.cookie=e+"="+a+"; "+n+"; path=/"}function r(e){for(var a=e+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var n=t[i];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(a))return n.substring(a.length,n.length)}return""}var o=$.extend({list:"MailChimp",url:"",title:"Never miss a post!",text:"Get our latest posts and announcements in your inbox. You won't regret it!",name:"Subbscribe",color:"#ee6262",thumbnail:"https://s3-ap-southeast-2.amazonaws.com/subbscribe/img/avatar.png",emailonly:!1,cm_mail_field:"",delay:0},e);if(""===o.url)return void console.log("Subbscribe Error: You must provide a valid MailChimp form URL.");if("CampaignMonitor"===o.list&&!o.cm_mail_field.length)return void console.log("You must provide the mail input name. Found in the form code from Campaign Monitor");var l="",f="",c="",u="";if("MailChimp"===o.list)l="NAME",f="EMAIL",u=o.url.replace("/post?","/post-json?").concat("&c=?");else{if("CampaignMonitor"!==o.list)return void console.log("Subbscribe Error: list value must be set to MailChimp or CampaignMonitor");l="cm-name",f=o.cm_mail_field,u=o.url+"?callback=?"}var d="",p='<input type="email" name="'+f+'" id="subb-EMAIL" placeholder="Email Address" />';o.emailonly||(d=' <input type="text" name="'+l+'" id="subb-NAME" placeholder="Name" />');var m='<div id="subbscribe" style="display: none"><div class="subb-title">'+o.title+' <img class="close-x" src="https://s3-ap-southeast-2.amazonaws.com/subbscribe/img/close.svg" />  </div> <div class="subb-body"> <div class="subb-hidden"> <div class="subb-thumbnail"> <img style="width: 40px; height: 40px;" src="'+o.thumbnail+'" /> </div> <div class="subb-hidden"> <div class="subb-site"> &nbsp;'+o.name+' </div> <button class="subb-button show-form">Subscribe</button> </div> </div> <div class="subb-form" style="display: none"> <p>'+o.text+'</p> <form id="mc-embedded-subbscribe-form" method="post" action="'+o.url+'"> <div class="subbscribe-alert subbscribe-error" style="display: none">Oops! Check your details and try again.</div> <div class="subbscribe-alert subbscribe-success" style="display: none">Thanks! Check your email for confirmation.</div> <div class="text-input"> '+d+' </div> <div class="text-input"> '+p+' </div> <button class="subb-button submit-form" type="submit" style="width: 100%; margin-bottom: 10px;">Subscribe</button></form></div> </div> </div>';1!==r("subbscribe-hidden")&&0===$(this).find("#subbscribe").length&&(this.append(m),setTimeout(function(){$("#subbscribe").css("display","block"),$("#subbscribe").css("width",$(".subb-site").width()+200),$("#subbscribe").addClass("animated slideInRight")},1e3*o.delay)),$("#subbscribe .subb-button").css("background-color",o.color),$("#subbscribe .close-x").click(function(){$("#subbscribe").toggleClass("slideInRight fadeOut"),$("#subbscribe").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$("#subbscribe").remove()}),"function"==typeof o.onClose&&o.onClose.call()}),$("#subbscribe .show-form").click(function(){$("#subbscribe .subb-hidden").hide(),$("#subbscribe .subb-form").show()}),$("#mc-embedded-subbscribe-form").submit(function(e){e.preventDefault(),n()?($("#subbscribe .subbscribe-error").slideUp(),$("#subbscribe .submit-form").attr("disabled","disabled"),$.ajax({url:u,type:"post",data:$(this).serialize(),dataType:"json",contentType:"application/json; charset=utf-8",success:function(e){a(e)?console.log("Subbscribe Error: submission failed."):(t(),$(".subbscribe-success").slideDown(),setTimeout(function(){$("#subbscribe").addClass("animated fadeOut")},2e3),$("#subbscribe").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$("#subbscribe").remove(),"function"==typeof o.onSubbscribe&&o.onSubbscribe.call()}))}})):$("#subbscribe .subbscribe-error").slideDown()})}}(jQuery),function($){$.fn.fitVids=function(e){var a={customSelector:null};if(!document.getElementById("fit-vids-style")){var t=document.head||document.getElementsByTagName("head")[0],i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>",t.appendChild(n.childNodes[1])}return e&&$.extend(a,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];a.customSelector&&e.push(a.customSelector);var t=$(this).find(e.join(","));t=t.not("object object"),t.each(function(){var e=$(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var a="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),t=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),i=a/t;if(!e.attr("id")){var n="fitvid"+Math.floor(999999*Math.random());e.attr("id",n)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*i+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,a=_self.Prism={util:{encode:function(e){return e instanceof t?new t(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var t=a.util.type(e);switch(t){case"Object":var i={};for(var n in e)e.hasOwnProperty(n)&&(i[n]=a.util.clone(e[n]));return i;case"Array":return e.map&&e.map(function(e){return a.util.clone(e)})}return e}},languages:{extend:function(e,t){var i=a.util.clone(a.languages[e]);for(var n in t)i[n]=t[n];return i},insertBefore:function(e,t,i,n){n=n||a.languages;var s=n[e];if(2==arguments.length){i=arguments[1];for(var r in i)i.hasOwnProperty(r)&&(s[r]=i[r]);return s}var o={};for(var l in s)if(s.hasOwnProperty(l)){if(l==t)for(var r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);o[l]=s[l]}return a.languages.DFS(a.languages,function(a,t){t===n[e]&&a!=e&&(this[a]=o)}),n[e]=o},DFS:function(e,t,i){for(var n in e)e.hasOwnProperty(n)&&(t.call(e,n,e[n],i||n),"Object"===a.util.type(e[n])?a.languages.DFS(e[n],t):"Array"===a.util.type(e[n])&&a.languages.DFS(e[n],t,n))}},plugins:{},highlightAll:function(e,t){for(var i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),n=0,s;s=i[n++];)a.highlightElement(s,e===!0,t)},highlightElement:function(t,i,n){for(var s,r,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(s=(o.className.match(e)||[,""])[1],r=a.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var l=t.textContent,f={element:t,language:s,grammar:r,code:l};if(!l||!r)return void a.hooks.run("complete",f);if(a.hooks.run("before-highlight",f),i&&_self.Worker){var c=new Worker(a.filename);c.onmessage=function(e){f.highlightedCode=e.data,a.hooks.run("before-insert",f),f.element.innerHTML=f.highlightedCode,n&&n.call(f.element),a.hooks.run("after-highlight",f),a.hooks.run("complete",f)},c.postMessage(JSON.stringify({language:f.language,code:f.code,immediateClose:!0}))}else f.highlightedCode=a.highlight(f.code,f.grammar,f.language),a.hooks.run("before-insert",f),f.element.innerHTML=f.highlightedCode,n&&n.call(t),a.hooks.run("after-highlight",f),a.hooks.run("complete",f)},highlight:function(e,i,n){var s=a.tokenize(e,i);return t.stringify(a.util.encode(s),n)},tokenize:function(e,t,i){var n=a.Token,s=[e],r=t.rest;if(r){for(var o in r)t[o]=r[o];delete t.rest}e:for(var o in t)if(t.hasOwnProperty(o)&&t[o]){var l=t[o];l="Array"===a.util.type(l)?l:[l];for(var f=0;f<l.length;++f){var c=l[f],u=c.inside,d=!!c.lookbehind,p=0,m=c.alias;c=c.pattern||c;for(var g=0;g<s.length;g++){var h=s[g];if(s.length>e.length)break e;if(!(h instanceof n)){c.lastIndex=0;var b=c.exec(h);if(b){d&&(p=b[1].length);var v=b.index-1+p,b=b[0].slice(p),w=b.length,y=v+w,k=h.slice(0,v+1),x=h.slice(y+1),C=[g,1];k&&C.push(k);var q=new n(o,u?a.tokenize(b,u):b,m);C.push(q),x&&C.push(x),Array.prototype.splice.apply(s,C)}}}}}return s},hooks:{all:{},add:function(e,t){var i=a.hooks.all;i[e]=i[e]||[],i[e].push(t)},run:function(e,t){var i=a.hooks.all[e];if(i&&i.length)for(var n=0,s;s=i[n++];)s(t)}}},t=a.Token=function(e,a,t){this.type=e,this.content=a,this.alias=t};if(t.stringify=function(e,i,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(a){return t.stringify(a,i,e)}).join("");var s={type:e.type,content:t.stringify(e.content,i,n),tag:"span",classes:["token",e.type],attributes:{},language:i,parent:n};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,r)}a.hooks.run("wrap",s);var o="";for(var l in s.attributes)o+=(o?" ":"")+l+'="'+(s.attributes[l]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),i=t.language,n=t.code,s=t.immediateClose;_self.postMessage(a.highlight(n,a.languages[i],i)),s&&_self.close()},!1),_self.Prism):_self.Prism;var i=document.getElementsByTagName("script");return i=i[i.length-1],i&&(a.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",a.highlightAll)),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.forEach&&Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(a){for(var t=a.getAttribute("data-src"),i,n=a,s=/\blang(?:uage)?-(?!\*)(\w+)\b/i;n&&!s.test(n.className);)n=n.parentNode;if(n&&(i=(a.className.match(s)||[,""])[1]),!i){var r=(t.match(/\.(\w+)$/)||[,""])[1];i=e[r]||r}var o=document.createElement("code");o.className="language-"+i,a.textContent="",o.textContent="Loading…",a.appendChild(o);var l=new XMLHttpRequest;l.open("GET",t,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(o.textContent=l.responseText,Prism.highlightElement(o)):l.status>=400?o.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:o.textContent="✖ Error: File does not exist or is empty")},l.send(null)})},self.Prism.fileHighlight())}(),!function(e){e(["jquery"],function(e){return function(){function a(e,a,t){return m({type:k.error,iconClass:g().iconClasses.error,message:e,optionsOverride:t,title:a})}function t(a,t){return a||(a=g()),b=e("#"+a.containerId),b.length?b:(t&&(b=u(a)),b)}function i(e,a,t){return m({type:k.info,iconClass:g().iconClasses.info,message:e,optionsOverride:t,title:a})}function n(e){v=e}function s(e,a,t){return m({type:k.success,iconClass:g().iconClasses.success,message:e,optionsOverride:t,title:a})}function r(e,a,t){return m({type:k.warning,iconClass:g().iconClasses.warning,message:e,optionsOverride:t,title:a})}function o(e,a){var i=g();b||t(i),c(e,i,a)||f(i)}function l(a){var i=g();return b||t(i),a&&0===e(":focus",a).length?void h(a):void(b.children().length&&b.remove())}function f(a){for(var t=b.children(),i=t.length-1;i>=0;i--)c(e(t[i]),a)}function c(a,t,i){var n=!(!i||!i.force)&&i.force;return!(!a||!n&&0!==e(":focus",a).length)&&(a[t.hideMethod]({duration:t.hideDuration,easing:t.hideEasing,complete:function(){h(a)}}),!0)}function u(a){return b=e("<div/>").attr("id",a.containerId).addClass(a.positionClass).attr("aria-live","polite").attr("role","alert"),b.appendTo(e(a.target)),b}function d(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function p(e){v&&v(e)}function m(a){function i(e){return null==e&&(e=""),new String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(){o(),f(),c(),u(),d(),l()}function s(){T.hover(x,k),!q.onclick&&q.tapToDismiss&&T.click(v),q.closeButton&&M&&M.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),v(!0)}),q.onclick&&T.click(function(e){q.onclick(e),v()})}function r(){T.hide(),T[q.showMethod]({duration:q.showDuration,easing:q.showEasing,complete:q.onShown}),q.timeOut>0&&(P=setTimeout(v,q.timeOut),S.maxHideTime=parseFloat(q.timeOut),S.hideEta=(new Date).getTime()+S.maxHideTime,q.progressBar&&(S.intervalId=setInterval(C,10)))}function o(){a.iconClass&&T.addClass(q.toastClass).addClass(E)}function l(){q.newestOnTop?b.prepend(T):b.append(T)}function f(){a.title&&(A.append(q.escapeHtml?i(a.title):a.title).addClass(q.titleClass),T.append(A))}function c(){a.message&&(O.append(q.escapeHtml?i(a.message):a.message).addClass(q.messageClass),T.append(O))}function u(){q.closeButton&&(M.addClass("toast-close-button").attr("role","button"),T.prepend(M))}function d(){q.progressBar&&(j.addClass("toast-progress"),T.prepend(j))}function m(e,a){if(e.preventDuplicates){if(a.message===w)return!0;w=a.message}return!1}function v(a){var t=a&&q.closeMethod!==!1?q.closeMethod:q.hideMethod,i=a&&q.closeDuration!==!1?q.closeDuration:q.hideDuration,n=a&&q.closeEasing!==!1?q.closeEasing:q.hideEasing;return!e(":focus",T).length||a?(clearTimeout(S.intervalId),T[t]({duration:i,easing:n,complete:function(){h(T),q.onHidden&&"hidden"!==_.state&&q.onHidden(),_.state="hidden",_.endTime=new Date,p(_)}})):void 0}function k(){(q.timeOut>0||q.extendedTimeOut>0)&&(P=setTimeout(v,q.extendedTimeOut),S.maxHideTime=parseFloat(q.extendedTimeOut),S.hideEta=(new Date).getTime()+S.maxHideTime)}function x(){clearTimeout(P),S.hideEta=0,T.stop(!0,!0)[q.showMethod]({duration:q.showDuration,easing:q.showEasing})}function C(){var e=(S.hideEta-(new Date).getTime())/S.maxHideTime*100;j.width(e+"%")}var q=g(),E=a.iconClass||q.iconClass;if("undefined"!=typeof a.optionsOverride&&(q=e.extend(q,a.optionsOverride),E=a.optionsOverride.iconClass||E),!m(q,a)){y++,b=t(q,!0);var P=null,T=e("<div/>"),A=e("<div/>"),O=e("<div/>"),j=e("<div/>"),M=e(q.closeHtml),S={intervalId:null,hideEta:null,maxHideTime:null},_={toastId:y,state:"visible",startTime:new Date,options:q,map:a};return n(),r(),s(),p(_),q.debug&&console&&console.log(_),T}}function g(){return e.extend({},d(),x.options)}function h(e){b||(b=t()),e.is(":visible")||(e.remove(),e=null,0===b.children().length&&(b.remove(),w=void 0))}var b,v,w,y=0,k={error:"error",info:"info",success:"success",warning:"warning"},x={clear:o,remove:l,error:a,getContainer:t,info:i,options:{},subscribe:n,success:s,version:"2.1.2",warning:r};return x}()})}("function"==typeof define&&define.amd?define:function(e,a){"undefined"!=typeof module&&module.exports?module.exports=a(require("jquery")):window.toastr=a(window.jQuery)}),function(e,a){"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?module.exports=a():e.store=a()}(this,function(){function e(){try{return n in t&&t[n]}catch(e){return!1}}var a={},t="undefined"!=typeof window?window:global,i=t.document,n="localStorage",s="script",r;if(a.disabled=!1,a.version="1.3.20",a.set=function(e,a){},a.get=function(e,a){},a.has=function(e){return void 0!==a.get(e)},a.remove=function(e){},a.clear=function(){},a.transact=function(e,t,i){null==i&&(i=t,t=null),null==t&&(t={});var n=a.get(e,t);i(n),a.set(e,n)},a.getAll=function(){},a.forEach=function(){},a.serialize=function(e){return JSON.stringify(e)},a.deserialize=function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(a){return e||void 0}},e())r=t[n],a.set=function(e,t){return void 0===t?a.remove(e):(r.setItem(e,a.serialize(t)),t)},a.get=function(e,t){var i=a.deserialize(r.getItem(e));return void 0===i?t:i},a.remove=function(e){r.removeItem(e)},a.clear=function(){r.clear()},a.getAll=function(){var e={};return a.forEach(function(a,t){e[a]=t}),e},a.forEach=function(e){for(var t=0;t<r.length;t++){var i=r.key(t);e(i,a.get(i))}};else if(i&&i.documentElement.addBehavior){var o,l;try{l=new ActiveXObject("htmlfile"),l.open(),l.write("<"+s+">document.w=window</"+s+'><iframe src="/favicon.ico"></iframe>'),
l.close(),o=l.w.frames[0].document,r=o.createElement("div")}catch(e){r=i.createElement("div"),o=i.body}var f=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);t.unshift(r),o.appendChild(r),r.addBehavior("#default#userData"),r.load(n);var i=e.apply(a,t);return o.removeChild(r),i}},c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),u=function(e){return e.replace(/^d/,"___$&").replace(c,"___")};a.set=f(function(e,t,i){return t=u(t),void 0===i?a.remove(t):(e.setAttribute(t,a.serialize(i)),e.save(n),i)}),a.get=f(function(e,t,i){t=u(t);var n=a.deserialize(e.getAttribute(t));return void 0===n?i:n}),a.remove=f(function(e,a){a=u(a),e.removeAttribute(a),e.save(n)}),a.clear=f(function(e){var a=e.XMLDocument.documentElement.attributes;e.load(n);for(var t=a.length-1;t>=0;t--)e.removeAttribute(a[t].name);e.save(n)}),a.getAll=function(e){var t={};return a.forEach(function(e,a){t[e]=a}),t},a.forEach=f(function(e,t){for(var i=e.XMLDocument.documentElement.attributes,n=0,s;s=i[n];++n)t(s.name,a.deserialize(e.getAttribute(s.name)))})}try{var d="__storejs__";a.set(d,d),a.get(d)!=d&&(a.disabled=!0),a.remove(d)}catch(e){a.disabled=!0}return a.enabled=!a.disabled,a});