import React from 'react'

export default function Form(props) {
    
    return (
        <div>
            <form className="form" onSubmit={props.handleSubmit}>
                <label htmlFor="changeInput">See the change:</label>
                <input
                    type="text" 
                    name="changeInput" 
                    value={props.userQuote}
                    onChange={props.handleChange}
                />
                <input type="submit" name="submit" value="Let's go!"></input>
            </form>
        </div>
    )
}
