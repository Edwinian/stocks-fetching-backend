import { Controller, Get, Query } from '@nestjs/common';
import { Quote } from './models/quote.model';
import { QuoteQueryModel } from './models/quotes.get.model';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get('quotes')
  public async getQuotes(@Query() query: QuoteQueryModel): Promise<Quote[]> {
    const getQuotes = await this.stocksService.getQuotes({
      ...{
        symbols: ['AAAA', 'BBBB', 'CCCC', 'DDDD'], // dummy data
        update_frequency_milliseconds: 300,
        elements_per_update: 50, // limit
      },
      // optionally override update_frequency_milliseconds and elements_per_update
      ...query,
    });

    return getQuotes;
  }
}
