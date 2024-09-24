let products = [
    {
        name: "Dell XPS 13",
        price: 35000,
        description: "13-inch laptop with Intel Core i7, 16GB RAM, and 512GB SSD."
    },
    {
        name: "Apple MacBook Pro",
        price: 55000,
        description: "16-inch MacBook Pro with M1 Pro chip, 16GB RAM, and 1TB SSD."
    },
    {
        name: "HP Spectre x360",
        price: 42000,
        description: "Convertible 13-inch laptop with Intel Core i5, 8GB RAM, and 512GB SSD."
    },
    {
        name: "Asus ZenBook 14",
        price: 30000,
        description: "14-inch ultrabook with AMD Ryzen 7, 16GB RAM, and 1TB SSD."
    }
];

let searchStr = prompt("Enter the search you want to search for");

let searchResult = products.map((product) => {
    if (product.name.toLowerCase().includes(searchStr.toLowerCase()) || 
        product.price.toString().includes(searchStr) || 
        product.description.toLowerCase().includes(searchStr.toLowerCase())) {
        return product;
    }
}).filter((product) => product !== undefined);

console.log(searchResult);

searchResult.forEach((product) => {
    let table = document.querySelector("tbody");
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    let priceCell = document.createElement("td");
    let descriptionCell = document.createElement("td");

    nameCell.innerText = product.name;
    priceCell.innerText = product.price;
    descriptionCell.innerText = product.description;

    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(descriptionCell);

    table.appendChild(row);
});
