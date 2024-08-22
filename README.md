
---

# Blog Frontend

This is the frontend for a blog application built with React. The application interacts with the backend via Axios for making API requests. It includes user authentication, post management, category management, and profile picture handling.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Libraries and Tools](#libraries-and-tools)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Register, login, and manage sessions.
- **Post Management**: Create, update, delete, and view posts.
- **Category Management**: Add and manage categories.
- **Profile Picture Upload**: Upload and update profile pictures.
- **Password Security**: Passwords are hashed using `bcrypt` before being sent to the backend.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   REACT_APP_API_URL=http://localhost:5000/api
   ```

   - `REACT_APP_API_URL` should point to your backend API.

4. **Start the development server:**

   ```bash
   npm start
   ```

   The development server will start on `http://localhost:3000`.

## Environment Variables

- `REACT_APP_API_URL`: The base URL of the backend API.

## Usage

1. **Register and Login:**
   - Users can register for a new account or log in using existing credentials.
   - Passwords are hashed using `bcrypt` before being sent to the backend for added security.

2. **Manage Posts:**
   - Users can create, update, delete, and view posts.
   - All posts are fetched from the backend API using Axios.

3. **Manage Categories:**
   - Users can add and view categories.
   - Category management is integrated with the backend API.

4. **Profile Picture:**
   - Users can upload and update their profile pictures.

## Libraries and Tools

- **React**: Frontend framework for building the user interface.
- **Axios**: Library for making HTTP requests to the backend API.
- **React Router**: For client-side routing.
- **bcryptjs**: Used for hashing passwords before they are sent to the backend.
- **Redux** (optional): For state management (if you’re using it).
- **React-Bootstrap** or **Material-UI** (optional): For UI components and styling (if you’re using them).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

---
