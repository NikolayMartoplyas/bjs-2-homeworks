class AlarmClock {
	constructor(parameters) {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some(call => call.time === time)) {
			console.warn('Уже присутствует звонок на это же время')
		}
		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(call => call.time !== time);
	}

	getCurrentFormattedTime() {
		const date = new Date();
		let hours = date.getHours().toString().padStart(2, 0);
		let minutes = date.getMinutes().toString().padStart(2, 0);

		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}
		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}
	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId)
			this.intervalId = null;
		}
	}
	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true
		})
	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}