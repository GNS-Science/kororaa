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
