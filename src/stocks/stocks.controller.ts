import { Controller, Get, Query } from '@nestjs/common';
import { QuoteQueryModel } from './models/quotes.get.model';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get("quotes")
  public async getQuotes(@Query() query: QuoteQueryModel) {
    const getQuotes = await this.stocksService.getQuotes({
      ...{ update_frequency_milliseconds: 300, elements_per_update: 50 },
      // optionally override update_frequency_milliseconds and elements_per_update 
      ...query,
    });

    return getQuotes;
  }
}
