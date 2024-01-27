import fast2sms from "fast2sms";
import dotenv from 'dotenv';
import axios from "axios";
dotenv.config();
let option = {
  API_KEY: process.env.FAST2SMS_API_KEY,
};

let TARGET_PHONE_NUMBER = process.env.TARGET_PHONE_NUMBER;

const sendOTP = async (phoneNumber,otp) => {
    await fast2sms.init(option);
    console.log('fast2sms connected');
    console.log(option.API_KEY);
  try {
       axios(`http://www.fast2sms.com/dev/bulkV2?authorization=${option.API_KEY}&variables_values=${otp}&route=otp&numbers=${phoneNumber}`)
      .then((result) => {
        console.log("Fast2SMS Result is :-", result);
      })
      .catch((err) => {
        console.log("Fast2SMS error is :", err);
      });
  } catch (error) {
    throw new Error("OTP Error is failed", error);
  }
};

export default sendOTP;
