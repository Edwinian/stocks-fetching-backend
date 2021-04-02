import { Module } from '@nestjs/common';
import { StocksController } from './stocks/stocks.controller';
import { StocksModule } from './stocks/stocks.modules';
import { StocksService } from './stocks/stocks.service';

@Module({
  imports: [StocksModule],
  controllers: [StocksController],
  providers: [StocksService],
})
export class AppModule {}
