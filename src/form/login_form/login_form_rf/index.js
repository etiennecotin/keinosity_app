import { reset, reduxForm } from 'redux-form';
import HelloFormView from './login_form_view';

const FORM = 'login';

const afterSubmit = (result, dispatch) =>
    dispatch(reset(FORM));

const validate = ({ username, password }) => {
    const errors = {};
    if (username === undefined) {
        errors.username = 'Obligatoire';
    } else if (username.trim() === '') {
        errors.username = 'Le champ ne doit pas être vide';
    }
    if (password === undefined) {
        errors.password = 'Obligatoire';
    } else if (password.trim() === '') {
        errors.password = 'Le champ ne doit pas être vide';
    }
    return errors;
};

const HelloFormRF = reduxForm({
    form: FORM,
    validate,
    // onSubmitSuccess: afterSubmit,
})(HelloFormView);

export default HelloFormRF;