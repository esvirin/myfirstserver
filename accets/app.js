const formInput = document.querySelectorAll("#form-add input");
const buttonInput = document.querySelector("#upload-button");
const buttonDownload = document.querySelector("#download-button");
const output = document.querySelector(".output");
let users = new Array();

// class with display function for each user from DB

function display(arr) {
  let acc = new String();
  arr.forEach((item) => {
    let current = `
    <ul>
    <li>Имя: ${item.name} </li>
    <li>Тел: ${item.tel}</li>
    <li>Мэйл:${item.email}</li>
    <li>Адрес:${item.adress}</li>
    </ul>
    `;
    acc += current;
  });
  output.innerHTML = acc;
}

// -----------send http request and POST DATA---------------

buttonInput.addEventListener("click", function () {
  let data = [].map.call(formInput, (item) => item.value);

  // HERE WILL BE MORE CHECKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!
  addNewUser("POST", "upload", data);
  formInput.forEach((item) => {
    item.value = "";
  });
});

function addNewUser(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      console.log(response);
      return response.json();
    }
    return response.json().then((err) => console.error(err));
  });
}

buttonDownload.addEventListener("click", getAllUsers);

function getAllUsers() {
  let getDataRequest = fetch("download", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((err) => console.error(err));
  });

  getDataRequest.then((data) => display(data));
}
