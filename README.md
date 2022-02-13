About the project:
===================

The project have goal explain what is? How to insert in batch?


Instruction to running project locally:
========================================

- Clone project
- Execute command **npm i** install packages needs on the project
- Execute command **docker-compose up -d** to create mysql database in docker container
- Access mysql using this command **docker exec -it database sh**, after connect in mysql client and copy content the db.sql file and running in mysql client.
- Execute command **node ./index.js** to execute insert in batch