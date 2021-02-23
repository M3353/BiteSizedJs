// init count is 0
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('subtract')) {
            count--;
        }
        else if (styles.contains('add')) {
            count++;
        }
        else if(styles.contains('reset')) {
            count = 0;
        }
        value.textContent = count;
    });
});


