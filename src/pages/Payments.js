import React from 'react'
import { useStyletron} from 'baseui';
import Paycard from '../components/Paycard';
import Invoice from '../components/Invoice';
const Payments = () => {
    const [css] = useStyletron();
  return (
    <div>
    <div>
    <h1 className={css({
                paddingRight:'5px',
                fontFamily:'manrope',
                fontSize:'24px',
                fontWeight:'600',
                paddingLeft:'20px'
            })}>Payments and Disbursement Notes</h1>
            <Paycard/>
    </div>
    <div>
    <h1 className={css({
                paddingRight:'5px',
                fontFamily:'manrope',
                fontSize:'24px',
                fontWeight:'600',
                paddingLeft:'20px'
            })}>Invoices</h1>
            <p className={css({
                        fontFamily: 'open-sans',
                        fontSize: '16px',
                        fontWeight: '400',
                        color:'#666666',
                        paddingLeft:'20px'
                    })}
            >Proforma invoice and Invoice are sent to the client on your behalf automatically</p>
            <Invoice/>
    </div>
    </div>
  )
}

export default Payments