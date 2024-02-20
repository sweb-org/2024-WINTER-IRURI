'use client'

import React, { useEffect, useState } from 'react'

import ProgressBar from '@/components/progress/progress-bar'
import { fetchDummyData } from '@/apis/api'
import { Button } from '@/components/ui/button'
import LoadingSpinner from '@/components/loading/loading'
import AddForm from '@/components/form/add-form'

interface Props {
  params: {
    slug: string
  }
}

function BucketDetailPage({ params }: Props) {
  const slug = decodeURIComponent(params.slug)
  const [checkedItems, setCheckedItems] = useState(new Set<number>())
  const [dummyData, setDummyData] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDummyData()
        setDummyData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index)
    } else {
      newCheckedItems.add(index)
    }
    setCheckedItems(newCheckedItems)
  }

  const totalItems = dummyData.length
  const selectedItems = checkedItems.size
  const progress = Math.round((selectedItems / totalItems) * 100)

  const handleAddGoal = (goal: string) => {
    setDummyData([...dummyData, goal])
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex justify-center p-10 text-3xl font-extrabold">
        {slug}
      </div>
      <ProgressBar percentage={progress || 0} />
      <div className="mx-10 my-4 text-2xl font-bold">세부 목표</div>
      <hr className="mx-10" />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="mx-12 overflow-y-auto scrollbar-hide">
          <div className="mx-5">
            {dummyData.map((data, index) => (
              <div key={index} className="m-5">
                <div className="space-x-6">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    checked={checkedItems.has(index)}
                    onChange={() => handleCheckboxChange(index)}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor={`checkbox-${index}`}
                    className={
                      checkedItems.has(index)
                        ? 'text-xl line-through'
                        : 'text-xl'
                    }
                  >
                    {data}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mx-5 mb-4 flex flex-col gap-3">
        <AddForm onSubmit={handleAddGoal} placeholder="세부 목표 추가" />
        <Button className="h-12 text-xl">달성 완료</Button>
      </div>
    </div>
  )
}

export default BucketDetailPage
