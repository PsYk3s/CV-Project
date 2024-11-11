/* eslint-disable react/prop-types */

export const WorkList = ({ working }) => {

    return (
        <>
            <ul>
                {working.map(work => <li key={work.id}>
                    <h3>{work.company}</h3>
                    <p><b>Title:</b> {work.title}</p>
                    <p><b>Duties:</b> {work.duties}</p>
                </li>
                )}
            </ul>
        </>
    )
};


export const WorkForm = ({ setWorking }) => {

    const handleSubmit = (event) => {

        event.preventDefault();

        const company = event.target.company.value;
        const title = event.target.title.value;
        const duties = event.target.duties.value;

        setWorking((prevWorking) => [...prevWorking,
        { company: company, title: title, id: crypto.randomUUID(), duties: duties },
        ]);

        event.target.reset();

    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="company">
                <input type="text" name="company" id="company" placeholder="Previous work" />
            </label>
            <label htmlFor="title">
                <input type="text" name="title" id="title" placeholder="Title" />
            </label>
            <label htmlFor="duties">
                <textarea type="text" name="duties" id="duties" placeholder="Describe your duties" />
            </label>
            <button type="submit">Add</button>
        </form>
    );
}