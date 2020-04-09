# allstar_frontend

> AllStar project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## DB Setup
```
CREATE DATABASE all_star;
CREATE ROLE django_auth WITH LOGIN PASSWORD 'asdfgh';
GRANT ALL PRIVILEGES ON DATABASE all_star TO django_auth;

python manage.py make migrations
python manage.py migrate

python manage.py createsuperuser
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
