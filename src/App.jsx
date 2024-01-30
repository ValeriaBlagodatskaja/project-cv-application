import Card from "./components/Card";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <div className="flex-col-gaps">
      <Card></Card>
      <Button icon="+" color="dark">
        Add education
      </Button>
      <Button icon="trash">Delete</Button>
      <Button>Cancel</Button>
      <Button color="dark">Save</Button>
      <Button icon="+">Add experience</Button>
      <Input></Input>
    </div>
  );
}

export default App;
