const uploadFile = document.querySelector("#upload-file");

const prelude = function () {
  let myNode = document.createElement("div");
  myNode.textContent = "You are Awesome";
  return myNode;
};

uploadFile.prepend(prelude);
