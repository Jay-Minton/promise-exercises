let base_url = "http://numbersapi.com";

$.getJSON(`${base_url}/${24}?json`).then(data => {
    $("body").append(`<p>${data.text}</p>`);
});

$.getJSON(`${base_url}/${[4,6,8,43]}?json`).then(data => {
    for(key in data) {
        $("body").append(`<p>${data[key]}</p>`);
    }
})

Promise.all(
    Array.from({ length: 4}, () => {
        return $.getJSON(`${base_url}/${24}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});