import React from 'react'

import { Button } from '@/components/ui/button'
import AddForm from '@/components/form/add-form'

interface BucketDetailBottomProps {
  handleAddGoal: (goal: string) => void
}

function BucketDetailBottom({ handleAddGoal }: BucketDetailBottomProps) {
  return (
    <div className="mx-5 mb-4 flex flex-col gap-3">
      <AddForm onSubmit={handleAddGoal} placeholder="세부 목표 추가" />
      <Button>달성 완료</Button>
    </div>
  )
}

export default BucketDetailBottom
