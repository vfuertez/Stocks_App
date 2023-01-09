import React from 'react'

export default function Alphabet() {
  const data = {
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    lastPrice: 835.14,
    change: -4.50999999999999,
    high: 844,
    low: 829.1,
    open: 842,
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
