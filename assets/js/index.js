hljs.initHighlightingOnLoad(),function(){var t=document.querySelector(".user-info-drop"),e=document.querySelector(".user-info_username");e&&e.addEventListener("mouseover",function(){t.style.display="block"}),e&&document.body.addEventListener("click",function(e){t.contains(e.target)||(t.style.display="none")});var n=document.querySelector(".modal"),o=document.querySelector(".modal-box img"),c=document.querySelector(".post-content");c&&c.addEventListener("click",function(e){"IMG"===e.target.tagName&&(o.src=e.target.src,n.style.display="block",o.parentElement.style.width=o.clientWidth+"px")}),n.addEventListener("click",function(e){"IMG"!==e.target.tagName&&(n.style.display="none")});var r=document.querySelector(".links");r&&r.addEventListener("click",function(e){"IMG"===e.target.tagName&&window.open(e.target.alt)})}();