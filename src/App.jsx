import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const data = [
  {
    "28/11/2023": {
      weather: "Raining",
      desc: "Moderate rainfall, light winds",
      image: "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/4417bf88c7bbcd8e24fb78ee6479b362.png",
      temp: 9,
    },
    "29/11/2023": {
      weather: "Partly Cloudy",
      desc: "Some sunny periods but mostly cloudy",
      image: "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/67aaf9dbe30989c25cbde6c6ec099213.png",
      temp: 21,
    },
    "30/11/2023": {
      weather: "Sunny",
      desc: "Sunny and light winds",
      image: "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/575900edccbc7def167f7874c02aeb0b.png",
      temp: 31,
    },
    "01/11/2023": {
      weather: "Heavy Rain",
      desc: "Heavy rain, gusty winds and high seas",
      image: "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/451d37e6cea3af4a568110863a1adcf7.png",
      temp: 13,
    },
    "02/11/2023": {
      weather: "Thunderstorms",
      desc: "Heavy rains, wind and scattered thunderstorms",
      image: "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/efffb1e26f6de5bf5c8adbd872a2933a.png",
      temp: 14,
    },
    "03/11/2023": {
      weather: "Cloudy",
      desc: "Overcast and moderate winds",
      image: "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/66117fab0f288a2867b340fa2fcde31b.png",
      temp: 18,
    },
    "04/11/2023": {
      weather: "Windy",
      desc: "Light rain and gusty winds",
      image: "https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/ad9e41c68b6a2671d2bcd843be1baa86.png",
      temp: 16,
    },
  },
];

const countries = [
  { label: "Andorra" },
  { label: "Anguilla" },
  { label: "Albania" },
  { label: "Armenia" },
  { label: "Angola" },
  { label: "Antarctica" },
  { label: "Argentina" },
  { label: "American Samoa" },
  { label: "Austria" },
];

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const tempColour = (temp) => {
  if (temp < 0) {
    return "#00ffff";
  } else if (temp >= 0 && temp <= 10) {
    return "#006cff";
  } else if (temp > 10 && temp <= 15) {
    return "#00a2ff";
  } else if (temp > 15 && temp <= 20) {
    return "#60b5e6";
  } else if (temp > 20 && temp <= 25) {
    return "#ffae00";
  } else if (temp > 25 && temp <= 30) {
    return "#ffae00";
  } else if (temp > 30) {
    return "#ff5e00";
  }
};

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <main>
        <div className="App">
          <div className="header">
            <div className="left">
              <div className="logo">
                <img
                  className="logo-img"
                  src="https://help.apple.com/assets/64F2669B7BEF8AE318002477/64F266A17BEF8AE3180024A8/en_US/78606be71a30b2e518815e252a93cbb1.png"
                  alt="Logo"
                ></img>
                <p>Weather</p>
              </div>
            </div>
            <div className="right">
              <div className="dashboard-desktop">
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 200 }}
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Choose a country"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
                <FormControlLabel
                  sx={{ marginLeft: "1rem" }}
                  control={<Switch onChange={() => setDarkMode(!darkMode)} name="dark mode" color="primary" />}
                  label="Dark Mode"
                />
                <Avatar
                  sx={{ cursor: "pointer", marginLeft: "1rem", outline: "3px solid blue" }}
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                  onClick={handleClick}
                ></Avatar>
                <div>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Profile
                  </Button>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          <div className="body">
            {data.map((data, idx) => {
              return Object.entries(data).map(([key, value]) => (
                <div className="card">
                  <div className="glass-effect"></div>
                  <Card
                    sx={{ width: 220, height: "30rem", paddingTop: "1rem", color: "white", margin: 0 }}
                    key={idx}
                    style={{ backgroundColor: tempColour(value.temp) }}
                  >
                    <Typography variant="h6" sx={{ textAlign: "center" }}>
                      <b>{key}</b>
                    </Typography>
                    <Typography variant="h6" sx={{ display: "flex", justifyContent: "center", textAlign: "center", padding: "1rem" }}>
                      <b className="temp">{value.temp}°C</b>
                    </Typography>
                    <CardActionArea sx={{ height: "100%" }}>
                      <CardMedia component="img" backgroundColour="transparent" image={value.image} sx={{ padding: "3.5rem", objectFit: "contain" }} />
                      <CardContent sx={{ height: "40%" }}>
                        <Typography gutterBottom variant="h6" sx={{ textAlign: "center", marginBottom: 3 }}>
                          {value.weather}
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: "center" }}>
                          {value.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
              ));
            })}
          </div>
          <div className="footer">
            <p>@ Weather 2023</p>
          </div>
        </div>
        <div className="mobile-drawer">
          {" "}
          <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels>
              <BottomNavigationAction label="Profile" icon={<AccountBoxIcon />} />
              <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
            </BottomNavigation>
          </Paper>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
