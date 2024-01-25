# Reddit App
## Overview
This project is a Reddit application that allows users to explore Reddit content based on predefined categories, search for specific subreddits, and view corresponding posts and comments.

### Features
- Category Navigation: Users can navigate through popular Reddit categories such as "Popular," "News," and "Science."
- Subreddit Search: Users can search for a specific subreddit, and the application dynamically updates to display content from the searched subreddit.
- Post Display: The main body of the application displays posts from the selected category or searched subreddit, including titles, images, and post owners.
- Responsive Design: The application is designed to be responsive and accessible on various devices, from desktop to mobile.
- Loading Indicator: A loading indicator is displayed while fetching data to provide feedback to users.

### Technologies Used
- React: A JavaScript library for building user interfaces.
- Redux: A state management library for handling the application's state in a predictable way.
- Jest and Enzyme: Testing libraries for writing unit and integration tests for React components.
- GitHub: Version control system used for tracking changes and collaboration.
- Bootstrap: A front-end framework for styling and layout.
- CSS: Cascading Style Sheets for additional styling.
- Reddit JSON API: The Reddit JSON API is utilized to fetch and display Reddit content.

### Project Structure

The project follows a modular structure with key components:

- Header: Navigation and search functionality.
- MainBody: Displays posts based on the selected category or searched subreddit.
- SearchBar: Component for handling subreddit searches.

### Getting Started
Clone the repository: git clone https://github.com/your-username/repo-name.git
Install dependencies: npm install
Start the development server: npm start
Open the application in your browser: http://localhost:3000

### Future Work
- Implement pagination for handling a large number of posts.
- Enhance the user interface with additional styling and animations.
- Write comprehensive tests for components and features.
- View comments of a post 
