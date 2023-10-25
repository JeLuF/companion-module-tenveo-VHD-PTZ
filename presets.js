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
        let image_home =
                'iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAKgElEQVR4nO1ba3MT1xl+9iKtJN8k+SZbvuArdwyEpGn7pWHSKdMwFFqgddICBepAoLTph04/dfqpP6BtGiZMoTQNTcmNYRKY0EIzTZk0OEAcsA04BRtjY4wB17a0kla72znHWiHJuuxKKzzp+JnZEezuOXvOc973Pe/lmFnQ9mUVc0gJdo6a9JgjKAO+qAQ9MrPwRSWIeVQfmlOxDJgjKAPmCMoA3mgDhqq/qs8KqHE/JiO21/yZpBkEMczMj7HRAajGNpAIl0rC7dwJS+whWY/mkMYTQljd4mBwapHXE/VYNtZL8k51vMckvKomWfxMYPNGThIomClNjwpk9IpqfA4ZbJCa8GsACU2UnCg21nKG5OSwMGkIyl6lYmGEGM3+qXErrX8MZhKjIQlBWUpNDuSwLAtRFDEx5QPLsHC5SsBzLBRF//TyQQ5mEmSOrYEBcojUjE9MwMLz8Hoqocgy7o+Pw2YXYBMEKIrx8ZhFDuIJypKcHCSHGE1JCpJ/4KtPrsLjK5cjEAzixKnT6O+/CVUBBMGasZ9Y6TGTHDwkyBxyjNobKRjE/QcTePqpr2BPx3Y88cQqhCQJ3ppqvPTyQVy83IvGOm/y9nlSqURwFZ6aXxlulaMx5nkOd+7eg18MYO2a1fjJ3l1Y9dgKWCwWes2rq0OpuwQDg4Po6uqB01kMjuOi7XMhR03hDKcCV+Gp1U9QCgaMSs7QyB1YLVZsXv8Mdj+/A196/DFKgN/vhyRJKCoqRH1dLcrcbozdG0PfjUGwjAq7ICQdklHJyR9BCVAMKCcZE7E5/52YpAZ50/pvomPHVqxcvow+7+7pxam//QM3bgzAU1kBl8uF1uYmlLqdGB0dxcjIKCQpRInVkK1a5YegHB0/apDDYfhFEd/buA67O7Zj6eJFdCsfuTOKQ386gl/88te43NOLWm8VarxeFBQWoLGhgRI2MHAT/7neD7vNRt0COYf91nyCciSHDOj+/XEEQiH88NmN+NH2LWhtbaETHb49jN+9fABH3z5Ot3iCCxe74HY70dzcSAnxVlehproKIyMj+OjjCygqJjYp+0yNOQSlMcRGPeP+m0NwOYuxc0s7tv6gHQsXzKfkXLnWh/2vHMTbx09SAkvdLjrxgeHb6L8+AMFqQVNTAwoLC+D1VqGqygOf6Me5T7pg4TlYLFZwLGNgsZTphE0+VEzTdSOSI8sybo+Owespx9bnNmPblnY0NzXRZ12XLuPgH/+MQ68eRSAYQpnLSX0ehmHhsNvQ09OHoVu3qMNIJMhZUoLGhnmorCiH3+fDwOAQpvwi7HYBLKN3XKpJBKWQHiMIh8PUpyET2LnlWWzf9hxqa2vp/Z4rV3HgD4fx0iuHUeZ2obi4gO5iWmhhYTkqcTcGh3D5Ug+1Rd5qD4qKilBfX4uGeXW4c3cUt4aGEAqGwPO8jklrM8iVoCT2xgg55OOyrGLK56ctf/rCTny/fTNVDxKE9l65ht/+fj/++s67KC91w2G30zZMJEkZybGBYxjYHXaIwRA+OnceBTYBjY0N1AUoLy/FggUtGLs7hn93dsFqtcLKW1JIUrzFZBnGUDJtmiAT7I1GDpGQgcFhVHnK8OLeDmxYvw413mrIYRkXP+2iBvnvZz6EIisoKHREyYmF9l1ip4h/4POJuNzdC5ZjqX/kcjnhdrmoJEGR8cHZj2HlOfCCFRzDQo06ADNHz2RFUBIYlRoColKDt4bRtrgVuzu2YdN3NsBb5YnsYg/w3slTOHD4L5iY9MFTWU4jdyIpTETstQsxF1E9m9WCvp4rCEgS5rc0oaW5iZLnqayE1+uFhQV6+z7H+JSPvks8dTVpcozF9FD1E8SbYW8Q8XP8fhHLFrWiY+dWtH93IwocjuhzMRCg/o5DsFJHkRATlCSEQxLUmIg9dt1ZjoPVwtPUR0F5Ge1/9M5Y3Hfbli3Gj1/oAMfzeO/UaUw8GIfT5UwzUmNp17h0R7ZZP6JWsqLAXerEvj3PY8O6Zyg5xOiSlSRSwHMcvWcRBMh+cXqFwypCoTBViRm7pArwKmC1cNF7xF7Z7faH440Y9camBvz8Z3shWHm8fvQYJqd8KCiwwwzwuRCjYXJqEhXlpXhx32584+urUVhUCEkK419nz6KmxouW5uZosMkqoPaHEENsyVPLl1A/BzE5Y5aqFovrA4P47LNuyLJC80Ka5hGQmK2z8zwcBQ4sb1sGj8eDXR3bQbr4zf5D1FVg2Hhpyca1pATlmismIQTH8aj1VqOiohyBQADH3z2JN986hn17d1GCNMkmg7537wFqa7341to12LB+LSzWSHyl2Q1SaWEZXL/Rj6NvHsP7p/+JkD8QN0VC+LnO8+i5eg0dO7bRbEB9XR31k0jMlgiyMNkwxJuRQ3HYHHRFz3zwIZ3j8PBtHDz8Gvo+v449uzsik3/4viROwukswoqVy7Bw4fyU/ZaVlqK79ypOnDoDORSOe0aM9KTPjyNvHEcwFEL7pm9DFAP49FI3SpwlJsxqGnx20hPfiug72cFePfIWjp94H5OTPozevY+lC1shCJboew8FngXLTu80xI7Q7TwJiGFnqTSxSVff7XbRcOSNd07gkwtdNBsZDitwlxRH1YvVJCDFNzLBYOk5NZ1kyyZkBESR/r/c7aavx+62akzRkNwntiX959RoAJv8sQq73Ua9ddEvguFYShghh03oWok6icZggKDMssbSSgQDjni07Mz3zSk9xvfCRvwaQg5ZpFTkZAvDhxfSgTp+HM3BI6RISd98WFQyMmwFNIOfskcGvMUKNuEdJe6N7KCzsmoQyZxPWsGQqLMH1U8jeDmN+iCihlJYho+0kaYQCARTt9HIieHIjAJWhsqqfsTGUwozbWti15OEE8QVsNEyjgCrngicAfWHbDYB4OywEvuS2EY7IBHzsVz9ulikICj7ci9iSsfULkR2D1KZWLd2DVa0LYFPFOkW3trSlJak4qJCPL36a5hXX4NgMISSkhK0tjRHn5O+ScgSW1vM7eTITKQpPWdGMnKmH0xn+WRJihb+bDYbVq5oo5deOBwOLF2yiF5JB8+ykMIKje2Qp7qYaUY67rwXx4EhCXq/iEvdvXC73TS3TKNzVjugMJ1xJNKWhudpKYlIIWlD/CYS94l+P62AkJBFsAmmqlUsEkrP+pGu3EsosHIcxGAQh197Hd3dV2jCLETKzDnOgvgyJC4buHkTnZ0XYbHwNJLPBzkEzIK2J3X3nU1FUwqFdGy0RtQ6knMkTXguKl0Z27Fsfh3FbMjRBiQGJEhyOMVRvwzkRJpE/c7IL5EaG8/RiasGjskYRdY2SM+QiO8jCAK9CFfJT8ClIEiL/rVtXI13/KjNIfmmPJIDvQQlkx69iJ4LjGukY1IJ/o1ssn+jF2kJys8RE309JIunHjU5SEVQ/s7eGCdntojREEcQVXuTkvhGWydKjAbzyNFSijkk7WMxm6s2W2epkyFKUKJazZZKwdTFifPvs+qB//+1N+b0FJUgrbtHYW80aORkc3IkPZL3RKJ+1qAgRf302fo7imzOAGSDlAnJDMixLhaL2bY3mXvLqnCYu83R33o27Q2bxV/6AMD/AOTKOox0w1taAAAAAElFTkSuQmCC'

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
		'home': {
			type: 'button',
			name: 'home',
			category: 'Pan/Tilt/Zoom',
			style: { text: '', png64: image_home, pngalignment: 'center:center', size: 'auto', color: white, bgcolor: blue },
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
