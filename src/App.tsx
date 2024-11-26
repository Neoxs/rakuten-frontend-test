import { ProductData } from './types/product'

function App() {
  const data: ProductData = {
    brand: 'Apple',
    href: '/mfp/9623007/apple-iphone-15?pid=11517874360',
    title: 'Apple iPhone 11 128 Go Double SIM Noir Sidéral',
    newPrice: '754 €',
    usedPrice: '720,99 €',
    image: 'https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg',
  }

  return (
    <div className="container">
      <div className="product-card">
        <div className="product-card__image-container">
          <img
            src={data.image}
            alt={data.title}
            className="product-card__image"
          />
        </div>

        <div className="product-card__content">
          <div className="product-card__brand">{data.brand}</div>

          <div className="product-card__title">{data.title}</div>

          <div className="product-card__price-row product-card__price-row--new">
            <span className="product-card__price-label product-card__price-label--new">
              Neuf
            </span>
            <span className="product-card__price-amount product-card__price-amount--new">
              {data.newPrice}
            </span>
          </div>
          <div className="product-card__price-row">
            <span className="product-card__price-label">Occasion dès</span>
            <span className="product-card__price-amount product-card__price-amount--old">
              {data.usedPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
