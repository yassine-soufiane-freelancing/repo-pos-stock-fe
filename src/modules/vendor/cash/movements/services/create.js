import CashMouvement from "@/api/vendor/CashMouvement"
import validate from "./validate"


export default (app) => {
    if(!validate(app)) return false;

    const cashMouvement = {
        amount: app.amount,
        mouvement_type: app.type,
        mouvement_description: app.description,
        image_url: null
    }

    app.isLoading = true
    CashMouvement.create(cashMouvement)
    .then(
        res => success(app, res),
        err => fails(app, err)
    )
    .finally(
        () => app.isLoading = false
    );

}

const success = (app, res) => {
    if(res.data.status == 200) {
        app.$alert({
            body: 'Cash mouvement a été ajouté',
            type: 'success'
        })

        app.amount = 0;
        app.type = 'minus';
        app.description = 0;
    }

    
}


const fails = (app, err) => {
    app.$alert({
        body: 'quelque chose n\'a pas fonctionné',
        type: 'danger'
    })

    console.log(err);
}

