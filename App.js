const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From React"
);
const root = ReactDOM.createRoot(document.getElementById("root")); // to connect with div by Id or to inject in div 
root.render(heading);

//parent Child relationship tag
const heading2 = React.createElement("div", { id: "parent" },
  React.createElement("div", { id: "child"},
  [React.createElement("h1",{},"Hi I am an H1 Tag"),React.createElement("h2",{},"Hi I am an h2 Tag")])

)
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading2);
