import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../customButton/customButton.component'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'


const CollectionItem = ({  item }) => {
    const dispatch = useDispatch()
    const {  name, price, imageUrl } = item
    return (
        <div className='collection-item'>
            <div className="flower">
             <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={()=>dispatch(addItem(item))}>ADD TO CART</CustomButton>
            {/* <CustomButton inverted onClick={()=>addItem(item)}>ADD TO CART</CustomButton> */}
        </div>
    )
}

export default CollectionItem

// const mapDispatchToProps = dispatch => ({
//     addItem: item=>dispatch(addItem(item))
// })

// export default connect(
//     null, 
//     mapDispatchToProps)(CollectionItem)




