# README

PoC of a hybrid Rails + Vue/jQuery project.
It's a standard multipage application, where
 - Vue contributes a specific app to each complex page,
 - jQuery ensures fast development on all other pages.
 Pages using Vue code don't load jQuery, and viceversa.

Vue config is based on this [awesome post](https://dev.to/vannsl/vue3-on-rails-l9d)

# Dependencies
- Rails 6
- Vue 3
- jQuery 3

# Setup

## In development
In a terminal run
```
bundle exec rails s
```
and in a second terminal
```
bin/webpack-dev-server
```
## In production
In a terminal run
```
bundle exec rails assets:precompile
RAILS_SERVE_STATIC_FILES=true bundle exec rails s -e production
```
and in a second terminal
```
NODE_ENV=production bin/webpack-dev-server
```

