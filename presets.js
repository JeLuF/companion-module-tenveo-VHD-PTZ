import { combineRgb } from '@companion-module/base'

export const Presets = {
    let white = combineRgb(255,255,255)
    let blue = combineRgb(0,0,255)
    let black = combineRgb(0,0,0)
    "pan-tilt-left" : {
        type: "button",
        category: "Pan/Tilt",
        name: "left",
        style: { text: "«", color: white, bgcolor: blue },
        steps: [{
             down: [{actionId: 'left_action', options: {}}],
             up: [{actionId: 'stop_action', options: {}}],
        }]
     },
    "pan-tilt-right" : {
        type: "button",
        category: "Pan/Tilt",
        name: "right",
        style: { text: "»", color: white, bgcolor: blue },
        steps: [{
             down: [{actionId: 'right_action', options: {}}],
             up: [{actionId: 'stop_action', options: {}}],
        }]
     },
    "pan-tilt-real-left" : {
        type: "button",
        category: "Pan/Tilt",
        name: "realleft",
        style: { text: "<", color: white, bgcolor: blue },
        steps: [{
             down: [{actionId: 'right_action', options: {}}],
             up: [{actionId: 'stop_action', options: {}}],
        }]
     },
    "pan-tilt-real-right" : {
        type: "button",
        category: "Pan/Tilt",
        name: "realright",
        style: { text: ">", color: white, bgcolor: blue },
        steps: [{
             down: [{actionId: 'left_action', options: {}}],
             up: [{actionId: 'stop_action', options: {}}],
        }]
     },
    "pan-tilt-up" : {
        type: "button",
        category: "Pan/Tilt",
        name: "up",
        style: { text: "^", color: white, bgcolor: blue },
        steps: [{
             down: [{actionId: 'up_action', options: {}}],
             up: [{actionId: 'stop_action', options: {}}],
        }]
     },
    "pan-tilt-down" : {
        type: "button",
        category: "Pan/Tilt",
        name: "down",
        style: { text: "v", color: white, bgcolor: blue },
        steps: [{
             down: [{actionId: 'down_action', options: {}}],
             up: [{actionId: 'stop_action', options: {}}],
        }]
     },
    "zoom-in" : {
        type: "button",
        category: "Zoom",
        name: "in",
        style: { text: "ZOOM IN", size: '18', color: white, bgcolor: black },
        steps: [{
             down: [{actionId: 'zoom_in_action', options: {}}],
             up: [{actionId: 'zoom_stop_action', options: {}}],
        }]
     },
    "zoom-out" : {
        type: "button",
        category: "Zoom",
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
        style: { text: "(-)", color: white, bgcolor: combineRgb(0,0,128) },
        steps: [{
             down: [{actionId: 'home_action', options: {}}],
	     up: []
        }]
     },
}
