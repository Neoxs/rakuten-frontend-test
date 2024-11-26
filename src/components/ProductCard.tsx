import { ProductData } from '../types/product'
import { Price } from './Price'

interface ProductCardProps {
  data: ProductData
}

export const ProductCard = ({ data }: ProductCardProps) => {
  if (!data) return null

  const handleClick = () => {
    window.open(`https://fr.shopping.rakuten.com${data.href}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="product-card" onClick={handleClick}>
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

        <Price label="Neuf" amount={data.newPrice} isNew />
        <Price label="Occasion dès" amount={data.usedPrice} />
      </div>
    </div>
  )
}
