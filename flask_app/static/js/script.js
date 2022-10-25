let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')
let formBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form-container')
let formClose = document.querySelector('#form-close')

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
})

boxDiv = document.querySelector('#box')
imageDiv = document.querySelector('#image')
hotelNameDiv = document.querySelector('#hotel_name')
addressDiv = document.querySelector('#address')
reviewsDiv = document.querySelector('#reviews')
errorSec = document.querySelector('#error')

function getCaboData(event) {
    event.preventDefault()
    let checkIn = document.querySelector('#check_in').value
    let checkOut = document.querySelector('#check_out').value
    let numAdults = document.querySelector('#num_adults').value
    var searchForm = document.getElementById('caboForm')
    var form = new FormData(searchForm);

    if (checkIn === '') {
        errorSec.innerHTML+= '<p>please choose a check in date</p>'
    }
    else if (checkOut === '') {
        errorSec.innerHTML+= '<p>please choose a check out date</p>'
    }
    else if (numAdults === '') {
        errorSec.innerHTML+= '<p>please choose number of adults</p>'
    }
    else {
        fetch('http://localhost:5000/searching/cabo',{method:'POST',body:form})
        .then(res => res.json() )
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.data.body.searchResults.results.length; i++) {
                if (data.data.body.searchResults.results[i].vrBadge) {
                    continue
                }
                if (data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop == undefined) {
                    continue
                }
                boxDiv.innerHTML += `
                <div class="box">
                    <div class="image"><img src="${data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop}" alt="hotel picture"</div>
                    <div class="content">
                        <h2>${data.data.body.searchResults.results[i].name}</h2>
                        <p>${data.data.body.searchResults.results[i].address.streetAddress}, ${data.data.body.searchResults.results[i].address.locality}, ${data.data.body.searchResults.results[i].address.countryName}</p>
                        <div class="review">${data.data.body.searchResults.results[i].guestReviews.rating}/10</div>
                    </div>
                </div>`
            }
        })
        .catch(err => console.error(err));
        } 
    }

function getLondonData(event) {
    event.preventDefault()
    checkIn = document.querySelector('#check_in').value
    checkOut = document.querySelector('#check_out').value
    numAdults = document.querySelector('#num_adults').value
    var searchForm = document.getElementById('londonForm')
    var form = new FormData(searchForm);

    if (checkIn === '') {
        errorSec.innerHTML+= '<p>please choose a check in date</p>'
    }
    else if (checkOut === '') {
        errorSec.innerHTML+= '<p>please choose a check out date</p>'
    }
    else if (numAdults === '') {
        errorSec.innerHTML+= '<p>please choose number of adults</p>'
    }
    else {
    fetch('http://localhost:5000/searching/london',{method:'POST',body:form})
	.then(response => response.json())
	.then(data => {
        console.log(data)
        for (let i = 0; i < data.data.body.searchResults.results.length; i++) {
            if (data.data.body.searchResults.results[i].vrBadge) {
                continue
            }
            if (data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop == undefined) {
                continue
            }
            boxDiv.innerHTML += `
            <div class="box">
                <div class="image"><img src="${data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop}" alt="hotel picture"</div>
                <div class="content">
                    <h2>${data.data.body.searchResults.results[i].name}</h2>
                    <p>${data.data.body.searchResults.results[i].address.streetAddress}, ${data.data.body.searchResults.results[i].address.locality}, ${data.data.body.searchResults.results[i].address.countryName}</p>
                    <div class="review">${data.data.body.searchResults.results[i].guestReviews.rating}/10</div>
                </div>
            </div>`
        }
    })
	.catch(err => console.error(err));
    }
}

function getTokyoData(event) {
    event.preventDefault()
    checkIn = document.querySelector('#check_in').value
    checkOut = document.querySelector('#check_out').value
    numAdults = document.querySelector('#num_adults').value
    var searchForm = document.getElementById('tokyoForm')
    var form = new FormData(searchForm);

    if (checkIn === '') {
        errorSec.innerHTML+= '<p>please choose a check in date</p>'
    }
    else if (checkOut === '') {
        errorSec.innerHTML+= '<p>please choose a check out date</p>'
    }
    else if (numAdults === '') {
        errorSec.innerHTML+= '<p>please choose number of adults</p>'
    }
    else {
    fetch('http://localhost:5000/searching/tokyo',{method:'POST',body:form})
	.then(response => response.json())
	.then(data => {
        console.log(data)
        for (let i = 0; i < data.data.body.searchResults.results.length; i++) {
            if (data.data.body.searchResults.results[i].vrBadge) {
                continue
            }
            if (data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop == undefined) {
                continue
            }
            boxDiv.innerHTML += `
            <div class="box">
                <div class="image"><img src="${data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop}" alt="hotel picture"</div>
                <div class="content">
                    <h2>${data.data.body.searchResults.results[i].name}</h2>
                    <p>${data.data.body.searchResults.results[i].address.streetAddress}, ${data.data.body.searchResults.results[i].address.locality}, ${data.data.body.searchResults.results[i].address.countryName}</p>
                    <div class="review">${data.data.body.searchResults.results[i].guestReviews.rating}/10</div>
                </div>
            </div>`
        }
    })
	.catch(err => console.error(err));
    }
}

