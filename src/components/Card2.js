import React from 'react'
import { useStyletron} from 'baseui';
const Card2 = () => {
    const [css] = useStyletron();
  return (
    <div className={css({
        display:'flex',
        justifyContent:'space-between',
        background: '#FFFFFF',
boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
borderRadius: '12px',
margin:'10px',
padding:'24px',
width:'100%'
    })}>
        <div className={
            css({
               
                marginRight:'125px'
            })
        }>
        <p className={css({
                fontFamily:'manrope',
                fontSize:'12px',
                fontWeight:'400',
                paddingBottom:'6px',
                marginBottom:'0px'
            })}>Elapsed Time</p>
        <p className={css({

                fontFamily:'open-sans',
                fontSize:'16px',
                fontWeight:'400',
                marginTop:'0px'
            })}>0 days</p>
        </div>
        <div  className={
            css({
                marginRight:'125px'
            })}>
        <p className={css({
                fontFamily:'manrope',
                fontSize:'12px',
                fontWeight:'400',
                paddingBottom:'6px',
                marginBottom:'0px'
            })}>Timeline</p>
        <a href='#' className={css({
                fontFamily:'open-sans',
                fontSize:'16px',
                fontWeight:'400',
                marginTop:'0px'
            })}>Click to see</a>
        </div>
    </div>
  )
}

export default Card2