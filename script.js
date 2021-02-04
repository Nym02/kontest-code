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

    html.map(r => {
        let startDate = getDate(r.start_time);
        let endDate = getDate(r.end_time);

        let startTime = getTime(r.start_time);
        let endTime = getTime(r.end_time);
        temp += 
    `<div class="col-md-4 mx-0 my-2">
        <div class="contest">
          <h3 class="contest-header text-info">${r.name}</h3>
          <p class="start-time"><strong> Start Date:</strong> ${startDate}</p>
          <p class="start-time"><strong> Start Time:</strong> ${startTime}</p>
          <p class="end-time"><strong> End Date:</strong> ${endDate}</p>
          <p class="end-time"><strong> End Time:</strong> ${endTime}</p>
          <p class="in_24"><strong> In 24_hours:</strong> ${r.in_24_hours}</p>
          <a href="${r.url}" target="_blank" class="btn btn-outline-info text-right">See More!</a>
        </div>
      </div>`;
    });

    searchRes.innerHTML = temp;
}

function getDate(time) {
    let date = new Date(time);
    let newDate = date.toDateString();
    return newDate;
}

function getTime(t) {
    let time = new Date(t);
    let newTime = time.toLocaleTimeString();

    return newTime;
}