type headerProp = {
  pageName: string
}

export default function PageHeader({ pageName }: headerProp) {
  return <header className="pt-6 text-2xl font-bold">{pageName}</header>
}
