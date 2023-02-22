import _, { create, forEach } from "lodash";
import "./style.css";
import * as p from "./print.js";

let list = [];
let filtered = [];
let projects = ["Default"];

const createTodo = (ttl, dscr, date, priority, project = "Default") => {
  const obj = {
    title: ttl,
    description: dscr,
    date: date,
    priority: priority,
    project: project,
  };
  return obj;
};

const addTodoToList = (obj) => {
  const item = obj;
  const itemprj = {
    title: item.title,
    description: item.description,
    date: item.date,
    priority: item.priority,
  };
  if (item.project === "Default") {
    list.push(item);
    return;
  }
  for (let i of filtered) {
    if (i.project === obj.project) {
      i.list.push(itemprj);
      return;
    }
  }
  filtered.push({ project: obj.project, list: [itemprj] });
};

const removeTodo = (project, title) => {
  let item = list;
  if (project === "Default") {
    for (let i of item) {
      if (i.title === title) {
        i.title = "";
        list = item.filter((ele) => ele.title !== "");
        return;
      }
    }
  } else {
    for (let i of filtered) {
      if (i.project === project) {
        for (let a of i.list) {
          if (a.title === title) {
            a.title = "";
            i.list = i.list.filter((ele) => ele.title != "");
            return;
          }
        }
      }
    }
  }
};

const removeProj = (projname) => {
  const newFiltered = filtered.filter((ele) => {
    return ele.project !== projname;
  });
  filtered = newFiltered;
};

const updateTodo = (project, title, t, des, da, pri) => {
  let item = list;
  if (project === "Default") {
    for (let i of item) {
      if (i.title === title) {
        i.title = t;
        i.description = des;
        i.date = da;
        i.priority = pri;
        return;
      }
    }
  } else {
    for (let i of filtered) {
      if (i.project === project) {
        for (let a of i.list) {
          if (a.title === title) {
            a.title = t;
            a.description = des;
            a.date = da;
            a.priority = pri;
            return;
          }
        }
      }
    }
  }
};

const parent = p.parent();
const header = p.header();
const main = p.main();
const logo = p.headerLogo();
const start = p.startBtn();
const greetWrap = p.greetWrap();
const greet = p.greeting();
const menuBtn = p.menuBtn();
const menu = p.menu();
const createWrap = p.createWrap();
const addPrj = p.addPrj();
const createNewPrj = (n) => {
  const result = p.prjItem(n);
  return result;
};
const moreTodoDisplay = p.moreTodoDisplay();

const todoItem = (ttl, dscr, date, priority, project) => {
  const tmp = p.todoItem(ttl, dscr, date, priority, project);
  return tmp;
};
const addNewTodo = p.addNewTodo();

header.append(logo);
header.append(start);

greetWrap.append(greet);
main.append(greetWrap);

parent.append(header);
parent.append(main);

document.body.append(parent);

