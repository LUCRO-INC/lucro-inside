import {
  trigger,
  state,
  style,
  animate,
  query,
  stagger,
  transition,
} from '@angular/animations';

export let fadeinLeft = trigger('fadein-left', [
  state('void', style({ opacity: 0, transform: 'translateX(-5%)' })),
  transition(':enter', [animate('500ms {{ delay }}ms ease-in')], {
    params: { delay: 0 },
  }),
]);

export let fadeinRight = trigger('fadein-right', [
  state('void', style({ opacity: 0, transform: 'translateX(5%)' })),
  transition(':enter', [animate('500ms ease-in')]),
]);
export let questionsFade = trigger('questionsFade', [
  state('void', style({ opacity: 0, transform: 'translateX(5%)' })),
  transition('* => *', [
    query(':enter', [stagger(100, [animate('500ms ease-out')])], {
      optional: true,
    }),
  ]),
]);

export let evaluacionDesempenoImageAnimation = trigger(
  'evaluacionDesempenoImageAnimation', [
    state('void', style({ opacity: 0 })),
    transition('* => *', [
    query(':enter', [
      stagger(400, [
        style({
          opacity: 1
        })
      ])
    ], { optional: true })
  ])]
);
