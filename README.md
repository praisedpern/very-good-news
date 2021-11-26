# Very Good News
> Use Very Good News for your news aggregation needs. Or do not, I am not a beggar.

_-Ron Swanson_

This is a frontend for for use with my [backend portfolio API](https://github.com/praisedpern/be-nc-news), with a colour scheme and title inspired by [my favourite Parks and Recreation character](https://parksandrecreation.fandom.com/wiki/Ron_Swanson).

## Requirements
node.js
## Running Locally
Clone this repo and run `npm install` in the root folder.

Once npm has finished installing dependencies, create a `.env` file in the root folder. You will need two variables in there in order for this app to access my API.
- `REACT_APP_BASEURL`
- `REACT_APP_TOKEN`

The base URL is where the API server is running, usually this is `http://localhost:9090`.
Use a token of your choice, but to access the API you will need to generate a `.env.development` file on the API server instance so it knows what token to listen for. For instruction on how to do this, please see [the API repo](https://github.com/praisedpern/be-nc-news)