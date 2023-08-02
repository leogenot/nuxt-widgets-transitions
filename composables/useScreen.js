const { y, x } = useScroll(process.client ? window : null, { throttle: 30 })
const { width, height } = useWindowSize()

export default () => {
    return {
        width,
        height,
        currentScroll: computed(() => y.value),
        currentScrollX: computed(() => x.value),
        currentScrollY: computed(() => y.value),

    }
}
