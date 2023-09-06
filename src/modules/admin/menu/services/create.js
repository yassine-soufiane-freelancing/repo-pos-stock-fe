import Menu from "@/api/admin/Menu"
import validate from "./validate"


export default (app) => {
    if(!validate(app)) return false;

    const menu = {
        menu_name: app.name,
        image_url: app.image,
        slug: generateSlug(app.name)
    }

    app.isLoading = true
    Menu.create(menu)
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
            body: 'Menu a été ajouté',
            type: 'success'
        })

        app.name = '',
        app.image = null
    }

    
}


const fails = (app, err) => {
    app.$alert({
        body: 'quelque chose n\'a pas fonctionné',
        type: 'danger'
    })

    console.log(err);
}


const generateSlug = (text) => {
    return text
      .toLowerCase() // Convert the text to lowercase
      .replace(/[^a-zA-Z0-9-]/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/--+/g, '-') // Replace consecutive hyphens with a single hyphen
      .replace(/^-+|-+$/g, ''); // Trim hyphens from the beginning and end of the slug
  }