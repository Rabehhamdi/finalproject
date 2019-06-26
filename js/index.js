if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready(){
    var searchButton = document.getElementById('search-button');
    if((window.location.href === 'http://127.0.0.1:5500/index.html') || (window.location.href === '/')){
        searchButton.addEventListener('click', redirect)
    } else {
        var searchBtn = document.getElementsByClassName('btn-search');
        for (var i = 0 ; i < searchBtn.length; i++) {
            searchBtn[i].addEventListener('click', search)

        }
    }
}

function redirect(){
    window.location.href = "search.html"
}

function search(){
    var pickupLocation = document.querySelector('.pickup-location')
    var pickup = pickupLocation.value
    var datePickup = document.querySelector('.datepicker')
    var dateInput = datePickup.value
    var dropOffLocation = document.querySelector('.dropoff-location')
    var dropOff = dropOffLocation.value
    var containerSearch = document.getElementsByClassName('search-container')[0]
    var eventsContainer = containerSearch.getElementsByClassName('events-container')[0]
    var cardList = eventsContainer.getElementsByClassName('card')
    for(var i=0; i<cardList.length ;i++){
        var card = cardList[i]
        var eventDate = card.getElementsByClassName('event-date')[0]
            var date = eventDate.innerText
        var cardBody = card.getElementsByClassName('card-body')[0]
        var listDetails = cardBody.getElementsByClassName('test')[0]
        var fromLocation = listDetails.getElementsByClassName('from')[0]
            var from = fromLocation.innerText
        var destinationLocation = listDetails.getElementsByClassName('destination')[0]
             var destination = destinationLocation.innerText
        if((pickup === from) && (dateInput === date) && (dropOff === destination)){
            card.style.display= "block"
        }else{
            card.style.display= "none"
        }
    }

    
}
