# A sample Pokédex APP

## Running docker environment

> This API uses docker and docker-compose

Access directory that repository is cloned and throught the terminal run:

- `docker-compose build` for build images, create containers etc.
- `docker-compose up` for yarn install and yarn start.

> This project have a script in /scripts/start that automate project startup development server.

## Starting and ending containers
To initialize run the command `docker-compose start` and to end `docker-compose stop`

## Accessing the container terminal
Run the `docker-compose run --rm pokedex_app sh` command

## Viewing the server log

Run the `docker-compose logs --tail=100 -f pokedex_app` command