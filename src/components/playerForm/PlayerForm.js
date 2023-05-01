import React, {useState} from 'react';
// import axios from "axios";
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
        const data = {
            nickname: inputNick,
            name: inputName,
            age: inputAge,
            wwd: inputWWD,
            rules: inputRules
        }

        try {
            const response = await axios.post('http://api.valleycraft.fun/api/v1/form', data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='container'>
            <div style={{marginLeft: 'auto', marginRight: 'auto', width: 'fit-content', marginTop: '10%'}}>
                <div style={{position: 'relative'}}>
                    <label>
                        <input type="text" className="input_main" value={inputNick} onChange={handleNickChange}
                               placeholder="Введите никнейм" required/>
                    </label>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input type="text" className="input_main" value={inputName} onChange={handleNameChange}
                               placeholder="Введите ваше имя" required/>
                    </label>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input type="number" className="input_main" value={inputAge} onChange={handleAgeChange}
                               placeholder="Введите ваш возраст" required/>
                    </label>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input type="text" className="input_main" value={inputWWD} onChange={handleWWDChange}
                               placeholder="Чем хотите заниматься на сервере?" required/>
                    </label>
                </div>
                <div style={{marginTop: '40px', position: 'relative'}}>
                    <label>
                        <input type="text" className="input_main" value={inputRules} onChange={handleRulesChange}
                               placeholder="Прочитали ли вы правила?" required/>
                    </label>
                </div>
                <div>
                    <a onClick={sendForm} id="pay-button" className="button_pay" href="#">
                        Отправить
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PlayerForm;