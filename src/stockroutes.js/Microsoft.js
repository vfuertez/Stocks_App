import React from 'react'

export default function Microsoft() {
  const data = {
    name: 'Microsoft Corporation',
    symbol: 'MSFT',
    lastPrice: 64.98,
    change: 0.109999999999999,
    high: 65.45,
    low: 64.76,
    open: 65.12,
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
