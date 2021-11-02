const URL ='https://phisix-api4.appspot.com/stocks.json'; 
const getBtn = document.getElementById('get-btn');

const getData = () => {
    axios
        .get(URL)
        .then (response => {
            console.log(response.data);
        })
        .catch(error => console.error(error));
};

getBtn.addEventListener('click', getData);

