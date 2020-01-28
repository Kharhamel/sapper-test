import { writable } from 'svelte/store';
import {User} from "../../models/user";

function createAuthUser() {
    const {subscribe, set, update, get} = writable(new User);
    
    return {
        subscribe,
        login: () => set(new User),
        logout: () => set(null),
    }
}

export const authUser = createAuthUser();