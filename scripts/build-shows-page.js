const APIKey = "?api_key=5d3a2fbf-085f-47a2-b58b-9d9c6aff06fa";
const APIShows = `https://project-1-api.herokuapp.com/showdates${APIKey}`;

const schedule = document.querySelector(".schedule");
// create elements for schedule title
const scheduleTitle = document.createElement('div');
scheduleTitle.classList.add('schedule__title');

const scheduleHeading = document.createElement('h2');
scheduleHeading.classList.add('schedule__heading');
scheduleHeading.innerText = "Shows";
scheduleTitle.appendChild(scheduleHeading);

schedule.appendChild(scheduleTitle);

// create elements for schedule content
const scheduleContent = document.createElement('div');
scheduleContent.classList.add('schedule__content');

const tableHeaderTable = document.createElement('div');
tableHeaderTable.classList.add('schedule__header');
scheduleContent.appendChild(tableHeaderTable);


function getShows() {
    axios.get(APIShows)
        .then((response) => {
            const shows = response.data;

            for (let show of shows) {
                displayShow(show);
            }
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
};
getShows();


function displayShow(show) {
    const concert = document.createElement("div");
    concert.classList.add('schedule__concerts');

    const keyDate = document.createElement("p");
    keyDate.classList.add('schedule__key');
    keyDate.innerText = 'DATE';
    concert.appendChild(keyDate);

    const valueDate = document.createElement("p");
    valueDate.classList.add('schedule__value', 'schedule__value--bold');
    const date = new Date(show.date);
    valueDate.innerText = `${date.toDateString()}`;
    concert.appendChild(valueDate);

    const keyVenue = document.createElement("p");
    keyVenue.classList.add('schedule__key');
    keyVenue.innerText = 'VENUE';
    concert.appendChild(keyVenue);

    const valueVenue = document.createElement("p");
    valueVenue.classList.add('schedule__value');
    valueVenue.innerText = `${show.place}`;
    concert.appendChild(valueVenue);

    const keyLocation = document.createElement("p");
    keyLocation.classList.add('schedule__key');
    keyLocation.innerText = 'LOCATION';
    concert.appendChild(keyLocation);

    const valueLocation = document.createElement("p");
    valueLocation.classList.add('schedule__value');
    valueLocation.innerText = `${show.location}`;
    concert.appendChild(valueLocation);

    const button = document.createElement("button");
    button.classList.add('schedule__buy-tickets');
    button.innerText = 'BUY TICKETS';
    concert.appendChild(button);

    concert.addEventListener('mouseover', function () {
        concert.classList.add('schedule__concerts--hover');
    })
    concert.addEventListener('mouseleave', function () {
        concert.classList.remove('schedule__concerts--hover');
    })

    concert.addEventListener('click', function (event) {
        const activeEl = document.querySelector('.schedule__concerts--active');
        if (activeEl !== null && activeEl !== concert) {
            activeEl.classList.remove('schedule__concerts--active');
        }

        concert.classList.toggle('schedule__concerts--active');
        event.stopPropagation();
    })

    scheduleContent.appendChild(concert);

}

schedule.appendChild(scheduleContent);

// Elements for tablet and desktop versions - .schedule__key

const keyDateTable = document.createElement("p");
keyDateTable.classList.add('schedule__key--table');
keyDateTable.innerText = 'DATE';
tableHeaderTable.appendChild(keyDateTable);

const keyVenueTable = document.createElement("p");
keyVenueTable.classList.add('schedule__key--table');
keyVenueTable.innerText = 'VENUE';
tableHeaderTable.appendChild(keyVenueTable);

const keyLocationTable = document.createElement("p");
keyLocationTable.classList.add('schedule__key--table');
keyLocationTable.innerText = 'LOCATION';
tableHeaderTable.appendChild(keyLocationTable);

const keyTicketTable = document.createElement('p');
keyTicketTable.classList.add('schedule__key--table');
keyTicketTable.innerText = 'TICKET';
keyTicketTable.style.color = 'transparent';
tableHeaderTable.appendChild(keyTicketTable);


