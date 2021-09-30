import React, { useState, useContext } from 'react'
import { Modal, TextField, Button } from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import { Context } from 'store/store'
import useStyles from './CreateRoleModal.styles'

type PropsType = {
    isOpen: boolean
    onCreate: (role: string) => void
    onClose: () => void
}

const CreateRoleModal = ({ isOpen, onCreate, onClose }: PropsType) => {
    const [role, setRole] = useState('')
    const [error, setError] = useState('')

    const { state } = useContext(Context)

    const classes = useStyles()

    const handleChangeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRole(e.target.value)
    }

    const handleCreateRole = () => {
        setError('')

        if (role.trim() === '') {
            setError('Role name should not be empty')
            return
        }

        if (state.roles.find(item => item.name === role)) {
            setError('Role with the same name already exists. Please try another name')
            return
        }

        onCreate(role)
    }

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
        >
            <div className={classes.container}>
                <h3 className={classes.title}>Create New Role</h3>
                <TextField
                    label="Name"
                    className={classes.roleInput}
                    helperText={<span className={classes.error}>{error}</span>}
                    onChange={handleChangeRole}
                />
                <Button variant="contained" color="primary" onClick={handleCreateRole}>
                    Create
                </Button>
                <CancelIcon className={classes.closeIcon} onClick={onClose} />
            </div>
        </Modal>

    )
}

export default CreateRoleModal