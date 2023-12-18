import Image from 'next/image'
import styles from './page.module.css'
import { Button, Container } from 'react-bootstrap'
import Link from 'next/link'
import LoremIpsum, { loremIpsum } from 'react-lorem-ipsum'

export default function Home() {
  return (
    <div className="bg-dark text-light p-5">
      <div className="container bg-dark py-5">
        <h1 className="display-4">Welcome to My Shop</h1>
        <hr />
          <p>
            <LoremIpsum p={1} avgSentencesPerParagraph={4} />
          </p>
          <Link href="/product" className="btn btn-primary">Lihat Produk Unggulan</Link>
      </div>
    </div>
  )
}
