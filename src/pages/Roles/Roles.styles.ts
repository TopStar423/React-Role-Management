import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        padding: '20px 80px',
    },
    title: {
        fontSize: 40,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        marginBottom: 50,
        textAlign: 'center',
    },
    roleActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    filter: {
        height: 40,
    },
    btnCreateRole: {
        padding: '10px 20px',
        backgroundColor: '#1cdfb2',
        border: 'none',
        borderRadius: 10,
        fontSize: 16,
        color: '#fff',
        cursor: 'pointer',
    },
    roleList: {
        marginTop: 20,
    },
    roleListHeader: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 40,
        background: '#eee',
    },
}))

export default useStyles