import React from 'react'
import { useStyletron } from 'baseui';
const Card2 = () => {
    const [css] = useStyletron();
    return (
        <div className={css({
            background: '#FFFFFF',
            boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
            borderRadius: '12px',
            margin: '10px',
            padding: '24px',
            width: '100%'
        })}>
         <div className={css({
                display: 'flex',
                justifyContent: 'space-between'
            })}>
                <p className={css({
                    '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                    fontSize: '12px',
                    fontWeight: '400',
                    width: '100%'
                })}>Elapsed Time</p>
                <p className={css({
                    '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                    fontSize: '12px',
                    fontWeight: '400',
                    width: '100%'
                })}>Timeline</p>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            })}>
                <p className={css({
                    '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>0 days</p>
                <a href='#' className={css({
                    '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>Click to see</a>
            </div>
        </div>
    )
}

export default Card2