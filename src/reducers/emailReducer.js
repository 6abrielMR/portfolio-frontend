import { types } from "../types/types";

const initialState = {
  isSendEmail: null,
};

export const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.sendEmail:
      return {
        ...state,
        isSendEmail: action.payload,
      };

    default:
      return state;
  }
};
