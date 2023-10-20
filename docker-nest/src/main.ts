import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const fs = require('fs');
  // const keyFile  = fs.readFileSync(__dirname + '../certs/chain.pem');
  // const certFile = fs.readFileSync(__dirname + '../certs/cert.pem');
  
  const keyFile  = fs.readFileSync('/certs/chain.pem');
  const certFile = fs.readFileSync('/certs/cert.pem');
  
  const app = await NestFactory.create(AppModule, 
    // {    httpsOptions: {
    //   key: keyFile,
    //   cert: certFile,
    // }}
                                      );
  await app.listen(3000);
}
bootstrap();
