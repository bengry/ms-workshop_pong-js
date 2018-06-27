import {State} from "./models/state";

let state;

init();

function init(){
    state = new State();

    console.log("YEAH!", state);
}