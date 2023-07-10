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
let unlinkSingle = document.createElement("p");
unlinkSingle.innerHTML = "Unlink this";
unlinkSingle.style.border = "1px solid black";
unlinkSingle.style.backgroundColor = " grey";
unlinkSingle.id = "unlink-single";
unlinkSingle.style.width = "100%";
unlinkSingle.style.height = "40%";
unlinkSingle.style.display = 'inline';
unlinkSingle.addEventListener("click", (ev) => {
    let el = ev.target;
    let elToBeRemoved = el.dataset.remove;
    console.log(" Removing ", elToBeRemoved, document.getElementById(elToBeRemoved));
    document.body.removeChild(document.getElementById(elToBeRemoved));
});
let unlinkFull = document.createElement("p");
unlinkFull.innerHTML = "Unlink Fully";
unlinkFull.style.border = "1px solid black";
unlinkFull.style.backgroundColor = " grey";
unlinkFull.style.width = "100%";
unlinkFull.style.height = "40%";
unlinkFull.style.display = 'inline';
unlinkFull.id = "unlinkFull";
unlinkFull.addEventListener("click", (ev) => {
    let el = ev.target;
    let elToBeRemoved = el.dataset.remove;
    console.log(" Removing ", elToBeRemoved, document.body.querySelectorAll(`div[data-group="${elToBeRemoved}"]`));
    //document.body.removeChild(document.getElementByAtt);
    let els = document.body.querySelectorAll(`div[data-group="${elToBeRemoved}"]`);
    els.forEach((val, id) => {
        console.log("removing ....", val.id);
        document.body.removeChild(val);
    });
});
let pdiv = document.createElement("div");
pdiv.appendChild(unlinkFull);
pdiv.appendChild(unlinkSingle);
document.body.appendChild(pdiv);
pdiv.style.position = "absolute";
pdiv.style.top = "10px";
pdiv.style.left = "10px";
pdiv.style.display = "none";
pdiv.style.zIndex = "100";
pdiv.style.opacity = "0.5";
pdiv.style.width = "200px";
pdiv.style.height = "100px";
pdiv.style.position = "fixed";
console.log("loaded cs");
document.addEventListener("click", (ev) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log((ev.target as HTMLDivElement).dataset.group,(ev.target as HTMLDivElement).id)
    let found = yield (0,_csHelper__WEBPACK_IMPORTED_MODULE_0__.checkIfInked)(ev);
    console.log("element found: ", found);
    if (found) {
        pdiv.style.display = "block";
        unlinkSingle.dataset["remove"] = ev.target.id;
        unlinkFull.dataset["remove"] = ev.target.dataset.group;
    }
}));
//----------------------------
chrome.runtime.onMessage.addListener((request, sender, resp) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(" recieved details");
    const req = request;
    console.log(req);
    console.log(req.ev.menuItemId === "unInk");
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
    else if (req.ev.menuItemId === "unInk") {
        let el = document.getElementById("unlinkFull");
        let elToBeRemoved = el.dataset.remove;
        console.log(" Removing ", elToBeRemoved, document.body.querySelectorAll(`div[data-group="${elToBeRemoved}"]`));
        //document.body.removeChild(document.getElementByAtt);
        let els = document.body.querySelectorAll(`div[data-group="${elToBeRemoved}"]`);
        els.forEach((val, id) => {
            console.log("removing ....", val.id);
            document.body.removeChild(val);
        });
        let store = yield chrome.storage.sync.get("store");
        let sync = true;
        if (!store || !store.store) {
            store = yield chrome.storage.local.get("store");
            sync = false;
        }
        console.log(" deleting ", elToBeRemoved, " from storage sync? ", sync, window.location.href, " is the key ");
        delete store.store[window.location.href][elToBeRemoved];
        if (sync)
            yield chrome.storage.sync.set(store).then(() => chrome.storage.sync.get("store").then((val) => console.log(" after deletion ", val)));
        else
            yield chrome.storage.local.set(store).then(() => chrome.storage.local.get("store").then((val) => console.log(" after deletion ", val)));
    }
    resp();
}));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY1MxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9jc0hlbHBlci50c3giLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vY1MxLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBsZXQgc3RvcmVTZWxlY3RlZCA9IChib3gsIHJlcXVlc3QpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnNvbGUubG9nKFwiIGluc2lkZSBjcyBoZWxwZXIgXCIpO1xuICAgIGxldCBieCA9IEFycmF5LmZyb20oWy4uLmJveF0pO1xuICAgIGxldCBzeW5jID0gdHJ1ZTtcbiAgICBsZXQgcmVzID0geWllbGQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXCJzdG9yZVwiKTtcbiAgICBpZiAoIXJlcyB8fCAhcmVzLnN0b3JlKSB7XG4gICAgICAgIHJlcyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInN0b3JlXCIpO1xuICAgICAgICBzeW5jID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiIGluc2lkZSBjcyBoZWxwZXIgMlwiLCByZXMpO1xuICAgIGxldCBwYWdlUHJlc2VudCA9IGZhbHNlO1xuICAgIGxldCBwYWdlVXJsID0gcmVxdWVzdC5ldi5wYWdlVXJsO1xuICAgIGxldCBpZHg7XG4gICAgaWYgKHJlcy5zdG9yZVtwYWdlVXJsXSkge1xuICAgICAgICBwYWdlUHJlc2VudCA9IHRydWU7XG4gICAgICAgIGlkeCA9IHJlcy5zdG9yZVtwYWdlVXJsXS5pZHg7XG4gICAgfVxuICAgIGVsc2VcbiAgICAgICAgaWR4ID0gMDtcbiAgICBjb25zb2xlLmxvZyhcIiBpbnNpZGUgY3MgaGVscGVyIDNcIik7XG4gICAgYnguZm9yRWFjaCgoZGl2LCBpZCkgPT4ge1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgU3RyaW5nKGlkeCArIDEpICsgU3RyaW5nKGlkKSk7XG4gICAgICAgIGRpdi5kYXRhc2V0W1wiZ3JvdXBcIl0gPSBTdHJpbmcoaWR4ICsgMSk7XG4gICAgfSk7XG4gICAgbGV0IGJ4SW5mbyA9IGJ4Lm1hcCgodmFsLCBpZCkgPT4ge1xuICAgICAgICByZXR1cm4geyBpZDogdmFsLmlkLCBncm91cDogdmFsLmRhdGFzZXQuZ3JvdXAgfTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIiBpbnNpZGUgY3MgaGVscGVyIDRcIik7XG4gICAgbGV0IHRvQmVTdG9yZWQgPSB7fTtcbiAgICBpZiAocGFnZVByZXNlbnQpIHtcbiAgICAgICAgdG9CZVN0b3JlZFtwYWdlVXJsXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzLnN0b3JlW3BhZ2VVcmxdKSwgeyBbaWR4ICsgMV06IGJ4SW5mbywgXCJpZHhcIjogaWR4ICsgMSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9yaW5nIGJveGVzIGluIHRoZSBzdG9yZSBcIiwgdG9CZVN0b3JlZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0b0JlU3RvcmVkW3BhZ2VVcmxdID0geyBcImlkeFwiOiBpZHggKyAxLCBbaWR4ICsgMV06IGJ4SW5mbyB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0b3JpbmcgYm94ZXMgaW4gdGhlIHN0b3JlIFwiLCB0b0JlU3RvcmVkKTtcbiAgICB9XG4gICAgaWYgKHN5bmMpXG4gICAgICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgXCJzdG9yZVwiOiB0b0JlU3RvcmVkIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXCJzdG9yZVwiKS50aGVuKCh2YWwpID0+IGNvbnNvbGUubG9nKFwiU3RvcmVkIHN5bmMgb2JqXCIsIHZhbC5zdG9yZSwgdmFsLnN0b3JlW3BhZ2VVcmxdW2lkeCArIDFdWzBdLmlkKSk7XG4gICAgICAgIH0pO1xuICAgIGVsc2VcbiAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgXCJzdG9yZVwiOiB0b0JlU3RvcmVkIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwic3RvcmVcIikudGhlbigodmFsKSA9PiBjb25zb2xlLmxvZyhcIiBzdG9yZWQgIGxvY2FsIG9iaiBcIiwgdmFsLnN0b3JlLCB2YWwuc3RvcmVbcGFnZVVybF1baWR4ICsgMV1bMF0uaWQpKTtcbiAgICAgICAgfSk7XG59KTtcbmV4cG9ydCBsZXQgY2hlY2tJZklua2VkID0gKGV2ZW50KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgcmVzID0geWllbGQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXCJzdG9yZVwiKTtcbiAgICBpZiAoIXJlcyB8fCAhcmVzLnN0b3JlKSB7XG4gICAgICAgIHJlcyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInN0b3JlXCIpO1xuICAgIH1cbiAgICBsZXQgZWwgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc29sZS5sb2coXCJ0YXJnZXQgZWxlbWVudCBcIiwgZWwuZGF0YXNldC5ncm91cCwgZWwuaWQpO1xuICAgIGNvbnNvbGUubG9nKFwic3RvcmVkIG9iamVjdCBcIiwgcmVzLnN0b3JlKTtcbiAgICBjb25zb2xlLmxvZyhcImtleWluZyBwYWdlIHVybCBmb3IgcmVjb3JkcyBcIiwgcmVzLnN0b3JlW3dpbmRvdy5sb2NhdGlvbi5ocmVmXSk7XG4gICAgbGV0IHJlY29yZCA9IHJlcy5zdG9yZVt3aW5kb3cubG9jYXRpb24uaHJlZl07XG4gICAgaWYgKCFyZWNvcmQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXJlY29yZFtlbC5kYXRhc2V0Lmdyb3VwXSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBncm91cCA9IHJlY29yZFtlbC5kYXRhc2V0Lmdyb3VwXTtcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBkaXYgPSBncm91cFtpXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlbCA9PlwiLCBlbC5pZCwgXCIgXCIsIGVsLmRhdGFzZXQuZ3JvdXAsIFwiIGRpdiA9PlwiLCBkaXYuaWQpO1xuICAgICAgICBpZiAoZGl2LmlkID09PSBlbC5pZClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjaGVja0lmSW5rZWQsIHN0b3JlU2VsZWN0ZWQgfSBmcm9tIFwiLi9jc0hlbHBlclwiO1xuLy8tLS0tLS0tIHVubGluZyBwYWxsZXRlIC0tLS0tLS0tLS0tLS1cbmxldCB1bmxpbmtTaW5nbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnVubGlua1NpbmdsZS5pbm5lckhUTUwgPSBcIlVubGluayB0aGlzXCI7XG51bmxpbmtTaW5nbGUuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgYmxhY2tcIjtcbnVubGlua1NpbmdsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiBncmV5XCI7XG51bmxpbmtTaW5nbGUuaWQgPSBcInVubGluay1zaW5nbGVcIjtcbnVubGlua1NpbmdsZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xudW5saW5rU2luZ2xlLnN0eWxlLmhlaWdodCA9IFwiNDAlXCI7XG51bmxpbmtTaW5nbGUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xudW5saW5rU2luZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgICBsZXQgZWwgPSBldi50YXJnZXQ7XG4gICAgbGV0IGVsVG9CZVJlbW92ZWQgPSBlbC5kYXRhc2V0LnJlbW92ZTtcbiAgICBjb25zb2xlLmxvZyhcIiBSZW1vdmluZyBcIiwgZWxUb0JlUmVtb3ZlZCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxUb0JlUmVtb3ZlZCkpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxUb0JlUmVtb3ZlZCkpO1xufSk7XG5sZXQgdW5saW5rRnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xudW5saW5rRnVsbC5pbm5lckhUTUwgPSBcIlVubGluayBGdWxseVwiO1xudW5saW5rRnVsbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibGFja1wiO1xudW5saW5rRnVsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiBncmV5XCI7XG51bmxpbmtGdWxsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG51bmxpbmtGdWxsLnN0eWxlLmhlaWdodCA9IFwiNDAlXCI7XG51bmxpbmtGdWxsLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbnVubGlua0Z1bGwuaWQgPSBcInVubGlua0Z1bGxcIjtcbnVubGlua0Z1bGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICAgIGxldCBlbCA9IGV2LnRhcmdldDtcbiAgICBsZXQgZWxUb0JlUmVtb3ZlZCA9IGVsLmRhdGFzZXQucmVtb3ZlO1xuICAgIGNvbnNvbGUubG9nKFwiIFJlbW92aW5nIFwiLCBlbFRvQmVSZW1vdmVkLCBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdltkYXRhLWdyb3VwPVwiJHtlbFRvQmVSZW1vdmVkfVwiXWApKTtcbiAgICAvL2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5QXR0KTtcbiAgICBsZXQgZWxzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKGBkaXZbZGF0YS1ncm91cD1cIiR7ZWxUb0JlUmVtb3ZlZH1cIl1gKTtcbiAgICBlbHMuZm9yRWFjaCgodmFsLCBpZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92aW5nIC4uLi5cIiwgdmFsLmlkKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh2YWwpO1xuICAgIH0pO1xufSk7XG5sZXQgcGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wZGl2LmFwcGVuZENoaWxkKHVubGlua0Z1bGwpO1xucGRpdi5hcHBlbmRDaGlsZCh1bmxpbmtTaW5nbGUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwZGl2KTtcbnBkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5wZGl2LnN0eWxlLnRvcCA9IFwiMTBweFwiO1xucGRpdi5zdHlsZS5sZWZ0ID0gXCIxMHB4XCI7XG5wZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbnBkaXYuc3R5bGUuekluZGV4ID0gXCIxMDBcIjtcbnBkaXYuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG5wZGl2LnN0eWxlLndpZHRoID0gXCIyMDBweFwiO1xucGRpdi5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XG5wZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuY29uc29sZS5sb2coXCJsb2FkZWQgY3NcIik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAvL2NvbnNvbGUubG9nKChldi50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpLmRhdGFzZXQuZ3JvdXAsKGV2LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkuaWQpXG4gICAgbGV0IGZvdW5kID0geWllbGQgY2hlY2tJZklua2VkKGV2KTtcbiAgICBjb25zb2xlLmxvZyhcImVsZW1lbnQgZm91bmQ6IFwiLCBmb3VuZCk7XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHBkaXYuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgdW5saW5rU2luZ2xlLmRhdGFzZXRbXCJyZW1vdmVcIl0gPSBldi50YXJnZXQuaWQ7XG4gICAgICAgIHVubGlua0Z1bGwuZGF0YXNldFtcInJlbW92ZVwiXSA9IGV2LnRhcmdldC5kYXRhc2V0Lmdyb3VwO1xuICAgIH1cbn0pKTtcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHJlc3ApID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnNvbGUubG9nKFwiIHJlY2lldmVkIGRldGFpbHNcIik7XG4gICAgY29uc3QgcmVxID0gcmVxdWVzdDtcbiAgICBjb25zb2xlLmxvZyhyZXEpO1xuICAgIGNvbnNvbGUubG9nKHJlcS5ldi5tZW51SXRlbUlkID09PSBcInVuSW5rXCIpO1xuICAgIGlmIChyZXEuZXYubWVudUl0ZW1JZCA9PT0gXCJpbmtJdFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIGZldGNoaW5nIFVJIGNvbnRyb2xzIGRhdGEgZm9ybSBjaHJvbWUgc3RvcmFnZVwiKTtcbiAgICAgICAgbGV0IFN0b3JhZ2UgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcImNvbnRyb2xzXCIpO1xuICAgICAgICBpZiAoIVN0b3JhZ2UgfHwgIVN0b3JhZ2UuY29udHJvbHMpIHtcbiAgICAgICAgICAgIFN0b3JhZ2UgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJjb250cm9sc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgQ29udHJvbHMgPSBTdG9yYWdlLmNvbnRyb2xzO1xuICAgICAgICBsZXQgc2VsID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBsZXQgcm5nZSA9IHNlbC5nZXRSYW5nZUF0KDApO1xuICAgICAgICBsZXQgYm94ZXMgPSBybmdlLmdldENsaWVudFJlY3RzKCk7XG4gICAgICAgIGxldCBub2RlcyA9IHJuZ2UuY29tbW9uQW5jZXN0b3JDb250YWluZXI7XG4gICAgICAgIC8vPShub2RlcyBhcyBIVE1MRWxlbWVudCkuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiO1xuICAgICAgICBsZXQgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgICAgICBsZXQgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICBsZXQgYnggPSBPYmplY3QuZW50cmllcyhib3hlcykubWFwKCh2YWwsIGlkKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIHZhbCBcIiwgdmFsKTtcbiAgICAgICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9uZVwiKTtcbiAgICAgICAgICAgIGRpdi5zdHlsZS50b3AgPSAodmFsWzFdLnkgKyB5KSArIFwicHhcIjtcbiAgICAgICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gKHZhbFsxXS54ICsgeCkgKyBcInB4XCI7XG4gICAgICAgICAgICAvL2Rpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIlxuICAgICAgICAgICAgZGl2LnN0eWxlLndpZHRoID0gdmFsWzFdLndpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmhlaWdodCA9IHZhbFsxXS5oZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICBkaXYuc3R5bGUuekluZGV4ID0gXCIxMDBcIjtcbiAgICAgICAgICAgIC8vLS0tIGN1c3RvbWl6aW5nIHRoZSBpbmtlZCBwb3J0aW9uIC0tLS0tXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRyb2xzIFwiLCBDb250cm9scywgQ29udHJvbHMuc3R5bGUgPT09IFwidW5kZXJsaW5lXCIsIENvbnRyb2xzLnN0eWxlID09PSBcImJveFwiKTtcbiAgICAgICAgICAgIGlmIChDb250cm9scy5zdHlsZSA9PT0gXCJib3hcIikge1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5ib3JkZXJXaWR0aCA9IChOdW1iZXIoQ29udHJvbHMudGhpY2tuZXNzKSAqIDEpICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5ib3JkZXJDb2xvciA9IENvbnRyb2xzLmNvbG9yUGlja2VyO1xuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5ib3JkZXJTdHlsZSA9IENvbnRyb2xzLmxpbmVTdHlsZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBib3hpbmcgXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQ29udHJvbHMuc3R5bGUgPT09IFwidW5kZXJsaW5lXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiB1bmRlcmxpbmluZyBcIiwgQ29udHJvbHMubGluZVN0eWxlKTtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGggPSAoTnVtYmVyKENvbnRyb2xzLnRoaWNrbmVzcykgKiAxKSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSBDb250cm9scy5jb2xvclBpY2tlcjtcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUuYm9yZGVyQm90dG9tU3R5bGUgPSBDb250cm9scy5saW5lU3R5bGU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib3RvdG1ib3JkZXIgIFwiLCBkaXYuc3R5bGUuYm9yZGVyQm90dG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgIChkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIGI0IHN0b3JpbmcgYnggYXJyYXkgXCIsIGJ4KTtcbiAgICAgICAgeWllbGQgc3RvcmVTZWxlY3RlZChieCwgcmVxdWVzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJ4KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVxLmV2Lm1lbnVJdGVtSWQgPT09IFwidW5JbmtcIikge1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVubGlua0Z1bGxcIik7XG4gICAgICAgIGxldCBlbFRvQmVSZW1vdmVkID0gZWwuZGF0YXNldC5yZW1vdmU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIFJlbW92aW5nIFwiLCBlbFRvQmVSZW1vdmVkLCBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdltkYXRhLWdyb3VwPVwiJHtlbFRvQmVSZW1vdmVkfVwiXWApKTtcbiAgICAgICAgLy9kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUF0dCk7XG4gICAgICAgIGxldCBlbHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoYGRpdltkYXRhLWdyb3VwPVwiJHtlbFRvQmVSZW1vdmVkfVwiXWApO1xuICAgICAgICBlbHMuZm9yRWFjaCgodmFsLCBpZCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmluZyAuLi4uXCIsIHZhbC5pZCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHZhbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc3RvcmUgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcInN0b3JlXCIpO1xuICAgICAgICBsZXQgc3luYyA9IHRydWU7XG4gICAgICAgIGlmICghc3RvcmUgfHwgIXN0b3JlLnN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZSA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInN0b3JlXCIpO1xuICAgICAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIGRlbGV0aW5nIFwiLCBlbFRvQmVSZW1vdmVkLCBcIiBmcm9tIHN0b3JhZ2Ugc3luYz8gXCIsIHN5bmMsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLCBcIiBpcyB0aGUga2V5IFwiKTtcbiAgICAgICAgZGVsZXRlIHN0b3JlLnN0b3JlW3dpbmRvdy5sb2NhdGlvbi5ocmVmXVtlbFRvQmVSZW1vdmVkXTtcbiAgICAgICAgaWYgKHN5bmMpXG4gICAgICAgICAgICB5aWVsZCBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChzdG9yZSkudGhlbigoKSA9PiBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcInN0b3JlXCIpLnRoZW4oKHZhbCkgPT4gY29uc29sZS5sb2coXCIgYWZ0ZXIgZGVsZXRpb24gXCIsIHZhbCkpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgeWllbGQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHN0b3JlKS50aGVuKCgpID0+IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInN0b3JlXCIpLnRoZW4oKHZhbCkgPT4gY29uc29sZS5sb2coXCIgYWZ0ZXIgZGVsZXRpb24gXCIsIHZhbCkpKTtcbiAgICB9XG4gICAgcmVzcCgpO1xufSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9