import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
const allWidgets = ref([])
const totalHeight = ref(0)
const state = {
    HEADER_HEIGHT: computed(() => 5.2),
    WIDGET_GAP: 10,
}

const addWidget = widget => {
    setTimeout(() => {
        const destroy = () => {
            allWidgets.value = allWidgets.value.filter(w => w.id !== widget.id)
        }

        const elementHeight = widget.element.value.getBoundingClientRect().height
        console.log('elementHeight', elementHeight)
        const model = {
            ...widget,
            isIdle: true,
            idx: -1,
            interpolatedPosition: null,
            targetPosition: null,
            height: elementHeight,
            destroy,
        }

        // add if not added
        if (!allWidgets.value.find(w => w.id === widget.id)) {
            if (widget.isGlobal) {
                allWidgets.value.unshift(model)
            } else {
                allWidgets.value.push(model)
            }
        }

        setScrollTrigger(widget)



        console.log('addWidget', elementHeight, allWidgets.value.length)

        setTimeout(() => {
            console.log(ScrollTrigger.getAll())
        }, 5000)
    })
}

const setScrollTrigger = (widget) => {
    totalHeight.value = allWidgets.value.reduce((acc, w) => acc + w.height + state.WIDGET_GAP, 0)
    console.log('totalHeight', totalHeight.value)
    ScrollTrigger.create({
        id: widget.id,
        trigger: widget.container.value,
        pin: true,
        start: allWidgets.value.length === 1 ? `top +=${state.HEADER_HEIGHT.value}` : `top +=${totalHeight.value}`,
        end: 'max',
        markers: true,
        onEnter: () => {
            widget.isIdle = false
        },
        onLeaveBack: () => {
            widget.isIdle = true
        },
    })
}

const clearWidgets = () => {
    allWidgets.value.forEach(widget => widget.isGlobal && widget.destroy())
    allWidgets.value.forEach(widget => {
        console.log('widget.id', widget.id)
        ScrollTrigger.getById(widget.id).kill()
    })
    allWidgets.value = allWidgets.value.filter(w => w?.isGlobal || w?.persist)
    totalHeight.value = 0
}


export default () => {
    return {
        addWidget,
        clearWidgets,
    }
}
