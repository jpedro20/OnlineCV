import {Box, Grid, Typography} from "@mui/material";
import ProfessionalSkill from "./ProfessionalSkill";

function ProfessionalSkills() {
  return (
    <Box sx={{boxShadow:3, p:3}}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" sx={{mb:2}}>Professional Skills</Typography>
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <Grid item xs={6}>
            <Box sx={{mb:1}}>
              <ProfessionalSkill skill="CSS" level={85} />
            </Box>
            <Box sx={{mb:1}}>
              <ProfessionalSkill skill="HTML" level={80} />
            </Box>
            <ProfessionalSkill skill=".NET Core" level={90}/>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{mb:1}}>
              <ProfessionalSkill skill="Python" level={45} />
            </Box>
            <Box sx={{mb:1}}>
              <ProfessionalSkill skill="Azure DevOps" level={30} />
            </Box>
            <ProfessionalSkill skill="React" level={75} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProfessionalSkills
