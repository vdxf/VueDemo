const GestureMobile = (function (win, doc) {
    let options;
    function GestureMobile(ele,opt) {
        if (!ele) return this;
        options = opt || {};
        if (ele instanceof HTMLElement) {
            this.ele = ele
        } else {
            options = ele || {}
            this.ele = doc.body
        }
        this.mode = options.mode || 'touchend'
        this.sensitive = typeof options.sensitive !== 'undefined' ? options.sensitive : 10
        this.touchStartCallBackFun = options.touchStartCallBackFun
        this.upCallBackFun = options.upCallBackFun
        this.downCallBackFun = options.downCallBackFun
        this.leftCallBackFun = options.leftCallBackFun
        this.rightCallBackFun = options.rightCallBackFun
        this.failCallBackFun = options.failCallBackFun
        this.init()
    }
    GestureMobile.prototype = {
        init: function () {
            addEvent(this)
        }
    }
    let addEvent = function (that) {
        let startX, startY, endX, endY
        that.ele.addEventListener('touchstart', function (ev) {
            startX = ev.targetTouches[0].pageX
            startY = ev.targetTouches[0].pageY
            that.touchStartCallBackFun && that.touchStartCallBackFun()
        },false)
        that.ele.addEventListener(that.mode, function (ev) {
            if (that.mode === 'touchend') {
                endX = ev.changedTouches[0].pageX
                endY = ev.changedTouches[0].pageY
            } else {
                endX = ev.targetTouches[0].pageX
                endY = ev.targetTouches[0].pageY
            }
            const result = getSlideDirection(that, startX, startY, endX, endY);
            let direction = result.direction;
            let distance = result.distance;

            switch (direction) {
                case 0:
                    that.failCallBackFun && that.failCallBackFun(distance);
                    break;
                case 1:
                    that.upCallBackFun && that.failCallBackFun(distance);
                    break;
                case 2:
                    that.downCallBackFun && that.downCallBackFun(distance);
                    break;
                case 3:
                    that.leftCallBackFun && that.leftCallBackFun(distance);
                    break;
                case 4:
                    that.rightCallBackFun && that.rightCallBackFun(distance);
                    break;
                default:
            }
        },false)
    }
    const getSlideAngle = function (dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI
    }

    let getSlideDirection = function (that, startX, startY, endX, endY) {
        const dy = startY - endY;
        const dx = endX - startX;
        let direction = 0;

        if (!(Math.abs(dx) < that.sensitive && Math.abs(dy) < that.sensitive)) {
         const angle = getSlideAngle(dx, dy)
            if (angle >= -45 && angle < 45) {
                direction = 4
            } else if (angle >= 45 && angle < 135) {
                direction = 1
            } else if (angle >= -135 && angle < -45) {
                direction = 2
            } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                direction = 3
            }
        }
        return {
            direction: direction,
            distance: {
                x: dx,
                y: dy
            }
        }
    };
    return function (ele, opt) {
        return new GestureMobile(ele, opt)
    }
})(this, document)
export default GestureMobile