import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog List',
  description: 'Blog List',
}

export default function ViewDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     {children}
    </>
  )
}
