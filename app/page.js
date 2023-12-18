import Image from 'next/image'
import styles from './page.module.css'
import { Button, Container } from 'react-bootstrap'
import Link from 'next/link'
import LoremIpsum, { loremIpsum } from 'react-lorem-ipsum'
import SlideShow from './components/home/SlideShow'
import TypeOfProduct from './components/home/TypeOfProduct'

export default function Home() {
  return (
    <div className='mb-5'>
      <SlideShow />
      <TypeOfProduct />    
    </div>
  )
}
