import BaseButton from '../BaseButton'

export default class PrettyButton extends BaseButton{
    constructor(containerId, value, className){
        super(containerId, value)
        this.className = className
    }

    render(){
        const btn = super.render()
        btn.classList.add(this.className)

        return btn
    }
}