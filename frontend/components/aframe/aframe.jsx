import React from 'react'
require('aframe')


const AFrame = () => {

  return (
    <a-scene>
      <a-box color="red"
        position="0 2 -10" rotation="0 45 45" scale="2 2 2">
        <a-animation attribute="position" to="0 3 -20" direction="alternate" dur="2000"
          repeat="indefinite"></a-animation>

        <a-animation attribute="rotation" to="0 0 0" direction="alternate" dur="2000"
          repeat="indefinite"></a-animation>

        <a-sphere color="green" position="1 0 3"></a-sphere>
      </a-box>

      <a-text value="soop" color="white"
        position="0 8 -10" scale="5 5 5">
        <a-animation attribute="position" to="0 6 -10" direction="alternate" dur="1000"
          repeat="indefinite"></a-animation>
      </a-text>

      <a-sky color="lightblue"></a-sky>

      <a-light type="ambient" color="#445451"></a-light>
      <a-light type="point" intensity="2" position="2 4 4"></a-light>

    </a-scene>
  )
}

export default AFrame
