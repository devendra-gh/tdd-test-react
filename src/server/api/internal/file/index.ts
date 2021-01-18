import express from 'express';
import documentStore from 'server/services/documentStore';

const router = express.Router();

const mapper = {
  jpg: 'jpeg',
  jpeg: 'jpeg',
  png: 'png',
};

const base64MimeType = (encoded: string) => {
  let result = null;

  if (typeof encoded !== 'string') {
    return result;
  }

  const mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
  if (mime && mime.length) {
    result = mime[1];
  }

  return result;
};

const getExtension = (filename: string) => {
  let extension = null;
  if (typeof filename !== 'string') {
    return extension;
  }
  const lastDot = filename.lastIndexOf('.');
  extension = filename.substring(lastDot + 1);
  return extension;
};

router.get('/image/:filename', async (req, res, next) => {
  try {
    const { filename } = req.params;
    const file = await documentStore.getFile(filename, req);
    const image = file.replace(/^data:image\/\w+;base64,/, '');
    const mime = filename.match(/.*\.(\S+)__\S+/);

    res.header(
      'Content-Type',
      `image/${mime ? mapper[mime[1] as keyof typeof mapper] : 'jpeg'}`,
    );
    res.send(Buffer.from(image, 'base64'));
  } catch (err) {
    req.log.error('Could not get file from document store.');
    next(err);
  }
});

router.post('/upload', async (req, res, next) => {
  try {
    const { file, filename } = req.body;

    const allowedExtensions = ['JPG', 'JPEG', 'PDF'];
    const allowedMimes = ['IMAGE/JPG', 'IMAGE/JPEG', 'APPLICATION/PDF'];
    const mimeType = base64MimeType(file) || '';
    const extensionType = getExtension(filename) || '';
    if (
      !(
        allowedMimes.indexOf(mimeType.toUpperCase()) !== -1 &&
        allowedExtensions.indexOf(extensionType.toUpperCase()) !== -1
      )
    ) {
      res.status(400).json({ message: 'Only upload PDF/JPG files' });
    }

    const fileId = await documentStore.savePlain(file, filename, req);
    res.json({ fileId });
  } catch (err) {
    req.log.error('Could not save file in document store.');
    next(err);
  }
});

export default router;
