import { connect } from 'react-redux';
import { isLoggedIn, checkIsLocked } from 'redux/actions/authActions';
import { getWallet } from 'redux/actions/walletActions';
import { setIsAppOpenedByPopup } from 'redux/actions/globalActions';
import { setShowNotice } from 'redux/actions/globalActions';
import Routes from 'app/Routes.js';

function mapStateToProps(state) {
  return {
    initLoading: state.auth.initLoading,
    isLoggedIn: state.auth.isLoggedIn,
    passcodeHash: state.global.passcodeHash,
    isLocked: state.auth.isLocked,
    language: state.global.language,
    showNotice: state.global.showNotice,
    isAppOpenedByPopup: state.global.message !== undefined ? state.global.message.isAppOpenedByPopup : false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkAuth: () => dispatch(isLoggedIn()),
    getWallet: () => dispatch(getWallet()),
    checkIsLocked: (checkIsLock) => dispatch(checkIsLocked(checkIsLock)),
    setShowNotice: () => dispatch(setShowNotice()),
    setIsAppOpenedByPopup: (isTrue) => dispatch(setIsAppOpenedByPopup(isTrue))
  };
}

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Routes);

export default AuthContainer;
