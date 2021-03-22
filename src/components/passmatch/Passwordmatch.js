const passwordStatus = {
    password: "",
    passwordstate: "",
    confirmpassword: "",
    confirmpasswordstate: "",
  };
  const passwordError = {
    success: "success",
    error: "error",
  };
  export const checkEquality = (password = "", confirmPassword = "") => {
     // If length of password and confirmpassword is 0
    if (password.length === 0) {
      passwordStatus.passwordstate = passwordError.error;
      return passwordStatus;
    }
    // Password should be minimum of 5 chars
    if (password.length < 5) {
      passwordStatus.passwordstate = passwordError.error;
      return passwordStatus;
    }
    passwordStatus.passwordstate = passwordError.success;
    if (confirmPassword.length === 0) {
      passwordStatus.confirmpasswordstate = passwordError.error;
      return passwordStatus;
    }
    // If password does not match with confirm password
    if (password !== confirmPassword) {
      passwordStatus.confirmpasswordstate = passwordError.error;
      return passwordStatus;
    }
    passwordStatus.confirmpasswordstate = passwordError.success;
    return passwordStatus;
  };