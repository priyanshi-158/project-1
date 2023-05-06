import React from 'react'
import {Card, StyledBody, StyledThumbnail} from 'baseui/card'
import imagecard from '../images/cardimage.png'
import { Outlet } from 'react-router-dom'
import { useStyletron} from 'baseui';
import {
  ParagraphLarge,
  HeadingLarge,
} from 'baseui/typography';
const RootLayout = () => {
    const [css] = useStyletron();
  return (
    <div className={css({
      padding:'0px 250px',
    })}>
       
        <div className={css({
          display:'flex',
        paddingTop:'46px',
        width:'100%'
      })}>
            <Card 
            overrides={{Contents: {style: { display:'flex', flexDirection:'column', justifyCentre:'center', backgroundColor:'black', margin:'0px', width:'100%'}},
            Body:{style:{marginBottom:'0px'}},
            Root:{style:{width:'100%'}}
            }
            }
            >
           
            <div className={css({
          display:'flex',
          justifyContent:'space-between',
        marginBottom:'0px'
      })}>
      <div className={css({paddingLeft:'24px'})}>
      <HeadingLarge color='white'>Sonal</HeadingLarge>
            <p className={css(
              {color:'white'
              }
            )}>
           Nunc nulla adipiscing volutpat tortor sed dui maecenas sed purus.
           </p>
      </div>
       
           <img src={imagecard} alt="" />
            </div>
          
            
            </Card>
            </div>
        <>
            <Outlet/>
        </>
    </div>
  )
}

export default RootLayout