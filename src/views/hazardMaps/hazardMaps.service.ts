export interface ColorScale {
  levels: number[];
  hexrgbs: (string | undefined)[];
}

export const getHazardMapCSVData = (data: string[], vs30: number, imt: string, poe: string, statistic: string) => {
  const csvData: (number | string)[][] = [
    [`vs30=${vs30}`, `spectral period=${imt}`, `Poe=${poe}`, `Statistic=${statistic}`],
    ['lon', 'lat', 'shaking intensity(g)'],
  ];

  if (statistic === 'cov') {
    csvData[1][2] = 'coefficient of variation';
  }

  data.forEach((geojsonString) => {
    const geojsonObject = JSON.parse(geojsonString);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    geojsonObject.features.forEach((feature: any) => {
      csvData.push([feature.properties.loc[0], feature.properties.loc[1], feature.properties.value.toFixed(2)]);
    });
  });
  return csvData;
};

export const getTickValues = (levels: number[]): number[] => {
  const min = Math.min(...levels);
  const max = Math.max(...levels);
  const steps = max / 0.5 + 1;

  return Array.from({ length: steps }, (_, index) => index * 0.5 + min);
};

export const parsePoeString = (poe: string): number => {
  return Number(poe.replace('% in 50 years', '')) / 100;
};

export const readablePoe = (poe: number): string => {
  return `${poe * 100}% in 50 years`;
};

export const readablePoeArray = (poes: number[]): string[] => {
  return poes.map((poe) => readablePoe(poe));
};
