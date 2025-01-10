"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/Store";

// Define the Provider wrapper
const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;