/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./csHelper.tsx":
/*!**********************!*\
  !*** ./csHelper.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfInked: () => (/* binding */ checkIfInked),
/* harmony export */   storeSelected: () => (/* binding */ storeSelected)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let storeSelected = (box, request) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(" inside cs helper ");
    let bx = Array.from([...box]);
    let sync = true;
    let res = yield chrome.storage.sync.get("store");
    if (!res || !res.store) {
        res = yield chrome.storage.local.get("store");
        sync = false;
    }
    console.log(" inside cs helper 2", res);
    let pagePresent = false;
    let pageUrl = request.ev.pageUrl;
    let idx;
    if (res.store[pageUrl]) {
        pagePresent = true;
        idx = res.store[pageUrl].idx;
    }
    else
        idx = 0;
    console.log(" inside cs helper 3");
    bx.forEach((div, id) => {
        div.setAttribute("id", String(idx + 1) + String(id));
        div.dataset["group"] = String(idx + 1);
    });
    let bxInfo = bx.map((val, id) => {
        return { id: val.id, group: val.dataset.group };
    });
    console.log(" inside cs helper 4");
    let toBeStored = {};
    if (pagePresent) {
        toBeStored[pageUrl] = Object.assign(Object.assign({}, res.store[pageUrl]), { [idx + 1]: bxInfo, "idx": idx + 1 });
        console.log("storing boxes in the store ", toBeStored);
    }
    else {
        toBeStored[pageUrl] = { "idx": idx + 1, [idx + 1]: bxInfo };
        console.log("storing boxes in the store ", toBeStored);
    }
    if (sync)
        yield chrome.storage.sync.set({ "store": toBeStored }).then(() => {
            chrome.storage.sync.get("store").then((val) => console.log("Stored sync obj", val.store, val.store[pageUrl][idx + 1][0].id));
        });
    else
        yield chrome.storage.local.set({ "store": toBeStored }).then(() => {
            chrome.storage.local.get("store").then((val) => console.log(" stored  local obj ", val.store, val.store[pageUrl][idx + 1][0].id));
        });
});
let checkIfInked = (event) => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield chrome.storage.sync.get("store");
    if (!res || !res.store) {
        res = yield chrome.storage.local.get("store");
    }
    let el = event.target;
    console.log("target element ", el.dataset.group, el.id);
    console.log("stored object ", res.store);
    console.log("keying page url for records ", res.store[window.location.href]);
    let record = res.store[window.location.href];
    if (!record)
        return false;
    if (!record[el.dataset.group])
        return false;
    let group = record[el.dataset.group];
    let found = false;
    for (let i = 0; i < group.length; i++) {
        let div = group[i];
        console.log("el =>", el.id, " ", el.dataset.group, " div =>", div.id);
        if (div.id === el.id)
            return true;
    }
    return false;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./cS1.tsx ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _csHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csHelper */ "./csHelper.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

