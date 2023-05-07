import React from 'react'
import { useStyletron} from 'baseui';
import {Tag, VARIANT} from 'baseui/tag';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Goldcard from '../components/Goldcard';
import ItemCard1 from '../components/ItemCard1';
import ItemCard2 from '../components/ItemCard2';
const Status = () => {
    const [css] = useStyletron();
  return (
    <div>
        <div>
        <div className={css({
            display:'flex',
            alignItems:'center',
            paddingLeft:'20px'
        })}>
            <h1 className={css({
                paddingRight:'5px',
                '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                fontSize:'24px',
                fontWeight:'600'
            })}>Project Status</h1>
             <Tag overrides={{Text:{style: {'@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                fontSize:'14px',
                fontWeight:'500'}}}}
              closeable={false} variant={VARIANT.solid} kind="positive">
            Active
          </Tag>
        </div>
        <div className={css({
            display:'flex',
            justifyContent:'space-between',
            width:'100%'
        })}>
            <Card1/>
            <Card2/>
        </div>
        </div>
        <div>
        <h1 className={css({
                paddingRight:'5px',
                '@font-face': {
                        fontFamily: "manrope",
                        src: 'url("/static/Manrope-Regular.ttf")'
                    },
                fontSize:'24px',
                fontWeight:'600',
                paddingLeft:'20px'
            })}>Item Status</h1>
            <Goldcard/>
            <div className={css({
            display:'flex',
            width:'100%'
        })}>
              <ItemCard1/>
              <ItemCard2/>
            </div>
        </div>
    </div>
  )
}

export default Status