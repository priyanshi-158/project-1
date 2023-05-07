import { useStyletron } from 'baseui'
import React from 'react'

const Paycard = () => {
    const [css]=useStyletron();
  return (
    <div className={css({
        background: '#FFFFFF',
        boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
        borderRadius: '12px',
        padding: '24px',
        width:'100%'
    })}>
     <div className={css({
                display:'flex',
                justifyContent:'space-between',
                paddingBottom:'12px',
                margin:'0'
            })}>
                <p className={css({
                        '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                        fontSize: '12px',
                        fontWeight: '400',
                        width:'100%',
                        color:'#333333'
                    })}>Payment Date</p>
                    <p className={css({
                       '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                        fontSize: '12px',
                        fontWeight: '400',
                        width:'100%',
                        color:'#333333'
                    })}>Amount</p>
                <p className={css({
                        '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                        fontSize: '12px',
                        fontWeight: '400',
                        width:'100%',
                        color:'#333333'
                    })}>Items</p>
                <p  className={css({
                        '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                        fontSize: '12px',
                        fontWeight: '400',
                        width:'100%',
                        color:'#333333'
                    })}>Disbursement report (click to see)</p>
            </div>
            <div className={css({
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            })}>
                <p className={css({
                        '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>27 Mar 2023</p>
                <p className={css({
                        '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>INR 12,345</p>
                <p  className={css({
                        '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>Moodboard design, month 1 retainer costs</p>
                    <a href="#" className={css({
                        '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>
                    MFDN-12345678
                    </a>
            </div>
    </div>
  )
}

export default Paycard