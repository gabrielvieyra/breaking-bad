import React, {useState} from 'react';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        ciudad:''
    });

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

        // pasarlo al componente principal
    }

    return (
        <form onSubmit={handleSubmit}>
            {/*{ error ? <p className="red darken-4 error">Todos los campos son obligatorios</p> : null }*/}
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
                       className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}

export default Formulario;


