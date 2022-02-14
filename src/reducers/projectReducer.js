import { types } from "../types/types";

const initialState = {
  projects: [],
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadProjects:
      return {
        ...state,
        projects: action.payload,
      };

    default:
      return state;
  }
};
