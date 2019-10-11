## Simple Forum

This is a simplistic forum created in react as a final project for Helio. I will be using react as the front end,
and using Hapi + knex for the API/Backend.

# LIVE

https://simple-forum-main.herokuapp.com/

Please note, this is a work in progress and is typically behind 1 or 2 commits.

## Setup

To start, please run npm install in the /src folder. This may take a while.

If you dont already, install knex globaly to your machine so that you may run the migrations.

go into /api, and run docker build -t forum-postgres. This will create the image for docker.

chmod +x the 3 following files: startapi, startbackend , and generate-data.

Proceed to run in the following order:

./startapi

./startbackend

./generate-data

npm start

Notice, these do not have to be run in order, although I find it helpful following the order the data goes through.

## Notes

Front end is located at http://locaslhost:3000

API is located at http://localhost:5251

Backend is run through a docker container using postgres.

## Common Issues

auth0 "type" is undefined - install eslint, this is a recent issue with eslint and node modules.

