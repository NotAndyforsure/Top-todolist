/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewTodo": () => (/* binding */ addNewTodo),
/* harmony export */   "addPrj": () => (/* binding */ addPrj),
/* harmony export */   "createWrap": () => (/* binding */ createWrap),
/* harmony export */   "greetWrap": () => (/* binding */ greetWrap),
/* harmony export */   "greeting": () => (/* binding */ greeting),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "headerLogo": () => (/* binding */ headerLogo),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "menuBtn": () => (/* binding */ menuBtn),
/* harmony export */   "moreTodoDisplay": () => (/* binding */ moreTodoDisplay),
/* harmony export */   "parent": () => (/* binding */ parent),
/* harmony export */   "prjItem": () => (/* binding */ prjItem),
/* harmony export */   "startBtn": () => (/* binding */ startBtn),
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
function parent() {
  const div = document.createElement("div");
  div.setAttribute("id", "content");
  div.setAttribute("class", "content");
  return div;
}

const creator = (ele, id, cl) => {
  const div = document.createElement(ele);
  div.setAttribute("id", id);
  div.setAttribute("class", cl);
  return div;
};

function header() {
  const header = creator("div", "header", "header");
  return header;
}

function headerLogo() {
  const hdr = creator("h2", "logo", "logo");
  hdr.textContent = "What's Next";
  return hdr;
}

function startBtn() {
  const div = creator("div", "startBtnDiv", "startBtnDiv");
  const btn = creator("button", "start", "start");
  btn.textContent = "START";
  div.append(btn);
  return div;
}

function greetWrap() {
  const div = creator("div", "greetwrap", "greetwrap");
  return div;
}

function greeting() {
  const header = creator("h3", "greeting", "greeting");
  header.textContent =
    "Welcome! What's Next is a student assignment from the odin project  accomplished by NotAndyforsure. What's Next's purpose is be a virtual todo list. To begin press START.";
  return header;
}

function main() {
  const div = creator("div", "main", "main");
  return div;
}

function menuBtn() {
  const div = creator("div", "menuDiv", "menuBtnDiv");
  const btn = creator("button", "menuBtn", "menuBtn");
  btn.textContent = "Menu";
  div.append(btn);
  return div;
}

