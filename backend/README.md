# FastAPI Backend for React Native Prototype

This directory contains the backend implementation of the React Native prototype application. The backend is built using FastAPI and connects to a PostgreSQL database.

## Project Structure

- **app/**: Contains the main application code.
  - **main.py**: Entry point for the FastAPI application.
  - **api/**: Contains API endpoints.
    - **v1/**: Version 1 of the API.
      - **endpoints/**: Contains individual endpoint files.
        - **health.py**: Health check endpoint.
  - **core/**: Configuration settings for the application.
    - **config.py**: Configuration settings.
  - **models/**: Database models.
    - **user.py**: User model.
  - **schemas/**: Pydantic schemas for data validation.
    - **user.py**: User schemas.
  - **crud/**: CRUD operations for database interactions.
    - **user.py**: User management operations.
  - **db/**: Database connection and setup.
    - **base.py**: Database base model and connection setup.

- **requirements.txt**: Lists the Python dependencies required for the backend.

- **alembic/**: Contains migration scripts for database schema changes.
  - **versions/**: Migration versions.
  - **env.py**: Alembic configuration.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd rn-fastapi-prototype/backend
   ```

2. **Set up a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:
   ```bash
   uvicorn app.main:app --reload
   ```

5. **Access the API**: Open your browser and navigate to `http://localhost:8000/docs` to view the API documentation.

## Database Setup

The backend uses PostgreSQL as the database. Ensure that PostgreSQL is installed and running. You can initialize the database using the provided SQL scripts in the `db/` directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.