const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function () {
  greetWrap.remove();
  start.remove();
  header.append(menuBtn);
  main.append(menu);
  menu.classList.add("present");

  let projShowTodoOne = document.querySelector("#defaultitem");
  projShowTodoOne.addEventListener("click", () => {
    menu.classList.remove("present");
    menu.remove();
    addNewTodo.remove();
    addPrj.remove();
    createWrap.classList.add("todoclass");

    const todoListItems = document.querySelectorAll("#wrapTodoObj");
    todoListItems.forEach((ele) => ele.remove());

    list.map((ele) => {
      const title = ele.title;
      const description = ele.description;
      const date = ele.date;
      const priority = ele.priority;

      const test = todoItem(title, description, date, priority);
      createWrap.append(test);
    });
    main.append(createWrap);

    const delTodo = document.querySelectorAll("#todoObjDel");
    const moreTodoBtn = document.querySelectorAll("#todoObjDetails");
    delTodo.forEach((ele) => {
      const title = ele.dataset["title"];
      ele.addEventListener("click", () => {
        removeTodo("Default", title);
        ele.parentNode.remove();
      });
    });

    moreTodoBtn.forEach((ele) => {
      ele.addEventListener("click", () => {
        const todoListItems = document.querySelectorAll("#wrapTodoObj");
        const description = ele.dataset["description"];

        todoListItems.forEach((i) => i.remove());
        createWrap.classList.remove("todoclass");
        createWrap.append(moreTodoDisplay);
        const textarea = document.querySelector("#moretodotxtarea");
        textarea.value = description;
        const closeMore = document.querySelectorAll("#moretodobtn");
        closeMore.forEach((ele) => {
          ele.addEventListener("click", function () {
            moreTodoDisplay.remove();
            createWrap.remove();
            main.append(menu);
            menu.classList.add("present");
          });
        });
      });
    });
  });

  const addPrjBtn = document.querySelector("#addprj");
  const addTodo = document.querySelector("#addtodo");
  const menuBtnId = document.querySelector("#menuBtn");

  menuBtnId.addEventListener("click", () => {
    main.append(menu);
    menu.classList.toggle("present");
  });

  addPrjBtn.addEventListener("click", () => {
    const todoListItems = document.querySelectorAll("#wrapTodoObj");

    todoListItems.forEach((ele) => ele.remove());
    createWrap.classList.remove("todoclass");
    moreTodoDisplay.remove();
    addNewTodo.remove();
    createWrap.remove();
    createWrap.append(addPrj);
    main.append(createWrap);
    menu.classList.remove("present");

    const cancelPrjBtn = document.querySelector("#cancelprj");
    const createPrjBtn = document.querySelector("#createprj");
    const input = document.querySelector("#prjinput");
    const prjSpace = document.querySelector("#prjs");

    cancelPrjBtn.addEventListener("click", function () {
      createWrap.remove();
      menu.classList.add("present");
    });

    createPrjBtn.addEventListener("click", function (e) {
      e.stopImmediatePropagation();
      const content = input.value;

      if (content.length < 4) {
        return alert("At least 4 to 13 characters are required");
      } else if (
        projects.some((ele) => ele.toLowerCase() === content.toLowerCase())
      ) {
        return alert("This project exists already");
      }

      prjSpace.innerHTML = "";
      projects.push(content);

      projects.map((ele) => {
        const prjitemcreate = createNewPrj(ele);
        prjSpace.appendChild(prjitemcreate);
      });

      const del = document.querySelectorAll("#prjitemopwrap");

      del.forEach((ele) => {
        ele.addEventListener("click", () => {
          const currentProj = ele.dataset["proj"];
          removeProj(currentProj);
          const newList = projects.filter((i) => i !== currentProj);
          projects = newList;
          ele.parentNode.remove();
        });
      });

      createWrap.remove();
      menu.classList.add("present");
      projShowTodoOne = document.querySelector("#defaultitem");
      projShowTodoOne.addEventListener("click", () => {
        menu.classList.remove("present");
        menu.remove();
        addNewTodo.remove();
        addPrj.remove();
        createWrap.classList.add("todoclass");

        const todoListItems = document.querySelectorAll("#wrapTodoObj");
        todoListItems.forEach((ele) => ele.remove());

        list.map((ele) => {
          const title = ele.title;
          const description = ele.description;
          const date = ele.date;
          const priority = ele.priority;

          const test = todoItem(title, description, date, priority);
          createWrap.append(test);
        });
        main.append(createWrap);
        const delTodo = document.querySelectorAll("#todoObjDel");
        delTodo.forEach((ele) => {
          const title = ele.dataset["title"];
          ele.addEventListener("click", () => {
            removeTodo("Default", title);
            ele.parentNode.remove();
          });
        });
        const moreTodoBtn = document.querySelectorAll("#todoObjDetails");
        moreTodoBtn.forEach((ele) => {
          ele.addEventListener("click", () => {
            const todoListItems = document.querySelectorAll("#wrapTodoObj");
            const description = ele.dataset["description"];

            todoListItems.forEach((i) => i.remove());
            createWrap.classList.remove("todoclass");
            createWrap.append(moreTodoDisplay);
            const textarea = document.querySelector("#moretodotxtarea");
            textarea.value = description;
            const closeMore = document.querySelectorAll("#moretodobtn");
            closeMore.forEach((ele) => {
              ele.addEventListener("click", function () {
                moreTodoDisplay.remove();
                createWrap.remove();
                main.append(menu);
                menu.classList.add("present");
              });
            });
          });
        });
      });
      const projShowTodo = document.querySelectorAll("#prjitemname");
      projShowTodo.forEach((item) => {
        item.addEventListener("click", () => {
          menu.classList.remove("present");
          menu.remove();
          addNewTodo.remove();
          addPrj.remove();
          createWrap.classList.add("todoclass");
          const projVal = item.dataset["proj"];

          const todoListItems = document.querySelectorAll("#wrapTodoObj");
          todoListItems.forEach((ele) => ele.remove());

          filtered.map((ele) => {
            if (ele.project === projVal) {
              ele.list.map((i) => {
                const title = i.title;
                const description = i.description;
                const date = i.date;
                const priority = i.priority;
                const test = todoItem(
                  title,
                  description,
                  date,
                  priority,
                  projVal
                );

                createWrap.append(test);
              });
            }
          });

          main.append(createWrap);
          const delTodo = document.querySelectorAll("#todoObjDel");
          delTodo.forEach((ele) => {
            const title = ele.dataset["title"];
            const project = ele.dataset["project"];
            ele.addEventListener("click", () => {
              console.log(project, title);
              removeTodo(project, title);
              ele.parentNode.remove();
            });
          });

          const moreTodoBtn = document.querySelectorAll("#todoObjDetails");

          moreTodoBtn.forEach((ele) => {
            ele.addEventListener("click", () => {
              const todoListItems = document.querySelectorAll("#wrapTodoObj");
              const description = ele.dataset["description"];

              todoListItems.forEach((i) => i.remove());
              createWrap.classList.remove("todoclass");
              createWrap.append(moreTodoDisplay);
              const textarea = document.querySelector("#moretodotxtarea");
              textarea.value = description;
              const closeMore = document.querySelectorAll("#moretodobtn");
              closeMore.forEach((ele) => {
                ele.addEventListener("click", function () {
                  moreTodoDisplay.remove();
                  createWrap.remove();
                  main.append(menu);
                  menu.classList.add("present");
                });
              });
            });
          });
        });
      });
    });
  });

  addTodo.addEventListener("click", () => {
    const todoListItems = document.querySelectorAll("#wrapTodoObj");
    todoListItems.forEach((ele) => ele.remove());
    createWrap.classList.remove("todoclass");
    moreTodoDisplay.remove();
    addPrj.remove();
    createWrap.remove();
    createWrap.append(addNewTodo);
    main.append(createWrap);
    menu.classList.remove("present");

    const todoCancelBtn = document.querySelector("#todocancelbutton");
    todoCancelBtn.addEventListener("click", () => {
      createWrap.remove();
      menu.classList.add("present");
    });

    const todoAddBtn = document.querySelector("#todoaddbutton");
    todoAddBtn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const todoTitleInput = document.querySelector("#todotitleinput");
      const todoDateInput = document.querySelector("#tododateinput");
      const todoDescriptionInput = document.querySelector(
        "#tododescriptioninput"
      );
      const todoProjInput = document.querySelector("#todoprojinput");
      const todoPriorityButton = document.querySelector("#todoprioritybutton");

      const todoTitleVal = todoTitleInput.value;
      const todoDateVal = todoDateInput.value;
      const todoDescVal = todoDescriptionInput.value;
      const todoProjVal = todoProjInput.value;
      const todoPrioVal = todoPriorityButton.value;
      if (todoTitleVal === "" || todoTitleVal.length < 4) {
        return alert("title needs at least 4 characters");
      } else if (todoDateVal === "") {
        return alert("Due date must be filled");
      } else if (todoProjVal === "") {
        return alert("project needs at least 4 characters");
      } else if (todoDescVal === "") {
        return alert("Description is required");
      }

      const tmpPrjList = projects.map((ele) => ele.toLowerCase());
      const projLowerCase = todoProjVal.toLowerCase();

      const validatePrj = tmpPrjList.includes(projLowerCase);

      if (validatePrj === false) {
        return alert("project does not exist, insert an existing project");
      }

      if (projLowerCase === "default") {
        const newTodo = createTodo(
          todoTitleVal,
          todoDescVal,
          todoDateVal,
          todoPrioVal
        );
        menu.classList.add("present");
        createWrap.remove();
        const result = addTodoToList(newTodo);
        return result;
      } else {
        const newTodo = createTodo(
          todoTitleVal,
          todoDescVal,
          todoDateVal,
          todoPrioVal,
          todoProjVal
        );
        menu.classList.add("present");
        createWrap.remove();
        const result = addTodoToList(newTodo);
        return result;
      }
    });
  });
});
