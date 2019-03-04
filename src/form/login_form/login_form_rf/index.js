import { reset, reduxForm } from 'redux-form';
import HelloFormView from './login_form_view';

const FORM = 'login';

const afterSubmit = (result, dispatch) =>
    dispatch(reset(FORM));

const validate = ({ username, password }) => {
    const errors = {};
    if (username === undefined) {
        errors.username = 'Required';
    } else if (username.trim() === '') {
        errors.username = 'Must not be blank';
    }
    if (password === undefined) {
        errors.password = 'Required';
    } else if (password.trim() === '') {
        errors.password = 'Must not be blank';
    }
    return errors;
};

const HelloFormRF = reduxForm({
    form: FORM,
    validate,
    // onSubmitSuccess: afterSubmit,
})(HelloFormView);

export default HelloFormRF;