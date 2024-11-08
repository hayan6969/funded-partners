import {createSlice, PayloadAction} from '@reduxjs/toolkit'
interface CounterState{
    value:number;
}
const initialState:CounterState={
value:0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
        incrementByAmount:(state,action: PayloadAction<number>)=>{
            state.value=action.payload;
        },
        setAmount:(state,action: PayloadAction<number>)=>{
            state.value=action.payload;
        },
    }
})
export const {incrementByAmount,setAmount}=counterSlice.actions;
export default counterSlice.reducer