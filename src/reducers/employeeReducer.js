import { ADD_EMP, UPDATE_EMP, DELETE_EMP } from "../actions/types";

const state = {
  employeeList: [],
  count: 0
};

function employeeReducer(mstate = { ...state }, action) {
  switch (action.type) {
    case ADD_EMP:
      mState.employeeList.push(action.value);
      mState.count++;
      return { ...mState };
    case UPDATE_EMP:
      mState.employeeList.push(action.value);
      return { ...mState };
    case DELETE_EMP:
      mState.employeeList.push(action.value);
      mState.count--;
      return { ...mState };
    default:
      return { ...mstate };
  }
}
export default employeeReducer;
