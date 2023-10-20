import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const fs = require('fs');
  // const keyFile  = fs.readFileSync(__dirname + '../certs/chain.pem');
  // const certFile = fs.readFileSync(__dirname + '../certs/cert.pem');
  
 
  // console.log(__dirname);

  // if (fs.existsSync('./certs')) {
  //   console.log('./certs exists');

  // }

    const keyFile  = fs.readFileSync('./certs/privkey1.pem');
    const certFile = fs.readFileSync('./certs/fullchain1.pem');

  
  
  const app = await NestFactory.create(AppModule, 
    {    httpsOptions: {
      key: keyFile,
      cert: certFile,
    }}
                                      );
  await app.listen(3000);
}
bootstrap();
