import React from 'react'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <p className="component2-text">
        <span>
          Adrianna
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>Koszowska-Kowalska</span>
      </p>
    </div>
  )
}

export default Component2
