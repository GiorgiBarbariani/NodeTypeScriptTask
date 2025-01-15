Описание проекта
Что реализовано: API, очередь, Pub/Sub, кэширование.

Используемые технологии.

Установка и запуск
Установите Docker.

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

Вывод
Примеры логов для кэша и Pub/Sub.
