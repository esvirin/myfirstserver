const formInput = document.querySelectorAll("#form-add input");
const buttonInput = document.querySelector("#upload-button");
const buttonDownload = document.querySelector("#download-button");

// -----------send http request and POST DATA---------------

buttonInput.addEventListener("click", function () {
  let data = [].map.call(formInput, (item) => item.value);

  // HERE WILL BE MORE CHECKS !!!!!!!!!!!!!!!!!!!!!!!!!!!!
  sendRequest("POST", "upload", data);
  formInput.forEach((item) => {
    item.value = "";
  });
});

function sendRequest(method, url, body = null) {
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

buttonDownload.addEventListener("click", function () {
  let getAllUsers = fetch("download", {
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
  console.log(getAllUsers.);
});
