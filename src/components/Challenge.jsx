import { useState } from 'react';
export default function Challenge(){

    const num1 = 10
    const num2 = 15
    const [resultado, setResultado] = useState(null);

    function Soma(){
        const somar = num1 + num2
        setResultado(somar);
    }

    return(
        <>
            <h2>
                O valor de num1 é {num1} e o de num2 é {num2}
            </h2>

            <button onClick={Soma}>Clique aqui para somar</button>

            {resultado !== null && (
                <h3>O resultado foi {resultado}</h3>
            )}

        </>
    )
}