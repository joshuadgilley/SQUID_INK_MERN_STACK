
Install dependencies for server & client

npm install nodemon 
<br>
npm install 
<br>
npm run client-install
<br>
npm run dev -starts server and client 
<br>
Connect cluster to application 

MongoDB Atlas Configuration 
Go to https://www.mongodb.com/cloud/atlas and create an account. 

Choose "connect your application" 

<img src="https://raw.githubusercontent.com/cacab/upload_app_api/master/images/Screen%20Shot%202020-07-01%20at%208.38.35%20AM.png"></img>

Copy the connection string shown
<img src="https://raw.githubusercontent.com/cacab/upload_app_api/master/images/Screen%20Shot%202020-07-01%20at%208.38.54%20AM.png"></img>

Paste the string into config > keys.js. Leave the secretOrKey variable as "secret" 
<img src="https://raw.githubusercontent.com/cacab/upload_app_api/master/images/Screen%20Shot%202020-07-01%20at%208.41.05%20AM.png"></img>

Run client & server with concurrently
<br>
npm run dev

Server runs on http://localhost:5000 and client on http://localhost:3000

This app uses MongoDB 
<br>

POSTMAN TUTORIAL: 
<br>
The development of this application uses Postman for API testing. https://www.postman.com/ Postman is opensource, download the software and follow the instructions in the screenshots below. 
<br>
<img src="https://raw.githubusercontent.com/cacab/upload_app_api/master/images/Screen%20Shot%202020-07-23%20at%2010.03.12%20AM.png"></img>

ADDITIONAL DOCUMENTATION: 



To-dos: 
<br>
-Configure dockerization of both front and backend. 
<br>
-Connect DB collections to query documents by JWT for each user. This will require a collection for "uploads" and one for "users" these collections alreadty exist, they just need to be configured. 
<br>
-Add additional CSS into SQUID GUI (use Netbeans)

<br>
<br>
<br>
Notes:
<br>
-MongoDB testing: https://www.mongodb.com/cloud/atlas
<br>
-API testing: https://www.postman.com/
<br>
<br>
<br>


Sources and resources: 
<br>
-https://dev.to/sujaykundu777/utilizing-the-power-of-docker-while-building-mern-apps-using-mern-docker-4olb
<br>
-https://medium.com/@andreas.lengkeek/a-major-point-of-trouble-for-first-time-developers-is-working-out-how-to-store-and-upload-files-on-2e847e908332
<br>
-https://www.youtube.com/watch?v=3f5Q9wDePzY
<br>
-https://github.com/hapijs/joi/blob/master/API.md#compileschema
<br>

