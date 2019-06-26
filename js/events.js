window.onload =function addRow() {

    var x = sessionStorage.getItem("uname") 
    var description = sessionStorage.getItem("description")
    var datedebut = sessionStorage.getItem("datedebut")
    var datefin = sessionStorage.getItem("datefin")
    var Photo = sessionStorage.getItem("Photo") 
    var Pickup = sessionStorage.getItem("Pickup") 
    var Droopoff = sessionStorage.getItem("Droopoff") 
 
    if (x != null && description != null && datedebut != null && datefin != null && Pickup != null && Droopoff != null  ){
   
    var div = document.createElement('div'); 
    div.innerHTML =   `  <div class="card" style="width: 30rem;">
            <div class="event-date">
                <h1 class="h1">`+datedebut+`</h1>
            </div>
            <img src="img/event2.jpg" class="card-img-top">
            <div class="card-body">
                <ul class="test">
                    <li><img src="img/nej.png" class="profil-event-pic"></li>
                    <li>
                        <h5 class="card-title event-name">`+ x +`</h5>
                    </li><br>
                    <li class="from"><i class="fas fa-map-marker-alt fa-2x"></i>
                        <h6>`+ Pickup +`</h6>
                    </li>
                    <li>
                        <h6 style="font-weight: 100">to</h6>
                    </li>
                    <li class="destination"><i class="fas fa-map-marker fa-2x"></i>
                        <h6>`+ Droopoff +`</h6>
                    </li>
                </ul>
                <p class="card-text"> `+ description +`</p>
                <h3>`+ datefin +`</h3>
                <a href="#" class="btn btn-warning">Read more</a>
            </div>
        </div>`; 
    
    document.getElementById('ajoute').appendChild(div);
    }
    window.sessionStorage.clear()
}
 

function myName() {
    sessionStorage.setItem("uname", document.getElementById("uname").value) 
    
    
}

function myPickup() {
    sessionStorage.setItem("Pickup", document.getElementById("Pickup").value)


}

function myDroopoff() {
    sessionStorage.setItem("Droopoff", document.getElementById("Droopoff").value)


}

function myDescription() {
    sessionStorage.setItem("description", document.getElementById("description").value)
    
    return description
}

function myDateDebut() {
    var str = document.getElementById("datedebut").value
    strYear = str.substring(0, 4)
    var newstr = str.replace('2019-', '')
    newstr2 = newstr.replace('-', '/')
    date = newstr2 + '/' + strYear
    sessionStorage.setItem("datedebut", date)
    
    return datedebut
}

function myDateFin() {
    sessionStorage.setItem("datefin", document.getElementById("datefin").value)
    
    return datefin
}

function myPhoto() {
    sessionStorage.setItem("Photo", document.getElementById("Photo").value)
     
    var input = document.querySelector('input[type="file"]')
    input.addEventListener('change', function (e) {
        const reader = new FileReader()
        reader.onload = function () {
            const img = new Image()
            img.src = reader.result
           var  x = document.getElementsByClassName("events-container")[0]
           x.appendChild(img)
        }
        reader.readAsDataURL(input.files[0])
    }, false)
     
    return Photo
}

 
