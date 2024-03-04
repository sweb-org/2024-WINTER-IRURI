'use client'

import React, { useEffect, useState } from 'react'

import LoadingSpinnerButton from '@/components/loading/loading-spinner-button'
import BucketDetailHeader from '@/components/bucket-detail/bucket-detail-header'
import BucketDetailList from '@/components/bucket-detail/bucket-detail-list'
import AddForm from '@/components/form/add-form'
import { fetchDummyData } from '@/apis/api'

interface Props {
  params: {
    slug: string
  }
}

function BucketDetailPage({ params }: Props) {
  const slug = decodeURIComponent(params.slug)
  const [dummyData, setDummyData] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [checkedItems, setCheckedItems] = useState<Set<number>>(
    new Set<number>(),
  )

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDummyData()
        setDummyData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const selectedItems = checkedItems.size
  const calculatedProgress = Math.round(
    (selectedItems / dummyData.length) * 100,
  )

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = new Set(checkedItems)
    if (newCheckedItems.has(index)) {
      newCheckedItems.delete(index)
    } else {
      newCheckedItems.add(index)
    }
    setCheckedItems(newCheckedItems)
  }

  const handleAddGoal = (goal: string) => {
    setDummyData([...dummyData, goal])
  }

  return (
    <main className="flex flex-col">
      <BucketDetailHeader slug={slug} progress={calculatedProgress} />
      {isLoading ? (
        <LoadingSpinnerButton />
      ) : (
        <BucketDetailList
          slug={slug}
          dummyData={dummyData}
          checkedItems={checkedItems}
          handleCheckboxChange={handleCheckboxChange}
        />
      )}
      <footer className="mx-10 mb-5">
        <AddForm onSubmit={handleAddGoal} placeholder="세부 목표 추가" />
      </footer>
    </main>
  )
}

export default BucketDetailPage
