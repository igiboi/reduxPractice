import {uiActions} from './ui-slice';
import { cartActions } from './cart-slice';


export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://luigi-store-default-rtdb.firebaseio.com/cart.json'); 
            // GET request is the default method no need to add

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();

            return data; 
            
        };

        try {
           const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantiy: cartData.totalQuantiy,
            }));
        } catch (error) {
             dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Fetching cart data failed!',
                })
              );    
        }
    };
};




export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          'https://luigi-store-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
    };

  }


  export const removeData = async () => {
    return async (dispatch) => {
    dispatch(
        uiActions.showNotification({
          status: 'removed',
          title: 'Removed!',
          message: 'The item has been removed from the cart!',
        })
      );
    }
}