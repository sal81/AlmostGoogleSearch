import React, {createContext, useContext, useReducer} from "react";

//data layer
 export const StateContext = createContext();

 export const StateProvider = ({ reducer, initialState, children}) => (
     <StateContext.Provider value = {
     useReducer(reducer, initialState)}>{children}
     </StateContext.Provider>
 );

 //Hook to pull information
 export const useStateValue = () => useContext(StateContext);