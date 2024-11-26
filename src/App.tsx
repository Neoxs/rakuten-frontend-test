import { ProductCard } from './components/ProductCard'
import { ProductData } from './types/product'

function App() {
  const sampleData: ProductData = {
    brand: 'Apple',
    href: '/mfp/9623007/apple-iphone-15?pid=11517874360',
    title: 'Apple iPhone 11 128 Go Double SIM Noir Sidéral',
    newPrice: '754 €',
    usedPrice: '720,99 €',
    image: 'https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg',
  }

  return (
    <div className="container">
      <ProductCard data={sampleData} />
    </div>
  )
}

export default App
