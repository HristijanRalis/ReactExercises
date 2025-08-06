export interface CountryI {
  name: {
    common: string;
    official: string;
  };

  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  cca3: string;
}

export interface CountryDetailsI extends CountryI {
  population: number;
  capital: string[];
}
