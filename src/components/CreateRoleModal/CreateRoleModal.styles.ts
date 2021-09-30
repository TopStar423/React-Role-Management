import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        padding: 32,
        outline: 'none',
        boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        margin: 0,
    },
    roleInput: {
        width: '100%',
        height: 50,
        fontSize: 14,
        marginTop: 20,
        marginBottom: 30,
    },
    error: {
        color: '#f00',
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        right: 20,
        cursor: 'pointer',
    },
}))

export default useStyles