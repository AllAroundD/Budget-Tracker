![issues](https://img.shields.io/github/issues/AllAroundD/Budget-Tracker) ![forks](https://img.shields.io/github/forks/AllAroundD/Budget-Tracker) ![stars](https://img.shields.io/github/stars/AllAroundD/Budget-Tracker) ![license](https://img.shields.io/github/license/AllAroundD/Budget-Tracker)

# Budget-Tracker

Budget Tracker is a PWA (Progressive Web Application) to allow for offline access and functionality and then once back online, the transactions are added to the tracker.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Live](#Live)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

For just using the application, there is no installation required. The application url is .
For the local setup of this application, there are a few npm modules that are required (dotenv, etc.). Once the repository is cloned, typing 'npm install' at the command prompt will install all of the required modules.
This application requires the MongoDB client (https://www.mongodb.com/download-center#community) to be installed.
A '.env' file will need to be created in the main folder of the application after cloning for the local connection info, with the following info:
DB_URL=mongodb://localhost/budget
Then typing 'npm run seed' will initialize the database. Note: this step only needs to be included when the database needs to be initialized or restored.
Once the user runs the program by typing 'npm start', the node server will be listening on port 3000.
Open browser window and go to http://localhost:3000.

## Usage

For just using the application, the application url ... is where the application resides.
If installing locally, see the installation steps above to install and then run the node server by typing 'npm start'.

Budget Tracker is an application that allows for offline access and functionality.
The user is able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.
Offline Functionality:
Enter deposits offline
Enter expenses offline

When brought back online:
Offline entries should be added to tracker.

Here is an example of the application in action:
![Workout Tracker demo](./public/assets/img/Budget-Tracker-demo.gif)

## Usage

Here is the live application: https://fast-cliffs-85364.herokuapp.com/

## License

[MIT](LICENSE)

## Contributing

## Tests

No formal tests documented. The usage demo gif above shows some of the tests that were performed.

## Questions

[GitHub Profile](https://github.com/AllAroundD/)

-If you have any questions, please contact me at [dougmoore@use.startmail.com](mailto:dougmoore@use.startmail.com?subject=[GitHub]%20Source%20Question).
