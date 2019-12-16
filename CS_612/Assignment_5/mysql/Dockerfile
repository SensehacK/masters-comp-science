## Pull the mysql:5.7 image
FROM mysql:5.7

## The maintainer name and email
MAINTAINER Kautilya Save <kautilyasave@gmail.com>

# database = node_js and password for root = password
ENV MYSQL_DATABASE=node_js \
    MYSQL_ROOT_PASSWORD=kautilya

# when container will be started, we'll have `test` database created with this schema
COPY ./modified_demo_data_works.sql /docker-entrypoint-initdb.d/

