import "./App.css";
import TextField from "@mui/material/TextField";

function App() {
  const profile = [
    {
      Firstname: "Deepa",
      lastname: "Thangaraju",
      DateOfBirth: "24.05.1994",
      Qualification: "B.E-Computer Science",
      passedoutyear: 2016,
      Email_Id: "deepat2405@gmail.com",
      Gender: "female",
      phoneno: 1234567890,
      experience: "0 years",
      Photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2TelJFZFY4gYoFdkh7tuC1PxyWF7ERibag&usqp=CAU",
    },
  ];
  return (
    <div className="App">
      <Data profile={profile} />
    </div>
  );
}

function Data({ profile }) {
  return (
    <div>
      {profile.map((profile, index) => (
        <Display
          fname={profile.Firstname}
          lname={profile.lastname}
          pic={profile.Photo}
          dob={profile.DateOfBirth}
          degree={profile.Qualification}
          poy={profile.passedoutyear}
          mail={profile.Email_Id}
          no={profile.phoneno}
          exp={profile.experience}
          Gender={profile.Gender}
        />
      ))}
    </div>
  );
}

function Display({
  fname,
  lname,
  pic,
  dob,
  degree,
  poy,
  mail,
  no,
  exp,
  Gender,
}) {
  const sty = {
    height: "1rem",
    width: "70%",
    margin: "2rem 0rem",
    color: "white",
  };
  return (
    <section>
      <div className="display">
        <img src={pic} alt={fname} />
        <br />
        <TextField
          id="outlined-disabled"
          value={fname}
          label="First Name"
          variant="outlined"
          style={sty}
        />
        <br />
        <TextField
          id="outlined-disabled"
          value={lname}
          label="Last Name"
          variant="outlined"
          style={sty}
        />
        <br />
        <TextField
          id="outlined-disabled"
          value={dob}
          label="Date Of Birth"
          variant="outlined"
          style={sty}
        />
        <br />
        <TextField
          id="outlined-disabled"
          value={degree}
          label="Qualification"
          variant="outlined"
          style={sty}
        />
        <br />
        <TextField
          id="outlined-disabled"
          value={poy}
          label="Passed Out Year"
          variant="outlined"
          style={sty}
        />
        <TextField
          id="outlined-disabled"
          value={Gender}
          label="Gender"
          variant="outlined"
          style={sty}
        />
        <br />
        <TextField
          id="outlined-disabled"
          value={mail}
          label="Email"
          variant="outlined"
          style={sty}
        />
        <br />
        <TextField
          id="outlined-disabled"
          value={no}
          label="Phone no"
          variant="outlined"
          style={sty}
        />
        <br />
        <TextField
          id="outlined-disabled"
          value={exp}
          label="Experience"
          variant="outlined"
          style={sty}
        />
        <br />
      </div>
    </section>
  );
}

export default App;
