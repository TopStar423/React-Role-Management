import React, { useState, useContext } from 'react'
import { Modal, TextField, Button } from '@material-ui/core'
import { Context } from 'store/store'
import { UPDATE_ROLE } from 'store/action'
import { RoleType } from 'types'
import useStyles from './EditRoleModal.styles'
import CancelIcon from '@material-ui/icons/Cancel'

type PropsType = {
    isOpen: boolean
    role: RoleType
    onClose: () => void
}

const EditRoleModal = ({ isOpen, role, onClose }: PropsType) => {
    const [roleName, setRoleName] = useState(role.name)
    const [error, setError] = useState('')

    const { state, dispatch } = useContext(Context)

    const classes = useStyles()

    const handleChangeRoleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRoleName(e.target.value)
    }

    const handleUpdateRole = () => {
        setError('')

        if (roleName.trim() === '') {
            setError('Role name should not be empty')
            return
        }

        if (state.roles.find(item => item.id !== role.id && item.name === roleName)) {
            setError('Role with the same name already exists. Please try another name')
            return
        }

        dispatch({
            type: UPDATE_ROLE,
            payload: {
                ...role,
                name: roleName,
                updatedAt: new Date(),
            },
        })

        onClose()
    }

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
        >
            <div className={classes.container}>
                <h3 className={classes.title}>Update Role</h3>
                <TextField
                    label="Name"
                    className={classes.roleInput}
                    helperText={<span className={classes.error}>{error}</span>}
                    value={roleName}
                    onChange={handleChangeRoleName}
                />
                <Button variant="contained" color="primary" onClick={handleUpdateRole}>
                    Update
                </Button>
                <CancelIcon className={classes.closeIcon} onClick={onClose} />
            </div>
        </Modal>

    )
}

export default EditRoleModal