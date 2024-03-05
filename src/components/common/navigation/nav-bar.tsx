import Link from 'next/link'
import SheetDemo from '@/components/common/navigation/sheet-demo'

export default function NavigationBar() {
  return (
    <nav className="left-0 right-0 top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between px-0 py-2">
        <div className="flex items-center">
          <Link href="/" className="mr-40 text-2xl font-bold">
            IRURI
          </Link>
        </div>

        <div className="flex items-center">
          <SheetDemo />
        </div>
      </div>
    </nav>
  )
}
