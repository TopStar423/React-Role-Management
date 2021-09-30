import React, { useState, useContext, useEffect } from 'react'
import { InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { v4 as uuid } from 'uuid'
import Role from 'components/Role'
import CreateRoleModal from 'components/CreateRoleModal'
import { RoleType } from 'types'
import { Context } from 'store/store'
import { CREATE_ROLE } from 'store/action'
import roleUseStyles from 'assets/styles/Role.styles'
import useStyles from './Roles.styles'

type SortBy = {
    key: string
    status: number
}

const Roles = () => {
    const { state, dispatch } = useContext(Context)

    const [isOpenCreateRoleModal, setIsOpenCreateRoleModal] = useState(false)
    const [roles, setRoles] = useState<RoleType[]>([])
    const [searchKey, setSearchKey] = useState('')
    const [sortBy, setSortBy] = useState({ key: '', status: 0 })

    const classes = useStyles()
    const roleClasses = roleUseStyles()

    const handleOpenCreateRoleModal = () => {
        setIsOpenCreateRoleModal(true)
    }

    const handleCloseCreateRoleModal = () => {
        setIsOpenCreateRoleModal(false)
    }

    const handleSort = (sortKey: string) => {
        if (sortKey === sortBy.key) {
            setSortBy({
                ...sortBy,
                status: (sortBy.status + 1) % 3,
            })

            return
        }

        setSortBy({
            key: sortKey,
            status: 1,
        })
    }

    const handleCreateRole = (roleName: string) => {
        const newRole: RoleType = {
            id: uuid(),
            name: roleName,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        dispatch({
            type: CREATE_ROLE,
            payload: newRole,
        })
        setIsOpenCreateRoleModal(false)
    }

    const handleChangeSearchKey = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(e.target.value)
    }

    useEffect(() => {
        const filteredRoles = state.roles.filter(role => role.name.toLowerCase().includes(searchKey.trim().toLowerCase()))
        if (sortBy.status === 1) {
            filteredRoles.sort((role1, role2) => {
                if (sortBy.key === 'name' || sortBy.key === 'createdAt' || sortBy.key === 'updatedAt') {
                    if (role1[sortBy.key] > role2[sortBy.key])  {
                        return 1
                    }
                    if (role1[sortBy.key] < role2[sortBy.key])  {
                        return -1
                    }

                    return 0
                }

                return 0
            })
        } else if (sortBy.status === 2) {
            filteredRoles.sort((role1, role2) => {
                if (sortBy.key === 'name' || sortBy.key === 'createdAt' || sortBy.key === 'updatedAt') {
                    if (role1[sortBy.key] > role2[sortBy.key])  {
                        return -1
                    }
                    if (role1[sortBy.key] < role2[sortBy.key])  {
                        return 1
                    }

                    return 0
                }

                return 0
            })
        }

        setRoles(filteredRoles)
    }, [state.roles, searchKey, sortBy])

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Role Management</h1>
            <div className={classes.roleActions}>
                <div className={classes.filter}>
                    <TextField
                        label="Search by role name"
                        InputProps={{
                            startAdornment:
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>,
                        }}
                        onChange={handleChangeSearchKey}
                    />
                </div>
                <button className={classes.btnCreateRole} onClick={handleOpenCreateRoleModal}>
                    Create New Role
                </button>
            </div>
            {isOpenCreateRoleModal && (
                <CreateRoleModal
                    isOpen={isOpenCreateRoleModal}
                    onCreate={handleCreateRole}
                    onClose={handleCloseCreateRoleModal}
                />
            )}
            <div className={classes.roleList}>
                <div className={classes.roleListHeader}>
                    <div className={roleClasses.roleName} onClick={() => handleSort('name')}>
                        Name
                        {sortBy.key === 'name' && sortBy.status === 1 && <ArrowDownwardIcon />}
                        {sortBy.key === 'name' && sortBy.status === 2 && <ArrowUpwardIcon />}
                    </div>
                    <div className={roleClasses.roleCreatedAt} onClick={() => handleSort('createdAt')}>
                        Created
                        {sortBy.key === 'createdAt' && sortBy.status === 1 && <ArrowDownwardIcon />}
                        {sortBy.key === 'createdAt' && sortBy.status === 2 && <ArrowUpwardIcon />}
                    </div>
                    <div className={roleClasses.roleUpdatedAt} onClick={() => handleSort('updatedAt')}>
                        Last Modified
                        {sortBy.key === 'updatedAt' && sortBy.status === 1 && <ArrowDownwardIcon />}
                        {sortBy.key === 'updatedAt' && sortBy.status === 2 && <ArrowUpwardIcon />}
                    </div>
                    <div className={roleClasses.roleItemAction} />
                </div>
                {roles.map(role => (
                    <Role role={role} key={role.id} />
                ))}
            </div>
        </div>
    )
}

export default Roles