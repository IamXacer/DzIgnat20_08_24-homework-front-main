import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            const SortState = [...state].sort((a,b)=>{
                if(action.payload === 'up'){
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            })
            return SortState;
        }

        case 'check': {

            return state.filter(u=>u.age >= action.payload)
        }
        default:
            return state
    }
}


