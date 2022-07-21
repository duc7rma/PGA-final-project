import React from 'react';
import { Field } from 'formik';
import { FormattedMessage } from 'react-intl';
import './inputFeedback.css';

interface Props {
  error: string | undefined;
  isTouched: boolean | undefined;
}

function EmailField(props: Props) {
  const { error, isTouched } = props;

  return (
    <div className="col-md-12" style={{ marginBottom: '12px' }}>
      <Field
        style={{ height: '46px' }}
        type="text"
        className="form-control"
        name="email"
        id="inputEmail"
        placeholder="Email"
      />
      {error && isTouched && <div className="input-error">{error}</div>}
    </div>
  );
}

export default EmailField;
