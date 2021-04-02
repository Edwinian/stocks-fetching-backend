export interface QuoteQueryModel {
  symbols: string[];

  update_frequency_milliseconds?: number;

  elements_per_update?: number;
}
