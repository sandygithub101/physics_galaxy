//     bucketName: 'vc-10002130-213016812802',
//     dirName: 'media', /* optional */
//     region: 'ap-south-1',
//     accessKeyId: 'AKIA4UKA5WD4CYRE4ONU',
//     secretAccessKey: '5jyAbrpiK4WotGfnWiKHx/aNZMHd6HjR4czrtJKd',
//     s3Url: 'https:/your-custom-s3-url.com/', /* optional */



// import AWS from 'aws-sdk';
const AWS = window.AWS;
export const s3 = new AWS.S3({
  accessKeyId: import.meta.env.VITE_AWS_ACCESSKEY,
  secretAccessKey: import.meta.env.VITE_AWS_SECRATE_ACCESSKEY,
  region: 'ap-south-1',
});

// export const s3 = new AWS.S3();