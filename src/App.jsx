import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
    const [input, setInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid=input.duration>=1;
    function handleChange(inputIdentifier, newValue) {
        setInput(prevInput => ({
            ...prevInput,
            [inputIdentifier]: +newValue
        }));
    }


    return (
        <>
            <Header />
            <UserInput onChange={handleChange} userInput={input} />
            {!inputIsValid&&(<p className='center'>Lütfen 0 dan büyük değer giriniz.</p>)}
            {inputIsValid&&<Results input={input} />}
            
        </>
    );
}

export default App;
