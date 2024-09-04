import React from "react";
import "./InstructionTab.css"

export default function InstructionTab({instructionsDisplay, setInstructionsDisplay}) {
    return (
        <div className={instructionsDisplay}>
            <h1>Functionalities</h1>
            <ul className="ul">
                <li>Submitting the test username and password will turn the inputs green, else red</li>
                <li>(username: "testusername", password: "mypassword")</li>
                <li>Spaces aren't allowed. The app checks for spaces on every change of the input.</li>
                <li>If a space is detected the inputs turn yellow</li>
            </ul>
            <button className="button" value="Start" onClick={() => setInstructionsDisplay("hidden")}>Start</button>
        </div>
    )
}