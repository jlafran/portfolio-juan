import React, { memo } from "react"
import { useSpring, animated } from 'react-spring'
import { css } from '@emotion/css'

import { mq } from '../../css/HelloWorld/tokens/helper'
import useWindowScroll from "@react-hook/window-scroll"

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans0 = (x, y) => `translate3d(${x / 40}px,${y / 37}px,0)`

const Intro = memo((props) => {
  const baseDelay = props.appearBaseDelay
  const elementsDelay = props.appearElementsDelay
  const [parallaxProps, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 5, tension: 350, friction: 140 } }))
  const scrollY = useWindowScroll(60 /*fps*/)

  return (
    <div
      className={css({
        transform: "scale(0.35)",
        "@media (min-width: 450px)": {
          transform: "scale(0.5)",
        },
        [mq.sm]: {
          transform: "scale(0.75)",
        },
        [mq.md]: {
          transform: "scale(1)",
        },
      })}
    >
      <animated.div
        style={{
          opacity: 1 - scrollY / 200,
          transform: `translateY(-${(scrollY / 150) * 10}%)`,
        }}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        
      </animated.div>
    </div>
  )
})

export default Intro