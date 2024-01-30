import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const handleAddEducation = () => {
    console.log("handleAddEducation");
  };
  console.log(fullName, email, phoneNumber, address);
  return (
    <div className="flex-col-gaps">
      <Card></Card>
      <Button icon="+" color="dark" onClick={handleAddEducation}>
        Add education
      </Button>
      <Button icon="trash">Delete</Button>
      <Button>Cancel</Button>
      <Button color="dark">Save</Button>
      <Button icon="+" color="dark">
        Add experience
      </Button>
      <Input
        label="Full name:"
        type="text"
        placeholder="Valeria Blagodatskaja"
        setValue={setFullName}
        value={fullName}
      />
      <Input
        label="Email:"
        type="email"
        placeholder="valeria@gmail.com"
        setValue={setEmail}
        value={email}
      />
      <Input
        label={"Phone number:"}
        type={"tel"}
        placeholder={"+372..."}
        setValue={setPhoneNumber}
        value={phoneNumber}
      />
      <Input
        label={"Address:"}
        type={"text"}
        placeholder={"Tallinn, Estonia"}
        setValue={setAddress}
        value={address}
      />
    </div>
  );
}

export default App;
