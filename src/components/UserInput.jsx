import React from 'react';
import { useState } from 'react';
const UserInput = () => {
    const [number, setNumber] = useState({
        baslangıcYatırım: 10000,
        önerilenYatırım: 1200,
        beklenenSüre: 6,
        durmaSüresi: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setNumber(prevNumber => {
            return {
                ...prevNumber,
                [inputIdentifier]: newValue
            }
        })
    }
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label htmlFor="" id='#user-input label '>Başlangıç Yatırımı</label>
                    <input type="number" value={number.baslangıcYatırım} id='user-input' required onChange={(event) => handleChange('baslangıcYatırım', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="" id='#user-input label '>Önerilen Yatırım</label>
                    <input type="number" id='user-input' required value={number.önerilenYatırım} onChange={(event) => handleChange('önerilenYatırım', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="" id='#user-input label '>Yatırım Süresi</label>
                    <input type="number" id='user-input' required value={number.durmaSüresi} onChange={(event) => handleChange('beklenenSüre', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="" id='#user-input label '>Süre</label>
                    <input type="number" id='user-input' required value={number.beklenenSüre} onChange={(event) => handleChange('durmaSüresi', event.target.value)} />
                </p>
            </div>
        </section>
    );
}

export default UserInput;
