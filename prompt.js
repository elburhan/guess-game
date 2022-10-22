const gForm = document.querySelector('.g-form');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');

score.innerHTML = '0';
gForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let initialRange = 3;
    const random = Math.floor( Math.random() * initialRange );
    guess.value = '';
    let upscore = 0;
    if (random == guess.value) {
        // initialRange++;
        upscore++;
        score.innerHTML = upscore;
        localStorage.setItem('scores', upscore)
    } else{
        // initialRange = 3;
        score.innerHTML = '0';
        upscore = 0;
        localStorage.setItem('scores', upscore)
    }
})


