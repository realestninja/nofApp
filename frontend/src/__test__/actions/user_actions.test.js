import { loginAction, logoutAction, resetPasswordAction } from '../../actions/user_actions.js';
import userActions from '../../constants/userActions';

describe('user', () => {
  it('should login', () => {
    expect(loginAction('username', 'password')).toEqual({
      type: userActions.login,
      user: {
        name: 'username',
        password: 'password'
      }
    });
  });

  it('should logout', () => {
    expect(logoutAction()).toEqual({
      type: userActions.logout
    });
  });

  it('should initialize password reset', () => {
    expect(resetPasswordAction('test@test.de')).toEqual({
      type: userActions.resetPassword,
      email: 'test@test.de'
    });
  });
});
