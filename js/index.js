var ALLCLASSNAME = [
    "bounce", "flash", "pulse", "rubberBand",
    "shake", "headShake", "swing", "tada",
    "wobble", "jello", "bounceIn", "bounceInDown",
    "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut",
    "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp",
    "fadeIn", "fadeOut", "flipInX", "flipInY",
    "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut",
    "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft",
    "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight",
    "rotateOutUpLeft", "rotateOutUpRight", "hinge", "jackInTheBox",
    "rollIn", "rollOut", "zoomIn", "zoomInDown",
    "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut",
    "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp",
    "slideInDown", "slideInLeft", "slideInRight", "slideInUp",
    "slideOutDown", "slideOutLeft", "slideOutRight", "slideOutUp"
];
var ANIMATIONEND = 'webkitAnimationEnd animationend';
var ANIMATIONITERATION = 'webkitAnimationIteration animationiteration';

$.fn.extend({
    animateCss: function (animationName, callback) {
        this.addClass('animated ' + animationName).one(ANIMATIONEND, function () {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });
        return this;
    }
});

$(function (){
    var CURRENTURL = window.location.href;
    //波浪效果
    var formSelector  = "";
    var inputSelector = "";
    var logoSelector = "";
    var className = "";
    if (CURRENTURL.indexOf("www.baidu.com") > 0) {//百度
        formSelector = "#form";
        inputSelector = "#kw";
        logoSelector = "#lg>img,#result_logo>img";
        className = "secool-name-baidu";
    } else if (CURRENTURL.indexOf("www.sogou.com") > 0) {//搜狗
        formSelector = "#sf";
        inputSelector = "#query";
        logoSelector = "#logo-l>span,#sogou_wrap_id>.header>.logo";
        className = "secool-name-sogou";
    } else if (CURRENTURL.indexOf("www.so.com") > 0) {//360
        formSelector = "#input-container";
        inputSelector = "#input";
        logoSelector = "#bd_logo>a,#g-hd-nav>.g-hd-logo>a";
        className = "secool-name-so";
    } else if (CURRENTURL.indexOf("bing.com") > 0) {//必应
        formSelector = "#sb_form>.b_searchboxForm";
        inputSelector = "#sb_form_q";
        logoSelector = "#sbox>.hp_sw_logo,.b_logo";
        className = "secool-name-bing";
    } else if (CURRENTURL.indexOf("www.google.com") > 0 || CURRENTURL.indexOf("www.google.ae") > 0) {//谷歌
        formSelector = "#sfdiv";
        inputSelector = "#lst-ib";
        logoSelector = "#hplogo,#logo";
        className = "secool-name-google";
    }
    var formEl = $(formSelector);
    var inputEl = $(inputSelector);
    var logoEl = $(logoSelector);
    logoEl.addClass("secool-logo");
    formEl.addClass(className);

    var additionDivStr = '<div class="secool-wave"></div><div class="secool-wave"></div><div class="secool-wave"></div>';
  
    formEl.append(additionDivStr);
    formEl.addClass("secool-input");
    inputEl.focus(function () {
        formEl.addClass("secool-input");
    });
    formEl.on(ANIMATIONITERATION, function () {
        if (!inputEl.is(":focus")) {
            $(this).removeClass('secool-input');
        }
    });

    //点击图片效果
    $("body").on("click",logoSelector,function (e) {
        $(this).animateCss(ALLCLASSNAME[Math.floor(Math.random() * ALLCLASSNAME.length)]);
        e.preventDefault();
        e.stopPropagation();
    });
});
