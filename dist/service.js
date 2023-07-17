/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./service.tsx":
/*!*********************!*\
  !*** ./service.tsx ***!
  \*********************/
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
chrome.runtime.onInstalled.addListener((ev) => __awaiter(this, void 0, void 0, function* () {
    let sync = yield chrome.storage.sync.get("sync");
    if (sync.sync === true) {
    }
    else if (sync.sync === false) {
    }
    if (true) {
        console.log(" loading data for first time ", sync.sync, sync);
        let payLoad = {
            "lineStyle": "dotted",
            "colorPicker": "black",
            "thickness": "thickness",
            "sync": true
        };
        chrome.storage.sync.set({ "controls": payLoad, "sync": true });
    }
    console.log(" installed ");
    chrome.contextMenus.create({
        id: "Inker",
        title: "Inker",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "saveToDoc",
        title: "Save to Doc",
        contexts: ["all"],
        parentId: "Inker"
    });
    chrome.contextMenus.create({
        id: "inkIt",
        title: "Ink It!",
        contexts: ["all"],
        parentId: "Inker"
    });
    chrome.contextMenus.create({
        id: "unInk",
        title: "Un-Ink",
        contexts: ["all"],
        parentId: "Inker"
    });
    chrome.contextMenus.onClicked.addListener((ev) => __awaiter(this, void 0, void 0, function* () {
        console.log(" the frame id is ", ev.frameId);
        console.log(ev.menuItemId);
        const chosenId = ev.menuItemId;
        const [tab] = yield chrome.tabs.query({ active: true, lastFocusedWindow: true });
        console.log(tab.id);
        try {
            const response = yield chrome.tabs.sendMessage(tab.id, { ev });
        }
        catch (_a) {
            console.log(" !!! ERROR");
        }
        //console.log(response);
        //console.log("clicked");
        //console.log(ev.selectionText)
    }));
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./service.tsx"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FFakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoZXYpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgc3luYyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFwic3luY1wiKTtcbiAgICBpZiAoc3luYy5zeW5jID09PSB0cnVlKSB7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN5bmMuc3luYyA9PT0gZmFsc2UpIHtcbiAgICB9XG4gICAgaWYgKDEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgbG9hZGluZyBkYXRhIGZvciBmaXJzdCB0aW1lIFwiLCBzeW5jLnN5bmMsIHN5bmMpO1xuICAgICAgICBsZXQgcGF5TG9hZCA9IHtcbiAgICAgICAgICAgIFwibGluZVN0eWxlXCI6IFwiZG90dGVkXCIsXG4gICAgICAgICAgICBcImNvbG9yUGlja2VyXCI6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIFwidGhpY2tuZXNzXCI6IFwidGhpY2tuZXNzXCIsXG4gICAgICAgICAgICBcInN5bmNcIjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFwiY29udHJvbHNcIjogcGF5TG9hZCwgXCJzeW5jXCI6IHRydWUgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiIGluc3RhbGxlZCBcIik7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJJbmtlclwiLFxuICAgICAgICB0aXRsZTogXCJJbmtlclwiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdXG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJzYXZlVG9Eb2NcIixcbiAgICAgICAgdGl0bGU6IFwiU2F2ZSB0byBEb2NcIixcbiAgICAgICAgY29udGV4dHM6IFtcImFsbFwiXSxcbiAgICAgICAgcGFyZW50SWQ6IFwiSW5rZXJcIlxuICAgIH0pO1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6IFwiaW5rSXRcIixcbiAgICAgICAgdGl0bGU6IFwiSW5rIEl0IVwiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdLFxuICAgICAgICBwYXJlbnRJZDogXCJJbmtlclwiXG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJ1bklua1wiLFxuICAgICAgICB0aXRsZTogXCJVbi1JbmtcIixcbiAgICAgICAgY29udGV4dHM6IFtcImFsbFwiXSxcbiAgICAgICAgcGFyZW50SWQ6IFwiSW5rZXJcIlxuICAgIH0pO1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKChldikgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiB0aGUgZnJhbWUgaWQgaXMgXCIsIGV2LmZyYW1lSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhldi5tZW51SXRlbUlkKTtcbiAgICAgICAgY29uc3QgY2hvc2VuSWQgPSBldi5tZW51SXRlbUlkO1xuICAgICAgICBjb25zdCBbdGFiXSA9IHlpZWxkIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZSB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGFiLmlkKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7IGV2IH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIgISEhIEVSUk9SXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhldi5zZWxlY3Rpb25UZXh0KVxuICAgIH0pKTtcbn0pKTtcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zZXJ2aWNlLnRzeFwiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9