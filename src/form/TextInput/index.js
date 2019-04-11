import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import Icon from "react-native-vector-icons/Feather";
import { ThemeProvider, Input } from 'react-native-elements';
import {Field} from "redux-form";



const RFTextInput = ({
     secure,
     disabled,
     inputType,
     focusTheField,
     focusNext,
     lastInput,
     iconName,
     placeholder,
     input: { onBlur, onChange, onFocus, value },
     meta: { error, touched, valid }
}) => (
    <Input
        placeholder={placeholder}
        errorStyle={{ color: 'red' }}
        onChangeText={onChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        editable={!disabled}
        selectTextOnFocus={!disabled}
        errorMessage={error && !valid ? error : null}
        inputContainerStyle={styles.root}
        secureTextEntry={secure}
        inputStyle={{color: '#fff'}}
        leftIcon={
            <Icon
                name={iconName}
                size={24}
                color='white'/>
        }
        leftIconContainerStyle={{marginRight: 10}}
        // blurOnSubmit={ false }
        // returnKeyType={ lastInput ? "done" :"next" }
        // returnKeyLabel={ lastInput ? "done" :"next" }
        keyboardType={ inputType ? inputType : "default" }
        // onSubmitEditing={() => { focusNext('two'); }}
    />
);

RFTextInput.propTypes = {
    secure: PropTypes.bool,
    disabled: PropTypes.bool,
    inputType: PropTypes.string,
    focusNext: PropTypes.func,
    lastInput: PropTypes.bool,
    input: PropTypes.shape({
        onBlur: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onFocus: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,
    meta: PropTypes.shape({
        error: PropTypes.string,
        touched: PropTypes.bool.isRequired,
        valid: PropTypes.bool.isRequired,
    }).isRequired,
};

RFTextInput.defaultProps = {
    secure: false,
    disabled: false,
    lastInput: false,
};

export default RFTextInput;