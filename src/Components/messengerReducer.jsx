export const initialState = {
  selectedId: 0,
  message: {
    0: "hello tylor",
    1: "hello alice",
    2: "hello bob",
  },
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        message: message,
      };
    }
    case "edited_message": {
      return {
        ...state.message,
        [id]: message,
      };
    }
    case "sent_message": {
      return {
        ...state,
        message: "",
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
