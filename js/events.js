let allEvents = [];

fetch("data/events.json")
    .then(response => response.json())
    .then(events => {

        allEvents = events;

        showEvents(allEvents);

    });


function showEvents(events) {

    let eventCards = document.getElementById("eventCards");

    eventCards.innerHTML = "";

    events.forEach(event => {

        eventCards.innerHTML += `
            <article class="event-card">

                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}">
                </div>

                <div class="event-content">

                    <span class="event-category">
                        ${event.type.toUpperCase()}
                    </span>

                    <h3>${event.title}</h3>

                    <p>${event.date}</p>
                    <p>${event.venue}</p>

                    <a href="event_detail.html?id=${event.id}">
                        View Details
                    </a>

                </div>

            </article>
        `;
    });
}


let searchInput = document.getElementById("searchInput");
let categoryFilter = document.getElementById("categoryFilter");


function filterEvents() {

    let searchText = searchInput.value.toLowerCase();
    let selectedCategory = categoryFilter.value;

    let filteredEvents = allEvents.filter(function (event) {

        let matchesSearch = event.title.toLowerCase().includes(searchText);

        let matchesCategory =
            selectedCategory === "all" ||
            event.type === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    showEvents(filteredEvents);
}


searchInput.addEventListener("input", function () {

    filterEvents();

});


categoryFilter.addEventListener("change", function () {

    filterEvents();

});

let sortFilter = document.getElementById("sortFilter");


sortFilter.addEventListener("change", function () {

    let sortedEvents = [...allEvents];

    if (sortFilter.value === "newest") {

        sortedEvents.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

    }

    if (sortFilter.value === "oldest") {

        sortedEvents.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });

    }

    showEvents(sortedEvents);

});