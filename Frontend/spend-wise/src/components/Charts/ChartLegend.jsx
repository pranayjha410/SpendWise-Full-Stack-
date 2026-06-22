import React from 'react'

const ChartLegend = ({data}) => {
  return (
   <div className="flex justify-center gap-6 mt-2">
      {data.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-gray-600">{entry.name}</span>
        </div>
      ))}
    </div>
  )
}

export default ChartLegend
