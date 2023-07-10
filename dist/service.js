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
    yield chrome.storage.sync.clear();
    yield chrome.storage.local.clear();
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
        title: "🖍️Ink It!",
        contexts: ["all"],
        parentId: "Inker"
    });
    chrome.contextMenus.create({
        id: "unInk",
        title: "unInk",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBRXBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc2VydmljZS50c3giLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKGV2KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgeWllbGQgY2hyb21lLnN0b3JhZ2Uuc3luYy5jbGVhcigpO1xuICAgIHlpZWxkIGNocm9tZS5zdG9yYWdlLmxvY2FsLmNsZWFyKCk7XG4gICAgY29uc29sZS5sb2coXCIgaW5zdGFsbGVkIFwiKTtcbiAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkOiBcIklua2VyXCIsXG4gICAgICAgIHRpdGxlOiBcIklua2VyXCIsXG4gICAgICAgIGNvbnRleHRzOiBbXCJhbGxcIl1cbiAgICB9KTtcbiAgICBjaHJvbWUuY29udGV4dE1lbnVzLmNyZWF0ZSh7XG4gICAgICAgIGlkOiBcInNhdmVUb0RvY1wiLFxuICAgICAgICB0aXRsZTogXCJTYXZlIHRvIERvY1wiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdLFxuICAgICAgICBwYXJlbnRJZDogXCJJbmtlclwiXG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJpbmtJdFwiLFxuICAgICAgICB0aXRsZTogXCLwn5aN77iPSW5rIEl0IVwiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdLFxuICAgICAgICBwYXJlbnRJZDogXCJJbmtlclwiXG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5jcmVhdGUoe1xuICAgICAgICBpZDogXCJ1bklua1wiLFxuICAgICAgICB0aXRsZTogXCJ1bklua1wiLFxuICAgICAgICBjb250ZXh0czogW1wiYWxsXCJdLFxuICAgICAgICBwYXJlbnRJZDogXCJJbmtlclwiXG4gICAgfSk7XG4gICAgY2hyb21lLmNvbnRleHRNZW51cy5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoKGV2KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIHRoZSBmcmFtZSBpZCBpcyBcIiwgZXYuZnJhbWVJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2Lm1lbnVJdGVtSWQpO1xuICAgICAgICBjb25zdCBjaG9zZW5JZCA9IGV2Lm1lbnVJdGVtSWQ7XG4gICAgICAgIGNvbnN0IFt0YWJdID0geWllbGQgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGxhc3RGb2N1c2VkV2luZG93OiB0cnVlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0YWIuaWQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWIuaWQsIHsgZXYgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAhISEgRVJST1JcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGV2LnNlbGVjdGlvblRleHQpXG4gICAgfSkpO1xufSkpO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NlcnZpY2UudHN4XCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=