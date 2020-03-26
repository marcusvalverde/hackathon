// dec var to save the API key
const key = '05bbf2f8bb6841a4a4ef6e0de0d32a09';

function getData() {
  displayLoader();
  let email = document.getElementById('email').value;
  const xhr = new XMLHttpRequest();
  // req header
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      removeLoader();
      // will turn into an array of objs
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      displayData(data, xhr.status);
    } else if (xhr.readyState === 4 && xhr.status === 404) {
      removeLoader();
      displayData(null, xhr.status);
    }
  };

  xhr.open(
    'GET',
    `https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breachedaccount/${email}`,
    true
  );
  xhr.setRequestHeader('hibp-api-key', '05bbf2f8bb6841a4a4ef6e0de0d32a09');

  // send
  xhr.send();
}

document.getElementById('btn').addEventListener('click', getData);

function displayData(data, status) {
  removeData();
  if (status === 200) {
    data.forEach(el => {
      document.getElementById('result-wrap').insertAdjacentHTML(
        'afterbegin',
        `
        <div class="result-box">${el.Name}</div>
        `
      );
    });
  } else {
    document.getElementById('result-wrap').insertAdjacentHTML(
      'afterbegin',
      `
      <div class="no-result-box">No Breaches Found!</div>
      `
    );
  }
}

function displayLoader() {
  document.getElementById('result-wrap').insertAdjacentHTML(
    'afterbegin',
    `
    <div class="loader"></div>
    `
  );
}
function removeLoader() {
  let div = document.querySelector('.loader');
  div.remove();
}

function removeData() {
  const results = document.querySelectorAll('.result-box');
  if (results) {
    results.forEach(result => {
      result.remove();
    });
  }
  const noresults = document.querySelector('.no-result-box');
  if (noresults) noresults.remove();
}
