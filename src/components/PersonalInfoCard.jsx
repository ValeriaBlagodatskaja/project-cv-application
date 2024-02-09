import Card from "./Card/Card";
import Input from "./Input/Input";

function PersonalInfoCard({
  fullName,
  setFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
}) {
  return (
    <Card>
      <h3 className="title">Personal information</h3>
      <Input
        label="Full name"
        type="text"
        placeholder="John Doe"
        setValue={setFullName}
        value={fullName}
      />
      <Input
        label="Email"
        type="email"
        placeholder="john.doe@gmail.com"
        setValue={setEmail}
        value={email}
      />
      <Input
        label="Phone number"
        type="tel"
        placeholder="+37256862022"
        setValue={setPhoneNumber}
        value={phoneNumber}
      />
      <Input
        label="Address"
        type="text"
        placeholder="Tallinn, Estonia"
        setValue={setAddress}
        value={address}
      />
    </Card>
  );
}

export default PersonalInfoCard;
