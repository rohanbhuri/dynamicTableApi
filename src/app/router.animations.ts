import { trigger, state, animate, style, transition } from '@angular/core';


export function RouterTransition() {
    return trigger('routerTransition', [
        state('void', style({ position: 'absolute', left: 0, right: 0, width: '100%', opacity: '1' })),
        state('*', style({ position: 'absolute', left: 0, right: 0, width: '100%', opacity: '1' })),
        transition(':enter', [
            style({ transform: 'scale(0.99)', opacity: '0' }),
            animate('0.6s ease-in-out', style({ transform: 'scale(1)', opacity: '1' }))
        ]),
        transition(':leave', [
            style({ transform: 'scale(1)', opacity: '1' }),
            animate('0.2s ease-in-out', style({ transform: 'scale(0.99)', opacity: '0' }))
        ])
    ]);
}
