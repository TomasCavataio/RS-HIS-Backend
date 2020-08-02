
## Description

This is a [Nest](https://github.com/nestjs/nest) framework project, and it provides web services for the frontend part of the project.

It consumes MongoDB data, stored in Atlas cloud.

This backend is deployed on heroku, and the frontend it's on github pages, sou you'll be able to use the project by clicking here: https://tomascavataio.github.io/RS-HIS/

You can create your own user, or if you want to you can use this one to login

user: user@gmail.com

password: userpassword123456789

## Documentation

You can check out the api documentation at https://rs-his-backend.herokuapp.com/api/#/ where you'll find endpoint information such as parameters expected and even try the functionalities by itself with just a few clicks. You should see something like this:

![Swagger Demo](swagger.gif)
 
## Warning

You won't be able to run this backend locally because of a few things (at least not easily).. First of all, this project uses a file .env for sensible stuff such as passwords, token encription and database connection, if you have your own db you can just create this .env file and replace the information.
If it gets hard to do so, you can always reach to me and I'll help you out
 
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Tomas Cavataio](https://github.com/TomasCavataio)

## License

  Nest is [MIT licensed](LICENSE).
