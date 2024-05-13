import {createContext, useState} from 'react'

const mockData = [
    {
      title: 'product1',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      mesureType: 'kg',
      id:'1'
    },
    {
      title: 'product2',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      mesureType: 'pice',
      id:'2'
    },
    {
      title: 'product3',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      mesureType: 'kg',
      id:'3'
    },
    {
      title: 'product4',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      mesureType: 'kg',
      id:'4'
    },
    {
      title: 'product5',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      mesureType: 'pice',
      id:'5'
    },
    {
      title: 'product6',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhoHDIbSi0WJkzGYr6wemnCS2OzSRkhokmA&s',
      price:'10.00',
      mesureType: 'pice',
      id:'6'
    }
  ]

  const fetchData = () => {
    return new Promise((res)=> res(mockData))
  }
  export const ProductsContext = createContext([])

  export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const getProducts = () => {
        fetchData().then(data => setProducts([...data]))
    }

    const getProduct = (id) => {
        return {product: mockData.find(item=> item.id === id)}
    }

    const handleAddToCart = (product) => {
      const alreadyAdded = cart.some(item => item.id === product.id);

      if(alreadyAdded) {
        setCart(prev => prev.map(item => item.id === product.id ? { ...item, amount:item.amount++} : item))
        return;
      }
      setCart(prev => [...prev, {...product, amount:1}])
    }

    return (
        <ProductsContext.Provider value={{products, getProducts, getProduct, handleAddToCart, cart}}>
            {children}
        </ProductsContext.Provider>
    )
  }



