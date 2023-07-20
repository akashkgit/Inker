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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBRW5FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc2VydmljZS50c3giLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKGV2KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc2Vzc2lvbi5zZXRBY2Nlc3NMZXZlbCh7IGFjY2Vzc0xldmVsOiBcIlRSVVNURURfQU5EX1VOVFJVU1RFRF9DT05URVhUU1wiIH0pO1xuICAgIGxldCBzeW5jID0geWllbGQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoXCJzeW5jXCIpO1xuICAgIGlmIChzeW5jLnN5bmMgPT09IHRydWUpIHtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3luYy5zeW5jID09PSBmYWxzZSkge1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgbG9hZGluZyBkYXRhIGZvciBmaXJzdCB0aW1lIFwiLCBzeW5jLnN5bmMsIHN5bmMpO1xuICAgICAgICBsZXQgcGF5TG9hZCA9IHtcbiAgICAgICAgICAgIFwibGluZVN0eWxlXCI6IFwiZG90dGVkXCIsXG4gICAgICAgICAgICBcImNvbG9yUGlja2VyXCI6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIFwidGhpY2tuZXNzXCI6IDEsXG4gICAgICAgICAgICBcInN5bmNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwia2VlcElua3NcIjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgXCJjb250cm9sc1wiOiBwYXlMb2FkLCBcInN5bmNcIjogdHJ1ZSwgXCJzdG9yZVwiOiB7fSwgYXV0aDogeyBcInVzZXJcIjogXCJOb3Qgc2lnbmVkIGluIVwiLCBcInNlbGVjdE9wdGlvblwiOiBcImN1cnJlbnRVc2VyXCIgfSB9KTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCIgaW5zdGFsbGVkIFwiKTtcbiAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkOiBcIklua2VyXCIsXG4gICAgICAgIHRpdGxlOiBcIklua2VyXCIsXG4gICAgICAgIGNvbnRleHRzOiBbXCJhbGxcIl1cbiAgICB9KTtcbiAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkOiBcInNhdmVUb0RvY1wiLFxuICAgICAgICB0aXRsZTogXCJTYXZlIHRvIERvY1wiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdLFxuICAgICAgICBwYXJlbnRJZDogXCJJbmtlclwiXG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJpbmtJdFwiLFxuICAgICAgICB0aXRsZTogXCJJbmsgSXQhXCIsXG4gICAgICAgIGNvbnRleHRzOiBbXCJhbGxcIl0sXG4gICAgICAgIHBhcmVudElkOiBcIklua2VyXCJcbiAgICB9KTtcbiAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkOiBcInVuSW5rXCIsXG4gICAgICAgIHRpdGxlOiBcIlVuLUlua1wiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdLFxuICAgICAgICBwYXJlbnRJZDogXCJJbmtlclwiXG4gICAgfSk7XG59KSk7XG5jaHJvbWUuY29udGV4dE1lbnVzLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcigoZXYpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIiB0aGUgZnJhbWUgaWQgaXMgXCIsIGV2LmZyYW1lSWQpO1xuICAgIGNvbnNvbGUubG9nKGV2Lm1lbnVJdGVtSWQpO1xuICAgIGNvbnN0IGNob3NlbklkID0gZXYubWVudUl0ZW1JZDtcbiAgICBjb25zdCBbdGFiXSA9IHlpZWxkIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyh0YWIuaWQpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7IGV2IH0pO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgISEhIEVSUk9SXCIpO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAvL2NvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcbiAgICAvL2NvbnNvbGUubG9nKGV2LnNlbGVjdGlvblRleHQpXG59KSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc2VydmljZS50c3hcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==