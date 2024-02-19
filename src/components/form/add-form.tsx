'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

interface Props {
  onSubmit: (goal: string) => void
  placeholder: string
}

function AddForm({ onSubmit, placeholder }: Props) {
  const [addDetail, setAddDetail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(addDetail)
    setAddDetail('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <input
        type="text"
        value={addDetail}
        onChange={(e) => setAddDetail(e.target.value)}
        placeholder={placeholder}
        className="flex-grow rounded-lg border border-gray-400 p-2"
      />
      <Button type="submit" className="h-12 bg-blue-900 text-xl">
        추가
      </Button>
    </form>
  )
}

export default AddForm
