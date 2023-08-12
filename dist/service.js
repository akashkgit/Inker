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
    chrome.storage.session.setAccessLevel({ accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS" });
    let sync = yield chrome.storage.sync.get("sync");
    if (sync.sync === true) {
    }
    else if (sync.sync === false) {
    }
    // the above two cases means that the data is already in the storage. So, these if elses are only for popup display purpose
    // so if data is already there, it wil be loaded when popup is popened to show to the user
    // if the datais not there...just we are insert default value into storage so that  we can handle cases if user does not open the opopup
    /// but for the above two cases even  if the user  does not open the popup, the data is alredy there in the storage
    else {
        console.log(" loading data for first time ", sync.sync, sync);
        let payLoad = {
            "lineStyle": "dotted",
            "colorPicker": "black",
            "thickness": 1,
            "sync": true,
            "keepInks": false,
        };
        chrome.storage.sync.set({ "controls": payLoad, "sync": true, "store": {}, auth: { "user": "Not signed in!", "selectOption": "currentUser" } });
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
    // console.log(" the frame id is ",ev.frameId)
    console.log(ev.menuItemId);
    const chosenId = ev.menuItemId;
    const [tab] = yield chrome.tabs.query({ active: true, currentWindow: true });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FFdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoZXYpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zZXNzaW9uLnNldEFjY2Vzc0xldmVsKHsgYWNjZXNzTGV2ZWw6IFwiVFJVU1RFRF9BTkRfVU5UUlVTVEVEX0NPTlRFWFRTXCIgfSk7XG4gICAgbGV0IHN5bmMgPSB5aWVsZCBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChcInN5bmNcIik7XG4gICAgaWYgKHN5bmMuc3luYyA9PT0gdHJ1ZSkge1xuICAgIH1cbiAgICBlbHNlIGlmIChzeW5jLnN5bmMgPT09IGZhbHNlKSB7XG4gICAgfVxuICAgIC8vIHRoZSBhYm92ZSB0d28gY2FzZXMgbWVhbnMgdGhhdCB0aGUgZGF0YSBpcyBhbHJlYWR5IGluIHRoZSBzdG9yYWdlLiBTbywgdGhlc2UgaWYgZWxzZXMgYXJlIG9ubHkgZm9yIHBvcHVwIGRpc3BsYXkgcHVycG9zZVxuICAgIC8vIHNvIGlmIGRhdGEgaXMgYWxyZWFkeSB0aGVyZSwgaXQgd2lsIGJlIGxvYWRlZCB3aGVuIHBvcHVwIGlzIHBvcGVuZWQgdG8gc2hvdyB0byB0aGUgdXNlclxuICAgIC8vIGlmIHRoZSBkYXRhaXMgbm90IHRoZXJlLi4uanVzdCB3ZSBhcmUgaW5zZXJ0IGRlZmF1bHQgdmFsdWUgaW50byBzdG9yYWdlIHNvIHRoYXQgIHdlIGNhbiBoYW5kbGUgY2FzZXMgaWYgdXNlciBkb2VzIG5vdCBvcGVuIHRoZSBvcG9wdXBcbiAgICAvLy8gYnV0IGZvciB0aGUgYWJvdmUgdHdvIGNhc2VzIGV2ZW4gIGlmIHRoZSB1c2VyICBkb2VzIG5vdCBvcGVuIHRoZSBwb3B1cCwgdGhlIGRhdGEgaXMgYWxyZWR5IHRoZXJlIGluIHRoZSBzdG9yYWdlXG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIGxvYWRpbmcgZGF0YSBmb3IgZmlyc3QgdGltZSBcIiwgc3luYy5zeW5jLCBzeW5jKTtcbiAgICAgICAgbGV0IHBheUxvYWQgPSB7XG4gICAgICAgICAgICBcImxpbmVTdHlsZVwiOiBcImRvdHRlZFwiLFxuICAgICAgICAgICAgXCJjb2xvclBpY2tlclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICBcInRoaWNrbmVzc1wiOiAxLFxuICAgICAgICAgICAgXCJzeW5jXCI6IHRydWUsXG4gICAgICAgICAgICBcImtlZXBJbmtzXCI6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFwiY29udHJvbHNcIjogcGF5TG9hZCwgXCJzeW5jXCI6IHRydWUsIFwic3RvcmVcIjoge30sIGF1dGg6IHsgXCJ1c2VyXCI6IFwiTm90IHNpZ25lZCBpbiFcIiwgXCJzZWxlY3RPcHRpb25cIjogXCJjdXJyZW50VXNlclwiIH0gfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiIGluc3RhbGxlZCBcIik7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJJbmtlclwiLFxuICAgICAgICB0aXRsZTogXCJJbmtlclwiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdXG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJzYXZlVG9Eb2NcIixcbiAgICAgICAgdGl0bGU6IFwiU2F2ZSB0byBEb2NcIixcbiAgICAgICAgY29udGV4dHM6IFtcImFsbFwiXSxcbiAgICAgICAgcGFyZW50SWQ6IFwiSW5rZXJcIlxuICAgIH0pO1xuICAgIGNocm9tZS5jb250ZXh0TWVudXMuY3JlYXRlKHtcbiAgICAgICAgaWQ6IFwiaW5rSXRcIixcbiAgICAgICAgdGl0bGU6IFwiSW5rIEl0IVwiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdLFxuICAgICAgICBwYXJlbnRJZDogXCJJbmtlclwiXG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJ1bklua1wiLFxuICAgICAgICB0aXRsZTogXCJVbi1JbmtcIixcbiAgICAgICAgY29udGV4dHM6IFtcImFsbFwiXSxcbiAgICAgICAgcGFyZW50SWQ6IFwiSW5rZXJcIlxuICAgIH0pO1xufSkpO1xuY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGV2KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhlIGZyYW1lIGlkIGlzIFwiLGV2LmZyYW1lSWQpXG4gICAgY29uc29sZS5sb2coZXYubWVudUl0ZW1JZCk7XG4gICAgY29uc3QgY2hvc2VuSWQgPSBldi5tZW51SXRlbUlkO1xuICAgIGNvbnN0IFt0YWJdID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG4gICAgY29uc29sZS5sb2codGFiLmlkKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgeyBldiB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiICEhISBFUlJPUlwiKTtcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgLy9jb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XG4gICAgLy9jb25zb2xlLmxvZyhldi5zZWxlY3Rpb25UZXh0KVxufSkpO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NlcnZpY2UudHN4XCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=