import { LinearProgress, LinearProgressProps} from "@mui/material";
import styled from "@emotion/styled";

const LinearProgressBar = styled(LinearProgress)(() => ({
  height: 15,
  borderRadius: 5
}));

function SkillBar(props: LinearProgressProps) {
  return (
    <LinearProgressBar variant="determinate" {...props} />
  )
}

export default SkillBar
