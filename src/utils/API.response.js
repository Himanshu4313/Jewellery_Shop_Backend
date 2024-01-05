class APIResponse {
      
     constructor(statusCode , data , message = 'Success'){
          this.statusCode = statusCode;
          this.message = message;
          this.data = data;
     }

}

export default APIResponse;