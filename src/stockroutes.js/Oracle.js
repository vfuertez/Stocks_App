import React from 'react'

export default function Oracle() {
  const data = {
    name: 'Oracle Corporation',
    symbol: 'ORCL',
    lastPrice: 44.65,
    change: -0.300000000000004,
    high: 45.09,
    low: 44.575,
    open: 44.91,
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
