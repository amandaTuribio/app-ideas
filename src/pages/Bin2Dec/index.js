import React, {useState} from 'react';

import './styles.css';

export default function Bin2Dec(){
    const [binary, setBinary] = useState('');
    const [decimal, setDecimal] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
 
    async function handleNewIncident(e){
        e.preventDefault();
        setDecimal(0);
        setErrorMessage('')

        if (binary.match(/^[0-1]+$/g) === null) {
            setErrorMessage('You can only type 0 and 1!')
            return
        }

        let numerosSeparados = binary.split("", binary.length);
        let numberlengh = numerosSeparados.length;

        numerosSeparados.forEach((element, index) => {
            let exponent = numberlengh - index - 1;
                    
            setDecimal(function(decimal) {
                return decimal + element * Math.pow(2, exponent);
            });
        });
    }

    return (
        <div className="content">
            <h1 className="titulo">Binary-to-Decimal Number Converter</h1>
            <form onSubmit={handleNewIncident}>
                <input placeholder="Enter the binary number" type="number"
                    value={binary} onChange={ e => setBinary(e.target.value)} 
                />
               <button className="button" type="submit">Convert</button>
            </form>
            {decimal ? (
                <p className="p-resultado">Decimal Number: {decimal}</p>
            ) : (
                <p className="p-resultado">Enter the binary number</p>
            )}

            {errorMessage}
        </div>
    );
}