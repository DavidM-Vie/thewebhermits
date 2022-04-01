import React from 'react';
import ReactDOM from 'react-dom';
import { useTransition, animated } from 'react-spring'

const SlideBox = ({show, toggleSlideBox, children}) => {
  
  const transitions = useTransition(show, {
    from: {transform: 'translateX(-100%)'},
    enter: {transform: 'translateX(-10%)'},
    leave: {transform: 'translateX(-100%)'},
    config: { mass: 2, tension: 230, friction: 30 }
  })

  const RenderSlideBox = () => {
    return transitions(
        (styles, item) => item && <animated.div  style={styles} className="slide-box">
        {children}
      </animated.div>
    )
  }

  return ReactDOM.createPortal(<RenderSlideBox />, document.querySelector('body'))
}

export default SlideBox
