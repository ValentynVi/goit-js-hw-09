!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=null;t.startBtn.addEventListener("click",(function(){n=setInterval((function(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.38392949.js.map