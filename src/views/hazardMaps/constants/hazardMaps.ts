export const statisticTooltip = `Numeric values represent quantiles from the epistemic uncertainty distribution, e.g. 0.9 means that 90% of the model realizations fall below this value.
	CoV is Coefficient of Variation.`;

export const gridStyleTooltip = "Select a plotting style to change the appearance of the hazard map.";

interface gridStyleOptions {
  [key: string]: {
    opacity: string;
    strokeOpacity: string;
  };
}

export const gridStyleOptions: gridStyleOptions = {
  Filled: { opacity: "1", strokeOpacity: "0" },
  Blended: { opacity: "0.5", strokeOpacity: "1" },
  Outlined: { opacity: "0", strokeOpacity: "1" },
};
