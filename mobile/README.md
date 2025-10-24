# React Native FastAPI Prototype

This project is a prototype mobile application built with React Native for both iOS and Android platforms, backed by a FastAPI backend and a PostgreSQL database.

## Project Structure

- **mobile/**: Contains the React Native application.
  - **android/**: Android-specific files for the React Native app.
  - **ios/**: iOS-specific files for the React Native app.
  - **src/**: Source code for the mobile application.
    - **App.tsx**: Main entry point for the application.
    - **screens/**: Contains screen components.
      - **HomeScreen.tsx**: Main screen of the application.
    - **components/**: Reusable components.
      - **ExampleComponent.tsx**: An example reusable component.
    - **navigation/**: Navigation setup for the app.
      - **index.tsx**: Defines the navigation structure.
    - **services/**: API service functions.
      - **api.ts**: Functions for making API calls to the FastAPI backend.
    - **types/**: TypeScript types and interfaces.
      - **index.ts**: Exports types used throughout the app.
  - **package.json**: Configuration file for npm dependencies and scripts.
  - **tsconfig.json**: TypeScript configuration file.
  - **babel.config.js**: Babel configuration for the React Native project.
  - **README.md**: Documentation specific to the mobile app.

- **backend/**: Contains the FastAPI backend application.
  - **app/**: Main application code.
    - **main.py**: Entry point for the FastAPI application.
    - **api/**: API endpoints.
      - **v1/**: Version 1 of the API.
        - **endpoints/**: Contains endpoint definitions.
          - **health.py**: Health check endpoint.
    - **core/**: Core configuration settings.
      - **config.py**: Configuration settings for the FastAPI application.
    - **models/**: Database models.
      - **user.py**: User model representing the database schema.
    - **schemas/**: Pydantic schemas for data validation.
      - **user.py**: User data validation schemas.
    - **crud/**: CRUD operations for user management.
      - **user.py**: User management operations.
    - **db/**: Database connection and models.
      - **base.py**: Database connection setup.
  - **requirements.txt**: Python dependencies for the FastAPI backend.
  - **alembic/**: Database migration scripts.
    - **versions/**: Migration scripts.
    - **env.py**: Alembic configuration for migrations.
  - **README.md**: Documentation specific to the backend application.

- **db/**: Database initialization scripts.
  - **init.sql**: SQL commands to initialize the database.
  - **docker-entrypoint-initdb.d/**: Directory for initial database schema setup.
    - **schema.sql**: SQL commands for the initial database schema.

- **docker-compose.yml**: Docker configuration for running the application.
- **.env.example**: Example environment variable configuration.
- **.gitignore**: Files and directories to be ignored by Git.
- **README.md**: General documentation for the entire project.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd rn-fastapi-prototype
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory and install the required Python packages:
     ```
     cd backend
     pip install -r requirements.txt
     ```

3. **Set up the database**:
   - Ensure PostgreSQL is running and configure the database settings in the `.env` file.

4. **Run the backend**:
   ```
   uvicorn app.main:app --reload
   ```

5. **Set up the mobile app**:
   - Navigate to the `mobile` directory and install the required npm packages:
     ```
     cd mobile
     npm install
     ```

6. **Run the mobile app**:
   - For Android:
     ```
     npx react-native run-android
     ```
   - For iOS:
     ```
     npx react-native run-ios
     ```

## Contributing

Feel free to submit issues or pull requests for any improvements or features you would like to see in this project.