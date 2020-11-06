/*start --> creates Date object (if none currently) and sets isStarted to True (doesnt work if already started)
stop --> creates date object and sets isstarted to false (doesnt work if not started alr)
duration --> returns endTime - startTime in seconds
reset --> sets starttime to null */


function Stopwatch() {
    let timeOnClock = null;
    let elapsed = null;
    let isStarted = false;
    
    this.start = function() {
        timeOnClock = Date.now();
        isStarted = true;
    };

    this.stop = function() {
        if (isStarted == false) {
            throw new Error("Stopwatch not started yet")
        }
        else {
            isStarted = false;
            elapsed += Date.now() - timeOnClock;
        }
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
                return `${Math.floor(elapsed/1000)}.${elapsed%1000}s`;}
        })

    this.reset = function() {
        startTime = null;
        stopTime = null;
        isStarted = false
    }
}

sp = new Stopwatch()