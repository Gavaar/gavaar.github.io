/**
 * Configuration for the Graphs view. Title, description and colors are values that will be shared
 * across all graphs, the 'values' object is the one defining the graph.
 *
 * @param {string} [title] - the title of the graphs container
 * @param {string} [description] - the description of the graphs
 * @param {string[]} [colors] - colors to assign to data. If null, default colors will be used.
 * @param { [key: string]: number } - the values to be assigned to the data plots
 *
 * example:
 * ```typescript
 * const graph = {
 *  values: {
 *   enero: 100,
 *   febrero: 300,
 *   marzo: 200,
 *   abril: 220,
 *   mayo: 280,
 *  }
 * }
 * ```
 *
 * note: notice that the component accepts an array of `EquifaxGraphConfig` as input.
 */
export interface EquifaxGraphConfig {
  values: { [key: string]: number };
  title?: string;
  description?: string;
  colors?: string[];
}
