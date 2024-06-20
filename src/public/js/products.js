const containerProds = document.querySelector('#container')

const newCard = ({title, description, price, stock, category, thumbnails}) => {
    return `
        <div class="card">
            <img src=${thumbnails} class="card-img" alt="dior sauvage">
            <h3 class="card-title">${title}</h3>
            <p class="card-description">${description}</p>
            <p class="card-category">${category}</p>
            <strong class="card-price">$${price}</strong>
            <p class="card-stock">Stock: ${stock}</p>
            <button class="card-btn">Agregar al carrito</button>
        </div>
    `
}

const renderCards = (array) => {
    array.map(item => {
        containerProds.innerHTML += newCard(item)
    })
}

const getAll = async() => {
    try {
        const response = await fetch('http://localhost:8080/products');
        if (response.status !== 200) throw new Error('ERROR EN LA SOLICITUD');
        const data = await response.json();
        renderCards(data);
    } catch (error) {
        alert('ERROR ->' + error)
    }
}

getAll()