import React from 'react'

export default function Facebook() {
  const data = {
    name: 'Facebook, Inc.',
    symbol: 'FB',
    lastPrice: 140.34,
    change: 0.810000000000002,
    high: 141.0244,
    low: 139.76,
    open: 140.08,
  }
  const style = { color: 'green' }

  return (
    <div>
      <div>
        <h1>
          {data.name}({data.symbol})
        </h1>
      </div>
      <div>
        <h3 style={style}>Last Price:</h3>
        <span>{data.lastPrice}</span>
      </div>
      <div>
        <h3 style={style}>Change:</h3>
        <span>{data.change}</span>
      </div>
      <div>
        <h3 style={style}>High:</h3>
        <span>{data.high}</span>
      </div>
      <div>
        <h3 style={style}>Low:</h3>
        <span>{data.low}</span>
      </div>
      <div>
        <h3 style={style}>Open:</h3>
        <span>{data.open}</span>
      </div>
    </div>
  )
}
