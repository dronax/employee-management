const initialState ={
  emp:[],
};
const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        emp:[...state.emp,action.payload]
      }

    case "delete":
      console.log(action.payload)
      let rem = state.emp.find((i) => (i?.id === action.payload));
      console.log(rem)
      return{
        ...state,
        emp:state.emp.map((i)=>(i?.id===rem.id?null:i))
        
      }
    default:
      return {
        ...state,
      };
  }
};
export default empReducer;
