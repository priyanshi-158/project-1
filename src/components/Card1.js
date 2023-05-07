import React from 'react'
import { useStyletron } from 'baseui';
const Card1 = () => {
    const [css] = useStyletron();
    const epochTime = 1501620403200; 
const dateObject = new Date(epochTime);
const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
const formattedDate = `${dateObject.getDate()} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`

console.log(formattedDate);
    return (
        <div className={css({
            display: 'flex',
            justifyContent: 'space-between',
            background: '#FFFFFF',
            boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
            borderRadius: '12px',
            margin: '10px',
            padding: '24px',
            width: '100%'
        })}>
            <div className={
                css({
                    marginRight: '125px'
                })
            }>
                <p className={css({
                    '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                    fontSize: '12px',
                    fontWeight: '400',
                    paddingBottom: '6px',
                    marginBottom: '0px'
                })}>Project start date</p>
                <p className={css({
                    '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                    fontSize: '16px',
                    fontWeight: '400',
                    marginTop: '0px'
                })}>{formattedDate}</p>
            </div>
            <div className={
                css({
                    marginRight: '125px'
                })}>
                <p className={css({
                    '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                    fontSize: '12px',
                    fontWeight: '400',
                    paddingBottom: '6px',
                    marginBottom: '0px'
                })}>Planned Duration</p>
                <p className={css({
                    '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                    fontSize: '16px',
                    fontWeight: '400',
                    marginTop: '0px'
                })}>35 days</p>
            </div>
        </div>
    )
}

export default Card1