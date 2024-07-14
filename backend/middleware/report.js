import morgan from 'morgan';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const accessLogStream = fs.createWriteStream(join(__dirname, '../../report.log'), { flags: 'a' });

export const generateReportLog = morgan(
  `:date -- method: :method -- url: :url -- status: :status -- response-time: :response-time ms`,
  { stream: accessLogStream }
);