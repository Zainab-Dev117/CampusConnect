fetch("data/events.json")
    .then(response => response.json())
    .then(events => {

        let eventSelect = document.getElementById("eventSelect");

        events.forEach(event => {

            eventSelect.innerHTML += `
                <option value="${event.id}">${event.title}</option>
            `;

        });

    });
let feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your feedback has been submitted successfully.");

    feedbackForm.reset();

});