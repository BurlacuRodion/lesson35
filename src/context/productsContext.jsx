import {createContext, useState} from 'react'

const mockData = [
    {
      title: 'The Path to Personal Power',
      img:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1478702971i/32814321.jpg',
      price:'10.00',
      mesureType: 'kg',
      id:'1'
    },
    {
      title: 'The Law of Success',
      img:'https://images.penguinrandomhouse.com/cover/9781585426898',
      price:'10.00',
      mesureType: 'pice',
      id:'2'
    },
    {
      title: 'Think and Grow Rich',
      img:'https://i5.walmartimages.com/seo/Official-Publication-of-the-Napoleon-Hill-Foundation-Think-and-Grow-Rich-For-the-Modern-Reader-Paperback-9781640952492_84e17435-1e6e-4a5a-afa6-bcb480861e0d.c92a3cc510a84262e6de98f7fa61eedc.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      price:'10.00',
      mesureType: 'kg',
      id:'3'
    },
    {
      title: 'Soul',
      img:'https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg',
      price:'10.00',
      mesureType: 'kg',
      id:'4'
    },
    {
      title: 'The Secret',
      img:'https://marketplace.canva.com/EAFe-O3JiGs/1/0/1003w/canva-blue-watercolor-secret-ocean-stories-book-cover-iSXTzTVAq0Y.jpg',
      price:'10.00',
      mesureType: 'pice',
      id:'5'
    },
    {
      title: 'The Lost Child',
      img:'https://i.pinimg.com/736x/e6/86/c9/e686c9bdf8b0ee5b05721c8b07f2d267.jpg',
      price:'10.00',
      mesureType: 'pice',
      id:'6'
    },
    {
      title: 'Atomic Habits',
      img:'https://assets2.cbsnewsstatic.com/hub/i/2021/10/21/6ab6b381-fb6d-480d-a5a7-1e1af08b9077/atomic-habits.jpg?v=3a71db5e6dd1c027f95668a1c7b6fcaf',
      price:'10.00',
      mesureType: 'pice',
      id:'25'
    },
    {
      title: 'War and Gold',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnlZM2KC4_Sn1BhiZV6MHitxOzP175u36SupdECHikg&s',
      price:'10.00',
      mesureType: 'pice',
      id:'26'
    },
    {
      title: 'How The Minds Works',
      img:'https://stevenpinker.com/files/styles/original/public/pinker/files/book_6.jpg?itok=URxwgScs',
      price:'10.00',
      mesureType: 'pice',
      id:'26'
    },
    {
      title: 'Ancient World',
      img:'https://m.media-amazon.com/images/I/71OXQZezcnL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      price:'10.00',
      mesureType: 'pice',
      id:'26'
    },
    {
      title: 'CHAOS',
      img:'https://m.media-amazon.com/images/I/91N3RcpdOGL._AC_UF350,350_QL50_.jpg',
      price:'10.00',
      mesureType: 'pice',
      id:'26'
    },
    {
      title: 'Infinite Powers',
      img:'https://media.wired.com/photos/5dfc0b15a03b9b0008afa1a0/master/w_1600%2Cc_limit/Science_books_9781328879981_hres.jpg',
      price:'10.00',
      mesureType: 'pice',
      id:'26'
    },
    {
      title: 'Harry Potter',
      img:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3._UX187_.jpg',
      price:'10.00',
      mesureType: 'pice',
      id:'26'
    },
    {
      title: 'Global History',
      img:'https://m.media-amazon.com/images/I/719f1DyvWlL._AC_UF1000,1000_QL80_.jpg',
      price:'10.00',
      mesureType: 'pice',
      id:'26'
    }
    
  ]

  const fetchData = () => {
    return new Promise((res)=> res(mockData))
  }
  export const ProductsContext = createContext([])

  export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    // const [selectedProduct, setSelectedProduct] = useState(null)

    // const handleChangeSelectedProduct = (value) => {
    //   setSelectedProduct({...selectedProduct, amount:value})
    // }


    const getProducts = () => {
        fetchData().then(data => {
          const newData = data.map(item=>{
            const addedCard = cart.find(product => product.title === item.title)
            return addedCard ? addedCard : {...item, amount: 0};
          })
          setProducts(newData)
        })
    }

    const getProduct = (id) => {
        return {product: mockData.find(item=> item.id === id)}
    }

    const handleAddToCart = (product) => {
      const alreadyAdded = cart.some(item => item.id === product.id);

      if(alreadyAdded) {
        setCart(prev => prev.map(item => item.id === product.id ? {...item, amount: item.amount + product.amount} : item))
        setProducts(products.map(item => item.id === product.id ? {...item, amount: item.amount + product.amount} : item))

        return;
      };
      setCart(prev => [...prev, product])
      
      setProducts(products.map(item => item.id === product.id ? {...item, amount: item.amount + product.amount} : item))
    }

    return (
        <ProductsContext.Provider value={{
          products, 
          getProducts, 
          getProduct, 
          handleAddToCart, 
          cart, 
          // handleChangeSelectedProduct,
          // selectedProduct
           }}>
            {children}
        </ProductsContext.Provider>
    )
  }



