import { useStyletron } from 'baseui';

import React from 'react'

const Load = ({ data }) => {
  const [css] = useStyletron();
  return (
    <div className={css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '15px',
    })}>
      <div className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(269.53deg, #FFC107 32.52%, rgba(255, 193, 7, 0.62) 86.27%)',
        width: '400px',
        height: '400px',
        borderRadius: '100%',
        padding: '30px'
      })}

      >
        <div className={css({
          fontFamily: 'open-sans',
          fontSize: '16px'
        })} dangerouslySetInnerHTML=
          {{ __html: data.content.rendered }} />
        <p className={css({
          fontFamily: 'open-sans',
          fontSize: '16px'
        })}>-{data.title.rendered}</p>
      </div>
    </div>
  )
}

export default Load