
Install dependencies for server & client

npm install nodemon 
npm install && npm run client-install


Connect cluster to application 

MongoDB Atlas Configuration 
Go to https://www.mongodb.com/cloud/atlas and create an account. 

Choose "connect your application" 
<br>
<img src="images/Screen Shot 2020-07-01 at 8.38.35 AM.png" width="640" height="480"></img>

Copy the connection string shown
<br>
<img src="images/Screen Shot 2020-07-01 at 8.38.54 AM.png" width="640" height="480"></img>

Paste the string into config>keys.js. Leave the secretOrKey variable as "secret" 
<br>
<img src="images/Screen Shot 2020-07-01 at 8.41.05 AM.png"></img>

Run client & server with concurrently
npm run dev

Server runs on http://localhost:5000 and client on http://localhost:3000

This app uses MongoDB 


ADDITIONAL DOCUMENTATION: 



Possible to-dos: 
-Configure dockerization of both front and backend. 
-Connect DB collections to query documents by JWT for each user. This will require a collection for "uploads" and one for "users" these collections alreadty exist, they just need to be configured. 
-MongoDB testing: https://www.mongodb.com/cloud/atlas
-API testing: https://www.postman.com/
-Add additional CSS into SQUID GUI (use Netbeans)


Sources and resources: 
-https://dev.to/sujaykundu777/utilizing-the-power-of-docker-while-building-mern-apps-using-mern-docker-4olb
-https://medium.com/@andreas.lengkeek/a-major-point-of-trouble-for-first-time-developers-is-working-out-how-to-store-and-upload-files-on-2e847e908332
-https://www.youtube.com/watch?v=3f5Q9wDePzY
-https://github.com/hapijs/joi/blob/master/API.md#compileschema

