document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const navContent = document.querySelector('#nav-content .container');

    const contentData = {
        home: '<h2>Home</h2><p>Welcome to the Electrical Components store.</p>',
        about: '<h2>About</h2><p>We offer a wide range of electrical components for all your needs.</p>',
        services: '<h2>Services</h2><p>We provide various services including component sourcing, and technical support.</p>',
        contact: '<h2>Contact</h2><p>Contact us at info@electricalcomponents.com or call us at +254741952205.</p>'
    };

    navLinks.forEach(link => {
        link.addEventListener('mouseover', (event) => {
            const contentKey = event.target.dataset.content;
            if (contentKey && contentData[contentKey]) {
                navContent.innerHTML = contentData[contentKey];
            }
        });

        link.addEventListener('mouseout', () => navContent.innerHTML = '');
    });

    const componentList = document.getElementById('component-list');
    const componentDetails = document.getElementById('component-details');
    const searchInput = document.getElementById('search-input');
    const purchasedComponentsList = document.getElementById('purchased-components');
    const ratingSection = document.getElementById('rating-section');
    const ratingComponentName = document.getElementById('rating-component-name');
    const ratingInput = document.getElementById('rating-input');
    const submitRatingButton = document.getElementById('submit-rating');

    let componentsData = [];
    let purchasedComponents = [];

    fetch('http://localhost:3000/components')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(components => {
            componentsData = components;
            displayComponentsList(componentsData);
        })
        .catch(error => console.error('Error fetching components:', error));
    function displayComponentsList(components) {
        componentList.innerHTML = '';
        components.forEach(component => {
            const componentItem = document.createElement('li');
            componentItem.textContent = component.name;
            componentItem.classList.add('component-item');
            componentItem.addEventListener('click', () => {
                displayComponentDetails(component, componentItem);
            });

            componentList.appendChild(componentItem);
        });
    }

    function displayComponentDetails(component, clickedItem) {
        const activeItem = document.querySelector('.component-item.active');
        if (activeItem) {
            activeItem.classList.remove('active');
        }
        clickedItem.classList.add('active');
        componentDetails.innerHTML = `
            <h2>${component.name}</h2>
            <img src="${component.image}" alt="${component.name}">
            <p><strong>Specifications:</strong></p>
            <ul class="specifications">
                ${Object.keys(component.specifications).map(key => `<li><strong>${key}:</strong> ${component.specifications[key]}</li>`).join('')}
            </ul>
            <p><strong>Price:</strong> ${component.price}</p>
            <button class="buy-button">Buy</button>
        `;
        const buyButton = componentDetails.querySelector('.buy-button');
        buyButton.addEventListener('click', (event) => {
            event.stopPropagation();
            buyComponent(component);
        });
    }

    function buyComponent(component) {
        purchasedComponents.push(component);
        renderPurchasedComponents();
    }

    function renderPurchasedComponents() {
        purchasedComponentsList.innerHTML = '';
        purchasedComponents.forEach(component => {
            const listItem = document.createElement('li');
            listItem.textContent = component.name;
            listItem.classList.add('purchased-component');
            listItem.addEventListener('click', () => {
                rateComponent(component);
            });
            purchasedComponentsList.appendChild(listItem);
        });
    }

    function filterComponents(searchTerm) {
        return componentsData.filter(component => {
            const name = (component.name || '').toLowerCase();
            const type = (component.type || '').toLowerCase();
            const specifications = Object.values(component.specifications || {}).join(' ').toLowerCase();

            searchTerm = (searchTerm || '').toLowerCase().trim();
            return name.includes(searchTerm) || type.includes(searchTerm) || specifications.includes(searchTerm);
        });
    }

    function handleSearch() {
        const searchTerm = searchInput.value;
        const filteredComponents = filterComponents(searchTerm);
        displayComponentsList(filteredComponents);

        if (filteredComponents.length > 0) {
            displayComponentDetails(filteredComponents[0]);
        } else {
            componentDetails.innerHTML = '<p>No components match your search.</p>';
        }
    }

    searchInput.addEventListener('input', handleSearch);

    function rateComponent(component) {
        ratingComponentName.textContent = component.name;
        ratingSection.style.display = 'block';

        submitRatingButton.onclick = function() {
            const rating = parseInt(ratingInput.value);
            if (rating >= 1 && rating <= 5) {
                component.rating = rating;
                updateComponentRating(component);
            }
        };
    }

    function updateComponentRating(component) {
        fetch(`http://localhost:3000/components/${component.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rating: component.rating })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(updatedComponent => {
            console.log('Component rating updated:', updatedComponent);
            ratingSection.style.display = 'none';
        })
        .catch(error => console.error('Error updating component rating:', error));
    }
});
