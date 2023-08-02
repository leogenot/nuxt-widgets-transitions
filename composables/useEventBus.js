// composables/useEventBus.ts
import mitt from 'mitt'


const emitter = mitt()

export const useEvent = emitter.emit
export const useListen = emitter.on
export const useRemove = emitter.off
