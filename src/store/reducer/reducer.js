export const initialState = {
  Users: [{}],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "users/addUser":
      // action.payload.map((s) => state.Users.push(s));
      return { Users: action.payload };
    case "users/fetchUsers":
      return { Users: state.Users };
    default:
      return state;
  }
};
