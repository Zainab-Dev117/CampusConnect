let urlParams = new URLSearchParams(window.location.search);

let eventId = urlParams.get("id");


fetch("data/events.json")
    .then(response => response.json())
    .then(events => {

        let event = events.find(function (event) {
            return event.id == eventId;
        });

        if (event) {

            document.querySelector(".event-type").textContent =
                event.type.toUpperCase();

            document.querySelector(".event-detail-content h1").textContent =
                event.title;

            document.querySelector(".event-description").textContent =
                event.description;

            let info = document.querySelectorAll(".event-info p");

            info[0].textContent = event.date;
            info[1].textContent = event.time;
            info[2].textContent = event.department;
            info[3].textContent = event.organizer;
            info[4].textContent = event.venue;
            document.getElementById("eventImage").src = event.image;
            document.getElementById("eventImage").alt = event.title;

        }

    });