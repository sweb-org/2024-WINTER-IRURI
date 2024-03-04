'use client'
import { ReactNode, useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import mockData from './mock-data'
import PageHeader from '@/components/common/page-header'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

interface goal {
  id: number
  name: string
  complete: boolean
}

interface Bucket {
  id: number
  goalName: string
  complete: boolean
  goals: goal[]
}

export default function Page() {
  const [goals, setGoals] = useState<Bucket[]>([])

  const showList = (mockData: Bucket[]): ReactNode => {
    return (
      <Accordion type="single" collapsible className="w-full">
        {mockData.map((item) => (
          <AccordionItem value={`item-${item.id}`} key={item.id}>
            <AccordionTrigger>{item.goalName}</AccordionTrigger>
            <AccordionContent>
              <ul className="grid gap-1">
                {item.goals.map((goal) => (
                  <li key={goal.id} className="flex items-center gap-2">
                    <Checkbox checked={goal.complete} />
                    {goal.name}
                  </li>
                ))}
                <Button variant="destructive" className="mt-1 w-full">
                  삭제하기
                </Button>
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }

  return (
    <div className="container select-none">
      <PageHeader pageName="내 버킷리스트" />

      <Tabs defaultValue="all" className="mt-6 w-full">
        <TabsList className="h-10 w-full">
          <TabsTrigger value="all" className="h-full w-1/3">
            전체
          </TabsTrigger>
          <TabsTrigger value="uncomplete" className="h-full w-1/3">
            미달성
          </TabsTrigger>
          <TabsTrigger value="complete" className="h-full w-1/3">
            달성
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">{showList(mockData)}</TabsContent>
        <TabsContent value="uncomplete">
          {showList(mockData.filter((value) => !value.complete))}
        </TabsContent>
        <TabsContent value="complete">
          {showList(mockData.filter((value) => value.complete))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
