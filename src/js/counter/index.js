export default class Counter{
    constructor(container){
        this.count = 0;
        this.timer = null;

        this.buildViev(container);
    }

    buildViev(container){
        const display = document.createElement('h3')
        display.classList.add('counter__display')

        const row = document.createElement('div')
        row.classList.add('counter__row')

        const btnPlus = document.createElement('button')
        btnPlus.classList.add('counter__button')
        btnPlus.innerText = '+'
        btnPlus.addEventListener('click', () => {this.plus(display)})

        const btnMinus = document.createElement('button')
        btnMinus.classList.add('counter__button')
        btnMinus.innerText = '-'
        btnMinus.addEventListener('click', () => {this.minus(display)})
        
        row.appendChild(btnPlus)
        row.appendChild(btnMinus)

        container.appendChild(display)
        container.appendChild(row)
    }

    plus(display){
        this.count++
        console.log(this.count)
        display.innerText = this.count;
    }

    minus(display) {
        this.count--
        console.log(this.count)
        display.innerText = this.count;
    }

    timerStart(){
        this.timer = setInterval(() => {
            this.count++
            this.display.innerText = this.count
        }, 1000)
    }

    timerStop(){
        clearInterval(this.timer);
    }
}