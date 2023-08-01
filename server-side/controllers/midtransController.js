const midtransClient = require("midtrans-client");

class MidtransController {
  static async generateMidtransToken(req, res, next) {
    try {
      const { donateAmount, email } = req.body
      let snap = new midtransClient.Snap({
        isProduction : false,
        serverKey : process.env.MIDTRANS_SERVER_KEY
      });

      let parameter = {
        "transaction_details": {
          "order_id": "NEKOMICS-DONATION-" + Math.floor(1000000 + Math.random() * 9000000),
          "gross_amount": +donateAmount
        },
        "credit_card":{
          "secure" : true
        },
        "customer_details": {
          "email": email,
        }
      };
      
      const midtransToken = await snap.createTransaction(parameter)
      res.status(201).json(midtransToken)
    } catch (err) {
     console.log(err) 
    }
  }
}

module.exports = MidtransController;
