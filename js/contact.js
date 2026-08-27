fetch("data/coordinators.json")
    .then(response => response.json())
    .then(coordinators => {

        let team = document.getElementById("teamCards");

        coordinators.forEach(coordinator => {

            team.innerHTML += `
                <article class="coordinator-card">

                    <h3>${coordinator.name}</h3>

                    <p>${coordinator.role}</p>
                    <p>${coordinator.department}</p>
                    <p>${coordinator.phone}</p>
                    <p>${coordinator.email}</p>

                </article>
            `;

        });

    });