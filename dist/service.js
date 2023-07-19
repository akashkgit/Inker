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
    else {
        console.log(" loading data for first time ", sync.sync, sync);
        let payLoad = {
            "lineStyle": "dotted",
            "colorPicker": "black",
            "thickness": 1,
            "sync": true
        };
        chrome.storage.sync.set({ "controls": payLoad, "sync": true, "store": {} });
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
}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FFakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoZXYpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBsZXQgc3luYyA9IHlpZWxkIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFwic3luY1wiKTtcbiAgICBpZiAoc3luYy5zeW5jID09PSB0cnVlKSB7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN5bmMuc3luYyA9PT0gZmFsc2UpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIGxvYWRpbmcgZGF0YSBmb3IgZmlyc3QgdGltZSBcIiwgc3luYy5zeW5jLCBzeW5jKTtcbiAgICAgICAgbGV0IHBheUxvYWQgPSB7XG4gICAgICAgICAgICBcImxpbmVTdHlsZVwiOiBcImRvdHRlZFwiLFxuICAgICAgICAgICAgXCJjb2xvclBpY2tlclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBcInRoaWNrbmVzc1wiOiAxLFxuICAgICAgICAgICAgXCJzeW5jXCI6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBcImNvbnRyb2xzXCI6IHBheUxvYWQsIFwic3luY1wiOiB0cnVlLCBcInN0b3JlXCI6IHt9IH0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIiBpbnN0YWxsZWQgXCIpO1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6IFwiSW5rZXJcIixcbiAgICAgICAgdGl0bGU6IFwiSW5rZXJcIixcbiAgICAgICAgY29udGV4dHM6IFtcImFsbFwiXVxuICAgIH0pO1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6IFwic2F2ZVRvRG9jXCIsXG4gICAgICAgIHRpdGxlOiBcIlNhdmUgdG8gRG9jXCIsXG4gICAgICAgIGNvbnRleHRzOiBbXCJhbGxcIl0sXG4gICAgICAgIHBhcmVudElkOiBcIklua2VyXCJcbiAgICB9KTtcbiAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkOiBcImlua0l0XCIsXG4gICAgICAgIHRpdGxlOiBcIkluayBJdCFcIixcbiAgICAgICAgY29udGV4dHM6IFtcImFsbFwiXSxcbiAgICAgICAgcGFyZW50SWQ6IFwiSW5rZXJcIlxuICAgIH0pO1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6IFwidW5JbmtcIixcbiAgICAgICAgdGl0bGU6IFwiVW4tSW5rXCIsXG4gICAgICAgIGNvbnRleHRzOiBbXCJhbGxcIl0sXG4gICAgICAgIHBhcmVudElkOiBcIklua2VyXCJcbiAgICB9KTtcbn0pKTtcbmNocm9tZS5jb250ZXh0TWVudXMub25DbGlja2VkLmFkZExpc3RlbmVyKChldikgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnNvbGUubG9nKFwiIHRoZSBmcmFtZSBpZCBpcyBcIiwgZXYuZnJhbWVJZCk7XG4gICAgY29uc29sZS5sb2coZXYubWVudUl0ZW1JZCk7XG4gICAgY29uc3QgY2hvc2VuSWQgPSBldi5tZW51SXRlbUlkO1xuICAgIGNvbnN0IFt0YWJdID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGxhc3RGb2N1c2VkV2luZG93OiB0cnVlIH0pO1xuICAgIGNvbnNvbGUubG9nKHRhYi5pZCk7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHsgZXYgfSk7XG4gICAgfVxuICAgIGNhdGNoIChfYSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiAhISEgRVJST1JcIik7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIC8vY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgIC8vY29uc29sZS5sb2coZXYuc2VsZWN0aW9uVGV4dClcbn0pKTtcbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG5fX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zZXJ2aWNlLnRzeFwiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9