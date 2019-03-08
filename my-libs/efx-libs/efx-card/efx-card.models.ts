/**
 * Configuration for Equifax Card Component
 *
 * @param {string} title - the overhead title
 * @param {'extend' | 'info'} [action] - whether to make it collapsable, add info at the end or none
 * @param {boolean} [collapsed] - if the card starts collapsed
 * @param {string} [infoMessage] - message to show over info button as tooltip
 */
export interface EquifaxCardConfig {
  title: string;
  action?: 'extend' | 'info' | undefined;
  collapsed?: boolean;
  infoMessage?: string;
}
