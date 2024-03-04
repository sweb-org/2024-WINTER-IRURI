import Link from 'next/link'

import { cn } from '@/lib/utils'
import { SignupForm } from '@/components/signup/signup-form'
import { buttonVariants } from '@/components/ui/button'

export default function SignUp() {
  return (
    <main className="container">
      <SignupForm />
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'w-full',
        )}
      >
        로그인
      </Link>
    </main>
  )
}
