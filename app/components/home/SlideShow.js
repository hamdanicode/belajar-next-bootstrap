import Link from "next/link";
import LoremIpsum from "react-lorem-ipsum";

export default function SlideShow(){
   return(<div className="bg-primary text-light p-5">
      <div className="container py-5">
        <h1 className="display-4">Welcome to My Shop</h1>
        <hr />
          
          <LoremIpsum p={1} avgSentencesPerParagraph={4} />
          
          <Link href="/product" className="btn btn-success">Lihat Produk Unggulan</Link>
      </div>
    </div>
   )
}