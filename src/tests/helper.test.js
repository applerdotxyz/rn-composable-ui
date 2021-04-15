const {setAppState }= require("../rn-config-tyler/packages/demo/helpers/lib/src/container/helpers")
import merge from "deepmerge";



test("setAppState logic tests", () => {
//     const _setAppState =any
//     const appState={"a":["b","c"]}
//     const newAppState={"a":["d"]}
//     const format = "copy"

//   expect(setAppState(_setAppState,
//     appState,
//     newAppState,
//     format)).toBe({"a":["b","c","d"]});

const initialState1 = {
};

const passState1 = {
    "$global":{"a":["b","c"]}
};

let actualState1 = {
    "ui":{},
    "children":{},
    "props":{},
    "$global":{"a":["d"]}
    // "a":["d"]
    
};

const expectedState1 = {
    "ui":{},
    "children":{},
    "props":{},
    "$global":{"a":["b","c","d"]}
};

// var a= merge(actualState1,passState1)
console.log(a)
setAppState((state) => {
    console.log(state)
    actualState1=state
    console.log(initialState1)

    // return state
},initialState1,passState1,format="copy")



expect(expectedState1).toMatchObject(initialState1)
// console.log(initialState1)
});