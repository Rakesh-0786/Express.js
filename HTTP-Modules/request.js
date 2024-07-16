// server to server request using http.request or we can do this with the help of axios
// client to server request is done with fetch 


const http=require('http');
const { hostname } = require('os');
const options={
    hostname:'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}

const apiReq=http.request(options, (apiReq) => {
    apiReq.on('data',(data) =>{
        console.log(data.toString());
    })
});
apiReq.on("error", () =>{
    console.log(e);
});

apiReq.end();