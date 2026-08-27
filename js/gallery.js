fetch("data/gallery.json")
    .then(response => response.json())
    .then(gallery => {

        let galleryItems = document.getElementById("galleryItems");

        gallery.forEach(item => {

            galleryItems.innerHTML += `
                <div class="gallery-item" data-category="${item.category}">

                      <div class="gallery-image">
                        <img src="${item.image}" alt="${item.title}">
                      </div>

                    <div class="gallery-content">
                        <span>${item.category}</span>
                        <h3>${item.title}</h3>
                        <p>${item.year}</p>
                    </div>

                </div>
            `;

        });

        const buttons = document.querySelectorAll(".gallery-filters button");

        buttons.forEach(button => {
            button.addEventListener("click", () => {

                const selectedCategory = button.innerText;

                const items = document.querySelectorAll(".gallery-item");

                items.forEach(item => {

                    if (selectedCategory === "All") {
                        item.style.display = "block";
                    }
                    else if (
                        item.dataset.category === selectedCategory ||
                        (selectedCategory === "Workshops" && item.dataset.category === "Workshop")
                    ) {
                        item.style.display = "block";
                    }
                    else {
                        item.style.display = "none";
                    }

                });

            });
        });

    });