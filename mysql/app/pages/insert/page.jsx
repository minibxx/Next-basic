import Insert from '@/app/component/Insert'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
      <h2>Insert</h2>
      <Insert/>
      <Link href="/">HOME</Link>
      <Link href="./list">LIST</Link>

    </>
  )
}

export default page