import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"counter",
    name:"bgcolor",
    name:"todo",
    initialState:{
        count:0,
        color:"",
        task:[]
    },
    reducers:{
        increament:(state)=>{
            state.count+=1;
        },
        decreament:(state)=>{
            if(state.count!=0){
                state.count-=1;
            }
        },
        changeColor1:(state)=>{
            state.color = "lightskyblue";
        },
        changeColor2:(state)=>{
            state.color = "lightpink";
        },
        changeColor3:(state)=>{
            state.color = "teal";
        },
        addTask:(state,actions)=>{
            state.task.push(actions.payload);
        },
        deleteRed:(state,actions)=>{
            state.task = state.task.filter(key=>key.id!=actions.payload)
        },
        complete:(state,actions)=>{
            for(let i=0; i<state.task.length; i++){
                if(state.task[i].id == actions.payload){
                    state.task[i].status = true;
                }
            }
        },
        uncomplete:(state,actions)=>{
            for(let i=0; i<state.task.length; i++){
                if(state.task[i].id == actions.payload){
                    state.task[i].status = false;
                }
            }
        },
        editSaveData:(state,actions)=>{
            for(let i=0; i<state.task.length; i++){
                if(state.task[i].id == actions.payload.id){
                    state.task[i].work = actions.payload.work;
                }
            }
        },
        modecolor:(state)=>{
            state.color="black"
        },
        modecolor1:(state)=>{
            state.color="white"
        },
        changeColor:(state,actions)=>{
            state.color = actions.payload;
        }
    }
})
export default Slice.reducer;
export const {increament,decreament,changeColor1,changeColor2,changeColor3,addTask,deleteRed,uncomplete,complete,editSaveData,modecolor,modecolor1,changeColor} = Slice.actions;