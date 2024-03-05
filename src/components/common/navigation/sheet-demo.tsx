import React from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { RxHamburgerMenu } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi2'
import { FaListCheck } from 'react-icons/fa6'

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <RxHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-6">
          <SheetTitle>Username</SheetTitle>
          <SheetDescription>당신의 모든 것을 이루리</SheetDescription>
        </SheetHeader>
        <div className="flex w-full flex-col items-center gap-3">
          <div className="w-full border-t border-gray-300"></div>
          <Link
            href="/"
            className="flex w-full items-center justify-center py-4 transition duration-200 ease-in-out hover:bg-gray-200"
          >
            <HiHome className="mr-2 text-xl" />
            <span className="font-extrabold">메인 페이지</span>
          </Link>
          <div className="w-full border-t border-gray-300"></div>
          <Link
            href="/bucket"
            className="flex w-full items-center justify-center py-4 transition duration-200 ease-in-out hover:bg-gray-200"
          >
            <FaListCheck className="mr-2 text-xl" />
            <span className="font-extrabold">버킷 리스트</span>
          </Link>
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <SheetFooter className="absolute bottom-0 left-0 right-0 p-4">
          <SheetClose asChild>
            <Button type="submit">Logout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
