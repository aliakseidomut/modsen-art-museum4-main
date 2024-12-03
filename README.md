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

## Функционал

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
    - ![image](https://github.com/user-attachments/assets/8fc6c153-1829-4777-a40a-aace9cc27701)
    - ![image](https://github.com/user-attachments/assets/fc5f2199-f716-4ad2-bba6-fbe218b497ee)

- Возможность просмотра более детальной информации о картине:
    - ![image](https://github.com/user-attachments/assets/81f2a40c-ce63-4de0-a244-b4269af0b356)

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
    - [Netlify](https://effervescent-cobbler-60e9c8.netlify.app/)
  
- Настройку конфигурации eslint, prettier, husky, commitlint:
    - eslint.config.mjs
    - .prettierrc.yaml
    - .husky
    - commitlint.config.mjs
  (В основном используются конфигурации по умолчанию)

- Использование корректного GitFlow в проекте:
    - ![Screenshot 2024-11-13 011314](https://github.com/user-attachments/assets/e3b27502-a3a7-4a9c-84e5-33276f8b932b)
