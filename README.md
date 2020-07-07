
Install dependencies for server & client

npm install nodemon 
npm install && npm run client-install


Connect cluster to application 

MongoDB Atlas Configuration 
Go to https://www.mongodb.com/cloud/atlas and create an account. 

Choose "connect your application" 
<<<<<<< HEAD

<img src="https://drive.google.com/file/d/11VVOtL8YR5S_mKelavV6Zp5DV_37zJfj/preview"></img>

Copy the connection string shown
<img src="https://drive.google.com/file/d/16PJJQwedVdpxHPSI0lWDFPloO-cepGDV/preview"></img>

Paste the string into config > keys.js. Leave the secretOrKey variable as "secret" 
<img src="https://drive.google.com/file/d/1EnZ49jYDOJP2ayhoEM1h1hU1ePATIM_c/preview"></img>
=======
<br>
<img src="images/Screen Shot 2020-07-01 at 8.38.35 AM.png"></img>

Copy the connection string shown
<br>
<img src="images/Screen Shot 2020-07-01 at 8.38.54 AM.png"></img>

Paste the string into config>keys.js. Leave the secretOrKey variable as "secret" 
<br>
<img src="images/Screen Shot 2020-07-01 at 8.41.05 AM.png"></img>
>>>>>>> acc665ae836a9e5ed5b98fd77f19e479928bc891

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

