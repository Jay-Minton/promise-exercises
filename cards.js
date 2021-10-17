let base_url = "http://deckofcardsapi.com/api/deck"

$.getJSON(`${base_url}/new/draw`).then(data => {
    console.log(data.deck_id);
    console.log(data.cards[0].value, "of", data.cards[0].suit);

});

$.getJSON(`${base_url}/new/draw`).then(data => {
    console.log(data.deck_id);
    console.log(data.cards[0].value, "of", data.cards[0].suit);
    return $.getJSON(`${base_url}/${data.deck_id}/draw/`);
}).then(data => {
    console.log(data.cards[0].value, "of", data.cards[0].suit);
});

//$("body").append(`<img src="${data.cards[0].image}">`);

$btn = $("button");
$cards = $("#cards")
deck_id = 0; 
$.getJSON(`${base_url}/new/shuffle`).then(data => {
    return deck_id=data.deck_id;
});

$btn.on('click', function() {
    $.getJSON(`${base_url}/${deck_id}/draw/`).then(data => {
        $cards.append(`<img src="${data.cards[0].image}">`);
        if(data.remaining == 0) {
            $btn.remove();
        };
    });
});
