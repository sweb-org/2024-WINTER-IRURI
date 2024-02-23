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

    if (addDetail.trim() === '') {
      console.error('입력값이 없습니다. 입력해주세요.')
      return
    }

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
        required
      />
      <Button type="submit">추가</Button>
    </form>
  )
}

export default AddForm
