## Installation

```bash
$ npm install
```

## Install Redis
If you haven't installed Redis yet, you can install it using Homebrew (macOS):
    
    brew install redis

## Running the Application

1. Start the Redis Server
    Start the Redis server by running:

        `redis-server`

    This command will start Redis on the default port 6379.

2. Run the NestJS Application
    In a new terminal window (keep Redis running), navigate to the project directory if you're not already there, and start the application:

        npm run start

    The application will start running on http://localhost:3000.

## Using the API with Postman

A Postman collection containing all the API requests is provided in the postman folder of this project.

Steps to Import:
1. Open Postman.
2. Click on Import in the top-left corner.
3. Select the File tab.
4. Click on Upload Files.
5. Navigate to the project directory, go to the postman folder, and select NestJS GraphQL API.postman_collection.json.
6. Click Open to import the collection.

