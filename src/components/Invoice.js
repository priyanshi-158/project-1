import { useStyletron } from 'baseui';
import { KIND, Tag, VARIANT } from 'baseui/tag';
import React from 'react'

const Invoice = () => {
    const [css] = useStyletron();
    return (
        <div className={css({
            background: '#FFFFFF',
            boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
            borderRadius: '12px',
            padding: '24px',
            width: '100%'
        })}>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                paddingBottom: '12px',
                margin: '0'
            })}>
                <p className={css({
                    fontFamily: 'manrope',
                    fontSize: '12px',
                    fontWeight: '400',
                    width: '100%',
                    color: '#333333'
                })}>Items</p>
                <p className={css({
                    fontFamily: 'manrope',
                    fontSize: '12px',
                    fontWeight: '400',
                    width: '100%',
                    color: '#333333'
                })}>Proforma invoice</p>
                <p className={css({
                    fontFamily: 'manrope',
                    fontSize: '12px',
                    fontWeight: '400',
                    width: '100%',
                    color: '#333333'
                })}>Proforma invoice Date</p>
                <p className={css({
                    fontFamily: 'manrope',
                    fontSize: '12px',
                    fontWeight: '400',
                    width: '100%',
                    color: '#333333'
                })}>Status</p>
                <p className={css({
                    fontFamily: 'manrope',
                    fontSize: '12px',
                    fontWeight: '400',
                    width: '100%',
                    color: '#333333'
                })}>Invoice</p>
                <p className={css({
                    fontFamily: 'manrope',
                    fontSize: '12px',
                    fontWeight: '400',
                    width: '100%',
                    color: '#333333'
                })}>Invoice Date</p>

            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            })}>
                <p className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>Moodboard design, month 1 retainer costs</p>
                <a href="#" className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>
                    MFPI-12345678
                </a>
                <p className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>12 Apr 2023</p>
                <div className={
                    css({
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        width:'100%'
                    })
                }>
                <Tag overrides={{
                    Text: {
                        style: {
                            fontFamily: 'open-sans',
                            fontSize: '16px',
                            fontWeight: '400'
                        }
                    },
                    ActionIcon:{
                        style:{
                            margin:'0px'
                        }
                    }
                }}
                    closeable={false} color='#666666' variant={VARIANT.solid} kind={KIND.custom}>
                    Payment Pending
                </Tag>
                </div>
               
                <p className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>-</p>
                <p className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>-</p>

            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            })}>
                <p className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>Moodboard design, month 1 retainer costs</p>
                <a href="#" className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>
                    MFPI-12345678
                </a>
                <p className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>27 Mar 2023</p>
                <div className={
                    css({
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        width:'100%'
                    })
                }>
                <Tag overrides={{
                    Text: {
                        style: {
                            fontFamily: 'open-sans',
                            fontSize: '16px',
                            fontWeight: '400'
                        }
                    },
                    ActionIcon:{
                        style:{
                            margin:'0px'
                        }
                    }
                }}
                    closeable={false} variant={VARIANT.solid} kind='positive'>
                    Payment collected
                </Tag>
                </div>
               
                <a href='#' className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>MFIN-12345678</a>
                <p className={css({
                    fontFamily: 'open-sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    width: '100%'
                })}>27 Mar 2023</p>

            </div>
        </div>
    )
}

export default Invoice