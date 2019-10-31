import React, { useState } from "react"
// import { BrowserRouter as Router } from "react-router-dom"
import validator from "validator"
import "../styles/base.css"

function Form() {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState(<div className="white">Name</div>)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUserError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [cpass, setCpass] = useState("")
  const [cpassError, setCpassError] = useState("")
  const [web, setWeb] = useState("")
  const [webError, setWebError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    let err = false

    if (validator.isEmpty(name)) {
      setNameError(<div className="red">Name -Cannot Be Blank</div>)
    } else {
      setNameError("")
    }
    if (email !== "") {
      if (!validator.isEmail(email)) {
        err = true
        setEmailError("Must Be A Valid Email")
      } else {
        setEmailError("")
      }
    } else {
      err = true
      setEmailError("Cannot Be Blank")
    }

    if (username === "") {
      err = true
      setUserError("Cannot Be Blank")
    } else {
      setUserError("")
    }
    if (password === "") {
      err = true
      setPasswordError("Cannot Be Blank")
    } else {
      setPasswordError("")
    }
    if (cpass === "") {
      err = true
      setCpassError("Must Match The Password")
    } else {
      setCpassError("")
    }
    if (web !== "") {
      if (!validator.isURL(web)) {
        err = true
        setWebError("Must Be A Valid Url")
      } else {
        setWebError("")
      }
    } else {
      err = true
      setWebError("Cannot Be Blank")
    }
    if (!validator)
      if (!err) {
        // export function submit() {
        //   ;<div>
        //     <h1>Thank You!</h1>
        //   </div>

        console.log("submitted")
      } else {
        console.log("not submitted")
      }
  }
  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <h1>Profile Form -All fields required </h1>
        <label>
          Name <span className="error">{nameError}</span>
        </label>
        <input
          className={nameError === "" ? "" : "error"}
          onChange={e => setName(e.target.value)}
          type="text"
          value={name}
          placeholder="Denia"
        ></input>
        <label>
          Email <span className="error">{emailError}</span>
        </label>
        <input
          className={emailError === "" ? "" : "error"}
          onChange={e => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="email@test.com"
        ></input>
        <label className="error">Username {usernameError}</label>
        <input
          className={usernameError === "" ? "" : "error"}
          onChange={e => setUsername(e.target.value)}
          type="text"
          value={username}
          placeholder="myusername"
        ></input>
        <label className="error">Password {passwordError}</label>
        <input
          className={passwordError === "" ? "" : "error"}
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Password"
        ></input>
        <label className="error">Confirm Password {cpassError}</label>
        <input
          className={cpassError === "" ? "" : "error"}
          onChange={e => setCpass(e.target.value)}
          type="password"
          value={cpass}
          placeholder="Confirm Password"
        ></input>
        <label>
          Website <span className="error">{webError}</span>
        </label>
        <input
          className={webError === "" ? "" : "error"}
          onChange={e => setWeb(e.target.value)}
          type="url"
          value={web}
          placeholder="Website"
        ></input>
        {/* <Link to={"/submitted/"}> */} <button type="submit">Submit</button>{" "}
        {/* </Link> */}
      </form>
    </div>
  )
}

export default Form
