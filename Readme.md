# Notes REST API

A RESTful CRUD API for managing notes, built with **Node.js, Express.js, MongoDB, and Mongoose**.

---

## Features

- Full CRUD for notes (Create, Read, Update, Partial Update, Delete)
- Mongoose schema validation
- Basic error handling & request logging
- CORS support
- Environment variable configuration

---

## Tech Stack

Node.js · Express.js · MongoDB · Mongoose · dotenv · CORS

---

## Project Structure

```text
notes-backend/
├── controllers/
│   └── noteController.js
├── middleware/
│   └── logs.js
├── models/
│   └── Note.js
├── routes/
│   └── noteRoutes.js
├── public/
│   └── logs.txt
├── .env
├── .env.example
├── index.js
├── package.json
└── README.md
```

---

## Installation

```bash
git clone <your-github-repository-url>
cd notes-backend
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=8009
MONGO_URI=your_mongodb_connection_string
```

## Running the Server

```bash
npm run dev     # development
npm start       # production
```

Runs at `http://localhost:8009`

---

## API Endpoints

Base URL: `http://localhost:8009/api/notes`

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/notes` | Create a note |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a single note |
| PUT | `/api/notes/:id` | Update a note |
| PATCH | `/api/notes/:id` | Partially update a note |
| DELETE | `/api/notes/:id` | Delete a note |

**Request body example (POST/PUT):**
```json
{
  "title": "Learn Node.js",
  "content": "Practice Express and MongoDB",
  "category": "Study"
}
```

---

## Note Schema

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | String | Yes | Title of the note |
| `content` | String | Yes | Main note content |
| `category` | String | No | Defaults to `General` |
| `createdAt` | Date | Auto | Creation timestamp |
| `updatedAt` | Date | Auto | Last update timestamp |

---

## Error Handling

Handles missing fields, invalid IDs, note-not-found, and server errors, e.g.:

```json
{ "message": "Note not found" }
```

---

## Logging

Requests are logged to `public/logs.txt`.

---

## CORS

Allows requests from the frontend at `http://localhost:5173`.

---

## Future Improvements

- Authentication
- Pagination, search & filtering
- Note ownership
- Rate limiting
- Swagger docs
- Automated tests

---

## Author

**Himanshu Kumawat**