function prjItem(name) {
  const wrap = creator("div", "prjitemwrap", "prjitemwrap");
  const div = creator("div", "prjitemname", "prjitemname");
  const opts = creator("div", "prjitemopwrap", "prjitemopwrap");
  div.innerHTML = `
  <svg class="svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" /></svg>
    ${name}`;
  div.dataset["proj"] = name;
  opts.dataset["proj"] = name;
  wrap.dataset["proj"] = name;
  if (name === "Default") {
    div.setAttribute("id", "defaultitem");
  }

  opts.innerHTML = `<svg class="svg" id="delproj" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete project</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;
  if (name.toLowerCase() !== "default") {
    wrap.append(div);
    wrap.append(opts);
  } else {
    wrap.append(div);
  }

  return wrap;
}

function addPrj() {
  const wrap = creator("div", "addprjwrap", "addprjwrap");
  const input = creator("input", "prjinput", "prjinput");
  const inputWrap = creator("div", "inputwrap", "inputwrap");
  const btnWrap = creator("div", "btnwrap", "btnwrap");
  input.setAttribute("type", "text");
  input.setAttribute("maxlength", "13");
  input.setAttribute("minlenght", "3");
  input.setAttribute("placeholder", "Add new project");

  const addBtn = creator("button", "createprj", "createprj");
  addBtn.textContent = "Add";
  const cancelBtn = creator("button", "cancelprj", "cancelprj");
  cancelBtn.textContent = "Cancel";
  inputWrap.append(input);
  btnWrap.append(addBtn);
  btnWrap.append(cancelBtn);
  wrap.append(inputWrap);
  wrap.append(btnWrap);
  return wrap;
}

function createWrap() {
  const div = creator("div", "createwrap", "createwrap");
  return div;
}

function menu() {
  const wrap = creator("div", "menuWrap", "menuWrap");
  const menu = creator("div", "menu", "menu");
  const hdr = creator("h4", "projhdr", "projhdr");
  const div = creator("div", "projwrap", "projwrap");
  hdr.textContent = "Projects";
  const menuControl = creator("div", "controlwrap", "controlwrap");
  const projectdiv = creator("div", "prjs", "prjs");
  const addPrjBtn = creator("button", "addprj", "addprj");
  const addTodo = creator("button", "addtodo", "addtodo");
  const defItem = prjItem("Default");
  projectdiv.append(defItem);
  addPrjBtn.textContent = "Project";
  addTodo.textContent = "Todo";
  menuControl.append(addPrjBtn);
  menuControl.append(addTodo);
  div.append(menuControl);
  div.append(projectdiv);

  menu.append(hdr);
  menu.append(div);
  wrap.append(menu);
  return wrap;
}

function todoItem(ttl, dscr, date, priority, project = "") {
  const wrap = creator("div", "wrapTodoObj", "wrapTodoObj");
  const hdr = creator("span", "todoObjTitle", "todoObjTitle");
  const btn = creator("button", "todoObjDetails", "todoObjDetails");
  const del = creator("div", "todoObjDel", "todoObjDel");
  del.innerHTML = `<svg class="svg" id="delTodo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete todo item</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;
  const dateItem = creator("span", "todoObjDate", "todoObjDate");
  hdr.textContent = ttl;
  btn.textContent = "More";
  btn.dataset["description"] = dscr;
  del.dataset["title"] = ttl;
  del.dataset["project"] = project;
  dateItem.textContent = date;
  if (priority == 1) {
    hdr.classList.add("red");
  } else if (priority == 2) {
    hdr.classList.add("yellow");
  } else {
    hdr.classList.add("green");
  }
  wrap.append(hdr);
  wrap.append(dateItem);
  wrap.append(btn);
  wrap.append(del);
  return wrap;
}

function moreTodoDisplay() {
  const wrap = creator("div", "moretododisplay", "moretododisplay");
  const div = creator("div", "moretodotxtareawrap", "moretodotxtareawrap");
  const textarea = creator("textarea", "moretodotxtarea", "moretodotxtarea");
  const button = creator("button", "moretodobtn", "moretodobtn");
  button.textContent = "close";
  div.append(textarea);
  wrap.append(div);
  wrap.append(button);
  return wrap;
}

