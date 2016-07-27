# New Motion Assignment

## Brief Description
This is an application, which was a part of my assignment to become a front-end developer of The New Motion company, which is located in Amsterdam.
I've failed an interview process, they said to me, that I have pure design skills.
Anyway, I think this small app will be enough to demonstrate my technical skills and how am I familiar with technologies.

Initially there were requests to The New Motion test server, but I've mocked them.
Also, I haven't used `enzyme` for testing react components, because I was not aware of that tool at the moment.
Now I would prefer to use it.

So, assignment sounded something like that:

```
You should create a prototype of mobile version of a site, which allows to login, when correct credentials are provided.
You can get access token by submitting required credentials.
When token is received, use it to get information about current user and render it on the page.
Also, there should be a map with some markers (coordinates for those are just predefined).
```

## Running the project

Install dependencies and start the project.

```
npm install
npm start
```

It will be available at [http://localhost:4000](http://localhost:4000).

## Credentials for Login form

Email: `programming-assignment@thenewmotion.com`
Password: `Zea2E5RA`

## Running tests

```
npm test
```

## Technology Stack

* Babel.js (ES6 syntax,https://github.com/babel/babel)
* Redux (flux stores, https://github.com/gaearon/redux)
* React (rendering, https://github.com/facebook/react)
* Webpack (build tool and dependencies management, https://github.com/webpack/webpack)
* react hot loader (hot reloading of react components, https://github.com/gaearon/react-hot-loader)
* Sass + autoprefixer
* ESLint (javascript code linter, https://github.com/eslint/eslint, https://github.com/babel/babel-eslint, https://github.com/babel/eslint-plugin-babel, https://github.com/yannickcr/eslint-plugin-react)
* superagent (ajax requests, https://github.com/visionmedia/superagent)
* Font Awesome (fancy text icons)

### Redux ecosystem

* redux
* react-redux (react bindings)
* redux-tiny-router (routing, https://github.com/Agamennon/redux-tiny-router)
* redux-form (integrate form components with redux store, https://github.com/erikras/redux-form)
* redux-thunk (dispatch async actions, https://github.com/gaearon/redux-thunk)
* redux-logger (log actions in console, https://github.com/fcomb/redux-logger)

### Tests

* karma.js (tests runner, https://github.com/webpack/karma-webpack)
* mocha.js, chai.js, sinon.js (testing utils)
* phantom.js (headless browser)
* rewire.js (mocking modules)
