import {createSlice, PayloadAction} from '@reduxjs/toolkit'
interface CounterState{
    date:string;
    userID:string
    type:string;
    balance:number;
    plan:string;
    total:number
}
const initialState:CounterState={
    date:"1",
    userID:"",
    type:"instantFunding",
    balance:6000,
    plan:"oneTime",
    total:1059,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setUserID:(state,action: PayloadAction<string>)=>{
        },
        setType:(state,action: PayloadAction<string>)=>{
            state.type=action.payload;
        },
        setBalance:(state,action: PayloadAction<number>)=>{
            state.balance=action.payload;
        },
        setPlan:(state,action: PayloadAction<string>)=>{
            state.plan=action.payload;
        },
        setTotal:(state,action: PayloadAction<number>)=>{
            state.total=action.payload;
        },
    }
})
export const {setUserID,setType,setBalance,setPlan,setTotal}=counterSlice.actions;
export default counterSlice.reducer