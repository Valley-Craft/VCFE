import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import axios from "axios";

const PlayerForm = () => {

    const [inputNick, setInputNick] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [inputWWD, setInputWWD] = useState('');
    const [inputRules, setInputRules] = useState('');

    const handleNickChange = (event) => {
        setInputNick(event.target.value);
    }
    const handleNameChange = (event) => {
        setInputName(event.target.value);
    }
    const handleAgeChange = (event) => {
        setInputAge(event.target.value);
    }

    const handleWWDChange = (event) => {
        setInputWWD(event.target.value);
    }
    const handleRulesChange = (event) => {
        setInputRules(event.target.value);
    }

    const sendForm = async () => {
        console.log(inputNick.length)
        if (`${inputRules}` === '123' && inputNick.length <= 16) {
            toast.success('Вас було додано до серверу');

            const data = {
                nickname: inputNick,
                name: inputName,
                age: inputAge,
                wwd: inputWWD,
                rules: inputRules
            }

            try {
                const response = await axios.post('https://vcbe-sy7wok3n.b4a.run/api/v1/form', data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        } else {
            toast.error('Упс... Можливо потрібно прочитати правила?');
        }
    }

    return (
        <div className='container'>
            <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', marginTop: '10%'}}>
                <div style={{position: 'relative'}}>
                    <label>
                        <input type="text" className="input_main" value={inputNick} onChange={handleNickChange}
                               placeholder="Нікнейм" required/>
                    </label>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input type="text" className="input_main" value={inputName} onChange={handleNameChange}
                               placeholder="Ім'я" required/>
                    </label>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input type="number" className="input_main" value={inputAge} onChange={handleAgeChange}
                               placeholder="Ваш вік" required/>
                    </label>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input type="text" className="input_main" value={inputWWD} onChange={handleWWDChange}
                               placeholder="Чим хочете займатися на сервері?" required/>
                    </label>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input type="number" className="input_main" value={inputRules} onChange={handleRulesChange}
                               placeholder="Чи прочитали ви правила?" required/>
                    </label>
                </div>
                <div>
                    <a onClick={sendForm} id="pay-button" className="button_pay" href="#">
                        Відправити
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PlayerForm;