# -rn-assignment3-11026846

# Task Manager App

## Overview

Task Manager is a React Native application designed to help users manage their tasks and categories efficiently. The app features a header with user information, a search bar with a filter button, and sections for categories and ongoing tasks.

## Components

### 1. Header
- **File**: `./components/Header.js`
- **Description**: Displays the username and the total count of tasks.
- **Usage**:
  ```jsx
  <Header username="Wilberforce" tasksCount={16} />
  ```

### 2. CategoryCard
- **File**: `./components/CategoryCard.js`
- **Description**: Displays a card with a category name, task count, and an image.
- **Props**:
  - `category`: Name of the category (string).
  - `tasksCount`: Number of tasks in the category (number).
  - `imageUri`: URI of the category image (number).
- **Usage**:
  ```jsx
  <CategoryCard category="Training" tasksCount={12} imageUri={1} />
  ```

### 3. TaskItem
- **File**: `./components/TaskItem.js`
- **Description**: Displays a single task item.
- **Props**:
  - `task`: The task description (string).
- **Usage**:
  ```jsx
  <TaskItem task="Mobile App Development" />
  ```

### 4. App
- **File**: `App.js`
- **Description**: The main component that brings together the Header, CategoryCard, and TaskItem components, and structures the overall layout of the app.
- **Usage**: This is the root component of the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/task-manager.git
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm start
   ```
   Use the Expo Go app on your phone to scan the QR code and run the application.

## Screenshots

### Home Screen
![Home Screen](./screenshots/home.png)

### Categories
![Categories](./screenshots/categories.png)

### Ongoing Tasks
![Ongoing Tasks](./screenshots/tasks.png)

## Directory Structure

```
task-manager/
├── assets/
│   └── images/
│       ├── creative-arts.jpeg
│       ├── culinary-adventures.png
│       ├── Filter.png
│       ├── fitness.png
│       ├── music.jpg
│       ├── netflix-and-chill.jpeg
│       ├── outdoor.jpg
│       ├── party.jpg
│       ├── photography.png
│       ├── programing.png
│       ├── search.png
│       ├── study.png
│       ├── travel.png
│       └── user-icon.png
├── components/
│   ├── Header.js
│   ├── CategoryCard.js
│   └── TaskItem.js
├── screenshots/
│   ├── home.png
│   ├── categories.png
│   └── tasks.png
├── App.js
├── app.json
└── package.json
```

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any issues or questions, please open an issue on GitHub or contact the project maintainers.

---

This README provides a comprehensive guide to understanding and using the Task Manager app. It includes detailed descriptions of each component, installation instructions, screenshots for visualization, and directory structure for easy navigation.