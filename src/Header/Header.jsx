import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const IconAnt = props => (
  <SvgIcon viewBox='0 0 512 512' {...props}>
    <g>
      <path
        d='M473.43,436.048L473.43,436.048l-25.191-63.577c28.931-13.611,47.523-36.257,47.523-62.375
			c0-42.59-49.426-75.952-112.523-75.952c-31.07,0-58.82,8.093-78.991,21.391c-7.792-23.162-28.533-40.423-53.585-43.113
			c2.732-9.007,4.084-19.322,4.084-31.088c0-23.204-5.236-40.789-16.008-53.76c-13.059-15.725-33.719-23.703-61.406-23.715
			L142.59,45.953H0v30h125.603l20.15,33.583c-16.366,5.473-34.352,14.885-53.796,28.176c-23.539,16.091-40.563,32.021-41.276,32.691
			l-11.631,10.93l11.631,10.93c0.713,0.67,17.737,16.601,41.276,32.691c32.863,22.464,61.566,33.854,85.313,33.854
			c1.735,0,3.443-0.031,5.124-0.094c-1.518,5.444-2.346,11.173-2.346,17.094c0,10.061,2.351,19.581,6.519,28.052l-11.583,28.956
			l-48.762-24.381L75.179,436.047H36.572v30h58.917l46.479-116.198l48.762,24.381l18.067-45.17
			c10.057,6.635,22.088,10.511,35.012,10.511c11.336,0,21.981-2.987,31.215-8.195l53.868,134.671h56.632v-30h-36.321l-24.264-60.66
			c16.906,6.787,36.808,10.66,58.299,10.66c12.85,0,25.132-1.384,36.546-3.948l33.262,83.948H512v-30H473.43z M179.334,191.999h-30
			v-30h30V191.999z'
      />
    </g>
  </SvgIcon>
)
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
        >
          <IconAnt />
        </IconButton>
        <div>
          <Typography variant='h6' className={classes.title}>
            {'Visualization project lemin'}
          </Typography>
		  <Divider/>
          <Typography variant='subtitle2' className={classes.title}>
            {'Authors: Slynell, Vcaterpi'}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
