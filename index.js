document.addEventListener("DOMContentLoaded", function() {
    const componentsContainer = document.getElementById('components-container');

    // Fetch data (example JSON structure is assumed)
    fetch('http://localhost:3000/components')
        .then(response => response.json())
        .then(data => {
            data.components.forEach(component => {
                const componentCard = document.createElement('div');
                componentCard.classList.add('component-card');

                const img = document.createElement('img');
                img.src = component.imageUrl;
                componentCard.appendChild(img);

                const name = document.createElement('h2');
                name.textContent = component.name;
                componentCard.appendChild(name);

                const description = document.createElement('p');
                description.textContent = component.description;
                componentCard.appendChild(description);

                const price = document.createElement('p');
                price.classList.add('price');
                price.textContent = `$${component.price}`;
                componentCard.appendChild(price);

                componentsContainer.appendChild(componentCard);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
