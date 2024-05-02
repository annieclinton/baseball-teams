## Baseball Teams API

## What does this API do?

- Add a city name as a query parameter to a URL and get back information about that city's baseball team in the form of a JSON object.

## How to Use this API:
1. To use this API from anywhere, go to https://baseball-nipq.onrender.com.
    - Since the hosting is free, it will spin down with inactivity, which can delay requests by 50 seconds or more. Thanks for your patience.
2. Add api/ and a query parameter (a city name) to the URL to get info back about that baseball team.  Press enter to refresh your browser.
    - Ex. https://baseball-nipq.onrender.com/api/oakland or https://baseball-nipq.onrender.com/api/baltimore.
    - Your query parameter can have a space in it. Ex. https://baseball-nipq.onrender.com/api/kansas city
    - If your query parameter is not the name of a city with a MLB team, you will get back a JSON object that says the info is unknown.
3.  You will see info about that city's baseball team in the browser in the form of a JSON object.

## For Developers:
- If you prefer to host this server and api locally on your computer (instead of accessing the version hosted on render.com) and have node.js installed, you can:

1. Type 'node server.js' in your command line to start the local server. 
2. Go to localhost:8000 in your web browser to read this documentation.
3. Follow the instructions for query parameter use above using the local host. Ex. localhost:8000/api/kansas city.
