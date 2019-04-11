import { PropTypes } from 'prop-types';
import React from 'react';
import {Button, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
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
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
            iconName={'user'}
            placeholder={'Email'}
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
            iconName={'lock'}
            placeholder={'Mot de passe'}
        />
        {!submitting && submitFailed && <Text style={styles.rootFailed}>L'email et le mot de passe ne correspondent pas</Text>}
        {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>Submit Succeeded</Text>}

        <View style={{width: '100%', marginTop: 20}}>
            <TouchableOpacity
                disabled={!valid || submitting}
                onPress={handleSubmit}
                style={styles.button}>
                <Text style={styles.buttonText}>Connexion</Text>
            </TouchableOpacity>
        </View>

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