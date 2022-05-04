# Nodejs api - stopwatch logs

### Clone the repo

```javascript 
git clone https://github.com/alokpaidalwar/node-test.git
cd node-test
npm install
```

### Add env details

Add DBURL and PORT in .env file

### Start the application
 
 To run in dev mode

 ``` 
 npm run dev
 ```

 To run in prod mode

 ```
 npm run start
 ```

## API's

### Create log
1. Set the request to POST and url localhost:<port>  eg. localhost:3000
2. Set body for a request. eg.
``` 
{
    "buttonType": "stop",
    "log": "stop button clicked with duration 10min"
}
```
### GET Logs by Ip (paginated)
1. Set the request to GET and url localhost:<port>  eg. localhost:3000
2. Set body for a request. eg.
``` 
{
    "page": 1,
    "perPage": 5
}
```
