import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Upload from './component/Upload'

export default function Home() {
  const testEnv = process.env.NEXT_PUBLIC_USER
  console.log(testEnv)
  return (
    <>
    {testEnv}
    <h1>MariaDB CRUD</h1>
    <Link href="/pages/insert">INSERT</Link>
    <Link href="/pages/list">LIST</Link>
    <Upload/>
    </>
  )
}
