import React from 'react'

interface ProgressBarProps {
  percentage: number
}

function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="relative mx-6">
      <div className="absolute bottom-5 left-0 w-full px-3 text-right text-lg">
        {`${percentage}%`}
      </div>
      <div className="relative h-4 w-full overflow-hidden rounded-lg bg-gray-200">
        <div
          className="absolute left-0 top-0 h-full bg-red-500"
          style={{
            width: `${percentage}%`,
            transition: 'width 0.5s ease-in-out',
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
