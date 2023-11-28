import { CartContext } from '@/contexts/CartProvider'
import { useContext } from 'react'

export function useCart() {
  const context = useContext(CartContext)
  return context
}
