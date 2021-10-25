const myStocks = { 
    stock: [ {
        name: "AC ENERGY", 
        price: { 
            currency: "PHP",
            amount: 11.88 
        }, 
        percentChange: 10, 
        volume: 59519300, 
        symbol: "ACEN" 
        }, 
        { 
        name: "Jollibee", 
        price: { 
            currency: "PHP", 
            amount: 227.2 
        }, 
        percentChange: -0.96, 
        volume: 376000, 
        symbol: "JFC" 
        }, 
        { 
        name: "PUREGOLD", 
        price: { 
            currency: "PHP", 
            amount: 41.05 
        }, 
        percentChange: -3.07, 
        volume: 3211600, 
        symbol: "PGOLD" 
        }, 
        { 
        name: "PLDT", 
        price: { 
            currency: "PHP", 
            amount: 1620 
        }, 
        percentChange: -0.61, 
        volume: 94820, 
        symbol: "TEL" 
        }, 
        { 
        name: "Univ Robina", 
        price: {
            currency: "PHP", 
            amount: 139.80
        }, 
        percentChange: 2.19,
        volume: 1134870, 
        symbol: "URC" 
        }, 
        { 
        name: "PSEi", 
        price: { 
            currency: "PHP", 
            amount: 46.50 
        }, 
        percentChange: 0.64, 
        volume: 7266,
        symbol: "PSEi" 
        }, 
        { 
        name: "All Shares", 
        price: { 
            currency: "PHP", 
            amount: 20.47 
        }, 
        percentChange: 0.46, 
        volume: 445, 
        symbol: "ALL" 
        }, 
        { 
        name: "Financials", 
        price: { 
            currency: "PHP", 
            amount: -11.41
        }, 
        percentChange: -0.72, 
        volume: 1573, 
        symbol: "FIN"
        }, 
        { 
        name: "Industrial", 
        price: { 
            currency: "PHP", 
            amount: 133.54 
        }, 
        percentChange: 1.26, 
        volume: 10721, 
        symbol: "IND" 
        }, 
        { 
        name: "Holding Firms", 
        price: { 
            currency: "PHP", 
            amount: 149.03 
        }, 
        percentChange: 2.11, 
        volume: 7197, 
        symbol: "HDG" 
        }, 
        { 
        name: "Property", 
        price: { 
            currency: "PHP",
            amount: -21.97 
        }, 
        percentChange: -0.65, 
        volume: 3355, symbol: "PRO" 
        }, 
        { 
        name: "Services", 
        price: { 
            currency: "PHP", 
            amount: -8.52 
        }, 
        percentChange: -0.45, 
        volume: 1871, 
        symbol: "SVC" 
        }, 
        { 
        name: "Mining and Oil", 
        price: { 
            currency: "PHP", 
            amount: -97.75 
        }, 
        percentChange: -0.91, 
        volume: 10650, 
        symbol: "M-O" 
        }
   ], 
   asOf: "2021-10-19T12:50:00+08:00" 
}

buildTable(myStocks.stock)

function buildTable(data) {
    let table = document.getElementById('stocksList')

    for (let i = 0; i < data.length; i++) {
        let row = `
            <tr>
                <td>${data[i].name}</td>
                <td>₱${data[i].price.amount}
                <td>${data[i].percentChange}
                <td>${data[i].volume}
                <td>${data[i].symbol}
            </tr>
        `
    table.innerHTML += row 
    }
}
   