function getHonoluluData(event) {
    event.preventDefault()
    checkIn = document.querySelector('#check_in').value
    checkOut = document.querySelector('#check_out').value
    numAdults = document.querySelector('#num_adults').value
    var searchForm = document.getElementById('honoluluForm')
    var form = new FormData(searchForm);

    if (checkIn === '') {
        errorSec.innerHTML+= '<p>please choose a check in date</p>'
    }
    else if (checkOut === '') {
        errorSec.innerHTML+= '<p>please choose a check out date</p>'
    }
    else if (numAdults === '') {
        errorSec.innerHTML+= '<p>please choose number of adults</p>'
    }
    else {
    fetch('http://localhost:5000/searching/honolulu',{method:'POST',body:form})
	.then(response => response.json())
	.then(data => {
        console.log(data)
        for (let i = 0; i < data.data.body.searchResults.results.length; i++) {
            if (data.data.body.searchResults.results[i].vrBadge) {
                continue
            }
            if (data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop == undefined) {
                continue
            }
            boxDiv.innerHTML += `
            <div class="box">
                <div class="image"><img src="${data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop}" alt="hotel picture"</div>
                <div class="content">
                    <h2>${data.data.body.searchResults.results[i].name}</h2>
                    <p>${data.data.body.searchResults.results[i].address.streetAddress}, ${data.data.body.searchResults.results[i].address.locality}, ${data.data.body.searchResults.results[i].address.countryName}</p>
                    <div class="review">${data.data.body.searchResults.results[i].guestReviews.rating}/10</div>
                </div>
            </div>`
        }
    })
	.catch(err => console.error(err));
    }
}

function getNewYorkData(event) {
    event.preventDefault()
    checkIn = document.querySelector('#check_in').value
    checkOut = document.querySelector('#check_out').value
    numAdults = document.querySelector('#num_adults').value
    var searchForm = document.getElementById('nycForm')
    var form = new FormData(searchForm);

    if (checkIn === '') {
        errorSec.innerHTML+= '<p>please choose a check in date</p>'
    }
    else if (checkOut === '') {
        errorSec.innerHTML+= '<p>please choose a check out date</p>'
    }
    else if (numAdults === '') {
        errorSec.innerHTML+= '<p>please choose number of adults</p>'
    }
    else {
    fetch('http://localhost:5000/searching/new_york_city',{method:'POST',body:form})
	.then(response => response.json())
	.then(data => {
        console.log(data)
        for (let i = 0; i < data.data.body.searchResults.results.length; i++) {
            if (data.data.body.searchResults.results[i].vrBadge) {
                continue
            }
            if (data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop == undefined) {
                continue
            }
            boxDiv.innerHTML += `
            <div class="box">
                <div class="image"><img src="${data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop}" alt="hotel picture"</div>
                <div class="content">
                    <h2>${data.data.body.searchResults.results[i].name}</h2>
                    <p>${data.data.body.searchResults.results[i].address.streetAddress}, ${data.data.body.searchResults.results[i].address.locality}, ${data.data.body.searchResults.results[i].address.countryName}</p>
                    <div class="review">${data.data.body.searchResults.results[i].guestReviews.rating}/10</div>
                </div>
            </div>`
        }
    })
	.catch(err => console.error(err));
    }
}

function getParisData(event) {
    event.preventDefault()
    checkIn = document.querySelector('#check_in').value
    checkOut = document.querySelector('#check_out').value
    numAdults = document.querySelector('#num_adults').value
    var searchForm = document.getElementById('parisForm')
    var form = new FormData(searchForm);

    if (checkIn === '') {
        errorSec.innerHTML+= '<p>please choose a check in date</p>'
    }
    else if (checkOut === '') {
        errorSec.innerHTML+= '<p>please choose a check out date</p>'
    }
    else if (numAdults === '') {
        errorSec.innerHTML+= '<p>please choose number of adults</p>'
    }
    else {
    fetch('http://localhost:5000/searching/paris',{method:'POST',body:form})
	.then(response => response.json())
	.then(data => {
        console.log(data)
        for (let i = 0; i < data.data.body.searchResults.results.length; i++) {
            if (data.data.body.searchResults.results[i].vrBadge) {
                continue
            }
            if (data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop == undefined) {
                continue
            }
            boxDiv.innerHTML += `
            <div class="box">
                <div class="image"><img src="${data.data.body.searchResults.results[i].optimizedThumbUrls.srpDesktop}" alt="hotel picture"</div>
                <div class="content">
                    <h2>${data.data.body.searchResults.results[i].name}</h2>
                    <p>${data.data.body.searchResults.results[i].address.streetAddress}, ${data.data.body.searchResults.results[i].address.locality}, ${data.data.body.searchResults.results[i].address.countryName}</p>
                    <div class="review">${data.data.body.searchResults.results[i].guestReviews.rating}/10</div>
                </div>
            </div>`
        }
    })
	.catch(err => console.error(err));
    }
}