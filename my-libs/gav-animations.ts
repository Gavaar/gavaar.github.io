import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * Animation of expand and collapse vertically. Reusable.
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

/**
 * Animation of expand and collapse horizontally. Reusable.
 *
 * @param [@horizontalExpand] - attached to the collapsable content.
 */
export const gavHorizontalExpanderAnimate: AnimationTriggerMetadata[] = [
  trigger('horizontalExpand', [
    state('void', style({ transform: 'translateX(-50%) scaleX(0)', opacity: 0 })),
    transition('void => *', [animate('500ms ease-in-out')]),
    state('*', style({ transform: 'translateX(0) scaleX(1)', opacity: 1 })),
    transition('* => void', [animate('500ms ease-out')])
  ])
]
