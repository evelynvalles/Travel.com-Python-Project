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

const search_api = () => {
    fetch('http://localhost:5000/get_api',{method:'GET'})
        .then(res => res.json() )
        .then( data => console.log(data) )
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

boxDiv = document.querySelector('#box')
imageDiv = document.querySelector('#image')
hotelNameDiv = document.querySelector('#hotel_name')
addressDiv = document.querySelector('#address')
reviewsDiv = document.querySelector('#reviews')
errorSec = document.querySelector('#error')

function getCaboData(event) {
    event.preventDefault()
    checkIn = document.querySelector('#check_in').value
    checkOut = document.querySelector('#check_out').value
    numAdults = document.querySelector('#num_adults').value
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
    fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=1640244&pageNumber=1&pageSize=15&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${numAdults}&sortOrder=BEST_SELLE&locale=en_US&currency=USD`, options)
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

function getLondonData(event) {
    event.preventDefault()
    checkIn = document.querySelector('#check_in').value
    checkOut = document.querySelector('#check_out').value
    numAdults = document.querySelector('#num_adults').value
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
    fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=549499&pageNumber=1&pageSize=15&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${numAdults}&sortOrder=BEST_SELLE&locale=en_US&currency=USD`, options)
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
    fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=726784&pageNumber=1&pageSize=15&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${numAdults}&sortOrder=BEST_SELLE&locale=en_US&currency=USD`, options)
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
    fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=1431094&pageNumber=1&pageSize=15&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${numAdults}&sortOrder=BEST_SELLE&locale=en_US&currency=USD`, options)
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
    fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=15&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${numAdults}&sortOrder=BEST_SELLE&locale=en_US&currency=USD`, options)
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
    fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=504261&pageNumber=1&pageSize=15&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${numAdults}&sortOrder=BEST_SELLE&locale=en_US&currency=USD`, options)
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