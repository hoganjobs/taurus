import * as Product from '@/service/product'
import promise from './errorHandler'

export const getProduct = () => promise(Product.getProduct())
