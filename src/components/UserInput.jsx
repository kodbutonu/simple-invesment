import React from 'react';

const UserInput = ({ onChange, userInput }) => {
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Başlangıç Yatırımı</label>
                    <input type="number" id='initialInvestment' required value={userInput.initialInvestment} onChange={(event) => onChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Önerilen Yatırım</label>
                    <input type="number" id='annualInvestment' required value={userInput.annualInvestment} onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Yatırım Süresi</label>
                    <input type="number" id='duration' required value={userInput.duration} onChange={(event) => onChange('duration', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="expectedReturn">Beklenen Yatırım</label>
                    <input type="number" id='expectedReturn' required value={userInput.expectedReturn} onChange={(event) => onChange('expectedReturn', event.target.value)} />
                </p>
            </div>
        </section>
    );
}

export default UserInput;
