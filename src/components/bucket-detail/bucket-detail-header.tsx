import React from 'react'

import ProgressBar from '../progress/progress-bar'

interface BucketDetailHeaderProps {
  slug: string
  progress: number
}

function BucketDetailHeader({ slug, progress }: BucketDetailHeaderProps) {
  return (
    <>
      <div className="flex justify-center p-10 text-3xl font-extrabold">
        {slug}
      </div>
      <ProgressBar percentage={progress || 0} />
    </>
  )
}

export default BucketDetailHeader
