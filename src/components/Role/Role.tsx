import React, { useState, useContext } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { RoleType } from 'types'
import { Context } from 'store/store'
import { DELETE_ROLE } from 'store/action'
import { getDateTimeString } from 'helpers/time'
import EditRoleModal from 'components/EditRoleModal'
import ConfirmDialog from 'components/ConfirmDialog'
import roleUseStyles from 'assets/styles/Role.styles'
import useStyles from './Role.styles'

type PropsType = {
    role: RoleType
}

const Role = ({ role }: PropsType) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false)
    const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState(false)

    const { dispatch } = useContext(Context)

    const classes = useStyles()
    const roleClasses = roleUseStyles()

    const handleOpenEditModal = () => {
        setIsOpenEditModal(true)
    }

    const handleCloseEditModal = () => {
        setIsOpenEditModal(false)
    }

    const handleOpenDeleteConfirmDialog = () => {
        setIsOpenConfirmDialog(true)
    }

    const handleCloseDeleteConfirmDialog = () => {
        setIsOpenConfirmDialog(false)
    }

    const handleDeleteRole = () => {
        dispatch({
            type: DELETE_ROLE,
            payload: role.id,
        })
        setIsOpenConfirmDialog(false)
    }

    return (
        <div className={classes.container}>
            <div className={roleClasses.roleName}>{role.name}</div>
            <div className={roleClasses.roleCreatedAt}>{getDateTimeString(role.createdAt)}</div>
            <div className={roleClasses.roleUpdatedAt}>{getDateTimeString(role.updatedAt)}</div>
            <div className={roleClasses.roleItemAction}>
                <EditIcon className={classes.editIcon} onClick={handleOpenEditModal} />
                <DeleteIcon className={classes.deleteIcon} onClick={handleOpenDeleteConfirmDialog} />
            </div>
            {isOpenEditModal && (
                <EditRoleModal
                    isOpen={isOpenEditModal}
                    role={role}
                    onClose={handleCloseEditModal}
                />
            )}
            {isOpenConfirmDialog && (
                <ConfirmDialog onConfirm={handleDeleteRole} onClose={handleCloseDeleteConfirmDialog} />
            )}
        </div>
    )
};

export default Role