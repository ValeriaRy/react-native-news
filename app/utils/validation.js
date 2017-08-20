import loginData from '../login.json';

export function validation(user) {
    for (let i=0; i < loginData.users.length; i++) {
         if ((user.login === loginData.users[i].login) && (user.password === loginData.users[i].password)) {
            return true
        }
    }

    return false;
}
