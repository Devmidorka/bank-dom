import React, {useState} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import {AuthContext} from './components/AuthContext';
import Form from './components/Form';
import Profile from './components/Profile';
import Title from './components/Title';
import {AuthDataInterface} from './types/AuthContext';

const App = () => {

    const correctLogin = 'steve.jobs@example.com'
    const correctPassword = 'password'
    let cachedLogin = localStorage.getItem('bank_login') || '';
    let cachedPassword = localStorage.getItem('bank_password') || '';

    cachedLogin = cachedLogin !== '' ? JSON.parse(cachedLogin) : ''
    cachedPassword = cachedPassword !== '' ? JSON.parse(cachedPassword) : '';

    const [authData, setAuthData] = useState<AuthDataInterface>({
        login: cachedLogin,
        password: cachedPassword,
        isAuth: (cachedLogin === correctLogin && cachedPassword === correctPassword) || null,
        isFetching: false,
        savePassword: false
    })


    const logout = () => {
        setAuthData({...authData, password: '', login: '', isAuth: null})
        localStorage.removeItem('bank_login')
        localStorage.removeItem('bank_password')
    }

    const setValidConditionData = (data: AuthDataInterface) => {
        setAuthData({...authData, isFetching: true})
        setTimeout(() => {
            const isCorrectData = data.login === 'steve.jobs@example.com' && data.password === 'password'
            // @ts-ignore
            if (isCorrectData && data.savePassword === true) {
                localStorage.setItem('bank_login', JSON.stringify(data.login));
                localStorage.setItem('bank_password', JSON.stringify(data.password));
            }
            setAuthData({...data, isAuth: isCorrectData, isFetching: false})
        }, 1000)

    }

    const authContextValues = {
        authData,
        setValidConditionData,
        logout
    }
    return (
        <AuthContext.Provider value={authContextValues}>
            <BrowserRouter>
                <Title>Only.</Title>
                <Routes>
                    {authData.isAuth &&
                        <Route path="/profile" element={<Profile/>}/>
                    }
                    <Route path="*" element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default App;