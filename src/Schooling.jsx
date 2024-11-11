/* eslint-disable react/prop-types */

export const Schooling = ({ schooling }) => {
    return (
        <>
        <ul>
            { schooling.map( school => <li key={ school.id }>
                <h3>{ school.name }</h3>
            </li>)}
        </ul>
        </>
    )
}

export const SchoolingForm = ({setSchooling}) => {

    const handleSubmit = (event) => {

        event.preventDefault();

        const school = event.target.school.value;

        setSchooling((prevSchooling) => [...prevSchooling,
        { name: school, id: crypto.randomUUID() },
        ]);

        event.target.reset();

    };

    return (
         <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="school">
                <input type="text" name="school" id="school" placeholder="Education" />
            </label>
            <button type="submit">Add</button>
        </form>
    )
}