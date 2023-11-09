import React from 'react'

import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <p className="component4-text">
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

export default Component4
