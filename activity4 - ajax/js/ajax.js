const stocksContainer = document.getElementById('stockList');
const getBtn = document.getElementById('get-btn');

getBtn.addEventListener('click', function () {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://phisix-api4.appspot.com/stocks.json', true);
  xhr.onload = function () {
    let ourData = JSON.parse(this.responseText);
    let data = ourData;
    console.log(data);

    let table = document.getElementById('stocksList')

    for (let i = 0; i < data.stock.length; i++) {
      let row = `
                    <tr>
                        <td>${data.stock[i].name}</td>
                        <td>₱${data.stock[i].price.amount}
                        <td>${data.stock[i].percent_change}
                        <td>${data.stock[i].volume}
                        <td>${data.stock[i].symbol}
                    </tr>
                `
      table.innerHTML += row
    }
  }
  xhr.send();

});


