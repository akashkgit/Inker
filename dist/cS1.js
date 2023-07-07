/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************!*\
  !*** ./cS1.tsx ***!
  \*****************/
chrome.runtime.onMessage.addListener((req, sender, resp) => {
    console.log(" recieved details");
    if (req.msg == "inkIt") {
        resp({ message: "inkedIt" });
        let sel = window.getSelection();
        let rnge = sel.getRangeAt(0);
        let boxes = rnge.getClientRects();
        console.log(" boxes ", boxes);
        let bx = Object.entries(boxes).map((val, id) => {
            let div = document.createElement("div");
            console.log(" val ", val);
            div.setAttribute("id", "one");
            div.style.position = "absolute";
            div.style.top = val[1].y + "px";
            div.style.left = val[1].x + "px";
            div.style.border = "2px solid red";
            div.style.width = val[1].width + "px";
            div.style.height = val[1].height + "px";
            document.body.appendChild(div);
            return div;
        });
        console.log(bx);
    }
});

/******/ })()
;
//# sourceMappingURL=cS1.js.map