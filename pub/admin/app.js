export default class App {
    constructor({Vue$}) {


        this.load = async () => {
            const url_tmpl = import.meta.url.replace(".js", ".html");
            const response = await fetch(url_tmpl);
            const template = await response.text();

            Vue$.component("AppMain", {
                template
            });
        }
    }


}