import React from 'react'
import { useStyletron } from 'baseui'
const ItemCard2 = () => {
    const [css]=useStyletron()
  return (
    <div className={css({
        background: '#FFFFFF',
        boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
        borderRadius: '12px',
        margin: '24px',
        padding: '24px',
        width:'50%'
    })}>
     <h6 className={css({
               '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                fontSize:'18px',
                fontWeight:'600',
                paddingBottom:'12px',
                margin:'0px'
            })}>Upcoming Items</h6>
            <div className={css({
                display:'flex',
                justifyContent:'space-between'
            })}>
                <p className={css({
                       '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                        fontSize: '12px',
                        fontWeight: '400',
                        width:'100%'
                    })}>Milestone name</p>
                <p className={css({
                        '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                        fontSize: '12px',
                        fontWeight: '400',
                        width:'100%'
                    })}>Items</p>
                <p  className={css({
                        '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                        fontSize: '12px',
                        fontWeight: '400',
                        width:'100%'
                    })}>Planned start</p>
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
                    })}>Concept</p>
                <p className={css({
                        '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>Moodboard, Presentation design</p>
                <p  className={css({
                        '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>27 Mar 2023</p>
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
                    })}>Concept</p>
                <p className={css({
                        '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>Moodboard, Presentation design</p>
                <p  className={css({
                        '@font-face': {
                        fontFamily: "open-sans",
                        src: 'url("/static/OpenSans-Regular.ttf")'
                    },
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>27 Mar 2023</p>
            </div>
    </div>
  )
}

export default ItemCard2