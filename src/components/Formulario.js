import React, {useState} from 'react';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    const [error, setError] = useState(false);

    const { ciudad } = busqueda;

    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        setConsultar(true);
    }

    return (
        <form onSubmit={handleSubmit} autocomplete="off">
            { error ? <p className="red darken-4 error">Todos los campos son obligatorios</p> : null }
            <div className="input-field col s12">
                <input type="text"
                       name="ciudad" 
                       id="ciudad"
                       value={ciudad}
                       onChange={handleChange}
                />

                <label htmlFor="ciudad" >Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <input type="submit"
                       value="Buscar clima"
                       className="btn-large btn-block blue lighten-4"
                />
            </div>
        </form>
    )
}

export default Formulario;


