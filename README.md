- mongod (launch mongodb)
- npm install (node modules sync)
- npm run build (build react app)
- npm run start (start node server)



Available API 

User
- '/api/account/signup' POST
- '/api/account/signin' POST
- '/api/account/verify' GET
- '/api/account/logout' GET

Cleaner
- '/api/cleaner/account/signup' POST
- '/api/cleaner/account/signin' POST
- '/api/cleaner/account/verify' GET
- '/api/cleaner/account/logout' GET

Order
- '/api/order/' GET  (get all order)






- '/api/order/' POST  (create an order)
```
POST /api/order HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: ab2e3bf3-a47b-61a8-b6c8-3d7748b4952d

{
    "cleaner" : {
        "firstName": "Python",
        "lastName": "node",
        "WorkerAccount": "",
        "phoneNumber": "0999999999",
        "email": "python@gmail.com",
        
        "country": "台北市",
        "workerReigon": "台北",
        "workerAddress": "台北林口",
        "experience": "5年",
        "skill": "掃地",
        "transportation": "汽車",
        "serviceReigon": "雙北",
        "isDeleted": false,
        "sex": false,
        "_id": "5ae20297eb2675e48a409a39"
    },
    "user" :{
        "firstName": "",
        "lastName": "",
        "phoneNumber": "0999",
        "email": "test@gmail.com",
        "_id": "5ae20bf142ae77e84bdf6942"
    },
    
    "serve_region":"Taipei",
    
    "price": 2800
    
}
```
- '/api/order/:id' GET (get an order)
```
GET /api/order/5ae20c0d42ae77e84bdf6943 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: f1fbf567-3cd3-89ab-9055-e9bc097a4470
```

- '/api/order/:id' PUT (update an order)


- '/api/order/:id' DELETE (delete an order)
```
DELETE /api/order/5ae20c0d42ae77e84bdf6943 HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: bf75bb82-ee20-5665-224e-20d7425f9c16
```



JackalkaodeMacBook-Air:web_app jackalkao$ npm run start
```
> housekeepbao@0.1.0 start /Users/jackalkao/MERN4/web_app
> node ./bin/www

connection succesful
```

browse index page 
http://localhost:3000