/* eslint-disable react/prop-types */

const WorkList = ({ working }) => {

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

export default WorkList