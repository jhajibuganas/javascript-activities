const URL = 'https://phisix-api4.appspot.com/stocks.json';
const stocksContainer = document.getElementById('stockList');
const getBtn = document.getElementById('get-btn');

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL, true);
  xhr.responseType = 'json';
  xhr.onload = () => {
    let data = xhr.response;
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

};

getBtn.addEventListener('click', getData);