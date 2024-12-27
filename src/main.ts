import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ScraperService } from './scraper.service';
import { parseArguments } from './args';

async function bootstrap() {
  const { url, save } = await parseArguments();
  const app = await NestFactory.createApplicationContext(AppModule);
  const scraperService = app.get(ScraperService);
  await scraperService.scrape(url, save);
  await app.close();
}
bootstrap();
