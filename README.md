# Modsen Art Museum

![image](https://github.com/user-attachments/assets/3aa0e4bf-ab1c-4eb6-9e11-0f62a2718bd1)

## Содержание

- [Деплой](#Деплой)
- [Скрипты для запуска](#Скрипты-для-запуска)
- [Тестирование](#Тестирование)
- [Выполненные пункты](#Выполненные-пункты)
## Деплой

[Deploy](https://effervescent-cobbler-60e9c8.netlify.app/)

## Скрипты для запуска

```
npm install --force
npm run start
```

## Тестирование

```
npm run test
```

## Выполненные пункты

- Получение данных о картинах с внешнего API:
    - Вся логика по работе с API находится в файле @utils/Api.ts

- Отображение списка картин с возможностью пагинации:
    - ![image](https://github.com/user-attachments/assets/dcf520f2-1fad-4172-82c0-b390ef4f0d03)

- Реализация формы поиска с валидацией введенных данных:
    - ![image](https://github.com/user-attachments/assets/615df315-1e5d-494c-9357-a7db77fe1fca)

- Использование роутинга для разделения страниц приложения:
    - Роутинг находится в файле App.tsx

- Реализация дебаунса для поисковой формы:
    - Для реализации дебаунса использовал хук @utils/hooks/useDebounce.ts

- Возможность добавления картины в список избранных с сохранением их в LocalStorage:
    - Добавление картины в список избранных происходит с помощью кнопки @components/ToFavoritesButton

- Возможность просмотра более детальной информации о картине:
    - ![image](https://github.com/user-attachments/assets/8fc6c153-1829-4777-a40a-aace9cc27701)
    - ![image](https://github.com/user-attachments/assets/fc5f2199-f716-4ad2-bba6-fbe218b497ee)

- Интерфейс для просмотра списка избранных и возможности удаления из списка:
    - ![image](https://github.com/user-attachments/assets/12bff17b-5bb4-4f55-a92d-1c4d0e7e7533)

- Реализация возможности сортировки картин по различным критериям (по названию произведений) (продумать самостоятельно).
    - Реализована сортировка по названию произведений и по дате написания произведения
    - ![image](https://github.com/user-attachments/assets/3d38f227-7d74-447b-90a2-c91cf31db238)

- При загрузке товаров необходимо реализовать Loader:
    - ![image](https://github.com/user-attachments/assets/e3021015-59ec-49f6-93c9-e2e30060b04b)

- Оптимизацию дизайна под мобильные устройства (до 480px):
    - ![image](https://github.com/user-attachments/assets/fcab5406-7cba-4dbf-bda2-f8e2a66dc80a)
    - ![image](https://github.com/user-attachments/assets/21688902-c9aa-4d11-8796-511f73bc05c2)
    - ![image](https://github.com/user-attachments/assets/7078a1dc-51d7-4480-b6d0-8362747542d0)

- Реализацию burger-menu с реализовацией кастомного хука при закрытии:
    - ![image](https://github.com/user-attachments/assets/530f95cc-5448-4fb6-9453-3145210b9f7e)
    - Для закрытия реализован хук @utils/hooks/useOutsideClick.ts

- Использование TypeScript для типизирования и уменьшения количества потенциальных багов;
- Обработку ошибок через паттерн **_Error Boundaries_**;
    - Компонента _Error Boundaries_ находится в @components/ErrorBoundary
    - В ErrorBoundary обернуты HomePage, ArtWorkPage, FavoritesPage

- Использование алиасов для импортирования файлов:
    - Алиасы добавлены с помощью craco.config.js, в файлах с тестируемыми компонентами алиасы отсутствуют
  
- Покрытие тестами 35% функциональности приложения:
    - ArtWorkCard.test.tsx
    - ArtWorkCardMini.test.tsx
    - Footer.test.tsx
    - Sort.test.tsx
    - ToFavoritesButton.test.tsx
    - HomePage.test.tsx
    - NotFound.test.tsx

- Организацию файловой структуры react приложения. Ссылка на структуру: [Структура проекта](https://github.com/mkrivel/structure);
- Деплой приложения на платформу GitHub Pages или иные другие (Netlify, Vercel);
- Настройку конфигурации eslint, prettier, husky, commitlint:
    - eslint.config.mjs
    - .prettierrc.yaml
    - .husky
    - commitlint.config.mjs
  (В основном используются конфигурации по умолчанию)

- Использование корректного GitFlow в проекте;
![Screenshot 2024-11-13 011314](https://github.com/user-attachments/assets/e3b27502-a3a7-4a9c-84e5-33276f8b932b)

- Использование сторонних библиотек для стилей - запрещены, кроме рекомендуемых в пункте “Используемые технологии”.


# Tестовое задание Modsen Art Museum

## Содержание ТЗ

- [Техническое задание](#Техническое-задание)
- [API](#API)
- [Необходимый функционал](#Необходимый-функционал)
- [Пример графического представления](#Пример-графического-представления)
- [Используемые технологии](#Используемые-технологии)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Реализовать приложение для отображения каталога с картинами.

## API:

Список API для использования (если представленные API не удовлетворяют каким-либо условиям задания, можно использовать любые другие открытые API):
[Art API](https://api.artic.edu/docs/#introduction)

## Необходимый функционал

- Получение данных о картинах с внешнего API;
- Отображение списка картин с возможностью пагинации;
- Реализация формы поиска с валидацией введенных данных;
- Использование роутинга для разделения страниц приложения;
- Реализация дебаунса для поисковой формы;
- Возможность добавления картины в список избранных с сохранением их в LocalStorage;
- Возможность просмотра более детальной информации о картине;
- Интерфейс для просмотра списка избранных и возможности удаления из списка;
- Реализация возможности сортировки картин по различным критериям (по названию произведений) (продумать самостоятельно).

## Пример графического представления

Ссылка на макет: ["Modsen Art Museum"](https://www.figma.com/file/XSLT4bMToK5tOdbXBBuqhP/Trainee-task-1?type=design&node-id=0-1&mode=design&t=tthepIdFQRlAXlVS-0).

### Так же проект предполагает

- При загрузке товаров необходимо реализовать Loader;
- Оптимизацию дизайна под мобильные устройства (до 480px);
- Реализацию burger-menu с реализовацией кастомного хука при закрытии;
- Использование TypeScript для типизирования и уменьшения количества потенциальных багов;
- Обработку ошибок через паттерн **_Error Boundaries_**;
- Использование алиасов для импортирования файлов;
- Покрытие тестами 35% функциональности приложения;
- Организацию файловой структуры react приложения. Ссылка на структуру: [Структура проекта](https://github.com/mkrivel/structure);
- Деплой приложения на платформу GitHub Pages или иные другие (Netlify, Vercel);
- Настройку конфигурации eslint, prettier, husky, commitlint;
- Использование корректного GitFlow в проекте;
- Использование сторонних библиотек для стилей - запрещены, кроме рекомендуемых в пункте “Используемые технологии”.

## Описание экранов

Главная страница представляет собой информационную часть приложения, в которой можно выполнить поиск и отсортировать получаемые данные. Так же на главной странице необходимо реализовать пагинацию по двум картинам(дизайн продумать самостоятельно). При клике на выбранную картину должен осуществляться переход на страницу с детальной информацией, чтобы изучить произведение подробнее(необходимо самостоятельно добавить кнопку возврата на главную страницу). Понравившиеся произведения можно поместить в избранное, чтобы иметь быстрый доступ к их изучению и просмотру.

## Используемые технологии

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_eslint_** - линтер для JavaScript кода;
- **_prettier_** - инструмент для автоформатирования кода;
- **_yarn_** - менеджер пакетов;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_typescript_** - строго типизированный язык для уменьшения количества потенциальных багов;
- **_css_** - язык описания внешнего вида документа;
- **_jest_** - библиотека для unit-тестирования;
- **_react-router-dom_** - библиотека для навигации между разными частями веб-приложения;
- **_yup_** - библиотека для валидации форм;
- **_react-hook-form_** - библиотека для обработки элемента ввода формы.

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)
[React hooks](https://reactjs.org/docs/hooks-intro.html)
[Eslint](https://eslint.org/docs/user-guide/configuring)
[Prettier](https://prettier.io/docs/en/install.html)
[CSS](https://www.w3schools.com/css/)
[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)
[GitFlow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)
[Commit Convention](https://www.conventionalcommits.org/en/v1.0.0/)
