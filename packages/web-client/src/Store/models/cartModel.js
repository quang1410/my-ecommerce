const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const cartModel = {
    name:'cart',
    state:{
        cart : items
    },
    reducers:{
        addItem: (state, payload) => {
            const newItem = payload
            console.log(state.cart);
            const duplicate = state.cart.filter(e => e.slug === newItem.slug && e.color === newItem.color && e.size === newItem.size)
            if (duplicate.length > 0) {
                state.cart = state.cart.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
                return {
                  ...state,
                  cart: [
                    ...state.cart,
                    {
                      id: duplicate[0].id,
                      slug: newItem.slug,
                      image: newItem.image,
                      title: newItem.title,
                      color: newItem.color,
                      size: newItem.size,
                      price: newItem.price,
                      quantity: newItem.quantity + duplicate[0].quantity,
                    },
                  ],
                };
            } else {
                return {
                    cart : [...state.cart, {
                    ...payload,
                    id: state.cart.length > 0 ? state.cart[state.cart.length - 1].id + 1 : 1
                }]
            }}
        },
        updateItem: (state, payload) => {
            const newItem = payload
            const item = state.cart.filter(e => e.slug === newItem.slug && e.color === newItem.color && e.size === newItem.size)
            if (item.length > 0) {
                state.cart = state.cart.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
                return {
                        ...state,
                        cart: [...state.cart, {
                            id: item[0].id,
                            slug: newItem.slug,
                            image: newItem.image,
                            title: newItem.title,
                            color: newItem.color,
                            size: newItem.size,
                            price: newItem.price,
                            quantity: newItem.quantity
                        }]}
            }
        },
        removeItem: (state,payload) => {
            const item = payload
            state.cart = state.cart.filter(e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size)
            return {
                ...state,
                cart: state.cart,
            }
        },
    },
    selectors: (slice) => ({
        quantityOfCart(){
            return slice((state) => state.cart.reduce((number, item) => number + item.quantity,0))
        },
        setLocalStorage(){
            return slice((state) => {localStorage.setItem('cartItems', JSON.stringify(state.cart.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))})
        },
        total(){
            return slice((state) => state.cart.reduce((number, item) => number + item.quantity*item.price,0))
        }

    })
}

export default cartModel