import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View, Text } from 'react-native';
import {Field} from "redux-form";
import RFTextView from '../../../TextInput';
import styles from './styles';


const focusNextField = (id) => {
    this.inputs[id].focus();
};

const HelloFormView = ({
   handleSubmit,
   submitFailed,
   submitSucceeded,
   submitting,
   valid,
}) => (
    <View>
        <Field
            name="username"
            component={RFTextView}
            disabled={submitting}
            blurOnSubmit={ false }
            returnKeyType={ "next" }
            onSubmitEditing={() => {
                focusNextField('two');
            }}
            ref={ input => {
                this.inputs['one'] = input;
            }}
        />
        <Field
            name="password"
            component={RFTextView}
            secure={true}
            disabled={submitting}
            blurOnSubmit={ true }
            returnKeyType={ "done" }
            ref={ input => {
                this.inputs['two'] = input;
            }}
        />
        {!submitting && submitFailed && <Text style={styles.rootFailed}>Authentification failed</Text>}
        {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>Submit Succeeded</Text>}
        <Button
            disabled={!valid || submitting}
            title="Submit Hello"
            onPress={handleSubmit}
        />

        {submitting && <Text style={styles.rootSucceeded}>Connexion</Text>}
    </View>
);

HelloFormView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    submitting: PropTypes.bool,
};

HelloFormView.defaultProps = {
    submitting: false,
};

export default HelloFormView;