const buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.addEventListener('click', changeTextAndConsoleAndRemove);
})

function changeTextAndConsoleAndRemove () {
    this.innerText = 'clicked';
    console.log('clicked');
    this.removeEventListener('click', changeTextAndConsoleAndRemove);
}
