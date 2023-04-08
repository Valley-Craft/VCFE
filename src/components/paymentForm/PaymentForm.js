import React, {useState} from 'react';
import axios from "axios";
import crypto from 'crypto-browserify';

const PaymentForm = () => {

    const [inputNick, setInputNick] = useState('');
    const [inputMail, setInputMail] = useState('');
    const [inputAmount, setInputAmount] = useState('');

    const handleNickChange = (event) => {
        setInputNick(event.target.value);
    }
    const handleMailChange = (event) => {
        setInputMail(event.target.value);
    }
    const handleAmountChange = (event) => {
        setInputAmount(event.target.value);
    }

    const pay = () => {

        const fondyPass = 'test';

        const orderBody = {
            amount: 10000,
            currency: 'UAH',
            merchant_id: '123123',
            order_desc: 'test desc',
            order_id: 'ID1234',
        };

        const signatureRaw = Object.values(orderBody).join('|');
        console.log(crypto)

        const signature = crypto.Hash('sha1');
        signature.update(`${fondyPass}|${signatureRaw}`);

        axios.post('https://pay.fondy.eu/api/checkout/url/', {
            request: {
                ...orderBody,
                signature: signature.digest('hex')
            }
        }).then(response => {
                console.log(response.data);
                console.log({...orderBody, signature:signature.digest('hex')});
                // обработка ответа
            }).catch(error => {
                console.log(error);
                // обработка ошибки
            });
    }

    return (
        <div className='container'>
            <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', marginTop: '10%'}}>
                <div style={{position: 'relative'}}>
                    <label>
                        <input className="input_main" value={inputNick} onChange={handleNickChange} placeholder="dinozzzzzawrikXD" required={true}/>
                    </label>
                    <div className="mtxt">Введите никнейм</div>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input className="input_main" value={inputMail} onChange={handleMailChange} type="text" placeholder="dinozzzzzawrik@valleycraft.fun"/>
                    </label>
                    <div className="mtxt">Введите почту</div>
                </div>
                <div style={{marginTop: '60px'}}>
                    <label style={{position: 'relative'}}>
                        <input className="input_secondary" type="number" value={inputAmount} onChange={handleAmountChange} placeholder="299" min="1"/>
                        <div className="mtxt" style={{top: '0px', right: '10px'}}>Введите сумму пополнения</div>
                    </label>
                </div>
                <a href="https://discord.gg/KzuBT5vN4B" onClick={pay} id="pay-button" className="button_blue">
                    Оплатить
                </a>
            </div>
        </div>
    );
};

export default PaymentForm;