// actions
import * as SearchActions from '../../actions/search';
import * as DetailsPageActions from '../details-page/actions';

export function updateQuery (query) {
    SearchActions.updateQuery(query);
}

export function clear () {
    SearchActions.clear();
}

export function search (query) {
    SearchActions.search(query);
}

export function goToDetailsPage (id) {
    DetailsPageActions.openDetailsPage(id);
}
