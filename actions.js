
module.exports = function (self) {
        async function tv_do_command(cmd) {
            const data = await got({
                url: 'http://198.18.10.10/cmdparse',
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: 'ReqUserName=YWRtaW4=&ReqUserPwd=YWRtaW4=&CmdData={"Cmd":"ReqPtzCtrl","Content":{"PtzCmd":"' + cmd + '","ParamH":26,"ParamV":20}}'
            });
            console.log(data)
        }

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
                                await tv_do_command("Left")
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
                                await tv_do_command("Right")
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
                                await tv_do_command("Down")
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
                                await tv_do_command("Up")
			},
		},
	})
}
