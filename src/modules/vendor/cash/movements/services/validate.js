export default (app) => {
    if(!app.amount) {
        app.errors.amount = 'le champ du montant est obligatoire'
        return false;
    }
    
    if(app.amount < 1) {
        app.errors.amount = 'le champ du montant doit être supérieur à 0'
        return false;
    }

    if(!app.description) {
        app.errors.image = 'le champ du description est obligatoire'
        return false;
    }

    return true;
}