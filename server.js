const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const teams = {
    // 'arizona': {
    //     'age' : 36,
    //     'birthName': 'Annie Clinton' ,
    //     'birthLocation': 'Greenbrae, CA'
    // },
    'arizona': {
        'teamName' : 'Diamondbacks'
    },
    'atlanta': {
        'teamName' : 'Braves' 
    },
    'baltimore': {
        'teamName' : 'Orioles'
    },
    'boston': {
        'teamName' : 'Red Sox'
    },
    'chicago': {
        'teamName' : 'Cubs and White Sox'
    },
    'cincinnati': {
        'teamName' : 'Reds'
    },
    'cleveland': {
        'teamName' : 'Guardians'
    },
    'colorado': {
        'teamName' : 'Rockies'
    },
    'detroit': {
        'teamName' : 'Tigers'
    },
    'houston': {
        'teamName' : 'Astros'
    },
    'kansas city': {
        'teamName' : 'Royals'
    },
    'los angeles': {
        'teamName' : 'Angels and Dodgers'
    },
    'miami': {
        'teamName' : 'Marlins'
    },
    'milwaukee': {
        'teamName' : 'Brewers'
    },
    'minnesota': {
        'teamName' : 'Twins'
    },
    'new york': {
        'teamName' : 'Mets and Yankees'
    },
    'oakland': {
        'teamName' : 'Athletics'
    },
    'philadelphia': {
        'teamName' : 'Phillies'
    },
    'pittsburgh': {
        'teamName' : 'Pirates'
    },
    'san diego': {
        'teamName' : 'Padres'
    },
    'san francisco': {
        'teamName' : 'Giants'
    },
    'seattle': {
        'teamName' : 'Mariners'
    },
    'st. louis': {
        'teamName' : 'Cardinals'
    },
    'tampa bay': {
        'teamName' : 'Rays'
    },
    'texas': {
        'teamName' : 'Rangers'
    },
    'toronto': {
        'teamName' : 'Blue Jays'
    },
    'washington': {
        'teamName' : 'Nationals'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') //look in current directory for that file
})

app.get('/api/:city', (request, response) => {
    const city = request.params.city.toLowerCase() //grabs the parameter out of the route
    if(teams[city]){
        response.json(teams[city]) //respond with the correct object based on the property name
        // response.json(teams[city].teamName)
    }else{
        response.json(city['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}.`)
})