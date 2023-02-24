import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SuccessModal from "./SuccessModal";
import { submitForm, useFetchData } from "../utils/api";

const Register = () => {
  const [occupation, setOccuptaion] = React.useState("");
  const [state, setState] = React.useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const {
    data: { occupations, states },
  } = useFetchData();
  const [data, setData] = useState({});

  const clearForm = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setOccuptaion("");
    setState("");
  };

  const submitData = async () => {
    try {
      const response = await submitForm({
        fullName,
        email,
        password,
        state,
        occupation,
      });
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(true);
    submitData();
    clearForm();
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "200px",
        width: "ch",
      },
    },
  };

  return (
    <div>
      <form className="formContainer" onSubmit={handleSubmit}>
        <h1 className="formHeading">Register</h1>
        <TextField
          className="textField"
          label="Full Name"
          variant="outlined"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          className="textField"
          label="Email"
          variant="outlined"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <TextField
          className="textField"
          label="Password"
          variant="outlined"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <div className="formControl">
          <FormControl required>
            <InputLabel>Occupation</InputLabel>
            <Select
              className="occupationFormControl"
              value={occupation}
              label="Occupation"
              onChange={(e) => {
                setOccuptaion(e.target.value);
              }}
              MenuProps={MenuProps}
            >
              {occupations &&
                occupations.map((occ, index) => (
                  <MenuItem key={index} value={occ}>
                    {occ}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel>State</InputLabel>
            <Select
              className="stateFormControl"
              value={state}
              label="State"
              onChange={(e) => {
                setState(e.target.value);
              }}
              MenuProps={MenuProps}
            >
              {states &&
                states.map((sta, index) => (
                  <MenuItem key={index} value={sta.abbreviation}>
                    {sta.abbreviation}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <Button className="registerButton" type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <SuccessModal isOpen={!isOpen} setIsOpen={setIsOpen} data={data} />
    </div>
  );
};

export default Register;
