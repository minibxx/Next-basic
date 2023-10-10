import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Upload from './component/Upload'

export default function Home() {
  return (
    <>
    <h1>MariaDB CRUD</h1>
    <Link href="/pages/insert">INSERT</Link>
    <Link href="/pages/list">LIST</Link>
    <Upload/>
    </>
  )
}
