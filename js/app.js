$("document").ready((function(){setTimeout((function(){$("#curtain, .loader").removeClass("on first-loading")}),2500),$(".lazy, .lazyload-wrapper").addClass("loaded"),$(".menu").on("click",(function(){return $("#curtain").addClass("on"),setTimeout((function(){$("#nav").addClass("on transition-end"),$("#nav-overlay-content").addClass("on transition-end")}),500),!1})),$("nav#nav .close").on("click",(function(){return $("#nav").removeClass("transition-end"),$("#nav-overlay-content").removeClass("on transition-end"),$("#nav").removeClass("on"),setTimeout((function(){$("#curtain").removeClass("on")}),900),!1}));new Swiper(".swiper",{direction:"horizontal",loop:!0,autoplay:{delay:5500,disableOnInteraction:!1},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});var e=$(".swiper-pagination-bullet");for(let n=0;n<e.length;n++)$(e[n]).html("<h4>0"+(n+1)+'</h4><div class="swiper-bar"><div class="fill"></div></div>');function validateEmail(t){return!!t.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)}function dfvalue(){$("#form-contact_email").val(""),$("#form-contact_service").val(""),$("#form-contact_budget").val(""),$("#form-contact_message").val("")}$("form#form-contact").on("submit",(function(t){t.preventDefault();var e=$("#form-contact_name").val(),a=$("#form-contact_email").val(),l=$("#form-contact_service").val(),o=$("#form-contact_budget").val(),r=$("#form-contact_message").val();""!=e&&""!=a&&""!=r&&""!=o&&""!=l&&validateEmail(a)?$("#send-msg").click((function(){$.ajax({url:"api/troddl.php",type:"POST",data:{key:"svRlOFp,ep5f2e5",name:e,email:a,service:l,budget:o,message:r},dataType:"html",beforeSend:function(){$("#send-msg .regular").attr("style","display: none;"),$("#send-msg .sending").attr("style","display: block;")},success:function(t){$("#send-msg .sending").removeAttr("style"),$("#send-msg .regular").attr("style","display: block;"),1==t?(dfvalue(),$(".sent").attr("style","display: block;")):$(".too-many-request").attr("style","display: block;"),setTimeout((function(){$(".clearfix .error").removeAttr("style")}),6e3)}})})):$(".form-error").attr("style","display: block;")}));var n=document.body,t=document.documentElement;Math.max(n.scrollHeight,n.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight);scrollTop=window.pageYOffset||document.documentElement.scrollTop,scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,window.onscroll=function(){var e,n;e=self.innerHeight?self.innerHeight:document.body.clientHeight,n=window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,document.body.scrollHeight<=n+e?$(".case-study-next-project").addClass("next-project-active"):$(".case-study-next-project").removeClass("next-project-active")}}));