const output = document.querySelector('.output');
const message = maker('div', output, '', 'message');
const btn = maker('button', output, 'Start game', 'btn');
btn.onclick = startGame;
btn.style.display = 'block';
const gameArea = maker('div', output, '', 'gameArea');
const code = {
    combos : 4, arr:[]
};

function startGame(){
    console.log('Start');
    btn.style.display = 'none';
    code.tries = 0;
    gameArea.innerHTML = '';
    setUpGameBoard();
}

function setUpGameBoard(){
    for(let i=0;i<code.combos;i++){
        const digit = maker('input', gameArea, '', 'combo');
        digit.setAttribute('type', 'number');
        digit.max = 9;
        digit.min = 0;
        digit.value = 0;
        const val = Math.floor(Math.random()*10);
        code.arr.push(val);
    }
    const unlockButton = maker('button', gameArea, 'Unlock', 'btn');
    unlockButton.onclick = checkCombo;
}

function checkCombo(){
    const ins = document.querySelectorAll('.combo');
    let counter = 0;
    code.tries++;
    ins.forEach((el, ind)=>{
        el.style.color = 'white';
        if(el.value==code.arr[ind]){
            el.style.backgroundColor = 'green';
            counter++;
        }else{
            if(el.value > code.arr[ind]){
                el.style.backgroundColor = 'red';
            }else{
                el.style.backgroundColor = 'blue';
            }
        };
    })
    if(counter >= ins.length){
        message.textContent = `You guessed the code in ${code.tries} tries!`;
        gameWin();
    }else{
        message.textContent = 'Try again!';
    }
}

function gameWin(){
    const btn1 = document.querySelector('.gameArea button');
    btn1.style.display = 'none';
    btn.style.display = 'block';
}

function maker(eleTag, parent, html, cla){
    const el = document.createElement(eleTag);
    el.innerHTML = html;
    el.classList.add(cla);
    return parent.appendChild(el);

}
