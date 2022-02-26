export const Increase=()=>{
    return{
        type:"INCREASE"
    }
}

export const Decrease=()=>{
    return {
        type:"DECREASE"
    }
}

export const setValue=(num)=>{
    return {
        type:"SET_VALUE",
        payload:num
    }
}