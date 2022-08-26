export const parsePoe = (poe: string): number => {
  switch (poe) {
    case '10% in 50 years':
      return 0.1;
    case '2% in 50 years':
      return 0.02;
    default:
      return 0.1;
  }
};

export const getHazardMapCSVData = (data: string[], vs30: number, imt: string, poe: string) => {
  const csvData: (number | string)[][] = [
    [`vs30=${vs30}`, `specctral period=${imt}`, `Poe=${poe}`],
    ['lon', 'lat', 'shaking intensity(g)'],
  ];

  data.forEach((geojsonString) => {
    const geojsonObject = JSON.parse(geojsonString);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    geojsonObject.features.forEach((feature: any) => {
      csvData.push([feature.properties.loc[0], feature.properties.loc[1], feature.properties.value]);
    });
  });
  return csvData;
};
