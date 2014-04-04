# Angular API Authentication Example

When I build apps, I like to have the API be "pure", and not accept cookies for authentication. I also like the API to be a completely
separate from the UI (it does not know or care about a user interface). This example demonstrates one way to achieve this goal
w/ an Angular app. This example app relies on (among other things):

* Angular
* Passport
* Express

## Running the example

### Start the API

```
$ cd api && grunt api-server

```

### Start the UI

If you haven't already, install bower and component globally:

```
$ npm install -g bower
$ npm install -g component@0.18.0
```

And in another terminal/session (or same window if you made the process go into background):

```
$ cd ui && grunt && grunt ui-server

```


