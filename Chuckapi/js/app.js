const btn = document.querySelector('.btn');
const jokeList =document.querySelector('.jokes');

btn.addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;
    let url = `https://api.icndb.com/jokes/random/${number}`;

    fetch(url)
    .then(response => {
        return response.json();
    }).then(data =>{

        let output = '';

        data.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;
        });

        jokeList.innerHTML = output;
    });

    console.log(number);
    e.preventDefault();
}