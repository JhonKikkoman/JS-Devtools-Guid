class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timerId = '';
        this.time = time;
        this.callback = callback;
    }
    addClock(time, callback, id) {
        this.time = `HH:MM`;
        this.callback = () => {};
        this.id = id;

        if (this.id === undefined) {
            throw new Error('error text');
        } else if (this.id === id) {
            console.error("Ошибка");
            return;
        }
        return this.alarmCollection.push({id: id, time: time, callback: callback});
    }
    removeClock(id) {
        this.id = id;
        if (this.id === this.alarmCollection[id]) {
            this.alarmCollection.filter(elem => elem.alarmCollection === true)
        }
    }
} 