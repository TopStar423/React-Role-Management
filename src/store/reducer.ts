import {CREATE_ROLE, DELETE_ROLE, UPDATE_ROLE,} from './action';
import {RoleType, StateType} from 'types'

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
            type: Key;
        }
        : {
            type: Key;
            payload: M[Key];
        }
};

type RolePayload = {
    [CREATE_ROLE] : RoleType
    [UPDATE_ROLE]: RoleType
    [DELETE_ROLE]: string
}

export type RoleActions = ActionMap<RolePayload>[keyof ActionMap<RolePayload>];

const Reducer = (state: StateType, action: RoleActions) => {
    let roles: RoleType[] = []

    switch (action.type) {
        case CREATE_ROLE:
            return {
                ...state,
                roles: [...state.roles, action.payload],
            };
        case UPDATE_ROLE:
            roles = []
            state.roles.map(role => {
                if (role.id === action.payload.id) {
                    roles.push(action.payload)
                } else {
                    roles.push(role)
                }
            })

            return {
                ...state,
                roles,
            }
        case DELETE_ROLE:
            return {
                ...state,
                roles: state.roles.filter(role => role.id !== action.payload),
            };
        default:
            return state;
    }
};

export default Reducer;
