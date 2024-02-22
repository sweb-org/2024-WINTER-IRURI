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
      <div className="mx-10 my-4 text-2xl font-bold">세부 목표</div>
      <hr className="mx-10" />
    </>
  )
}

export default BucketDetailHeader
