
// data layer initially looks like this
export const initialState = {
    user: null,
};

//dispatch action into data layer
export const actionTypes = {
    SET_USER: "SET_USER",
};

// what we do with reducer .. is just listen to it
const reducer = (state, action) => {
    console.log(action);

    switch (action.type)
    {
        case actionTypes.SET_USER:
            return { 
                ...state, // return whatever currentlly looks like
                user: action.user, // but change user to whatever we passed in .. as a (user) by load .. inside the action we dispatched
            };
            
           //if we don't listen to that action
           default: 
             return state;
    }
};

export default reducer;