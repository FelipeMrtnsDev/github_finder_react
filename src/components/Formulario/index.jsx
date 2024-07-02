import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome ] = useState('');

    useEffect(() => {
        console.log('o componente iniciou');

        return () => {
            console.log("o componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log('o estado mudou');
    }, [nome])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior)
            
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        console.log(soma , media)

        if (media >= 7) {
            return (
                <p>{nome}, Você foi aprovado</p>
            )
        } else {
            return (
                <p>{nome}, Você foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li> 
                ))}
            </ul>
            <input type="text" onChange={alteraNome} />
            <input type="number" placeholder="Nota máteria A" onChange={({ target }) => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota máteria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota máteria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;