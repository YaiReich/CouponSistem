import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { login } from "../store/auth-slice";

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState(0);

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    };

    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleTypeChange = () => {
        setType(type === 0 ? 1 : 0);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password, type }),
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())
            .then((data) => dispatch(login(data.token)))
            .catch((error) => console.error(error));
    };

    return (
        <Form onSubmit={handleLoginSubmit}>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="type">Type</Label>
                <br />
                <Input
                    type="checkbox"
                    id="type"
                    checked={type === 1}
                    onChange={handleTypeChange}
                />
                <span>{type === 1 ? "Company" : "Customer"}</span>
            </FormGroup>
            <Button color="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Login;
