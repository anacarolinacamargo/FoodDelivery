function fetchData() {
    fetch("https://6059fb9db11aba001745d43f.mockapi.io/api/v1/cards")
    .then(response => {
        
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        
        const html = data.items.map(item => {
            
            return `<div id="main-banner1">
            <h4>${item.subtitle}</h4>
            <h3>${item.title}</h3>
            <h2>${item.description} </h2>
            <img id="test" src="${item.image}""/>
            
             
 
            </div>`
        }).join('')
        
        document
        .querySelector("#api-content")
        .insertAdjacentHTML("afterbegin", html) 

    }).catch(error => {
        
    })
}
fetchData();