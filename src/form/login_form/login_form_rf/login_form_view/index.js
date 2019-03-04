import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, View, Text } from 'react-native';
import {Field} from "redux-form";
import RFTextView from '../../../TextInput';
import styles from './styles';

// variable to hold the references of the textfields
// let inputs = {};
// function to focus the field

const inputs = {};

const HelloFormView = ({
   handleSubmit,
   submitFailed,
   submitSucceeded,
   submitting,
   valid,
    // inputs,
   focusTheField,
}) => (
    <View>
        <Field
            name="username"
            component={RFTextView}
            disabled={submitting}
            inputType={"email-address"}
            ref={ input => {
                inputs['one'] = input;
            }}
            // focusNext={ (e) => { focusTheField(e); } }
            lastInput={true}
        />
        <Field
            name="password"
            component={RFTextView}
            secure={true}
            disabled={submitting}
            // returnKeyType={ "done" }
            ref={ input => {
                inputs['two'] = input;
            }}
            // isFocused={focused}
            lastInput={true}
        />
        {!submitting && submitFailed && <Text style={styles.rootFailed}>Authentication failed</Text>}
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
    // inputs: {},
    focusTheField : function(id) {
        console.log(id);
        console.log(inputs[id]);
        // inputs[id].focus();
    },
};

export default HelloFormView;