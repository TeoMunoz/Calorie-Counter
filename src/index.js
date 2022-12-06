
const { div, button } = hh(h);

const MSGS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
};

function view(dispatch, model) {
  const btnStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  return div({ className: "flex flex-col gap-4 items-center" }, [
    div({ className: "text-3xl" }, `Count: ${model}`),
    div({ className: "flex gap-4" }, [
      button({ className: btnStyle, onclick: () => dispatch(MSGS.ADD) }, "➕ Increase"),
      button({ className: btnStyle, onclick: () => dispatch(MSGS.SUBTRACT) }, "➖ Decrease"),
    ]),
  ]);
}

function update(msg, model) {
  switch (msg) {
    case MSGS.ADD:
      return model + 1;
    case MSGS.SUBTRACT:
      return model - 1;
    default:
      return model;
  }
}

// impure code below (not avoidable but controllable)
function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);
  function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

const initModel = 0;

const rootNode = document.getElementById("app");
app(initModel, update, view, rootNode);

function addRow() {

  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;

  let table = document.getElementsByTagName('table')[0];

  let newRow = table.insertRow(1);

  let cel1 = newRow.insertCell(0);
  let cel2 = newRow.insertCell(1);
  let cel3 = newRow.insertCell(2)

  cel1.innerHTML = fname;
  cel2.innerHTML = lname;
  cel3.innerHTML = deleteB;
  }
  
  function myDeleteFunction() {
    document.getElementsByTagName("table").deleteRow(0);
  }