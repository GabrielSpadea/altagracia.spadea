const lista = document.querySelector('#listado')

 fetch('/data.json')
     .then((response) => response.json())
     .then((data) => {
         data.forEach(producto => {
             const li = document.createElement('li')
             li.innerHTML = `
                 <h4>${producto.nombre}</h4>
                 <p>${producto.precio}</p>
             `
             lista.appendChild(li)
         })
     })