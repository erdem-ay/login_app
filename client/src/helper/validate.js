/** validate login page username */
import toast from "react-hot-toast";

export async function usernameValidate(values) {
  return usernameVerify({}, values);
}

export async function passwordValidate(values) {
  return passwordVerify({}, values);
}

/** validate reset password */
export async function resetPasswordValidate(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.password.confirm_pwd) {
    errors.exist = toast.error("Password not match!");
  }

  return errors;
}

/** validate register form */
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

/** validate profile page */
export async function profileValidation(values) {
  return emailVerify({}, values);
}

/********************************************************* */

/** validate password */

function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password!");
  } else if (values.password.length < 6) {
    errors.password = toast.error(
      "Password must be more than 6 characters long!"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must fave special character!");
  }

  return errors;
}

/** validate username */

function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username!");
  }

  return error;
}

/** validate email */
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email Required!");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address!");
  }

  return error;
}
