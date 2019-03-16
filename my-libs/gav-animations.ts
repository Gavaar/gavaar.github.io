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
 */
export const gavContentExpanderAnimations: AnimationTriggerMetadata[] = [
  trigger('contentExpander', [
    state('void', style({ transform: 'translateY(-50%) scaleY(0)' })),
    transition('void => *', [animate('125ms ease-in-out')]),
    state('*', style({ transform: 'translateY(0) scaleY(1)' })),
    transition('* => void', [animate('125ms ease-out')]),
  ])
];
