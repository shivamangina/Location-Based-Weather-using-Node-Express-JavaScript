console.log('Client side javascript file is loaded!')



const Weatherapp = document.querySelector("form");
const search = document.querySelector('input')
const m1 = document.querySelector("#m1")
const m2 = document.querySelector("#m2")




Weatherapp.addEventListener('submit',(e) => {
    e.preventDefault();
    const loc = search.value
    console.log(loc)
    fetch(`/weather?address=${loc}`).then((response) => {
        response.json().then((data) => {        
            if(data.error){
                m1.textContent = ""
                m2.textContent = data.error 
            }else{
                const {Rainchance,placename,temperature} = data.forecast
                m1.textContent = `
                    There is  ${Rainchance} % chance of rainfall. 
                    ${placename}.
                    Temperature is ${temperature} F .`
        m2.textContent = data.location  
            }
                     
        })

        
    })
})