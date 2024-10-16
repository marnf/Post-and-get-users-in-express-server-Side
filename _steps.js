/***
 * 1.create a post api on the server side;
 * =>
 * app.post('/users',(req, res)=>{
 * 
 * })
 * 
 * 
 * 
 * 2. client side send data via post
 * 3.set fetch method inside the fetch options( second parameter )
 * 4.options will have three things: method, header and body
 * 5.options will have headers: 'content-type' : 'application/json'
 * don't forget to send data by JSON.stringify in the body;
 * 7.on the server side : don't forget to use express.json() middleware
 */