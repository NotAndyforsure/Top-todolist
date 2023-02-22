export function parent() {
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

export function header() {
  const header = creator("div", "header", "header");
  return header;
}

export function headerLogo() {
  const hdr = creator("h2", "logo", "logo");
  hdr.textContent = "What's Next";
  return hdr;
}

export function startBtn() {
  const div = creator("div", "startBtnDiv", "startBtnDiv");
  const btn = creator("button", "start", "start");
  btn.textContent = "START";
  div.append(btn);
  return div;
}

export function greetWrap() {
  const div = creator("div", "greetwrap", "greetwrap");
  return div;
}

export function greeting() {
  const header = creator("h3", "greeting", "greeting");
  header.textContent =
    "Welcome! What's Next is a student assignment from the odin project  accomplished by NotAndyforsure. What's Next's purpose is be a virtual todo list. To begin press START.";
  return header;
}

export function main() {
  const div = creator("div", "main", "main");
  return div;
}

export function menuBtn() {
  const div = creator("div", "menuDiv", "menuBtnDiv");
  const btn = creator("button", "menuBtn", "menuBtn");
  btn.textContent = "Menu";
  div.append(btn);
  return div;
}

export function prjItem(name) {
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

export function addPrj() {
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

export function createWrap() {
  const div = creator("div", "createwrap", "createwrap");
  return div;
}

export function menu() {
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

export function todoItem(ttl, dscr, date, priority, project = "") {
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

export function moreTodoDisplay() {
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

export function addNewTodo() {
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
