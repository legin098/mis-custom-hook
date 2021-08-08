//custom hook
//los custom hook son funciones
//tambien se puede sacar su estructura con el rafc
import { useState } from 'react';

//el valor de initialState que esta por parametro es opcional no es necesario obligatorio
//pasar un parametro cuando se llama la funcion, para que sea obligatorio se debe usar PropTypes
export const useCounter = ( initialState = 10 ) => {

    const [ counter, setCounter ] = useState( initialState ); //10

    const increment = () => setCounter( counter + 1 );

    const decrement = () => setCounter( counter );

    const reset = () => setCounter(initialState);

    return { counter, increment, decrement, reset };

}
