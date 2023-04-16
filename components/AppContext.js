import React, { createContext, useReducer } from "react";

// Khởi tạo giá trị ban đầu cho context
const initialState = {
  name: "Name",
  phoneNumber: "0929294316",
  email: "huy@gmail.com",
  Co: -1,
  Xuong: -1,
  Khop: -1,
  DeKhang: -1,
  Follow: false,
  KetQua: 0 // 1 - Xanh lá, 2 - Vàng, 3 - Xám
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