import User from "../models/user.model.js";
import APIError from "../utils/API.error.js";
import cloudinary from "cloudinary";
import APIResponse from "../utils/API.response.js";
import sendOTP from "../utils/send.sms.otp.js";

//Controller for user registration
const userRegistration = async (req, res, next) => {
  try {
    //take body data
    // check email allready exist or not
    // if email not exist than
    // generate OTP if otp is match then do further step, and it use for verification
    // response true

    const { customerName, email, address, avatar, phoneNumber, password } =
      req.body;

    if ((!customerName || !email || !phoneNumber, !password)) {
      return new APIError(401, "All fields are mandatory");
    }

    const user = await User.findOne({ email });

    console.log(user);

    if (user) {
      return new APIError(
        401,
        "This email is already exists,Please try with other email."
      );
    }
    // user create
    const newUser = await User.create({
      customerName,
      email,
      address,
      phoneNumber,
      password,
      avatar: {
        public_id: email,
        secure_url: avatar,
      },
    });

    if (!newUser) {
      return res
        .status(500)
        .json(
          new APIResponse(501, false, "Failed to create user,Please try again")
        );
    }

    // if user upload profile, then we are uploaded at cloudinary third services
    if (req.file) {
      try {
        const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "BeautyJewellersCustomerPhoto",
          width: 250,
          height: 250,
          gravity: "faces",
          crop: "fill",
        });

        if (result) {
          newUser.avatar.public_id = result.public_id;
          newUser.avatar.secure_url = result.secure_url;
        }
        // if once file is uploaded successfully then we remove file from our local server
        fs.rm(`uploads/${req.file.filename}`);
      } catch (error) {
        res
          .status(500)
          .json(
            new APIResponse(
              501,
              false,
              "profle does not upload,Please try again"
            )
          );
      }
    }
    
    //generate otp sms
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);

    const body = `Your One-Time Password (OTP) for registration is: ${otp}. 
    Please use this code to complete your registration. 
    Do not share this code with anyone.
    `;
    const res = sendOTP(phoneNumber, otp);
    console.log("res", res);

    newUser.otp = otp;
    newUser.otpExpiryTime = Date.now() + 15 * 60 * 1000; // 15min from now

    await newUser.save();
   
    //generateToken
   const token = await newUser.generateJWTToken();
   newUser.password = undefined;

    const cookieOption = {
        httpOnly:true,
        maxAge:7*24*60*60*1000,
        secure:true,
        sameSite:'None'
    }
    res.cookie("token",token,cookieOption);
    return res
      .status(201)
      .json(new APIResponse(200, true, "OTP send Successfully"));
  } catch (error) {
    return new APIError(501, "Something went wrong,Please try again");
  }
};

//Controller for signupVerify
const signupVerify = async (req , res , next) =>{
    // verify OTP
    // otp and otpExpiry = set undefined
    // data save 
    // response 
   const {otp} = req.body;
  //  const user = User.

}
export { userRegistration };
