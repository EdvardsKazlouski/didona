export default function (state) {
    return {
        route: state.routerReducer.currentRoute,
    };
}