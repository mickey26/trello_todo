const INITIAL_STATE = {
    componentList:[],
}

export default function LandingReducers(state = INITIAL_STATE,action){
    console.log(action,"qaction");
    switch(action.type){
        case "ADDLISTCOMPONENT":
            return{
                componentList:action.payload,
            }
        default:
            return state;
    }
}