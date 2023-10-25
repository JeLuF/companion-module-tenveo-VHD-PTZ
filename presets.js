import { combineRgb } from '@companion-module/base'

const white = combineRgb(255, 255, 255)
const blue = combineRgb(0, 0, 255)
const black = combineRgb(0, 0, 0)

export function Presets() {
        let image_up =
                'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIFJREFUKM+90EEKgzAQRmFDFy49ghcp5FquVPBighcRegHBjWDJ68D8U6F7m00+EnhkUlW3ru6rdyCV0INQzSg1zFLLKmU2aeCQQMEEJXIQORRsTLNyKJhNm3IoaPBg4mQorp2Mh1+00kKN307o/bZrpt5O/FlPU/c75X91/fPd6wPRD1eHyHEL4wAAAABJRU5ErkJggg=='
        let image_down =
                'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAIlJREFUKM/F0DEOwyAMBVAjDxk5Qo7CtdiClIv1KJF6gUpZIhXxY2zTDJ2benoS8LFN9MsKbYjxF2XRS1UZ4bCeGFztFmNqphURpidm146kpwFvLDYJpPQtLSLNoySyP2bRpoqih2oSFW8K3lYAxmJGXA88XMnjeuDmih7XA8vXvNeeqX6U6aY6AacbWAQNWOPUAAAAAElFTkSuQmCC'
        let image_left =
                'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUKM+1kTEOgCAQBM9Q2JjwA/mJPA2fxlN4giWF8TRBBhMpbKSaZie3i8gPb4Y8FNZKGm8YIAONkNWacIruQLejy+gyug1dQhfRqZa0v6gYA6QfqSWapZnto1B6XdUuFaVHoJunr2MD21nIdJYUEhLYfoGmP777BKKIXC0eYSD5AAAAAElFTkSuQmCC'
        let image_right =
                'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6AQMAAAApyY3OAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAAARnQU1BAACxjwv8YQUAAAABc1JHQgCuzhzpAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHhJREFUKM+10LERgCAMQFE4CktHcBRWcRMYzVEcwdKCI+od+fGksVCq3/AuiXOfvZnaNXzRClVrEKtMLdSqP2RTRQAFMAFGwAlw7MAk0sAzGnhVoerLKg/F5Pv4NoFNZZNGpk9sxJYeLsDdL5T7S8IFOM/R3OZ+fQeQZV9pMy+bVgAAAABJRU5ErkJggg=='
	var result = {
		'pan-tilt-left': {
			type: 'button',
			category: 'Pan/Tilt/Zoom',
			name: 'left',
			style: { text: '<', color: white, bgcolor: blue },
			steps: [
				{
					down: [{ actionId: 'left_action', options: {} }],
					up: [{ actionId: 'stop_action', options: {} }],
				},
			],
		},
		'pan-tilt-right': {
			type: 'button',
			category: 'Pan/Tilt/Zoom',
			name: 'right',
			style: { text: '>', color: white, bgcolor: blue },
			steps: [
				{
					down: [{ actionId: 'right_action', options: {} }],
					up: [{ actionId: 'stop_action', options: {} }],
				},
			],
		},
		'pan-tilt-real-left': {
			type: 'button',
			category: 'Pan/Tilt/Zoom',
			name: 'realleft',
			style: { text: '', png64: image_left, pngalignment: 'center:center', size: 'auto', color: white, bgcolor: blue },
			steps: [
				{
					down: [{ actionId: 'right_action', options: {} }],
					up: [{ actionId: 'stop_action', options: {} }],
				},
			],
		},
		'pan-tilt-real-right': {
			type: 'button',
			category: 'Pan/Tilt/Zoom',
			name: 'realright',
			style: { text: '', png64: image_right, pngalignment: 'center:center', size: 'auto', color: white, bgcolor: blue },
			steps: [
				{
					down: [{ actionId: 'left_action', options: {} }],
					up: [{ actionId: 'stop_action', options: {} }],
				},
			],
		},
		'pan-tilt-up': {
			type: 'button',
			category: 'Pan/Tilt/Zoom',
			name: 'up',
			style: { text: '', png64: image_up, pngalignment: 'center:center', size: 'auto', color: white, bgcolor: blue },
			steps: [
				{
					down: [{ actionId: 'up_action', options: {} }],
					up: [{ actionId: 'stop_action', options: {} }],
				},
			],
		},
		'pan-tilt-down': {
			type: 'button',
			category: 'Pan/Tilt/Zoom',
			name: 'down',
			style: { text: '', png64: image_down, pngalignment: 'center:center', size: 'auto', color: white, bgcolor: blue },
			steps: [
				{
					down: [{ actionId: 'down_action', options: {} }],
					up: [{ actionId: 'stop_action', options: {} }],
				},
			],
		},
		'zoom-in': {
			type: 'button',
			category: 'Pan/Tilt/Zoom',
			name: 'in',
			style: { text: 'ZOOM IN', size: '18', color: white, bgcolor: black },
			steps: [
				{
					down: [{ actionId: 'zoom_in_action', options: {} }],
					up: [{ actionId: 'zoom_stop_action', options: {} }],
				},
			],
		},
		'zoom-out': {
			type: 'button',
			category: 'Pan/Tilt/Zoom',
			name: 'out',
			style: { text: 'ZOOM OUT', size: '18', color: white, bgcolor: black },
			steps: [
				{
					down: [{ actionId: 'zoom_out_action', options: {} }],
					up: [{ actionId: 'zoom_stop_action', options: {} }],
				},
			],
		},
		home: {
			type: 'button',
			name: 'home',
			category: 'Pan/Tilt/Zoom',
			style: { text: 'Center', size: 18, color: white, bgcolor: combineRgb(0, 0, 128) },
			steps: [
				{
					down: [{ actionId: 'home_action', options: {} }],
					up: [],
				},
			],
		},
	}
	for (var i = 0; i < 255; i++) {
		result[`recall-preset-${i}`] = {
			type: 'button',
			name: `recall-preset-${i}`,
			category: 'Recall Preset',
			style: { text: `Recall\nPreset\n${i}`, color: white, bgcolor: combineRgb(0, 128, 0) },
			steps: [
				{
					down: [{ actionId: 'recall_action', options: { preset: i } }],
					up: [],
				},
			],
		}
		result[`set-preset-${i}`] = {
			type: 'button',
			name: `set-preset-${i}`,
			category: 'Set Preset',
			style: { text: `Set\nPreset\n${i}`, color: white, bgcolor: combineRgb(128, 0, 0) },
			steps: [
				{
					down: [{ actionId: 'set_action', options: { preset: i } }],
					up: [],
				},
			],
		}
	}
	return result
}
