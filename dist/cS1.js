/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./cS1.tsx":
/*!*****************!*\
  !*** ./cS1.tsx ***!
  \*****************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("loaded cs");
chrome.runtime.onMessage.addListener((request, sender, resp) => __awaiter(this, void 0, void 0, function* () {
    console.log(" recieved details");
    const req = request;
    console.log(req);
    console.log(req.ev.menuItemId === "inkIt");
    if (req.ev.menuItemId === "inkIt") {
        console.log(" fetching UI controls data form chrome storage");
        let Storage = yield chrome.storage.sync.get("controls");
        if (!Storage || !Storage.controls) {
            Storage = yield chrome.storage.local.get("controls");
        }
        let Controls = Storage.controls;
        let sel = window.getSelection();
        let rnge = sel.getRangeAt(0);
        let boxes = rnge.getClientRects();
        let nodes = rnge.commonAncestorContainer;
        //=(nodes as HTMLElement).style.position="relative";
        let x = window.scrollX;
        let y = window.scrollY;
        let bx = Object.entries(boxes).map((val, id) => {
            let div = document.createElement("div");
            console.log(" val ", val);
            div.setAttribute("id", "one");
            div.style.top = (val[1].y + y) + "px";
            div.style.left = (val[1].x + x) + "px";
            //div.style.border = "2px solid red"
            div.style.width = val[1].width + "px";
            div.style.height = val[1].height + "px";
            div.style.zIndex = "100";
            //--- customizing the inked portion -----
            console.log("controls ", Controls, Controls.style === "underline", Controls.style === "box");
            if (Controls.style === "box") {
                div.style.borderWidth = (Number(Controls.thickness) * 1) + "px";
                div.style.borderColor = Controls.colorPicker;
                div.style.borderStyle = Controls.lineStyle;
                console.log(" boxing ");
            }
            else if (Controls.style === "underline") {
                console.log(" underlining ", Controls.lineStyle);
                div.style.borderBottomWidth = (Number(Controls.thickness) * 1) + "px";
                div.style.borderBottomColor = Controls.colorPicker;
                div.style.borderBottomStyle = Controls.lineStyle;
                console.log("bototmborder  ", div.style.borderBottom);
            }
            //-----------------------------------------
            (document.body).appendChild(div);
            div.style.position = "absolute";
            return div;
        });
        console.log(bx);
    }
    resp();
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./cS1.tsx"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=cS1.js.map