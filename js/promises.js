(()=> {
    const url = `https://api.github.com/users/Kvar54/events`
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'PROMISES_TOKEN'
        }
    }
fetch(url, options)
    .then(response => response.json())
    .then (data => {
        console.log(data)
    });
})();