import React from 'react'
import { Progress } from '@/components/ui/progress'

interface ProgressBarProps {
  percentage: number
}

function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="relative mx-6">
      <div className="absolute bottom-5 left-0 w-full px-3 text-right text-lg">
        {`${percentage}%`}
      </div>
      <Progress value={percentage} className={`h-4 w-${percentage}%`} />
    </div>
  )
}

export default ProgressBar
