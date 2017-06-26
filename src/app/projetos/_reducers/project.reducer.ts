export const projects = (state: any = [], {type, payload}) => {
    switch (type) {
        case 'ADD_PROJECTS':
            return payload;
        case 'CREATE_PROJECT': 
            return [...state, payload];
        case 'UPDATE_PROJECT':
            return state.map(project => {
                return project.token === payload.token ? Object.assign({}, project, payload): project;
            });
        case 'DELETE_PROJECT': 
            return state.filter(project => {
                return project.token !== payload.token;
            });
        default: 
            return state;
    }
}