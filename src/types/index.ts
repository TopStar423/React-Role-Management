export type RoleType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

export type StateType = {
    roles: RoleType[]
}