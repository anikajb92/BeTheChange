import React from 'react'

export default function Form(props) {
    
    return (
            <form className="form" onSubmit={props.handleSubmit}>
                <label htmlFor="changeInput">What is your problem?</label><br></br>
                <input
                    type="text" 
                    name="changeInput"
                    className="text-input"
                    value={props.userQuote}
                    onChange={props.handleChange}
                    required
                /><br></br>
                <input type="submit" className="button" name="submit" value="Make a Change!"></input>
            </form>
    )
}
