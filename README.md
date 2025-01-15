Данный проект демонстрирует реализацию следующих функций:

  API для обработки идентификаторов.
  Очередь задач с использованием Bull и Redis.
  Система Pub/Sub для обмена сообщениями.
  Кэширование для предотвращения повторной обработки данных.


Используемые технологии:
  Node.js: Основной сервер.
  TypeScript: Для строгой типизации.
  Express: Для создания API.
  Bull: Для работы с очередями задач.
  Redis: Для кэширования и Pub/Sub.
  Docker и Docker Compose: Для контейнеризации и управления сервисами.

Запустите приложение:
  bash
  Copy code
  docker-compose up --build

Использование
  Пример запроса через curl:
  bash
  Copy code
  curl -X POST http://localhost:3000/process-ids -H "Content-Type: application/json" -d '{"ids":[12345,67890]}'

Ожидаемые логи:
  yaml
  Copy code
  Handled 12345
  Processed ID: 12345
