export default class MenuService {
    menus = [
        "Composition API",
        "Provide/Inject",
        "Mixins",
        "Async Component",
        "Custom Directives",
    ];

    list() {
        return this.menus;
    }
}
