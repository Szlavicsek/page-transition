let btn = {
    'progress' : -1,
    'afterburn' : -1,
    'stopped' : 0,
    "svgSelector": undefined,
    "btnAnim": undefined,
    'next' : function(sec, loadNext) {
        if (btn.stopped===1) {
            return false;
        }

        clearInterval(btn.btnAnim);

        btn.btnAnim = setInterval(function () {
            if (btn.progress === 347) {
                // animatieTextDown()
            }
            if (btn.progress < 347) {
                btn.progress = btn.progress < 358 ? btn.progress + (10/sec) : 0
            } else {
                btn.progress = btn.progress < 358 ? btn.progress + .5 : 0
            }
            if (btn.progress >= 347) {
                btn.afterburn = btn.afterburn + 16;
            } else {
                btn.afterburn = -1
            }
            if (document.querySelector('.active .circleStroke')) {
                document.querySelector('.active .circleStroke').setAttribute("d", btn.describeArc(27, 27, 25, btn.afterburn, btn.progress));
            }
            if (btn.progress >= 358) {
                loadNext() // load next slide + animate text up.
            }
        }, 40);
    },
    'polarToCartesian' : function(centerX, centerY, radius, angleInDegrees) {
        let angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    },
    'describeArc' : function(x, y, radius, startAngle, endAngle) {
        let start = btn.polarToCartesian(x, y, radius, endAngle);
        let end = btn.polarToCartesian(x, y, radius, startAngle);
        let arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
        let d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
        ].join(" ");
        return d;
    },
    'stop' :function() {
        if (typeof btn.btnAnim !== 'undefined') {
            btn.progress = -1;
            btn.afterburn = -1;
            clearInterval(btn.btnAnim);
        }
        // if (typeof timerId !== 'undefined') {
        //     clearInterval(timerId);
        // }
        // document.querySelector('.active .circleStroke').setAttribute("d", btn.describeArc(25, 25, 25, btn.afterburn, -1));
        // btn.stopped=1;
    },
};

export default btn
