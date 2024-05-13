import {createContext, useState} from 'react'

const mockData = [
    {
      title: 'product1',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      id:'1'
    },
    {
      title: 'product2',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      id:'2'
    },
    {
      title: 'product3',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      id:'3'
    },
    {
      title: 'product4',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      id:'4'
    },
    {
      title: 'product5',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      id:'5'
    }
  ]

  const fetchData = () => {
    return new Promise((res)=> res(mockData))
  }
  export const ProductsContext = createContext([])

  export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        fetchData().then(data => setProducts([...data]))
    }

    const getProduct = (id) => {
        return {product: mockData.find(item=> item.id === id)}

    }

    return (
        <ProductsContext.Provider value={{products, getProducts, getProduct}}>
            {children}
        </ProductsContext.Provider>
    )
  }