//------- unling pallete -------------
let unlink = document.createElement("p");
document.body.appendChild(unlink);
unlink.innerHTML = "Unlink";
unlink.style.border = "1px solid black";
unlink.style.backgroundColor = " grey";
unlink.id = "unlink";
unlink.style.position = "absolute";
unlink.style.top = "10px";
unlink.style.left = "10px";
unlink.style.display = "none";
unlink.style.zIndex = "100";
unlink.style.opacity = "0.5";
unlink.style.width = "300px";
unlink.style.height = "300px";
unlink.addEventListener("click", (ev) => {
    let el = ev.target;
    let elToBeRemoved = el.dataset.remove;
    console.log(" Removing ", elToBeRemoved, document.getElementById(elToBeRemoved));
    document.body.removeChild(document.getElementById(elToBeRemoved));
});
console.log("loaded cs");
document.addEventListener("click", (ev) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log((ev.target as HTMLDivElement).dataset.group,(ev.target as HTMLDivElement).id)
    let found = yield (0,_csHelper__WEBPACK_IMPORTED_MODULE_0__.checkIfInked)(ev);
    console.log("element found: ", found);
    if (found) {
        unlink.style.display = "block";
        unlink.dataset["remove"] = ev.target.id;
    }
}));
//----------------------------
chrome.runtime.onMessage.addListener((request, sender, resp) => __awaiter(void 0, void 0, void 0, function* () {
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
        console.log(" b4 storing bx array ", bx);
        yield (0,_csHelper__WEBPACK_IMPORTED_MODULE_0__.storeSelected)(bx, request);
        console.log(bx);
    }
    resp();
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY1MxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL2NzSGVscGVyLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9jUzEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGxldCBzdG9yZVNlbGVjdGVkID0gKGJveCwgcmVxdWVzdCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coXCIgaW5zaWRlIGNzIGhlbHBlciBcIik7XG4gICAgbGV0IGJ4ID0gQXJyYXkuZnJvbShbLi4uYm94XSk7XG4gICAgbGV0IHN5bmMgPSB0cnVlO1xuICAgIGxldCByZXMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcInN0b3JlXCIpO1xuICAgIGlmICghcmVzIHx8ICFyZXMuc3RvcmUpIHtcbiAgICAgICAgcmVzID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwic3RvcmVcIik7XG4gICAgICAgIHN5bmMgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCIgaW5zaWRlIGNzIGhlbHBlciAyXCIsIHJlcyk7XG4gICAgbGV0IHBhZ2VQcmVzZW50ID0gZmFsc2U7XG4gICAgbGV0IHBhZ2VVcmwgPSByZXF1ZXN0LmV2LnBhZ2VVcmw7XG4gICAgbGV0IGlkeDtcbiAgICBpZiAocmVzLnN0b3JlW3BhZ2VVcmxdKSB7XG4gICAgICAgIHBhZ2VQcmVzZW50ID0gdHJ1ZTtcbiAgICAgICAgaWR4ID0gcmVzLnN0b3JlW3BhZ2VVcmxdLmlkeDtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgICBpZHggPSAwO1xuICAgIGNvbnNvbGUubG9nKFwiIGluc2lkZSBjcyBoZWxwZXIgM1wiKTtcbiAgICBieC5mb3JFYWNoKChkaXYsIGlkKSA9PiB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBTdHJpbmcoaWR4ICsgMSkgKyBTdHJpbmcoaWQpKTtcbiAgICAgICAgZGl2LmRhdGFzZXRbXCJncm91cFwiXSA9IFN0cmluZyhpZHggKyAxKTtcbiAgICB9KTtcbiAgICBsZXQgYnhJbmZvID0gYngubWFwKCh2YWwsIGlkKSA9PiB7XG4gICAgICAgIHJldHVybiB7IGlkOiB2YWwuaWQsIGdyb3VwOiB2YWwuZGF0YXNldC5ncm91cCB9O1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiIGluc2lkZSBjcyBoZWxwZXIgNFwiKTtcbiAgICBsZXQgdG9CZVN0b3JlZCA9IHt9O1xuICAgIGlmIChwYWdlUHJlc2VudCkge1xuICAgICAgICB0b0JlU3RvcmVkW3BhZ2VVcmxdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXMuc3RvcmVbcGFnZVVybF0pLCB7IFtpZHggKyAxXTogYnhJbmZvLCBcImlkeFwiOiBpZHggKyAxIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3JpbmcgYm94ZXMgaW4gdGhlIHN0b3JlIFwiLCB0b0JlU3RvcmVkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRvQmVTdG9yZWRbcGFnZVVybF0gPSB7IFwiaWR4XCI6IGlkeCArIDEsIFtpZHggKyAxXTogYnhJbmZvIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RvcmluZyBib3hlcyBpbiB0aGUgc3RvcmUgXCIsIHRvQmVTdG9yZWQpO1xuICAgIH1cbiAgICBpZiAoc3luYylcbiAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBcInN0b3JlXCI6IHRvQmVTdG9yZWQgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcInN0b3JlXCIpLnRoZW4oKHZhbCkgPT4gY29uc29sZS5sb2coXCJTdG9yZWQgc3luYyBvYmpcIiwgdmFsLnN0b3JlLCB2YWwuc3RvcmVbcGFnZVVybF1baWR4ICsgMV1bMF0uaWQpKTtcbiAgICAgICAgfSk7XG4gICAgZWxzZVxuICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBcInN0b3JlXCI6IHRvQmVTdG9yZWQgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJzdG9yZVwiKS50aGVuKCh2YWwpID0+IGNvbnNvbGUubG9nKFwiIHN0b3JlZCAgbG9jYWwgb2JqIFwiLCB2YWwuc3RvcmUsIHZhbC5zdG9yZVtwYWdlVXJsXVtpZHggKyAxXVswXS5pZCkpO1xuICAgICAgICB9KTtcbn0pO1xuZXhwb3J0IGxldCBjaGVja0lmSW5rZWQgPSAoZXZlbnQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGxldCByZXMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcInN0b3JlXCIpO1xuICAgIGlmICghcmVzIHx8ICFyZXMuc3RvcmUpIHtcbiAgICAgICAgcmVzID0geWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwic3RvcmVcIik7XG4gICAgfVxuICAgIGxldCBlbCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zb2xlLmxvZyhcInRhcmdldCBlbGVtZW50IFwiLCBlbC5kYXRhc2V0Lmdyb3VwLCBlbC5pZCk7XG4gICAgY29uc29sZS5sb2coXCJzdG9yZWQgb2JqZWN0IFwiLCByZXMuc3RvcmUpO1xuICAgIGNvbnNvbGUubG9nKFwia2V5aW5nIHBhZ2UgdXJsIGZvciByZWNvcmRzIFwiLCByZXMuc3RvcmVbd2luZG93LmxvY2F0aW9uLmhyZWZdKTtcbiAgICBsZXQgcmVjb3JkID0gcmVzLnN0b3JlW3dpbmRvdy5sb2NhdGlvbi5ocmVmXTtcbiAgICBpZiAoIXJlY29yZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghcmVjb3JkW2VsLmRhdGFzZXQuZ3JvdXBdKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgbGV0IGdyb3VwID0gcmVjb3JkW2VsLmRhdGFzZXQuZ3JvdXBdO1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRpdiA9IGdyb3VwW2ldO1xuICAgICAgICBjb25zb2xlLmxvZyhcImVsID0+XCIsIGVsLmlkLCBcIiBcIiwgZWwuZGF0YXNldC5ncm91cCwgXCIgZGl2ID0+XCIsIGRpdi5pZCk7XG4gICAgICAgIGlmIChkaXYuaWQgPT09IGVsLmlkKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGNoZWNrSWZJbmtlZCwgc3RvcmVTZWxlY3RlZCB9IGZyb20gXCIuL2NzSGVscGVyXCI7XG4vLy0tLS0tLS0gdW5saW5nIHBhbGxldGUgLS0tLS0tLS0tLS0tLVxubGV0IHVubGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1bmxpbmspO1xudW5saW5rLmlubmVySFRNTCA9IFwiVW5saW5rXCI7XG51bmxpbmsuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbnVubGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiBncmV5XCI7XG51bmxpbmsuaWQgPSBcInVubGlua1wiO1xudW5saW5rLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xudW5saW5rLnN0eWxlLnRvcCA9IFwiMTBweFwiO1xudW5saW5rLnN0eWxlLmxlZnQgPSBcIjEwcHhcIjtcbnVubGluay5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG51bmxpbmsuc3R5bGUuekluZGV4ID0gXCIxMDBcIjtcbnVubGluay5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbnVubGluay5zdHlsZS53aWR0aCA9IFwiMzAwcHhcIjtcbnVubGluay5zdHlsZS5oZWlnaHQgPSBcIjMwMHB4XCI7XG51bmxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICAgIGxldCBlbCA9IGV2LnRhcmdldDtcbiAgICBsZXQgZWxUb0JlUmVtb3ZlZCA9IGVsLmRhdGFzZXQucmVtb3ZlO1xuICAgIGNvbnNvbGUubG9nKFwiIFJlbW92aW5nIFwiLCBlbFRvQmVSZW1vdmVkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbFRvQmVSZW1vdmVkKSk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbFRvQmVSZW1vdmVkKSk7XG59KTtcbmNvbnNvbGUubG9nKFwibG9hZGVkIGNzXCIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgLy9jb25zb2xlLmxvZygoZXYudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KS5kYXRhc2V0Lmdyb3VwLChldi50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpLmlkKVxuICAgIGxldCBmb3VuZCA9IHlpZWxkIGNoZWNrSWZJbmtlZChldik7XG4gICAgY29uc29sZS5sb2coXCJlbGVtZW50IGZvdW5kOiBcIiwgZm91bmQpO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgICB1bmxpbmsuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgdW5saW5rLmRhdGFzZXRbXCJyZW1vdmVcIl0gPSBldi50YXJnZXQuaWQ7XG4gICAgfVxufSkpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgcmVzcCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZS5sb2coXCIgcmVjaWV2ZWQgZGV0YWlsc1wiKTtcbiAgICBjb25zdCByZXEgPSByZXF1ZXN0O1xuICAgIGNvbnNvbGUubG9nKHJlcSk7XG4gICAgY29uc29sZS5sb2cocmVxLmV2Lm1lbnVJdGVtSWQgPT09IFwiaW5rSXRcIik7XG4gICAgaWYgKHJlcS5ldi5tZW51SXRlbUlkID09PSBcImlua0l0XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgZmV0Y2hpbmcgVUkgY29udHJvbHMgZGF0YSBmb3JtIGNocm9tZSBzdG9yYWdlXCIpO1xuICAgICAgICBsZXQgU3RvcmFnZSA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFwiY29udHJvbHNcIik7XG4gICAgICAgIGlmICghU3RvcmFnZSB8fCAhU3RvcmFnZS5jb250cm9scykge1xuICAgICAgICAgICAgU3RvcmFnZSA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcImNvbnRyb2xzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBDb250cm9scyA9IFN0b3JhZ2UuY29udHJvbHM7XG4gICAgICAgIGxldCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XG4gICAgICAgIGxldCBybmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XG4gICAgICAgIGxldCBib3hlcyA9IHJuZ2UuZ2V0Q2xpZW50UmVjdHMoKTtcbiAgICAgICAgbGV0IG5vZGVzID0gcm5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICAgICAgLy89KG5vZGVzIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCI7XG4gICAgICAgIGxldCB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgICAgIGxldCB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICAgIGxldCBieCA9IE9iamVjdC5lbnRyaWVzKGJveGVzKS5tYXAoKHZhbCwgaWQpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIgdmFsIFwiLCB2YWwpO1xuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib25lXCIpO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnRvcCA9ICh2YWxbMV0ueSArIHkpICsgXCJweFwiO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSAodmFsWzFdLnggKyB4KSArIFwicHhcIjtcbiAgICAgICAgICAgIC8vZGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiXG4gICAgICAgICAgICBkaXYuc3R5bGUud2lkdGggPSB2YWxbMV0ud2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICBkaXYuc3R5bGUuaGVpZ2h0ID0gdmFsWzFdLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSBcIjEwMFwiO1xuICAgICAgICAgICAgLy8tLS0gY3VzdG9taXppbmcgdGhlIGlua2VkIHBvcnRpb24gLS0tLS1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29udHJvbHMgXCIsIENvbnRyb2xzLCBDb250cm9scy5zdHlsZSA9PT0gXCJ1bmRlcmxpbmVcIiwgQ29udHJvbHMuc3R5bGUgPT09IFwiYm94XCIpO1xuICAgICAgICAgICAgaWYgKENvbnRyb2xzLnN0eWxlID09PSBcImJveFwiKSB7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmJvcmRlcldpZHRoID0gKE51bWJlcihDb250cm9scy50aGlja25lc3MpICogMSkgKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmJvcmRlckNvbG9yID0gQ29udHJvbHMuY29sb3JQaWNrZXI7XG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmJvcmRlclN0eWxlID0gQ29udHJvbHMubGluZVN0eWxlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIGJveGluZyBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChDb250cm9scy5zdHlsZSA9PT0gXCJ1bmRlcmxpbmVcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIHVuZGVybGluaW5nIFwiLCBDb250cm9scy5saW5lU3R5bGUpO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA9IChOdW1iZXIoQ29udHJvbHMudGhpY2tuZXNzKSAqIDEpICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IENvbnRyb2xzLmNvbG9yUGlja2VyO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5ib3JkZXJCb3R0b21TdHlsZSA9IENvbnRyb2xzLmxpbmVTdHlsZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJvdG90bWJvcmRlciAgXCIsIGRpdi5zdHlsZS5ib3JkZXJCb3R0b20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgKGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCIgYjQgc3RvcmluZyBieCBhcnJheSBcIiwgYngpO1xuICAgICAgICB5aWVsZCBzdG9yZVNlbGVjdGVkKGJ4LCByZXF1ZXN0KTtcbiAgICAgICAgY29uc29sZS5sb2coYngpO1xuICAgIH1cbiAgICByZXNwKCk7XG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=