function addBox() {
  const para = document.createElement("div");
  const node = document.createTextNode("This is new.");
  para.appendChild(node);
  const element = document.getElementById("div1");
  element.appendChild(para);
}
