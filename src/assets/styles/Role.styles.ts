import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    roleName: {
        width: '32%',
        paddingLeft: 5,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    roleCreatedAt: {
        width: '30%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    roleUpdatedAt: {
        width: '30%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    },
    roleItemAction: {
        width: '8%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
}))

export default useStyles