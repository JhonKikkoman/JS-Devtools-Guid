class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        } 
        if ((this.alarmCollection.some((elem) => elem.id === id))) { 
            console.error("Ошибка");
            return
        }

        this.alarmCollection.push({id, time, callback});  
    }
    removeClock(id) {
        const arrLen = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(elem => elem.id === id);
        return arrLen !== this.alarmCollection.length;
    }
    getCurrentFormattedTime() {
        const time = new Date();
        const localeTime = time.toLocaleTimeString().slice(0, 5);
        return localeTime;
    }
    start() {
        function checkClock (alarm) {
            if (this.getCurrentFormattedTime() === alarm.time) {
                alarm.callback();
            }
        }
        checkClock = checkClock.bind(this);

        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((alarm) => checkClock(alarm));
            }, 60000);
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(`Идентификатор таймера ${elem.id}, Время ${elem.time}`));
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

} 

function testCase() {
    clock1 = new AlarmClock;
    const currentTime = clock1.getCurrentFormattedTime();
    const func = () => console.log("текст");
    // function addTimer() {
    //     time.setMinutes(time.getMinutes() + 1);
    //     return time.toLocaleTimeString().slice(0, 5);
    // }
    clock1.addClock(currentTime, func, 2);

    clock1.addClock("22:01", func, 3);
    clock1.removeClock(3);


    clock1.addClock("22:03", func, 4);
    clock1.stop();
    clock1.clearAlarms();
    clock1.printAlarms();
}