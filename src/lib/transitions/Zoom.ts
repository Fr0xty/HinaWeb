import type { EasingFunction, TransitionConfig } from 'svelte/types/runtime/transition';

interface ZoomParams {
    delay?: number;
    duration?: number;
    easing?: EasingFunction;
}

export default (node: Element, { delay, duration, easing }: ZoomParams = {}): TransitionConfig => {
    return {
        delay,
        duration,
        easing,
        css: (t: number) => `
            transform: scale(${t});
            opacity: ${t};
        `,
    };
};
