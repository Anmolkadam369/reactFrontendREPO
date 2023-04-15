import { Box, Stack, Typography } from "@mui/material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import { Chart } from "react-google-charts";

import ChartComponent from "./ChartComponent";
import StatComponent from "./StatComponent";

export default function Dashboard() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    axios
      .get("http://localhost:3001/job/all", { email, password })
      .then((res) => {
        console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        navigate("/user/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate("/SignUp", { state: { from: "/" } });
  };
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Dashboard
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StatComponent
            value="45621"
            icon={
              <SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />
            }
            description="Administrators"
            money=""
          />
          <StatComponent
            value="450"
            icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs"
            money=""
          />
          <StatComponent
            value="6548"
            icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
            description="Jobs categories"
            money=""
          />
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ mt: 3 }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <ChartComponent>
            <Chart chartType="Bar" width="100%" height="300px" legendToggle />
          </ChartComponent>
        </Stack>
      </Box>
    </>
  );
}
