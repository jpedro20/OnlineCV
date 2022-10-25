import {Grid, Typography} from '@mui/material'
import SkillBar from './SkillBar'

type ProfessionalSkillOptions = {
  skill: string,
  level: number
}

function ProfessionalSkill(props: ProfessionalSkillOptions) {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>{props.skill}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography align="right">{props.level + ' %'}</Typography>
      </Grid>
      <Grid item xs={12}>
        <SkillBar value={props.level} />
      </Grid>
    </Grid>
  )
}

export default ProfessionalSkill
