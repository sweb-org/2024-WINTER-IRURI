import React from 'react'

import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

interface BucketDetailListProps {
  dummyData: string[]
  checkedItems: Set<number>
  handleCheckboxChange: (index: number) => void
}

function BucketDetailList({
  dummyData,
  checkedItems,
  handleCheckboxChange,
}: BucketDetailListProps) {
  return (
    <div className="mx-12 overflow-y-auto">
      <div className="mx-5">
        {dummyData.map((data, index) => (
          <div key={index} className="m-5">
            <div className="space-x-6">
              <Checkbox
                id={`checkbox-${index}`}
                checked={checkedItems.has(index)}
                onCheckedChange={() => handleCheckboxChange(index)}
              />
              <Label
                htmlFor={`checkbox-${index}`}
                className={
                  checkedItems.has(index) ? 'text-xl line-through' : 'text-xl'
                }
              >
                {data}
              </Label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BucketDetailList
