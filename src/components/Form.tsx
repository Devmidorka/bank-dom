import React, {useContext, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import StyledForm from '../styles/StyledForm';
import StyledSubmit from '../styles/StyledSubmit';
import { FormValues } from '../types/Form';
import Checkbox from './Checkbox';
import Input from './Input';
import Label from './Label';
import Span from './Span';
import Error from './Error'
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormValues>();


    const {authData, setValidConditionData} = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if(authData.isAuth) {
            navigate('/profile')
        }
    }, [authData.isAuth])

    const onSubmit = ({password, savePassword = false, firstName}: FormValues) => {
        setValidConditionData({
            login: firstName,
            password,
            savePassword
        })
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {authData.isAuth === false ?
                <Error>Пользователя не существует</Error>
                :
                null
            }
            <Label>
                Логин
                <Controller
                    render={({ field }) => (
                        <Input
                            value={field.value}
                            onChange={field.onChange}
                            inputRef={field.ref}
                            invalid={errors?.firstName}
                        />
                    )}
                    name="firstName"
                    control={control}
                    rules={{ required: true }}

                />
                {errors?.firstName && <Span>Обязательное поле</Span>}
            </Label>

            <Label>
                Пароль
                <Controller
                    render={({ field }) => (
                        <Input
                            type="password"
                            value={field.value}
                            onChange={field.onChange}
                            inputRef={field.ref}
                            invalid={errors?.password}

                        />
                    )}
                    name={'password'}
                    control={control}
                    rules={{ required: true }}
                />
                {errors?.password && <Span>Обязательное поле</Span>}
            </Label>

            <Controller
                render={({ field }) => (
                    <Checkbox
                        checked={field.value}
                        onChange={field.onChange}
                        inputRef={field.ref}
                        title='Запомнить пароль'
                    />
                )}
                name={'savePassword'}
                control={control}
            />
            <StyledSubmit disabled={authData.isFetching}>Войти</StyledSubmit>
        </StyledForm>
    );
};

export default Form;