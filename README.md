# 🎬 Movie Information API (Node.js + Express + MySQL + Sequelize)

A backend API built with Node.js, Express, and Sequelize to retrieve and cache movie information using the OMDb API. It uses MySQL as a local persistent cache.

---

## 📁 Project Structure

project-root/ ├── configs/ │   └── database.js        # Sequelize and DB connection ├── models/ │   ├── index.js           # Sequelize instance and sync │   └── movie.model.js     # Movie model schema ├── routes/ │   └── movie.routes.js    # Express route for /movies ├── services/ │   └── movie.service.js   # Movie logic and OMDb API handling ├── utilities/ │   └── movie.util.js      # Helper functions ├── .env                   # Environment variables ├── server.js              # Main app entry └── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-info-api.git
cd movie-info-api
```
2. Install dependencies

npm install

3. Environment Configuration

Create a .env file in the root directory:

PORT=3000
OMDB_API_KEY=your_omdb_api_key
DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=movie_cache

4. Run the application

Sequelize will automatically create the database and movies table if they don't exist.

node server.js

> ✅ Make sure your MySQL server is running and accessible using the credentials you provided in .env.




---

🧪 API Usage

Request

GET /movies/Inception

Response (if cached or fetched from API)

{
  "title": "Inception",
  "year": 2010,
  "director": "Christopher Nolan",
  "plot": "A thief who steals corporate secrets...",
  "imdbRating": 8.8,
  "cached": true
}

Not Found

{
  "error": "Movie not found"
}


---

🔧 Features

Fetch movie data from OMDb API by title

Use MySQL as a local cache with Sequelize

Auto-creates DB schema with sequelize.sync()

Handles errors (network, API, database)

Environment-based configuration via .env



---

🛠 Tech Stack

Node.js

Express.js

Sequelize ORM

MySQL

OMDb API
