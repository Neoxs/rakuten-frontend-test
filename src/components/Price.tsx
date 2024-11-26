interface PriceProps {
  label: string
  amount: string
  isNew?: boolean
}

export const Price = ({ label, amount, isNew = false }: PriceProps) => {
  return (
    <div
      className={`product-card__price-row ${
        isNew ? 'product-card__price-row--new' : ''
      }`}
    >
      <span className="product-card__price-label">{label}</span>
      <span
        className={`product-card__price-amount ${
          isNew
            ? 'product-card__price-amount--new'
            : 'product-card__price-amount--used'
        }`}
      >
        {amount}
      </span>
    </div>
  )
}
