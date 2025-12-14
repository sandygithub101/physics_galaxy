//     bucketName: '',
//     dirName: 'media', /* optional */
//     region: 'ap-south-1',
//     accessKeyId: '',
//     secretAccessKey: '',
//     s3Url: '', /* optional */



// import AWS from 'aws-sdk';
const AWS = window.AWS;
export const s3 = new AWS.S3({
  accessKeyId: import.meta.env.VITE_AWS_ACCESSKEY,
  secretAccessKey: import.meta.env.VITE_AWS_SECRATE_ACCESSKEY,
  region: 'ap-south-1',
});

// export const s3 = new AWS.S3();
