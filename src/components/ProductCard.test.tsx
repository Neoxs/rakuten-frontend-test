import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  const mockData = {
    brand: 'Apple',
    href: '/test-product',
    title: 'iPhone Test',
    newPrice: '754 €',
    usedPrice: '720,99 €',
    image: 'test-image.jpg',
  }

  it('renders correctly', () => {
    render(<ProductCard data={mockData} />)
    expect(screen.getByText(mockData.brand)).toBeInTheDocument()
  })
})
