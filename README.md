#### README.md file for the phase-1-project

## Electrical Components Store
- Welcome to the Electrical Components Store! This web application provides an interactive platform to browse and explore various electrical components. Each component comes with detailed specifications, pricing, and images to help you make informed decisions. Users can also rate the components they have purchased. The application features smooth navigation to enhance your browsing experience.

## Table of Contents
- Features
- Installation
- Usage
- Code explanation

## Features
- Fetch and display a list of electrical components
- Display detailed specifications for each component
-  User rating system for purchased components
- Smooth scrolling navigation bar with links to Home, About, Service, and Contacts sections

## Installation 
- Create a new repository on GitHub
- Add your project files: Add `index.html`, `style.css`, `script.js`, and `db.json` to the repository.
- Start the JSON Server: Open `index.html` in your web browser. You can simply double-click the file or use a live 
server extension if you are using an IDE like VSCode.
- Access the application: Visit `http://localhost:3000` to access the JSON data.

## Note 
- Ensure the JSON Server is running before you try to access the web application to fetch the components data.
- If you encounter any issues, check your browser's console for error messages and ensure all steps were followed 
correctly.

## Usage 
- Open the Application
- Using the Navigation Bar:The navigation bar at the top of the page allows you to smoothly scroll to different sections of the app:
1. Home:Browse the list of electrical components.
2. About:Learn more about the Electrical Components Store.
3. Service:Discover the services provided by the store.
4. Contacts:Find contact information for the store.
- View the Components List: The homepage displays a list of electrical components. Each component card shows the 
component's name, image, price, and a brief specification.
- Component Details:  Click on any component card to view more detailed specifications of that component.
- Purchase the component: Once you have viewed the component and you are interested you can click the buy button and the component will be dsplayed under the section of my purchased list.
- Rate a Component: To rate the component you can click the component in the purchased list and rate it.
- Additional Features: Search Functionality. Use the search bar at the top of the homepage to quickly find specific 
components by name.

## Code Explanation
`HTML` Defines the structure and content of the web page.
- Navigation Bar:Provides links to different sections of the page (Home, About, Service, Contacts) with smooth 
scrolling functionality.
- Sections:Contains separate sections for Home, About, Service, and Contacts. The Home section includes a `div` 
with the ID `components-list` to display the electrical components.
`CSS Styles` General Styling. Basic styling for the body, navigation bar, and sections.
- Navigation Bar:Fixed at the top with a background color, centered text, and inline list items for navigation
 links.
- Components List:Uses flexbox for layout, displaying component cards in a grid. Each card has a border, margin, 
padding, and fixed width.
`index.js`JavaScript is a versatile programming language that enables interactive and dynamic behavior on web 
pages. In this project, JavaScript is used to: 
1. Fetch data from a local server.
2. Dynamically update the HTML content based on the fetched data.
3. Implement smooth scrolling for the navigation bar.
FetchComponents: Fetch component data from the local server (`http://localhost:3000/components`).
Process:
1. Initiates a network request to get component data.
2. Checks if the response is successful; if not, throws an error.
3. Parses the JSON data from the response.
4. Calls `displayComponentsList` with the fetched data to update the UI.
DisplayComponentsList: Display the list of components on the web page.
Process:
1. Clears any existing content in the `components-list` div.
2. Iterates over the array of components.
3. Creates a new `div` element for each component with relevant details (image, name, specifications, price, 
rating).
4. Appends each component card to the `components-list` div.
Initialization:Initialize the application when the DOM is fully loaded.
Process:
1. Adds an event listener to the `DOMContentLoaded` event.
2. Calls `fetchComponents` to load and display the components.
3. Calls `setupNavigation` to enable smooth scrolling for navigation links.

## Contact 
For any inquiries and need for clarification on the code,you can reach via my email: 
**dennis.kipkurui@student.moringaschool.com**

    
