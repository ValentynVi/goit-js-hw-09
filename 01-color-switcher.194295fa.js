const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let e=null;t.startBtn.addEventListener("click",(function(){e=setInterval((()=>{t.startBtn.disabled=!0,t.stopBtn.disabled=!1,document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.194295fa.js.map