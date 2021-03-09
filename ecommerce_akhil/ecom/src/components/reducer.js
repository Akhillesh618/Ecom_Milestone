export const initalState = {
    cart: [],
    user:null
};


//selector for total cart amount 
export const getCarttotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {

    // console.log(action);

    switch (action.type) {

        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(

                (cartItem) => cartItem.id === action.id
            );

            let newcart = [...state.cart];

            if(index >= 0){
                newcart.splice(index,1);
            }
            else {
                console.warn(`Cant remove product (id:${action.id}) as it in not in cart!`)
            }

            return {
                ...state,
                cart:newcart
            }

        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }    



        default:
            return state;
    }
}
export default reducer;