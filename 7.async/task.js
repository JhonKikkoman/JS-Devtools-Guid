class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = '';
    }
    addClock() {
        if (id === undefined) {
            throw new Error('error text');
        } else if (this.alarmCollection.some((elem) => elem === id)) {
            console.error("Ошибка");
            return;
        }
        this.alarmCollection = this.alarmCollection.push({id, time, callback});  
    }
    removeClock() {
        const arrLen = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(elem => elem.alarmCollection === true);
        return arrLen === this.alarmCollection.length;
    }
    getCurrentFormattedTime() {
        const time = Date();
        return  String.time;
    }
    start() {
        (addClock) => {
            if (addClock.id != this.timerId) {
                setInterval(() => {
                    this.alarmCollection.forEach(() => { if(addClock.time === getCurrentFormattedTime) {
                                                            return addClock.callback;
                                                         } 
                    })
                    return start();
                });
            }
        }
    }
    stop() {
        
    }
} 
