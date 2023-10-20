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
    const keyFile  = fs.readFileSync('./certs/chain.pem');
    console.log(keyFile);
  }
  
  const app = await NestFactory.create(AppModule, 
    // {    httpsOptions: {
    //   key: keyFile,
    //   cert: certFile,
    // }}
                                      );
  await app.listen(3000);
}
bootstrap();
