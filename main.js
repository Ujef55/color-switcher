const buttons = document.querySelectorAll('.button'); 
const body = document.querySelector('body');

buttons.forEach( (btn) => {
    btn.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red') {
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color = 'white';
        } else if (e.target.id === 'green') {
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color = 'black';
        } else if (e.target.id === 'blue') {
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color = 'white';
        } else if (e.target.id === 'yellow') {
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color = 'black'
        } else if (e.target.id === 'white') {
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color = 'black';
        } else if (e.target.id === 'purple') {
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color = 'white';
        } else if (e.target.id === 'orange') {
            document.body.style.backgroundColor = e.target.id;
            document.body.style.color = 'black';
        }
    })
});


