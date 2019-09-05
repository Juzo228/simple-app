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

        const bntStart = document.createElement('button')
        bntStart.classList.add('counter__button')
        bntStart.innerText = 'Start Timer'
        bntStart.addEventListener('click', () => {this.timerStart(display)})

        const btnStop = document.createElement('button')
        btnStop.classList.add('counter__button')
        btnStop.innerText = 'Stop Timer'
        btnStop.addEventListener('click', () => {this.timerStop()})

        const btnReset = document.createElement('button')
        btnReset.classList.add('counter__button')
        btnReset.innerText = 'Reset Timer'
        btnReset.addEventListener('click', () => {this.resetTimer(display)})
        
        row.appendChild(btnPlus)
        row.appendChild(btnMinus)
        row.appendChild(bntStart)
        row.appendChild(btnStop)
        row.appendChild(btnReset)

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

    timerStart(display){
        this.timer = setInterval(() => {
            this.count++
            display.innerText = this.count
        }, 1000)
    }

    timerStop(){
        clearInterval(this.timer);
    }

    resetTimer(display){
        this.count = 0
        display.innerText = this.count
    }
}