// for data layer
import React, { createContext, useContext, useReducer }  from "react";

export const StateContext = createContext();

//higher order component [StateProvider .. we use that to wrap our app]
export const StateProvider = ({ reducer, initialState, children }) => 
(<StateContext.Provider value={useReducer(reducer, initialState)}> {children} </StateContext.Provider>);

// to pull smth from data layer we use [useStateValue] 
export const useStateValue = () => useContext(StateContext);



