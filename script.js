fetch('https://kontests.net/api/v1/all')
.then(res => res.json())
.then(data => {
    contest(data);
})

