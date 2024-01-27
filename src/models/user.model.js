import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';
import crypto from 'crypto';
const Schema = mongoose.Schema;

const userSchema = new Schema({
       customerName:{
             type:String,
             required:[true , 'Name field is required'],
             trim:true,
             lowercase:true,
             minLength:[5, 'Name should be more than 5 character '],
             maxLength:[30, 'Name should be less than 30 character']
       },
       email:{
           type:String,
           unique:[true , 'This email is already registered.Please used another email'],
           lowercase:true,
           required:[true, 'Email is required'],
           trim:true,
           match:'/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/'
       },
       address:{
            type:String,
            required:[true, 'Address field is required'],
            lowercase:true
       },
       avatar:{
            
             public_id:{
                 type:String
             },
             secure_url:{
                  type:String
             }
       },
       phoneNumber:{
            type:Number,
            required:[true, 'Phone number is required'],
            minLength:[10, 'Please enter 10 digit phone number'],
            maxLength:[10, 'Please enter correct phone number']
       },

       password:{
          type: String,
          required: [true, "password must be required"],
          select: false,
          minLength: [8, "password at least 8 character"],
       },

       ForgotPasswordToken:{

                 type:String,
                 
                },

      forgotPasswordExpiry:{
         type: Date
      },

      role:{
           type:String,
           enum:['CUSTOMER','ADMIN'],
           default:'CUSTOMER'
      },
      otp : {
          type: Number,
          required:[true , 'Please enter your OTP'],
          select:false
      },

      otpExpiryTime :{

          type: Date

      }


},{
    timestamps:true
})


const User = mongoose.model('User' , userSchema);

// for password encryption
userSchema.pre('save', async function (next) {
     try {
         if(!this.isModified('password')){
             return next();
         }
        this.password =  await bcrypt.hash(this.password , 10);
        next();
        
     } catch (error) {
        throw new Error('Failed to generate hash password',error);
     }
});

// generate jwt token for authentication

userSchema.methods = {
    
     generateJWTToken : function (){
        try {
            return JWT.sign(
               {
                 _id: this._id,
                 email: this.email,
                 role: this.role,
               },
   
               process.env.SECRET,
   
               {
                  expiryIn: 7 * 24 * 60 * 60 * 1000 , //7 days 
               }
   
               )
            
        } catch (error) {
            throw new Error('Failed to generate JWT token',error);
        }
     },

     generateResetPasswordToken : async function () {
           const resetToken = crypto.getRandomValues(20).toString('hex');

           this.ForgotPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

            this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000; // it means token is valid for next 15 min
           
           return resetToken;
     } 
}




export default User;