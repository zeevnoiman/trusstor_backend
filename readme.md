# Todos Backend
The system is built from 3 microservices and a mongo database. The microservices are a web api to process crud operations on todos, a data layer to make operations to the database, and notifications to control the jobs logic.
Notifications logic is made up of three cron jobs:
1) Make polling on the database once a day, put todos reaching their limits tomorrow on local memory, and send notification about those todos. 
2) Make polling on the database once per three hours to update the local memory.
3) Make polling on local memory every hour to pick todos reaching their limits in the next three hours 

## How to run
Run docker compose up on root directory.
