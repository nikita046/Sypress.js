import * as data from "../helpers/default_data.json"


describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    });

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    });

    it('#1 Авторизация позитивный кейс', function () {
         cy.get('#mail').type(data.login); // Нашли поле логин и ввели вверный логин 
         cy.get('#pass').type(data.password);// Нашли поле пароль и ввели вверный пароль 
         cy.get('#loginButton').click(); // Нажал кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что в после ав-ции вижу текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю что в текст ав-ции виден пользователю
        // cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
     })
     it('#2 Проверка логики востановления пароля', function () {
        cy.get('#forgotEmailButton').click(); // Клик "Забыл пароль"
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Крестик есть и виден
        cy.get('#mailForgot').type(data.login); // Вводим почту 
        cy.get('#restoreEmailButton').click(); // Клик "отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю что в после ав-ции вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что в текст ав-ции виден пользователю
       // cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и виден
    })
    it('#3 Авторизация Правильный логин и НЕправильный пароль', function () {
        cy.get('#mail').type(data.login); // Нашли поле логин и ввели вверный логин 
        cy.get('#pass').type('1iLoveqastudio1');// Нашли поле пароль и ввели НЕвверный пароль 
        cy.get('#loginButton').click(); // Нажал кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем отработку неправильного логина или пароля
        cy.get('#messageHeader').should('be.visible'); // Проверяю что в текст ав-ции виден пользователю
        //cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
    })
    it('#4 Авторизация НЕправильный логин и правильный пароль', function () {
        cy.get('#mail').type('1german@dolnikov.ru'); // Нашли поле логин и ввели НЕвверный логин 
        cy.get('#pass').type(data.password);// Нашли поле пароль и ввели вверный пароль 
        cy.get('#loginButton').click(); // Нажал кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем отработку неправильного логина или пароля
        cy.get('#messageHeader').should('be.visible'); // Проверяю что в текст виден пользователю
       // cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
    })
    it('#5 Авторизация логин без @ и правильный пароль', function () {
        cy.get('#mail').type('1germandolnikov.ru'); // Нашли поле логин и ввели НЕвверный логин 
        cy.get('#pass').type(data.password);// Нашли поле пароль и ввели вверный пароль 
        cy.get('#loginButton').click(); // Нажал кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяем отработку неправильного логина или пароля
        cy.get('#messageHeader').should('be.visible'); // Проверяю что в текст  виден пользователю
       // cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
    })
    it('#6 Авторизация позитивный кейс разный регистр', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Нашли поле логин и ввели вверный логин 
        cy.get('#pass').type(data.password);// Нашли поле пароль и ввели вверный пароль 
        cy.get('#loginButton').click(); // Нажал кнопку войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что в после ав-ции вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что в текст ав-ции виден пользователю
       // cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем что крестик виден пользователю
    })
 }) 