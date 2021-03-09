import React, {useState} from 'react';

import './styles.css';

export default function Bin2Dec(){
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
 
    async function handleNumberConverter(e){
        e.preventDefault();
        setDecimal(0);
        setErrorMessage('')

        let numerosSeparados = binary.split("", binary.length);

        if (binary.match(/^[0-1]+$/g) === null || binary.length > 8) {
            setErrorMessage('You can only type 0 and 1!')
            return
        } 

        numerosSeparados.forEach((element, index) => {
            let exponent = numerosSeparados.length - index - 1;
                    
            setDecimal(function(decimal) {
                return decimal + element * Math.pow(2, exponent);
            });
        });
    }

    return (
        <div className="content">
            <h1 className="titulo">Binary-to-Decimal Number Converter</h1>
            <form className="form" onSubmit={handleNumberConverter}>
                <input placeholder="Enter the binary number" type="number"
                    value={binary} onChange={ e => setBinary(e.target.value)} 
                />
                 <input placeholder="Decimal Number" disabled type="number"
                    value={decimal}
                />
               <button className="button" type="submit">Convert</button>
            </form>
            <p>{errorMessage}</p>
        </div>
    );
}