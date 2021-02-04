// fetch('https://kontests.net/api/v1/all')
// .then(res => res.json())
// .then(data => {
//     contest(data);
// })

const searchForm = document.querySelector('.form');
let searchRes = document.querySelector('#contest-row');




searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let searchResult = e.target.querySelector('#contest-site').value;
    fetchApi(searchResult);
    console.log(searchResult);
})

function fetchApi(result) {
    let query = `https://kontests.net/api/v1/${result}`;
    fetch(query)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        template(data);
    });
}

function template(html) {
    let temp = '';

    html.map(() => {
        temp += 
    `<div class="col-md-4 mx-0 my-2">
        <div class="contest">
          <h3 class="contest-header">${html.name}</h3>
          <p class="start-time"><strong> Start:</strong> 3232</p>
          <p class="end-time"><strong> End:</strong> 8938</p>
          <p class="in_24"><strong> In 24_hours:</strong> Yes</p>
          <a href="" class="btn btn-danger text-right">See More!</a>
        </div>
      </div>`;
    });

    searchRes.innerHTML = temp;
}

function generatedHtml() {
    
}