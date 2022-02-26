const initialstate=0;

export const handlechange=(state=0,action)=>{
    console.log(action);
    switch(action.type){
        case "INCREASE":
            return state+1;
        case "DECREASE":
            return state-1;
        case "SET_VALUE":
            return action.payload;
        default:
            return state;
    }

}