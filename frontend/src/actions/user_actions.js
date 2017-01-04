import userActions from '../constants/userActions';

function loginAction(name, password) {
  "use strict";

  return {
    type: userActions.login,
    user: {
      name,
      password
    }
  }
}

function logoutAction() {
  "use strict";

  return {
    type: userActions.logout
  }
}

function resetPasswordAction(email) {
  "use strict";

  return {
    type: userActions.resetPassword,
    email
  }
}

export { 
  loginAction,
  logoutAction,
  resetPasswordAction
};