import gsap from 'gsap'
import { Power1 } from 'gsap/all'
import { CustomEase } from 'gsap/all'
gsap.registerPlugin(CustomEase)
// list of random "hardcoded" values used throughout the frontend
// no mo magic numbers and strings
export default {
  ENABLE_V_VIEW: true,
  CASE_TEASER_TOP_OVERFLOW_WHEN_ZOOMED: 110,
  ALL_CATEGORIES_HANDLE: 'all',
  DEFAULT_CATEGORIES_HANDLE: 'projectType',

  ANIMATIONS: {
    DURATION: 200,
    STAGGER_EASE: CustomEase.create("custom", "0.83, 0, 0.17, 1"),
    STAGGER: 0.3,
    STAGGER_FROM: "random",
    STAGGER_DURATION: 0.3,
    TICKER_EASE: Power1.easeInOut,
    TICKER_MIN_DURATION: 3,
  },
}

