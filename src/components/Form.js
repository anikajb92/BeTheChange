import React from 'react'

export default function Form() {
    return (
        <div>
            <form className="form">
                <label for="name">Name
                    <input type="text" name="name" value=""></input>
                </label>
                <br></br>
                <label for="changeInput">See the change
                    <input type="text" name="changeInput" value=""></input>
                </label>
            </form>
        </div>
    )
}
