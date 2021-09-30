import Roles from 'pages/Roles'
import useStyles from './App.styles'

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Roles />
    </div>
  )
}

export default App
