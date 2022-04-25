
import Icon from '@mdi/react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MuiPhoneNumber from 'material-ui-phone-number';
import CssTextFieldMui from './../../../Services/muiInputStyle';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
const TextFieldCustom = CssTextFieldMui(TextField);
const MuiPhoneNumberCustom = CssTextFieldMui(MuiPhoneNumber)
const MuiCustomInput = ({ styleCustom, name, type, value, icon, onChange, onBlur, error, errorText, isPhoneInput }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>
            <div className={`${styleCustom} px-3 mb-7`}>
                {
                    !isPhoneInput &&
                    <TextFieldCustom
                        autoComplete="off"
                        name={name}
                        type={!['Password', 'Confirm_Password'].includes(name) ? 'text' : showPassword ? 'text' : 'password'}
                        fullWidth
                        id={name}
                        label={' ' + name.split('_').join(' ') + ' *'}
                        autoFocus={name === 'First_Name' ? true : false}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon path={icon}
                                        title="User Profile"
                                        size={1}
                                    />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                type === 'Password' &&
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={error}
                        helperText={errorText}
                    />}
                {
                    isPhoneInput &&
                    <MuiPhoneNumberCustom
                        // className={textFieldStyles.root}
                        value={value}
                        error={error}
                        helperText={errorText}
                        defaultCountry={'eg'}
                        onChange={(v, c) => onChange(v, c)}
                        onBlur={onBlur}
                        fullWidth variant='outlined'
                        label='phone Number'
                        placeholder='phoneNumber' />
                }
            </div>
        </>

    );
}
export default MuiCustomInput;