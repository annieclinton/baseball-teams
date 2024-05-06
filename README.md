![alt text] (https://github.com/annieclinton/baseball-teams/blob/main/baseballTeamsAPISmall.png)

## Baseball Teams API

## What does this API do?

- Add a city name as a query parameter to a URL and get back information about that city's baseball team. 
- If the city is not listed in the API database, the browser will display 'Unknown'. 

**Link to project:** https://baseball-nipq.onrender.com. 

Please note, since this project is hosted using Render's free tier, loading may take 50 seconds or more.

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, MongoDB, Render 

## For Developers:

- If you prefer to host this server and API locally on your computer (instead of accessing the version hosted on render.com) and you have node.js installed, you can:

1. Type 'node server.js' in your command line to start the local server. 
2. Go to localhost:8000/api in your web browser.
3. Follow the instructions for query parameter use above and type it into the address bar, but this time use localhost:8000. Ex. localhost:8000/api/kansas city.

## How to Use this API *without* the client side interface (just for funsies):

1. In your web browser, edit the URL: add /api/ and a query parameter (a city name) to the URL to get info back about that baseball team.  Press enter to refresh your browser.
    - Ex. https://baseball-nipq.onrender.com/api/oakland or https://baseball-nipq.onrender.com/api/baltimore.
    - Your query parameter can have a space in it. Ex. https://baseball-nipq.onrender.com/api/kansas city
    - If your query parameter is not the name of a city with a MLB team, you will get back a JSON object that says the info is unknown.
3.  You will see info about that city's baseball team in the browser in the form of a JSON object.


