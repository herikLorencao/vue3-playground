export default class MenuService {
    menus = ["Composition API", "Provide/Inject", "Mixins", "Async Component"];

    list() {
        return this.menus;
    }
}
