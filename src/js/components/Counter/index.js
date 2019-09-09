export default class Counter{
    constructor(container){
        this.count = 0
        this.timer = null
        this.buildView(container)
    }

    createButton(value, handlerClick){
        const btn = document.createElement('button')
        btn.classList.add('counter__btn')
        btn.innerText = value
        btn.addEventListener('click', handlerClick)

        return btn
    }

    buildView(container){
        const display = document.createElement('h3')
        display.classList.add('counter__display')

        const rowControlsCount = document.createElement('div')
        rowControlsCount.classList.add('counter__row')

        const btnPlus = this.createButton('UP', () => {
            this.plus(display)
        })
        const btnMinus = this.createButton('DOWN', () => {
            this.minus(display)
        })

        rowControlsCount.appendChild(btnPlus)
        rowControlsCount.appendChild(btnMinus)

        const rowControlsTimer = document.createElement('div')
        
        const btnStartTimer = this.createButton('Start', () => {

            this.timerStart(display)
        })

        const btnStopTimer = this.createButton('Stop', () => {
            this.timerStop()
        })

        rowControlsTimer.appendChild(btnStartTimer)
        rowControlsTimer.appendChild(btnStopTimer) 
        
        container.appendChild(display)
        container.appendChild(rowControlsCount)
        container.appendChild(rowControlsTimer)

        return display
    }

    plus(display){
        this.count++
        display.innerText = this.count
    }

    minus(display){
        this.count--
        display.innerText = this.count
    }

    timerStart(display){
        if(!this.timer){
            this.timer = setInterval(() => {
                this.count++
                display.innerText = this.count
            }, 1000)
        }
    }

    timerStop(){
        clearInterval(this.timer)
        this.timer = null
    }
}