function addNewTodo() {
  const wrap = creator("div", "addnewtodowrap", "addnewtodowrap");
  const title = creator("input", "todotitleinput", "todotitleinput");
  const desc = creator(
    "textarea",
    "tododescriptioninput",
    "tododescriptioninput"
  );

  const date = creator("input", "tododateinput", "tododateinput");
  const proj = creator("input", "todoprojinput", "todoprojinput");
  const addbtn = creator("button", "todoaddbutton", "todoaddbutton");
  const cancelbtn = creator("button", "todocancelbutton", "todocancelbutton");
  const priority = creator("input", "todoprioritybutton", "todoprioritybutton");
  const ttlProj = creator(
    "div",
    "wraptitleprojectinput",
    "wraptitleprojectinput"
  );
  const dtPri = creator(
    "div",
    "wrapdatepriorityinput",
    "wrapdatepriorityinput"
  );
  const textareaWrap = creator("div", "wraptextarea", "wraptextarea");

  const btnWrap = creator("div", "wrapaddcancelbtn", "wrapaddcancelbtn");

  addbtn.textContent = "Add";
  cancelbtn.textContent = "Cancel";

  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "Add todo title");
  title.setAttribute("maxlength", "25");

  proj.setAttribute("type", "text");
  proj.setAttribute("placeholder", "Add project");
  proj.setAttribute("maxlength", "25");

  priority.setAttribute("type", "number");
  priority.setAttribute("max", "3");
  priority.setAttribute("min", "1");
  priority.setAttribute("value", "3");

  date.setAttribute("type", "date");

  desc.setAttribute("placeholder", "add todo item description");

  ttlProj.append(title);
  ttlProj.append(proj);
  dtPri.append(priority);
  dtPri.append(date);
  dtPri.append(desc);
  textareaWrap.append(desc);
  btnWrap.append(addbtn);
  btnWrap.append(cancelbtn);

  wrap.append(ttlProj);
  wrap.append(dtPri);
  wrap.append(textareaWrap);
  wrap.append(btnWrap);
  return wrap;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBSztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHBhcmVudCgpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGVudFwiKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuY29uc3QgY3JlYXRvciA9IChlbGUsIGlkLCBjbCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbCk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdG9yKFwiZGl2XCIsIFwiaGVhZGVyXCIsIFwiaGVhZGVyXCIpO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGVhZGVyTG9nbygpIHtcbiAgY29uc3QgaGRyID0gY3JlYXRvcihcImgyXCIsIFwibG9nb1wiLCBcImxvZ29cIik7XG4gIGhkci50ZXh0Q29udGVudCA9IFwiV2hhdCdzIE5leHRcIjtcbiAgcmV0dXJuIGhkcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QnRuKCkge1xuICBjb25zdCBkaXYgPSBjcmVhdG9yKFwiZGl2XCIsIFwic3RhcnRCdG5EaXZcIiwgXCJzdGFydEJ0bkRpdlwiKTtcbiAgY29uc3QgYnRuID0gY3JlYXRvcihcImJ1dHRvblwiLCBcInN0YXJ0XCIsIFwic3RhcnRcIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiU1RBUlRcIjtcbiAgZGl2LmFwcGVuZChidG4pO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZXRXcmFwKCkge1xuICBjb25zdCBkaXYgPSBjcmVhdG9yKFwiZGl2XCIsIFwiZ3JlZXR3cmFwXCIsIFwiZ3JlZXR3cmFwXCIpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZXRpbmcoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGNyZWF0b3IoXCJoM1wiLCBcImdyZWV0aW5nXCIsIFwiZ3JlZXRpbmdcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgXCJXZWxjb21lISBXaGF0J3MgTmV4dCBpcyBhIHN0dWRlbnQgYXNzaWdubWVudCBmcm9tIHRoZSBvZGluIHByb2plY3QgIGFjY29tcGxpc2hlZCBieSBOb3RBbmR5Zm9yc3VyZS4gV2hhdCdzIE5leHQncyBwdXJwb3NlIGlzIGJlIGEgdmlydHVhbCB0b2RvIGxpc3QuIFRvIGJlZ2luIHByZXNzIFNUQVJULlwiO1xuICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgZGl2ID0gY3JlYXRvcihcImRpdlwiLCBcIm1haW5cIiwgXCJtYWluXCIpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVudUJ0bigpIHtcbiAgY29uc3QgZGl2ID0gY3JlYXRvcihcImRpdlwiLCBcIm1lbnVEaXZcIiwgXCJtZW51QnRuRGl2XCIpO1xuICBjb25zdCBidG4gPSBjcmVhdG9yKFwiYnV0dG9uXCIsIFwibWVudUJ0blwiLCBcIm1lbnVCdG5cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBkaXYuYXBwZW5kKGJ0bik7XG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmpJdGVtKG5hbWUpIHtcbiAgY29uc3Qgd3JhcCA9IGNyZWF0b3IoXCJkaXZcIiwgXCJwcmppdGVtd3JhcFwiLCBcInByaml0ZW13cmFwXCIpO1xuICBjb25zdCBkaXYgPSBjcmVhdG9yKFwiZGl2XCIsIFwicHJqaXRlbW5hbWVcIiwgXCJwcmppdGVtbmFtZVwiKTtcbiAgY29uc3Qgb3B0cyA9IGNyZWF0b3IoXCJkaXZcIiwgXCJwcmppdGVtb3B3cmFwXCIsIFwicHJqaXRlbW9wd3JhcFwiKTtcbiAgZGl2LmlubmVySFRNTCA9IGBcbiAgPHN2ZyBjbGFzcz1cInN2Z1wiICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTEgMTVIMTdWMTdIMTFWMTVNOSA3SDdWOUg5VjdNMTEgMTNIMTdWMTFIMTFWMTNNMTEgOUgxN1Y3SDExVjlNOSAxMUg3VjEzSDlWMTFNMjEgNVYxOUMyMSAyMC4xIDIwLjEgMjEgMTkgMjFINUMzLjkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuOSAzLjkgMyA1IDNIMTlDMjAuMSAzIDIxIDMuOSAyMSA1TTE5IDVINVYxOUgxOVY1TTkgMTVIN1YxN0g5VjE1WlwiIC8+PC9zdmc+XG4gICAgJHtuYW1lfWA7XG4gIGRpdi5kYXRhc2V0W1wicHJvalwiXSA9IG5hbWU7XG4gIG9wdHMuZGF0YXNldFtcInByb2pcIl0gPSBuYW1lO1xuICB3cmFwLmRhdGFzZXRbXCJwcm9qXCJdID0gbmFtZTtcbiAgaWYgKG5hbWUgPT09IFwiRGVmYXVsdFwiKSB7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVmYXVsdGl0ZW1cIik7XG4gIH1cblxuICBvcHRzLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwic3ZnXCIgaWQ9XCJkZWxwcm9qXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RGVsZXRlIHByb2plY3Q8L3RpdGxlPjxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNNyw2SDE3VjE5SDdWNk05LDhWMTdIMTFWOEg5TTEzLDhWMTdIMTVWOEgxM1pcIiAvPjwvc3ZnPmA7XG4gIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwiZGVmYXVsdFwiKSB7XG4gICAgd3JhcC5hcHBlbmQoZGl2KTtcbiAgICB3cmFwLmFwcGVuZChvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICB3cmFwLmFwcGVuZChkaXYpO1xuICB9XG5cbiAgcmV0dXJuIHdyYXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcmooKSB7XG4gIGNvbnN0IHdyYXAgPSBjcmVhdG9yKFwiZGl2XCIsIFwiYWRkcHJqd3JhcFwiLCBcImFkZHByandyYXBcIik7XG4gIGNvbnN0IGlucHV0ID0gY3JlYXRvcihcImlucHV0XCIsIFwicHJqaW5wdXRcIiwgXCJwcmppbnB1dFwiKTtcbiAgY29uc3QgaW5wdXRXcmFwID0gY3JlYXRvcihcImRpdlwiLCBcImlucHV0d3JhcFwiLCBcImlucHV0d3JhcFwiKTtcbiAgY29uc3QgYnRuV3JhcCA9IGNyZWF0b3IoXCJkaXZcIiwgXCJidG53cmFwXCIsIFwiYnRud3JhcFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjEzXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5sZW5naHRcIiwgXCIzXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkFkZCBuZXcgcHJvamVjdFwiKTtcblxuICBjb25zdCBhZGRCdG4gPSBjcmVhdG9yKFwiYnV0dG9uXCIsIFwiY3JlYXRlcHJqXCIsIFwiY3JlYXRlcHJqXCIpO1xuICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBjb25zdCBjYW5jZWxCdG4gPSBjcmVhdG9yKFwiYnV0dG9uXCIsIFwiY2FuY2VscHJqXCIsIFwiY2FuY2VscHJqXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBpbnB1dFdyYXAuYXBwZW5kKGlucHV0KTtcbiAgYnRuV3JhcC5hcHBlbmQoYWRkQnRuKTtcbiAgYnRuV3JhcC5hcHBlbmQoY2FuY2VsQnRuKTtcbiAgd3JhcC5hcHBlbmQoaW5wdXRXcmFwKTtcbiAgd3JhcC5hcHBlbmQoYnRuV3JhcCk7XG4gIHJldHVybiB3cmFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV3JhcCgpIHtcbiAgY29uc3QgZGl2ID0gY3JlYXRvcihcImRpdlwiLCBcImNyZWF0ZXdyYXBcIiwgXCJjcmVhdGV3cmFwXCIpO1xuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVudSgpIHtcbiAgY29uc3Qgd3JhcCA9IGNyZWF0b3IoXCJkaXZcIiwgXCJtZW51V3JhcFwiLCBcIm1lbnVXcmFwXCIpO1xuICBjb25zdCBtZW51ID0gY3JlYXRvcihcImRpdlwiLCBcIm1lbnVcIiwgXCJtZW51XCIpO1xuICBjb25zdCBoZHIgPSBjcmVhdG9yKFwiaDRcIiwgXCJwcm9qaGRyXCIsIFwicHJvamhkclwiKTtcbiAgY29uc3QgZGl2ID0gY3JlYXRvcihcImRpdlwiLCBcInByb2p3cmFwXCIsIFwicHJvandyYXBcIik7XG4gIGhkci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgY29uc3QgbWVudUNvbnRyb2wgPSBjcmVhdG9yKFwiZGl2XCIsIFwiY29udHJvbHdyYXBcIiwgXCJjb250cm9sd3JhcFwiKTtcbiAgY29uc3QgcHJvamVjdGRpdiA9IGNyZWF0b3IoXCJkaXZcIiwgXCJwcmpzXCIsIFwicHJqc1wiKTtcbiAgY29uc3QgYWRkUHJqQnRuID0gY3JlYXRvcihcImJ1dHRvblwiLCBcImFkZHByalwiLCBcImFkZHByalwiKTtcbiAgY29uc3QgYWRkVG9kbyA9IGNyZWF0b3IoXCJidXR0b25cIiwgXCJhZGR0b2RvXCIsIFwiYWRkdG9kb1wiKTtcbiAgY29uc3QgZGVmSXRlbSA9IHByakl0ZW0oXCJEZWZhdWx0XCIpO1xuICBwcm9qZWN0ZGl2LmFwcGVuZChkZWZJdGVtKTtcbiAgYWRkUHJqQnRuLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gIGFkZFRvZG8udGV4dENvbnRlbnQgPSBcIlRvZG9cIjtcbiAgbWVudUNvbnRyb2wuYXBwZW5kKGFkZFByakJ0bik7XG4gIG1lbnVDb250cm9sLmFwcGVuZChhZGRUb2RvKTtcbiAgZGl2LmFwcGVuZChtZW51Q29udHJvbCk7XG4gIGRpdi5hcHBlbmQocHJvamVjdGRpdik7XG5cbiAgbWVudS5hcHBlbmQoaGRyKTtcbiAgbWVudS5hcHBlbmQoZGl2KTtcbiAgd3JhcC5hcHBlbmQobWVudSk7XG4gIHJldHVybiB3cmFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0l0ZW0odHRsLCBkc2NyLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCA9IFwiXCIpIHtcbiAgY29uc3Qgd3JhcCA9IGNyZWF0b3IoXCJkaXZcIiwgXCJ3cmFwVG9kb09ialwiLCBcIndyYXBUb2RvT2JqXCIpO1xuICBjb25zdCBoZHIgPSBjcmVhdG9yKFwic3BhblwiLCBcInRvZG9PYmpUaXRsZVwiLCBcInRvZG9PYmpUaXRsZVwiKTtcbiAgY29uc3QgYnRuID0gY3JlYXRvcihcImJ1dHRvblwiLCBcInRvZG9PYmpEZXRhaWxzXCIsIFwidG9kb09iakRldGFpbHNcIik7XG4gIGNvbnN0IGRlbCA9IGNyZWF0b3IoXCJkaXZcIiwgXCJ0b2RvT2JqRGVsXCIsIFwidG9kb09iakRlbFwiKTtcbiAgZGVsLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwic3ZnXCIgaWQ9XCJkZWxUb2RvXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RGVsZXRlIHRvZG8gaXRlbTwvdGl0bGU+PHBhdGggZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU03LDZIMTdWMTlIN1Y2TTksOFYxN0gxMVY4SDlNMTMsOFYxN0gxNVY4SDEzWlwiIC8+PC9zdmc+YDtcbiAgY29uc3QgZGF0ZUl0ZW0gPSBjcmVhdG9yKFwic3BhblwiLCBcInRvZG9PYmpEYXRlXCIsIFwidG9kb09iakRhdGVcIik7XG4gIGhkci50ZXh0Q29udGVudCA9IHR0bDtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJNb3JlXCI7XG4gIGJ0bi5kYXRhc2V0W1wiZGVzY3JpcHRpb25cIl0gPSBkc2NyO1xuICBkZWwuZGF0YXNldFtcInRpdGxlXCJdID0gdHRsO1xuICBkZWwuZGF0YXNldFtcInByb2plY3RcIl0gPSBwcm9qZWN0O1xuICBkYXRlSXRlbS50ZXh0Q29udGVudCA9IGRhdGU7XG4gIGlmIChwcmlvcml0eSA9PSAxKSB7XG4gICAgaGRyLmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT0gMikge1xuICAgIGhkci5jbGFzc0xpc3QuYWRkKFwieWVsbG93XCIpO1xuICB9IGVsc2Uge1xuICAgIGhkci5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5cIik7XG4gIH1cbiAgd3JhcC5hcHBlbmQoaGRyKTtcbiAgd3JhcC5hcHBlbmQoZGF0ZUl0ZW0pO1xuICB3cmFwLmFwcGVuZChidG4pO1xuICB3cmFwLmFwcGVuZChkZWwpO1xuICByZXR1cm4gd3JhcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vcmVUb2RvRGlzcGxheSgpIHtcbiAgY29uc3Qgd3JhcCA9IGNyZWF0b3IoXCJkaXZcIiwgXCJtb3JldG9kb2Rpc3BsYXlcIiwgXCJtb3JldG9kb2Rpc3BsYXlcIik7XG4gIGNvbnN0IGRpdiA9IGNyZWF0b3IoXCJkaXZcIiwgXCJtb3JldG9kb3R4dGFyZWF3cmFwXCIsIFwibW9yZXRvZG90eHRhcmVhd3JhcFwiKTtcbiAgY29uc3QgdGV4dGFyZWEgPSBjcmVhdG9yKFwidGV4dGFyZWFcIiwgXCJtb3JldG9kb3R4dGFyZWFcIiwgXCJtb3JldG9kb3R4dGFyZWFcIik7XG4gIGNvbnN0IGJ1dHRvbiA9IGNyZWF0b3IoXCJidXR0b25cIiwgXCJtb3JldG9kb2J0blwiLCBcIm1vcmV0b2RvYnRuXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XG4gIGRpdi5hcHBlbmQodGV4dGFyZWEpO1xuICB3cmFwLmFwcGVuZChkaXYpO1xuICB3cmFwLmFwcGVuZChidXR0b24pO1xuICByZXR1cm4gd3JhcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld1RvZG8oKSB7XG4gIGNvbnN0IHdyYXAgPSBjcmVhdG9yKFwiZGl2XCIsIFwiYWRkbmV3dG9kb3dyYXBcIiwgXCJhZGRuZXd0b2Rvd3JhcFwiKTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdG9yKFwiaW5wdXRcIiwgXCJ0b2RvdGl0bGVpbnB1dFwiLCBcInRvZG90aXRsZWlucHV0XCIpO1xuICBjb25zdCBkZXNjID0gY3JlYXRvcihcbiAgICBcInRleHRhcmVhXCIsXG4gICAgXCJ0b2RvZGVzY3JpcHRpb25pbnB1dFwiLFxuICAgIFwidG9kb2Rlc2NyaXB0aW9uaW5wdXRcIlxuICApO1xuXG4gIGNvbnN0IGRhdGUgPSBjcmVhdG9yKFwiaW5wdXRcIiwgXCJ0b2RvZGF0ZWlucHV0XCIsIFwidG9kb2RhdGVpbnB1dFwiKTtcbiAgY29uc3QgcHJvaiA9IGNyZWF0b3IoXCJpbnB1dFwiLCBcInRvZG9wcm9qaW5wdXRcIiwgXCJ0b2RvcHJvamlucHV0XCIpO1xuICBjb25zdCBhZGRidG4gPSBjcmVhdG9yKFwiYnV0dG9uXCIsIFwidG9kb2FkZGJ1dHRvblwiLCBcInRvZG9hZGRidXR0b25cIik7XG4gIGNvbnN0IGNhbmNlbGJ0biA9IGNyZWF0b3IoXCJidXR0b25cIiwgXCJ0b2RvY2FuY2VsYnV0dG9uXCIsIFwidG9kb2NhbmNlbGJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdG9yKFwiaW5wdXRcIiwgXCJ0b2RvcHJpb3JpdHlidXR0b25cIiwgXCJ0b2RvcHJpb3JpdHlidXR0b25cIik7XG4gIGNvbnN0IHR0bFByb2ogPSBjcmVhdG9yKFxuICAgIFwiZGl2XCIsXG4gICAgXCJ3cmFwdGl0bGVwcm9qZWN0aW5wdXRcIixcbiAgICBcIndyYXB0aXRsZXByb2plY3RpbnB1dFwiXG4gICk7XG4gIGNvbnN0IGR0UHJpID0gY3JlYXRvcihcbiAgICBcImRpdlwiLFxuICAgIFwid3JhcGRhdGVwcmlvcml0eWlucHV0XCIsXG4gICAgXCJ3cmFwZGF0ZXByaW9yaXR5aW5wdXRcIlxuICApO1xuICBjb25zdCB0ZXh0YXJlYVdyYXAgPSBjcmVhdG9yKFwiZGl2XCIsIFwid3JhcHRleHRhcmVhXCIsIFwid3JhcHRleHRhcmVhXCIpO1xuXG4gIGNvbnN0IGJ0bldyYXAgPSBjcmVhdG9yKFwiZGl2XCIsIFwid3JhcGFkZGNhbmNlbGJ0blwiLCBcIndyYXBhZGRjYW5jZWxidG5cIik7XG5cbiAgYWRkYnRuLnRleHRDb250ZW50ID0gXCJBZGRcIjtcbiAgY2FuY2VsYnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJBZGQgdG9kbyB0aXRsZVwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMjVcIik7XG5cbiAgcHJvai5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgcHJvai5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkFkZCBwcm9qZWN0XCIpO1xuICBwcm9qLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjI1XCIpO1xuXG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjNcIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjFcIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiM1wiKTtcblxuICBkYXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gIGRlc2Muc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJhZGQgdG9kbyBpdGVtIGRlc2NyaXB0aW9uXCIpO1xuXG4gIHR0bFByb2ouYXBwZW5kKHRpdGxlKTtcbiAgdHRsUHJvai5hcHBlbmQocHJvaik7XG4gIGR0UHJpLmFwcGVuZChwcmlvcml0eSk7XG4gIGR0UHJpLmFwcGVuZChkYXRlKTtcbiAgZHRQcmkuYXBwZW5kKGRlc2MpO1xuICB0ZXh0YXJlYVdyYXAuYXBwZW5kKGRlc2MpO1xuICBidG5XcmFwLmFwcGVuZChhZGRidG4pO1xuICBidG5XcmFwLmFwcGVuZChjYW5jZWxidG4pO1xuXG4gIHdyYXAuYXBwZW5kKHR0bFByb2opO1xuICB3cmFwLmFwcGVuZChkdFByaSk7XG4gIHdyYXAuYXBwZW5kKHRleHRhcmVhV3JhcCk7XG4gIHdyYXAuYXBwZW5kKGJ0bldyYXApO1xuICByZXR1cm4gd3JhcDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==