## Project Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



## About the local server

We will need json-server to run the database locally from
a json fule until a backend is made 

You can install json-server globally by using:

### `npm install -g json-server`

then from the `jsonData` folder, you can run

### `json-server --watch -p 8090 data.json`

which will use [http://localhost:8090](http://localhost:8090) as your temporary database.