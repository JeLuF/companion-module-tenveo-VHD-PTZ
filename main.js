import { InstanceBase, Regex, runEntrypoint, InstanceStatus } from '@companion-module/base'
import { UpgradeScripts } from './upgrades.js'
import { UpdateActions } from './actions.js'
import { UpdateFeedbacks } from './feedbacks.js'
import { UpdateVariableDefinitions } from './variables.js'
import { Presets } from './presets.js'
import fetch from 'node-fetch'

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	async init(config) {
		this.config = config

		this.updateStatus(InstanceStatus.Ok)

		this.updateActions() // export actions
		this.updateFeedbacks() // export feedbacks
		this.updateVariableDefinitions() // export variable definitions
		this.initPresets()
	}
	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config) {
		this.config = config
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Camera IP',
				width: 8,
				regex: Regex.IP,
			},
			{
				type: 'number',
				id: 'port',
				label: 'Web UI Port',
				width: 4,
                                default: 80,
				min: 1,
				max: 65535,
			},
			{
				type: 'textinput',
				id: 'user',
				label: 'Username',
				width: 12,
                                default: 'admin',
			},
			{
				type: 'textinput',
				id: 'password',
				label: 'Password',
				width: 12,
                                default: 'admin',
			},
		]
	}

	updateActions() {
		UpdateActions(this)
	}

	updateFeedbacks() {
		UpdateFeedbacks(this)
	}

	updateVariableDefinitions() {
		UpdateVariableDefinitions(this)
	}

	initPresets() {
	        this.setPresetDefinitions(Presets())
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
