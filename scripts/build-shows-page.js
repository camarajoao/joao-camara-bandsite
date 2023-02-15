const shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },

    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },

    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },

    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },

    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },

    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    }
];

const schedule = document.querySelector(".schedule");

for (let show of shows) {
    const concert = document.createElement("div");
    concert.classList.add('schedule__concerts');

    const keyDate = document.createElement("p");
    keyDate.classList.add('schedule__key');
    keyDate.innerText = 'DATE';
    concert.appendChild(keyDate);

    const valueDate = document.createElement("p");
    valueDate.classList.add('schedule__value', 'schedule__value--bold');
    valueDate.innerText = `${show.date}`;
    concert.appendChild(valueDate);

    const keyVenue = document.createElement("p");
    keyVenue.classList.add('schedule__key');
    keyVenue.innerText = 'VENUE';
    concert.appendChild(keyVenue);

    const valueVenue = document.createElement("p");
    valueVenue.classList.add('schedule__value');
    valueVenue.innerText = `${show.venue}`;
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

    schedule.appendChild(concert);

}


