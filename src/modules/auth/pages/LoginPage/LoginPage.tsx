import React from 'react';
import { useState } from 'react';
import LoginForm from 'modules/auth/components/LoginForm/LoginForm';
import { ILoginParams } from 'models/auth';
import { handleLoginAPI } from 'server/userServer';
import './LoginPage.css';
import { RESPONSE_STATUS_SUCCESS } from 'utils/httpResponseCode';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { setUserInfo } from 'modules/auth/redux/authReducer';
import { ACCESS_TOKEN_KEY } from 'utils/constants';
import Cookies from 'js-cookie';
import { replace } from 'connected-react-router';
import { ROUTES } from 'configs/routes';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from 'redux/reducer';
import { Action } from 'redux';
import axios from 'axios';

function LoginPage() {
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();

  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate();

  const onLogin = async (values: ILoginParams) => {
    setErrorMessage('');
    setLoading(true);
    const json = await handleLoginAPI(values.email, values.password);

    console.log(json);
    setLoading(false);

    // if (json?.succes === true) {
    //   dispatch(setUserInfo(json.user));
    //   Cookies.set(ACCESS_TOKEN_KEY, json.user_cookie, { expires: values.rememberMe ? 7 : undefined });
    //   dispatch(replace(ROUTES.home));
    // }
  };

  return (
    <div className="container">
      <LoginForm onLogin={onLogin} isLoading={isLoading} errorMessage={errorMessage} />
    </div>
  );
}

export default LoginPage;
