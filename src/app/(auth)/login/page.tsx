import { LoginForm } from '@/components/login/login-form'
import { Button } from '@/components/ui/button'

export default function Login() {
  return (
    <main className="container">
      <LoginForm />
      <Button variant="ghost" size="lg" className="w-full">
        회원가입
      </Button>
    </main>
  )
}
