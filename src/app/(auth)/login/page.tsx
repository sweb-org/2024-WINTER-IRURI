import Link from 'next/link'

import { cn } from '@/lib/utils'
import { LoginForm } from '@/components/login/login-form'
import { buttonVariants } from '@/components/ui/button'

export default function Login() {
  return (
    <main className="container">
      <LoginForm />
      <Link
        href="/signup"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'w-full',
        )}
      >
        회원가입
      </Link>
    </main>
  )
}
