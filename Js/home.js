const banderas = document.getElementById('flags')


document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.com/v2/all')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
        filtros(data)
    } catch (error) {
        console.log(error)
    }
}


const banderillas = data => {
    let elements = '';
    data.forEach(item => { 

        elements +=


        `<a href="nuevo-pais.html?name=${item.name}" class="ov-btn-slide-left">
        <article class="card">
             <img src="${item.flag}" alt="" class="img-fluid">
             <div class="card-content">
                 <h3>${item.name}</h3>
                 <p>
                     <b>Population: </b>
                     ${item.population}
                 </p>
                 <p>
                     <b>Capital: </b>
                     ${item.capital}
                 </p>
                 <p>
                     <b>Región: </b>
                     ${item.region}
                 </p>
                 
                    
                 
             </div>
        </article> 
        </a>`   
             
      });
    banderas.innerHTML = elements
    
   
}    



 
