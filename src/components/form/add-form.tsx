'use client'

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
      <Input
        type="text"
        value={addDetail}
        onChange={(e) => setAddDetail(e.target.value)}
        placeholder={placeholder}
      />
      <Button type="submit">추가</Button>
    </form>
  )
}

export default AddForm
