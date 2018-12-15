import { ADD_EMP, UPDATE_EMP, DELETE_EMP } from "./types";

export const addEmployee = emp => {
  const state = {
    type: ADD_EMP,
    payload: emp
  };
  return state;
};

export const updateEmployee = emp => {
  const state = {
    type: UPDATE_EMP,
    payload: emp
  };
  return state;
};

export const deleteEmployee = emp => {
  const state = {
    type: DELETE_EMP,
    payload: emp
  };
};
