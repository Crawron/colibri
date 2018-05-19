export class Time {
	startTime = Date.now()
	deltaFrameTime = Date.now()
	frameTime = 0
	frameCount = 0

	/** Updates the instance (meant to be called once every frame) */
	update() {
		this.frameTime = Date.now() - this.deltaFrameTime
		this.deltaFrameTime = Date.now()
		this.frameCount++
	}

	/** Returns time passed since the beginning of the animation (in milliseconds) */
	get elapsedTime() {
		return Date.now() - this.startTime
	}

	/** It restarts the value of startTime */
	restart() {
		this.startTime = Date.now()
	}
}

export class Timer extends Time {
	onEnd: () => any
	duration: number
	timeRemaining: number
	ended = false
	loop: boolean

	constructor(onEnd: ()=>any, duration: number, loop: boolean) {
		super()

		this.duration = duration
		this.timeRemaining = this.duration - this.elapsedTime
		this.onEnd = onEnd
		this.loop = loop
	}

	update() {
		super.update()
		this.timeRemaining = this.duration - this.elapsedTime

		if(this.timeRemaining <= 0 && !this.ended) {
			this.onEnd()
			this.ended = true
			if(this.loop) this.restart()
		}
	}

	restart() {
		super.restart()
		this.ended = false
	}
}