import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import StyledForm from '../styles/StyledForm';
import StyledInput from '../styles/StyledInput';
import StyledSubmit from '../styles/StyledSubmit';
import { FormValues } from '../types/Form';
import Checkbox from './Checkbox';
import Input from './Input';
import Label from './Label';
import Span from './Span';

const Form = () => {

    const {
        handleSubmit,
        control,
        getValues,
        formState: { errors }
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => console.log("Submit:", data);
    console.log("Errors:", errors);

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
            <StyledSubmit>Войти</StyledSubmit>
        </StyledForm>
    );
};

export default Form;