export default (app) => {
    if(!app.name) {
        app.errors.name = 'le champ du nom est obligatoire'
        return false;
    }

    if(!app.image) {
        app.errors.image = 'le champ du image est obligatoire'
        return false;
    }

    return true;
}