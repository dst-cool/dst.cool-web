

class ChangeGradientColor {
    constructor(baseColorList, element) {
        this.baseColorList = baseColorList;
        this.initX = 0;
        this.initY = 0;

        this.curColoList = this.baseColorList;
        this.ratioHue = 1

        this.isMoving = false;
        this.element = document.querySelector(element);
        this.w = this.element.offsetWidth
        this.h = this.element.offsetHeight


        this.hueInc

        // [-1 -- 1 ]   * progressXScale
        this.progress 


        this.progressXScaleRatio = 0.3
        this.progressYScaleRatio = 0.2
        this.progressXY

        this.distanceXY
        this.distanceValue = 0

        this.reqAnimation
        this.cureColoList = []
        this.Interval

        this.startTime
        this.stepHue = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.setup()
    }

    setup() {
        this.element.addEventListener('mousemove', this.init.bind(this));
        this.animate()

    }


    init(event) {
        this.isMoving = true;
        // window.cancelAnimationFrame(this.reqAnimation)
        // this.reqAnimation = null

        const { clientX, clientY } = event;
        this.setDistanceProgress(clientX, clientY)
        this.initX = clientX;
        this.initY = clientY;
        this.setProgress(clientX, clientY)
        // console.log(this.distanceValue)


    }
    setDistanceProgress(clientX, clientY) {
        this.distanceXY = { x: clientX - this.initX, y: clientY - this.initY }
        const { x, y } = this.distanceXY
        this.distanceValue = Math.sqrt(x * x, y * y)
    }
    setProgress(clientX, clientY) {
        this.progress = { x: ((clientX / this.w) - 0.5) * 2, y: ((clientY / this.h) - 0.5) * 2 }
    }
    setProgressXY(clientX, clientY) {
        const { x, y } = this.progress
        this.progressXY = parseInt(Math.sqrt(x * x + y * y))
    }

    incrementHue(baseNumber, inc = 0, offset = 0) {
        let newNumber = 0
        if ((baseNumber + inc) >= 340) {
            newNumber = Math.floor((baseNumber + inc - 360));
        }
        if ((baseNumber + inc) <= 0) {
            newNumber = Math.floor(340 + (baseNumber + inc));
        }
        else {
            newNumber = Math.floor(baseNumber + inc)
        }
        return newNumber;
    }



    incrementPos(baseNumber, inc = 20, offset = 0) {
        const newNumber = Math.floor((baseNumber + offset + inc * this.progressX * this.progressY * 2) >= 100 ? (200 - (baseNumber + offset + inc * this.progressX * this.progressY * 2)) : (baseNumber + inc * this.progressX * this.progressY * 2 + offset))

        // const newNumber = Math.floor((baseNumber + offset + inc*this.progressX *this.progressY *2) )
        return newNumber;
    }

    incrementX(X, inc = 0, offset = 0) {

        // const newNumber = Math.floor((baseNumber + offset + inc*this.progressX *this.progressY *2) )
        return newNumber;
    }

    incrementY(X, inc = 0, offset = 0) {

        // const newNumber = Math.floor((baseNumber + offset + inc*this.progressX *this.progressY *2) )
        return newNumber;
    }


    getBasePosNumber(params) {
        const inputString = params;
        const regex = /at\s+(\d+)%\s+(\d+)%/;
        const matches = regex.exec(inputString);
        if (matches) {
            const x = parseInt(matches[1]); // "18"
            const y = parseInt(matches[2]); // "74"
            return { x: parseInt(x), y: parseInt(y) };
        }
    }

    getBaseNumber(params) {
        const inputString = params;
        const regex = /hsla\(\s*(\d+),\s*(\d+)\s*%,\s*(\d+)\s*%,\s*([\d.]+)\s*\)/;
        const matches = inputString.match(regex);
        if (matches) {
            const hue = matches[1]; // "78"
            const saturation = matches[2]; // "100"
            const lightness = matches[3]; // "50"
            const alpha = matches[4]; // "1"
            return { hue: parseInt(hue), saturation: parseInt(saturation) };
        }
    }


    toHSLA(hue, saturation, lightness, alpha) {
        return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    }


    animate() {

        let style = ''
        let newColorList = []

        this.distanceValue > 100 ? this.distanceValue = 0 : this.distanceValue
        this.distanceValue > 0 && (this.distanceValue -= 1)
        // console.log(this.distanceValue)

        this.curColoList.forEach((e, index) => {
            // console.log(this)

            const { hue, saturation } = this.getBaseNumber(e)
            const { x, y } = this.getBasePosNumber(e)
            // console.log(hue, saturation, x, y)
            // const newHue = hue + 10 + this.distanceValue > 360 ?  0  : hue + this.distanceValue
            const vHue = ((hue * 100 + 50 + this.distanceValue * 10 ) / 100) - hue


            this.stepHue[index] += vHue



            const newHue = hue + vHue > 360 ? 0 : parseInt(hue + this.stepHue[index])


            newColorList.push(`radial-gradient(at ${x}% ${y}%, ${this.toHSLA(newHue, 100, 50, 0.7)} 0px, transparent 50%) ${index == this.curColoList.length - 1 ? '' : ','}`)
            style += `radial-gradient(at ${x}% ${y}%, ${this.toHSLA(newHue, 100, 50, 0.7)} 0px, transparent 50%) ${index == this.curColoList.length - 1 ? '' : ','}`

            if (this.stepHue[index] >= 1) {
                this.stepHue[index] = 0
            }
        })

        // console.log(style)

        this.curColoList = newColorList

        this.element.style.backgroundImage = style


        this.reqAnimation = requestAnimationFrame(this.animate.bind(this));

    }

    render(List) {
        let style = ''
        this.cureColoList = []
        List.forEach((el, index) => {
            const { hue, saturation } = this.getBaseNumber(el)
            const { x, y } = this.getBasePosNumber(el)
            const newHue = hue + 1 + this.distanceValue * 0.8 > 360 ? 0 : hue + this.distanceValue * 0.8
            this.cureColoList.push(`radial-gradient(at ${x}% ${y}%, ${this.toHSLA(newHue, 100, 50, 1)} 0px, transparent 50%) ${index == List.length - 1 ? '' : ','}`)
            style += `radial-gradient(at ${x}% ${y}%, ${this.toHSLA(newHue, 100, 50, 1)} 0px, transparent 50%) ${index == List.length - 1 ? '' : ','}`
        });

        this.element.style.backgroundImage = style




    }



    unmounted() {
        clearInterval(this.Interval)
        cancelAnimationFrame(this.reqAnimation)
        this.element.removeEventListener('mousemove', this.init.bind(this));
    }
}

export default ChangeGradientColor