module.exports = function (self) {
	self.setActionDefinitions({
		left_action: {
			name: 'Left',
			options: [
				{
					id: 'speed',
					type: 'number',
					label: 'Speed',
					default: 20,
					min: 0,
					max: 100,
				},
			],
			callback: async (event) => {
				console.log('Hello world!', event.options.speed)
			},
		},
		right_action: {
			name: 'Right',
			options: [
				{
					id: 'speed',
					type: 'number',
					label: 'Speed',
					default: 20,
					min: 0,
					max: 100,
				},
			],
			callback: async (event) => {
				console.log('Hello world!', event.options.speed)
			},
		},
		down_action: {
			name: 'Down',
			options: [
				{
					id: 'speed',
					type: 'number',
					label: 'Speed',
					default: 20,
					min: 0,
					max: 100,
				},
			],
			callback: async (event) => {
				console.log('Hello world!', event.options.speed)
			},
		},
		up_action: {
			name: 'Up',
			options: [
				{
					id: 'speed',
					type: 'number',
					label: 'Speed',
					default: 20,
					min: 0,
					max: 100,
				},
			],
			callback: async (event) => {
				console.log('Hello world!', event.options.speed)
			},
		},
	})
}
