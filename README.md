# Book Management System

## Overview

The Book Management System is a web application designed to efficiently manage a collection of books. It allows users to create, read, update, and delete book entries. The application is built with React for a dynamic and responsive frontend, styled using Tailwind CSS, and communicates with a backend server via Axios for HTTP requests. It also incorporates Notistack for user-friendly notifications.

![1](https://github.com/user-attachments/assets/18005f5c-52c0-44a8-847d-4d95aabbe3d0)

![2](https://github.com/user-attachments/assets/c580afda-e449-4d78-a1d7-3d2ed97fe484)

![3](https://github.com/user-attachments/assets/114746a9-8f75-4d99-a0fb-3e548d780a0f)

![4](https://github.com/user-attachments/assets/009f21c8-65d9-4742-8d28-6927ec43c63b)

## Features

- **Create Books**: Add new books with details such as title, author, and publish year.
- **Read Books**: View detailed information about each book.
- **Update Books**: Modify existing book details.
- **Delete Books**: Remove books from the collection.
- **Responsive Design**: Mobile-friendly and adaptable to different screen sizes.
- **Notifications**: User feedback through toast notifications for actions like creation, updates, and deletions.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express (assuming backend API setup)
- **Database**: MongoDB (assuming MongoDB is used on the backend)
- **HTTP Client**: Axios
- **Notifications**: Notistack

## Setup

### Prerequisites

- Node.js and npm installed
- Backend server running (assumed to be at `http://localhost:5555`)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/book-management-system.git

2. **Navigate to the Project Directory**
   ```bash
   cd book-management-system
3. **Install Dependencies**
   ```bash
   npm install
4. **Start the Development Server**
   ```bash
   npm start
5. **Access the Application**
   - **Open your browser and navigate to http://localhost:3000 to see the application in action.**

## Usage

Create Book
- Navigate to the "Create Book" page.
- Enter the book details (title, author, publish year).
- Click "Save" to add the book to the collection.
  
## View Book Details
- Navigate to the "Show Book" page by clicking on the book in the list.
- View detailed information about the book, including ID, title, author, publish year, creation time, and last update time.
- Edit Book
- Navigate to the "Edit Book" page to modify the book details.
- Update the title, author, or publish year as needed.
- Click "Save" to apply changes.
  
## Delete Book
- Navigate to the "Delete Book" page to remove a book.
- Confirm deletion by clicking "Yes, Delete it."
  
## Components
- **BackButton:** A button component for navigating back to the previous page.
- **Spinner:** A loading indicator displayed while data is being fetched or processed.
- **BooksTable:** A table that lists all books with options to view, edit, and delete each entry.
- **BookSingleCard:** A card component displaying book details and action buttons.
- **BookModal:** A modal that shows detailed information about a book when triggered.

## Sample Data
- A sample data file (books-data.json) is provided to pre-populate the book collection for testing purposes. You can import this data into your database for initial testing.
