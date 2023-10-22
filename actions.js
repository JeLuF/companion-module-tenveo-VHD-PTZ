
export function UpdateActions(self) {
        async function tv_do_command(cmd) {
	    console.log("Command: ", cmd);
            const response = await fetch( 'http://198.18.10.10/cmdparse', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: 'ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={"Cmd":"ReqPtzCtrl","Content":' + JSON.stringify(cmd) + '}'
            })
            console.log(response)
	    console.log("------------")
        }

	self.setActionDefinitions({
		stop_action: {
			name: 'Stop',
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
                                await tv_do_command({PtzCmd: "Stop", ParamH:0, ParamV:0})
			},
		},
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
                                await tv_do_command({PtzCmd: "Left", ParamH:20, ParamV:0})
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
                                await tv_do_command({PtzCmd: "Right", ParamH:20, ParamV:0})
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
                                await tv_do_command({PtzCmd: "Down", ParamH:0, ParamV:20})
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
                                await tv_do_command({PtzCmd: "Up", ParamH:0, ParamV:20})
			},
		},
		zoom_in_action: {
			name: 'Zoom In',
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
                                await tv_do_command({PtzCmd: "ZoomTele", ParamH:5, ParamV:5})
			},
		},
		zoom_out_action: {
			name: 'Zoom Out',
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
                                await tv_do_command({PtzCmd: "ZoomWide", ParamH:5, ParamV:5})
			},
		},
		zoom_stop_action: {
			name: 'Zoom Stop',
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
                                await tv_do_command({PtzCmd: "ZoomStop", ParamH:5, ParamV:5})
			},
		},
		home_action: {
			name: 'Home',
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
                                await tv_do_command({PtzCmd: "GotoHome", ParamH:0, ParamV:0})
			},
		},
		focus_far_action: {
			name: 'Focus Far',
			callback: async (event) => {
                                await tv_do_command({PtzCmd: "FocusFar", ParamH:-1, ParamV:-1})
			},
		},
		focus_near_action: {
			name: 'Focus Near',
			callback: async (event) => {
                                await tv_do_command({PtzCmd: "FocusNear", ParamH:-1, ParamV:-1})
			},
		},
		focus_stop_action: {
			name: 'Focus Stop',
			callback: async (event) => {
                                await tv_do_command({PtzCmd: "FocusStop", ParamH:-1, ParamV:-1})
			},
		},
	})
}
