import PropTypes from 'prop-types';
import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeProvider, Input } from 'react-native-elements';

const theme = {
    Button: {
        raised: false,
    },
};

const RFTextInput = ({
     secure,
     disabled,
     input: { onBlur, onChange, onFocus, value },
     meta: { error, touched, valid }
}) => (
    <ThemeProvider theme={theme}>
        <Input
            placeholder='INPUT WITH ERROR MESSAGE'
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
            leftIcon={
                <Icon
                    name='user'
                    size={24}
                    color='black'/>
            }
        />
    </ThemeProvider>
);

RFTextInput.propTypes = {
    secure: PropTypes.bool,
    disabled: PropTypes.bool,
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
};

export default RFTextInput;