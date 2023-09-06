import { frontendUrl, backendUrl } from "@/config/app"


export default {
    install(app) {
        app.config.globalProperties.$frontend = (path) => frontendUrl + path;
        app.config.globalProperties.$backend = (path) => backendUrl + path;

        app.config.globalProperties.$alert = function(alert) {
            this.$store.dispatch('alert/toggleAlert', alert);
        }
    }
}