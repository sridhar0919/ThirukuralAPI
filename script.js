// Setting up default value to show onscreen
fetch(`https://api-thirukkural.vercel.app/api?num=1`)
.then(response => response.json())
.then(res => executeTamil(res));

// Creating required variables to handle fetched data
let kuralNo = document.querySelector('.kural-no');
let section = document.querySelector('.section');
let chapter = document.querySelector('.chapter');
let kural = document.querySelector('.kural');
let desc = document.querySelector('.description');

// Adding event listener to search option
document.querySelector('.search-button').addEventListener('click', getContent);


async function getContent() {
  
  // Fetching value in search box
  let number = document.querySelector('#number').value;
  
  const response = await fetch(`https://api-thirukkural.vercel.app/api?num=${number}`);
  const res = await response.json();
  
  // Getting id of active button
  let active = document.querySelector('.active').id;

  if(String(active) === 'tamil') {
    executeTamil(res);
  }
  else if(String(active) === 'english') {
    executeEnglish(res);
  }
  
}

// Executing tamil content
function executeTamil(res) {
  // Fetching Kural no
  kuralNo.innerHTML = `
    <i class="fas fa-book-open fa-2x"></i>
    <p class="h4 ml-3"> ${res.number} </p>
  `;

  // Fetching section
  section.innerHTML = `
  <p class="h5 font-weight-bold text-center">${res.sect_tam}</p>
  `

  // Fetching chapter
  chapter.innerHTML = `
    <p class="h5 font-weight-bold text-center">${res.chap_tam} -- ${res.chapgrp_tam}</p>
  `;

  // Fetching kural
  kural.innerHTML = `
    <p><i class="fas fa-pencil-alt"></i></p>
    <p class="ml-2">${res.line1} 
       <br>
       ${res.line2}
    </p>
  `;

  // Fetching Description
  desc.innerHTML = `
    <p class="mr-2"><i class="fas fa-feather-alt"></i></p>
    <p>${res.tam_exp}</p>
    `;
}

// Executing english content
function executeEnglish(res) {
  // Fetching Kural no
  kuralNo.innerHTML = `
    <i class="fas fa-book-open fa-2x"></i>
    <p class="h4 ml-3"> ${res.number} </p>
  `;

  // Fetching section
  section.innerHTML = `
  <p class="h5 font-weight-bold text-center">${res.sect_eng}</p>
  `

  // Fetching chapter
  chapter.innerHTML = `
    <p class="h5 font-weight-bold text-center">${res.chap_eng} -- ${res.chapgrp_eng}</p>
  `;

  // Fetching kural
  kural.innerHTML = `
    <p><i class="fas fa-pencil-alt"></i></p>
    <p class="ml-2">${res.line1} 
       <br>
       ${res.line2}
    </p>
  `;

  // Fetching Description
  desc.innerHTML = `
    <p class="mr-2"><i class="fas fa-feather-alt"></i></p>
    <p>${res.eng_exp}</p>
    `;
}

// Works when english button is clicked
function changeEnglish() {
  let tamil = document.querySelector('#tamil');
  tamil.classList.remove('active');

  let english = document.querySelector('#english');
  english.classList.add('active');
}

// Works when tamil button is clicked
function changeTamil() {
  let english = document.querySelector('#english');
  english.classList.remove('active');

  let tamil = document.querySelector('#tamil');
  tamil.classList.add('active');
}


