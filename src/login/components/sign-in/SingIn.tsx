import React from 'react';
import '../../styles/login-common.css'

export const SignIn: React.FC = () => (
    <div className="login-window">
        <div className="login-block">
            <h1>Представься, мразь!</h1>
            <input className="login-block__input login-block__login-input" type="text" placeholder="Логин"/>
            <input className="login-block__input login-block__login-password" type="password" placeholder="Пароль"/>
            <div className="login-block__buttons-container">
                <button className="login-block__button login-block__primary-button">Войти</button>
                <button className="login-block__button login-block__secondary-button">Зарегистрироваться</button>
            </div>
        </div>
    </div>
)