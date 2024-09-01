const userData = (
  userData = JSON.parse(localStorage.getItem("userData")) || {},
  action
) => {
  switch (action.type) {
    case "SAVE_USER":
      userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(userData));
      return userData;
    default:
      return userData;
  }
};

export default userData;
