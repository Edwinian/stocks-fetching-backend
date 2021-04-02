import { Injectable, Scope } from '@nestjs/common';
import { Quote } from './models/quote.model';
import { QuoteQueryModel } from './models/quotes.get.model';

@Injectable({ scope: Scope.REQUEST })
export class StocksService {
  public async getQuotes(query: QuoteQueryModel) {

    const quotes = await query.symbols.map((symbol) => ({
      symbol, 
      // lowest $0.01, highest $39060.99
      price: Math.round(100 * Math.random() * (390361 - 0.01) + 0.01) / 100,
    }));

    return quotes;
  }
}
