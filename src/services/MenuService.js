export default class MenuService {
    menus = [
        "Composition API",
        "Provide/Inject",
        "Mixins",
        "Async Component",
        "Custom Directives",
        "Teleport",
        "TS",
    ];

    list() {
        return this.menus;
    }
}
