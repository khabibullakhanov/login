import React, { useState } from 'react'
import axios from 'axios'

export function Login({ token, setToken }) {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        setUserName("")
        setPassword("")
        setToken("")
        axios({
            url: 'https://fakestoreapi.com/auth/login',
            method: "POST",
            userName: userName,
            password: password,
        }).then((res) => {
            console.log(res.token)
            setToken(res.token)
            localStorage.setItem("userToken", res.token)
        }).catch((err) => {
            console.log(err.response);
            setError(err.response)
            localStorage.setItem("userToken", err.token)

        })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input placeholder='Type your username...' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
                <input type="password" placeholder='Type your password...' value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <small>{error}</small>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
