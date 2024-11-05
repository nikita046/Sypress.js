import * as data2 from "../helpers/pokemon_data2.json"

describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type(data2.login);       // вводим логин
         cy.get('input[type="password"]').type(data2.password); // вводим пароль
         //cy.get('input[type="submit"]').click({ force: true });         // Либо строчка ниже
         //cy.get('.auth__button').as('closeBtn');
         //cy.get('@closeBtn').click({ force: true });                        // нажимаем кнопку Подтвердить
         //cy.get("Войти").trigger("click");
         cy.get('button[class="auth__button k_form_send_auth"]').click();                        // нажимаем кнопку Подтвердить
         
          
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1224');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
        
     });
 });
