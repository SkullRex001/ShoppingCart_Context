import './Css/productWrapper.css'

const CartItemWrapper = ({image , title , price}) => {
    
  return (
    <div className='Product'>
        <img src={image} alt="productImage" className='prodIMG' />
        <p>{title}</p>
        <p>${price}</p>
    </div>
  )
}

export default CartItemWrapper