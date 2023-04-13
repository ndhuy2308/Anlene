import React, { createContext, useReducer } from "react";

// Khởi tạo giá trị ban đầu cho context
const initialState = {
  id: 1,
  name: "Nguyen Duc Huy",
  phoneNumber: "0929294316",
  email: "huypero114@gmail.com",
  Co: true,
  Xuong: false,
  Khop: true,
  DeKhang: false
};

// Khởi tạo Context và Provider
export const ApplicationContext = createContext(initialState);

// Khởi tạo reducer để quản lý state
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_APPLICATION":
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    default:
      throw new Error();
  }
}

// Khởi tạo Provider component
export const AppProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ApplicationContext.Provider>
  );
};