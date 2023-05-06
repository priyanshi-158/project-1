import React from 'react'
import { useStyletron } from 'baseui';
import { Tag, VARIANT } from 'baseui/tag';
const Goldcard = () => {
    const [css] = useStyletron();
    return (
        <div className={
            css({
                background: 'linear-gradient(267.27deg, rgba(255, 193, 7, 0.78) 26.64%, rgba(255, 199, 0, 0.53) 100%)',
                width: '100%',
                boxShadow: '4px 4px 20px rgba(151, 151, 151, 0.25)',
                borderRadius: '12px',
                padding: '24px',
            })
        }>
            <div className={css({
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px'
            })}>
                <h1 className={css({
                    paddingRight: '5px',
                    fontFamily: 'manrope',
                    fontSize: '18px',
                    fontWeight: '600'
                })}>Current Item</h1>
                <Tag overrides={{
                    Text: {
                        style: {
                            fontFamily: 'manrope',
                            fontSize: '14px',
                            fontWeight: '500'
                        }
                    }
                }}
                    closeable={false} variant={VARIANT.solid} kind="positive">
                    Active
                </Tag>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px',
                padding: '24px',
                borderBottom:'1px solid #FFFFFF'
            })}>
                <div className={
                    css({
                        width:'100%'
                    })
                }>
                    <p className={css({
                        fontFamily: 'manrope',
                        fontSize: '12px',
                        fontWeight: '400',
                        paddingBottom: '12px',
                        margin: '0px auto'
                    })}>Milestone name</p>
                    <p className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginTop: '0px'
                    })}>Moodboard</p>
                </div>
                <div className={
                    css({
                        width:'100%'
                    })}>
                    <p className={css({
                        fontFamily: 'manrope',
                        fontSize: '12px',
                        fontWeight: '400',
                        paddingBottom: '12px',
                        margin: '0px auto'
                    })}>Item name</p>
                    <p className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginTop: '0px'
                    })}>Concept design</p>
                </div>
                <div className={
                    css({
                        width:'100%'
                    })
                }>
                    <p className={css({
                        fontFamily: 'manrope',
                        fontSize: '12px',
                        fontWeight: '400',
                        paddingBottom: '12px',
                        margin: '0px auto'
                    })}>Description</p>
                    <p className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginTop: '0px'
                    })}>Design for the pages inside the screens on lore ipsum</p>
                </div>
                <div className={
                    css({
                        width:'100%'
                    })
                }>
                    <p className={css({
                        fontFamily: 'manrope',
                        fontSize: '12px',
                        fontWeight: '400',
                        paddingBottom: '12px',
                        margin: '0px auto'
                    })}>Start date</p>
                    <p className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        marginTop: '0px'
                    })}>27 Mar 2023</p>
                </div>
            </div>
            <div className={css({
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px',
                padding: '0 24px',
            })}>
                <p className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>Moodboard</p>
                <p className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>Palette</p>
                <p  className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>-</p>
                <p className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        width:'100%'
                    })}>27 Mar 2023</p>
            </div>
        </div>
    )
}

export default Goldcard