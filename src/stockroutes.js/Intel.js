import React from 'react'

export default function Intel() {
  const data = {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    lastPrice: 140.64,
    change: -0.280000000000001,
    high: 141.74,
    low: 140.35,
    open: 141.5,
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
