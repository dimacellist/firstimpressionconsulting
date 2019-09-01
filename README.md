This is my first React.js app.
The longterm project to migrate all my web pages to react.

FirstImpressionConsulting is one of them

![First Impression Consuting Website](https://res.cloudinary.com/dksg2fojb/image/upload/v1567368392/Screenshot_2019-09-01_at_23.02.27_dytwhx.png)

You can view original non-React web page here:
[firstimpressionconsulting](http://www.firstimpressionconsulting.net)

In order to view the project, clone the repo and cd to the project directory.  
Open console and run:

### `npm start`

Make sure to have Node.js installed on your machine.   

For the unit testing I have used Jest, Enzyme and Chai library.  
Installation:   
### `npm install --save-dev enzyme enzyme-adapter-react-16 jest-enzyme babel-jest`

### `$ npm install chai`

In order to run tests, run following command in the terminal
Change the following line in the package.json:

```
...
scripts: {
 "test": "jest",
 ...
}

```

Run  
### `npm test`




