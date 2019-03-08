import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Animation of expand and collapse of cards. Reusable.
 *
 * @param [@contentExpander] - attached to the collapsable content.
 * @param [@showDivider] - attached to a `<mat-divider>` placeholder to show it's collapsed.
 */
export const gavContentExpanderAnimations: AnimationTriggerMetadata[] = [
  trigger('contentExpander', [
    state('void', style({ transform: 'translateY(-50%) scaleY(0)' })),
    transition('void => *', [animate('125ms ease-in-out')]),
    state('*', style({ transform: 'translateY(0) scaleY(1)' })),
    transition('* => void', [animate('125ms ease-out')]),
  ]),
  trigger('showDivider', [
    state('void', style({ 'max-width': '0' })),
    transition('void => *', [animate('350ms 125ms ease-out')]),
    state('*', style({ 'max-width': '100vw' })),
    transition('* => void', [animate(0)]),
  ]),
];
