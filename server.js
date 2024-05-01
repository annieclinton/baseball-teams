const express = require('express')
const app = express()
const PORT = 8000

const friends = {
    'annie': {
        'age' : 36,
        'birthName': 'Annie Clinton' ,
        'birthLocation': 'Greenbrae, CA'
    },
    'ainsley': {
        'age' : 36,
        'birthName': 'Ainsley Kaidi' ,
        'birthLocation': 'Los Angeles, CA'
    },
    'laurel': {
        'age' : 36,
        'birthName': 'Laurel Lang' ,
        'birthLocation': 'Greenbrae, CA'
    },
    'unknown': {
        'age' : 0,
        'birthName': 'Unknown' ,
        'birthLocation': 'Unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') //look in current directory for that file
})

app.get('/api/:name', (request, response) => {
    const friendName = request.params.name.toLowerCase() //grabs the parameter out of the route
    if(friends[friendName]){
        response.json(friends[friendName]) //respond with the correct object based on the property name
        // response.json(friends[friendName].birthName)
    }else{
        response.json(friends['unknown'])
    }
    
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}.`)
})