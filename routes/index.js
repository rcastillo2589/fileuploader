const express = require('express');
const aws = require('aws-sdk');
const router = express.Router();
const s3 = new aws.S3();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send('ok');
});

router.get('/sign-s3', (req, res) => {
  // const fileName = req.query['file-name'];
  // const fileType = req.query['file-type'];
  // const s3Params = {
  //   Bucket: S3_BUCKET,
  //   Key: fileName,
  //   Expires: 60,
  //   ContentType: fileType,
  //   ACL: 'public-read'
  // };

  // s3.getSignedUrl('putObject', s3Params, (err, data) => {
  //   if(err){
  //     console.log(err);
  //     return res.end();
  //   }
  //   const returnData = {
  //     signedRequest: data,
  //     url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
  //   };
  //   res.write(JSON.stringify(returnData));
  //   res.end();
  // });
  res.status(200).send('ok');
});

module.exports = router;
