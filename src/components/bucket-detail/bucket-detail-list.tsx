'use client'

import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from '@/components/ui/use-toast'

interface BucketDetailListProps {
  slug: string
  dummyData: string[]
  checkedItems: Set<number>
  handleCheckboxChange: (index: number) => void
}

const FormSchema = z.object({
  dummyData: z.array(z.string()).refine((value) => value.length > 0, {
    message: '체크가 되지 않았습니다. 체크 해주세요!',
  }),
})

export default function BucketDetailList({
  slug,
  dummyData,
  checkedItems,
  handleCheckboxChange,
}: BucketDetailListProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      dummyData: [],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: '당신이 제출한 데이터입니다.',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative mx-10 my-4 h-screen space-y-8"
      >
        <FormField
          control={form.control}
          name="dummyData"
          render={() => (
            <FormItem>
              <main className="my-2 flex flex-col space-y-4">
                <article className="w-full">
                  <FormLabel className="mx-2 text-2xl font-bold">
                    세부 목표
                  </FormLabel>
                  <hr className="mx-2 my-2" />
                  <FormDescription className="text-md mx-4">
                    {`${slug}에 대한 세부 목표입니다.`}
                  </FormDescription>
                </article>
                <figure className="max-h-96 w-full overflow-y-auto">
                  {dummyData.map((item, index) => (
                    <FormItem
                      key={index}
                      className="mx-6 my-3 items-start space-x-4 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          name={`dummyData.${index}`}
                          id={`dummyData.${index}`}
                          checked={
                            form.getValues('dummyData').includes(item) &&
                            checkedItems.has(index)
                          }
                          onCheckedChange={(checked) => {
                            handleCheckboxChange(index)
                            const currentItems = form.getValues('dummyData')
                            const updatedItems = checked
                              ? [...currentItems, item]
                              : currentItems.filter((value) => value !== item)
                            form.setValue('dummyData', updatedItems)
                          }}
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor={`dummyData.${index}`}
                        className={
                          checkedItems.has(index)
                            ? 'text-xl line-through'
                            : 'text-xl'
                        }
                      >
                        {item}
                      </FormLabel>
                    </FormItem>
                  ))}
                </figure>
              </main>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="absolute bottom-0 w-full">
          달성 완료
        </Button>
      </form>
    </Form>
  )
}
