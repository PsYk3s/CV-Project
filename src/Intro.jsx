import { useState } from "react"

const Intro = () => {

    const [email, setEmail] = useState("the.waz88@gmail.com")
    const [name, setName] = useState("Warren")
    const [introduction, setIntro] = useState("This is my introduction")

    const handleSubmit = (event) => {

        event.preventDefault();
        setName(event.target.name.value);
        setEmail(event.target.email.value);
        setIntro(event.target.intro.value);
        event.target.reset();

    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleIntroChange = (event) => {
        setIntro(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
        
    return (
        <>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{introduction}</p>

        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <input onChange={handleNameChange} value={name} type="text" name="name" id="name" />
            </label>
            <label htmlFor="email">
                <input onChange={handleEmailChange} value={email}  type="text" name="email" id="email" />
            </label>
            <label htmlFor="intro">
                <textarea onChange={handleIntroChange} value={introduction}  type="text" name="intro" id="intro" placeholder="Introduction" />
            </label>
            <button type="submit">Save</button>
        </form>        
        </>
    )
}

export default Intro