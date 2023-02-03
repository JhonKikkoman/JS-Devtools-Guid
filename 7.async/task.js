class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = '';
    }
    addClock(time, callback, id) {
        time = `HH:MM`;
        callback = () => {};
        id = id;

        if (id === undefined) {
            throw new Error('error text');
        } else if (this.alarmCollection.some((elem) => this.alarmCollection[elem] === id)) {
            console.error("Ошибка");
            return;
        }
        this.alarmCollection = this.alarmCollection.push({id: id, time: time, callback: callback});
        return arrLen === this.alarmCollection.length;
    }
    removeClock(id) {
        const arrLen = this.alarmCollection.length;
        id = id;
        if (id === this.alarmCollection[id]) {
            this.alarmCollection.filter(elem => elem.alarmCollection === true)
        }
    }
    getCurrentFormattedTime() {
        return time;
    }
    start() {
        function checkClock(addClock) {
            if(addClock === getCurrentFormattedTime) {
                return callback;
            }
            if (id === undefined){
                setInterval(() => {
                    for (let i = 0; i < this.alarmCollection.length; i++) {
                        this.alarmCollection[i] = checkClock();
                    }
                    return 
                }, 2000);
            }
        }
    }
    stop() {
        
    }
} 