import Card from "./Card/Card";
import Input from "./Input/Input";

interface PersonalInfoCardProps {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

function PersonalInfoCard({
  fullName,
  setFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
}: PersonalInfoCardProps) {
  return (
    <Card>
      <h3 className="title">Personal information</h3>
      <Input
        label="Full name"
        type="text"
        placeholder="John Doe"
        setValue={setFullName}
        value={fullName}
        className="input"
      />
      <Input
        label="Email"
        type="email"
        placeholder="john.doe@gmail.com"
        setValue={setEmail}
        value={email}
        className="input"
      />
      <Input
        label="Phone number"
        type="tel"
        placeholder="+37256862022"
        setValue={setPhoneNumber}
        value={phoneNumber}
        className="input"
      />
      <Input
        label="Address"
        type="text"
        placeholder="Tallinn, Estonia"
        setValue={setAddress}
        value={address}
        className="input"
      />
    </Card>
  );
}

export default PersonalInfoCard;
