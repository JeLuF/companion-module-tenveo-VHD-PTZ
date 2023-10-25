import { combineRgb } from '@companion-module/base'

const white = combineRgb(255,255,255)
const blue = combineRgb(0,0,255)
const black = combineRgb(0,0,0)

export function Presets() {
    var result = {
	    "pan-tilt-left" : {
		type: "button",
		category: "Pan/Tilt/Zoom",
		name: "left",
		style: { text: "«", color: white, bgcolor: blue },
		steps: [{
		     down: [{actionId: 'left_action', options: {}}],
		     up: [{actionId: 'stop_action', options: {}}],
		}]
	     },
	    "pan-tilt-right" : {
		type: "button",
		category: "Pan/Tilt/Zoom",
		name: "right",
		style: { text: "»", color: white, bgcolor: blue },
		steps: [{
		     down: [{actionId: 'right_action', options: {}}],
		     up: [{actionId: 'stop_action', options: {}}],
		}]
	     },
	    "pan-tilt-real-left" : {
		type: "button",
		category: "Pan/Tilt/Zoom",
		name: "realleft",
		style: { text: "<", color: white, bgcolor: blue },
		steps: [{
		     down: [{actionId: 'right_action', options: {}}],
		     up: [{actionId: 'stop_action', options: {}}],
		}]
	     },
	    "pan-tilt-real-right" : {
		type: "button",
		category: "Pan/Tilt/Zoom",
		name: "realright",
		style: { text: ">", color: white, bgcolor: blue },
		steps: [{
		     down: [{actionId: 'left_action', options: {}}],
		     up: [{actionId: 'stop_action', options: {}}],
		}]
	     },
	    "pan-tilt-up" : {
		type: "button",
		category: "Pan/Tilt/Zoom",
		name: "up",
		style: { text: "^", color: white, bgcolor: blue },
		steps: [{
		     down: [{actionId: 'up_action', options: {}}],
		     up: [{actionId: 'stop_action', options: {}}],
		}]
	     },
	    "pan-tilt-down" : {
		type: "button",
		category: "Pan/Tilt/Zoom",
		name: "down",
		style: { text: "v", color: white, bgcolor: blue },
		steps: [{
		     down: [{actionId: 'down_action', options: {}}],
		     up: [{actionId: 'stop_action', options: {}}],
		}]
	     },
	    "zoom-in" : {
		type: "button",
		category: "Pan/Tilt/Zoom",
		name: "in",
		style: { text: "ZOOM IN", size: '18', color: white, bgcolor: black },
		steps: [{
		     down: [{actionId: 'zoom_in_action', options: {}}],
		     up: [{actionId: 'zoom_stop_action', options: {}}],
		}]
	     },
	    "zoom-out" : {
		type: "button",
		category: "Pan/Tilt/Zoom",
		name: "out",
		style: { text: "ZOOM OUT", size: '18', color: white, bgcolor: black },
		steps: [{
		     down: [{actionId: 'zoom_out_action', options: {}}],
		     up: [{actionId: 'zoom_stop_action', options: {}}],
		}]
	     },
	    "home" : {
		type: "button",
		name: "home",
		category: "Pan/Tilt/Zoom",
		style: { text: "Center", size: 18, color: white, bgcolor: combineRgb(0,0,128) },
		steps: [{
		     down: [{actionId: 'home_action', options: {}}],
		     up: []
		}]
	     },
	}
    for( var i=0; i<255; i++ ) {
        result[`recall-preset-${i}`] = {
		type: "button",
		name: `recall-preset-${i}`,
		category: "Recall Preset",
		style: { text: `Recall\nPreset\n${i}`, color: white, bgcolor: combineRgb(0,128,0) },
		steps: [{
		     down: [{actionId: 'recall_action', options: {preset: i}}],
		     up: []
		}]
	}
        result[`set-preset-${i}`] = {
		type: "button",
		name: `set-preset-${i}`,
		category: "Set Preset",
		style: { text: `Set\nPreset\n${i}`, color: white, bgcolor: combineRgb(128,0,0) },
		steps: [{
		     down: [{actionId: 'set_action', options: {preset: i}}],
		     up: []
		}]
	}
    }
    return result;
}
