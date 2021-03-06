import { BadRequestError } from '@gb-xtickets/common';
import { Storage } from '@google-cloud/storage';
import path from 'path';

const GOOGLE_CLOUD_PROJECT_ID = 'xtickets';
const bucketName = 'xtickets';
const serviceKey = path.resolve(
  __dirname,
  `../../${process.env.GCP_JSON_KEY_NAME}`
);

const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: serviceKey,
});

export const uploadFile = async (file: any): Promise<string> => {
  if (!file) {
    throw new BadRequestError('[uploadFile] - no file found');
  }
  const bucket = storage.bucket(bucketName);
  const gcsFileName = file.originalname.replace(/ /g, '_');
  const blob = bucket.file(gcsFileName);

  return new Promise((res, rej) => {
    const stream = blob.createWriteStream({
      resumable: false,
      public: true,
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on('error', (err: any) => {
      console.log(typeof err);
      rej(`[uploadFile] - ${err}`);
    });

    stream.on('finish', () => {
      console.log('finish upload');
      const url = getPublicUrl(gcsFileName);
      res(url);
    });

    stream.end(file.buffer);
  });
};

const getPublicUrl = (fileName: string) =>
  `https://storage.googleapis.com/${bucketName}/${fileName}`;
