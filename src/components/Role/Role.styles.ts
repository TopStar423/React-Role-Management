import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
    },
    editIcon: {
        width: 20,
        height: 20,
        cursor: 'pointer',
        color: '#4dcb2b',
    },
    deleteIcon: {
        width: 20,
        height: 20,
        cursor: 'pointer',
        color: '#dc2f2f',
    },
}))

export default useStyles