import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const fs = require('fs');
  // const keyFile  = fs.readFileSync(__dirname + '../certs/chain.pem');
  // const certFile = fs.readFileSync(__dirname + '../certs/cert.pem');
  
  // const keyFile  = fs.readFileSync('./certs/chain.pem');
  // const certFile = fs.readFileSync('./certs/cert.pem');

  // const certFile = fs.readFileSync(__dirname);
  // console.log(certFile);
  console.log(__dirname);

  if (fs.existsSync('./certs')) {
    console.log('./certs exists');

  }

    const keyFileExists  = fs.existsSync('./certs/chain1.pem');
    console.log('keyfile 1 existence ...');
    console.log(keyFileExists);

    const certFileExists = fs.readFileSync('./certs/cert1.pem');
    console.log('certfile 1 existence ...');
    console.log(certFileExists);
  
  
  const app = await NestFactory.create(AppModule, 
    // {    httpsOptions: {
    //   key: keyFile,
    //   cert: certFile,
    // }}
                                      );
  await app.listen(3000);
}
bootstrap();
