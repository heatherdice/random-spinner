import React, {useState} from 'react'






// Fat arrow function defining this component
// Deconstructed props within the parameters of the component; same as this: const {nameList, setNameList} = props
const Form = ({nameList, setNameList}) => {
    const [name, setName] = useState("")
    const [err, setErr] = useState({error: ""})

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (name.length > 0) {
            setNameList([...nameList, name])
            setName("")
            setErr({error:""})
        }
        else {
            setErr({error: "You have to put something in the box"})
        }
    }

    return (
        <div>
            {/* Added inline styling here because the h1 wan't showing up as a header. Don't know why. */}
            <h1 style={{fontSize:"xx-large"}}>Add Names to Your Wheel</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    {/*This is just a weird way to use ternary operators to display an error message */}
                    {err.error? <p style={{color:"red"}}>{err.error}</p>:null}
                    <label>
                        Name:
                        <input type="text" name="name" id="name-input" onChange={(e) => setName(e.target.value)} value={name}/>
                    </label>
                    <input type="submit" value="Add To Wheel" />
                </div>
            </form>
        </div>
    )
}

export default Form