import React from 'react'
import img from '../images/img1.png'
import { useStyletron } from 'baseui'

const ItemCard1 = () => {
    const [css] = useStyletron()
    return (
        <div className={css({
            background: '#FFFFFF',
            boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
            borderRadius: '12px',
            margin: '24px',
            padding: '24px',
            width: '50%'
        })}>
            <h6 className={css({
                '@font-face': {
                    fontFamily: "manrope",
                    src: 'url("/static/Manrope-Regular.ttf")'
                },
                fontSize: '18px',
                fontWeight: '600',
                paddingBottom: '12px',
                margin: '0px'
            })}>Completed Items</h6>
            <p className={css({
                fontFamily: 'open-sans',
                fontSize: '16px',
                fontWeight: '400',
                paddingBottom: '12px',
                margin: '0px'
            })}>Items submitted and are approved will appear here</p>
            <img src={img} alt="" />
        </div>
    )
}

export default ItemCard1