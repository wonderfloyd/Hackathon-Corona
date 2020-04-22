require('dotenv').config() 

const {
   NEXMO_API_KEY, NEXMO_API_SECRET, NEXMO_APPLICATION_ID, NEXMO_APPLICATION_PRIVATE_KEY_PATH, TO_NUMBER, FROM_NU } = process.env;
const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET,
  // applicationId: NEXMO_APPLICATION_ID,
  // privateKey: NEXMO_APPLICATION_PRIVATE_KEY_PATH,
})


let text ='what' 

const from = FROM_NU
const to = TO_NUMBER
const opts = {
  "type": "unicode"
}

nexmo.message.sendSms(from, to, text, opts, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})




















// nexmo.message.sendSms(
//   { "type": "sms", "number": TO_NUMBER }, 
//   { "type": "sms", "number": FROM_NU }, 
//   { 
//     "content": {
//     "type": "text",
//     "text": text
//     }
//   },
//   (err, responseData) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (responseData.messages[0]['status'] === "0") {
//         console.log("Message sent successfully.");
//       } else {
//         console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//       }
//     }
//   })
