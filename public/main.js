document.querySelector('button').addEventListener('click', apiRequest)
document.querySelector('button').addEventListener('click', check)

function check(){
    console.log('button is working')
}

async function apiRequest(){
    const cityName = document.querySelector('input').value
    try{
        const response = await fetch(`https://baseball-nipq.onrender.com/api/${cityName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.teamName
    }catch(error){
        console.log(error)
    }
}