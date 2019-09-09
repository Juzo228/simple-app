import PrettyButton from '../PrettyButton'

export default class FunctionalButton extends PrettyButton{
    constructor(containerId, value, className, handlerClick){
        super(containerId, value, className)
        this.handlerClick = handlerClick
    }

    render(){
        const btn = super.render()
        btn.addEventListener('click', this.handlerClick)

        return btn
    }
}