 function appReducer(state,action) {
//u want actions :ADD_EMPLOYEE, EDIT_EMPLOYEE, and REMOVE_EMPLOYEE
    switch(action) {
        case ADD_EMPLOYEE : 
            return {
                ...state,
                employees : [...state.employees,action.payload]
            };
        default :
            return state;
    }
    
}
export default appReducer