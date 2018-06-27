import {State} from "./models/state.js";

let state;

init();

function init(){
    state = new State();

    console.log("YEAH!", state);
}