/// <reference path="../../node_modules/@types/whatwg-fetch/index.d.ts" />

import Searcher from '../interface/searcher';
import Conditions from '../model/conditions';

/** interfaceの実装 **/
const search: Searcher<Conditions> = (condition) => {
    try {
        return new Promise((resolve, reject) => {        
            window.fetch('http://kn.ndl.go.jp/api/search?searchPattern=simple' + '&keyword=' + encodeURIComponent(condition.keyword))
                .then(function(response) {
                    return response.json()
                }).then(function(json) {
                    console.log(json)
                    resolve(json)
                }).catch(function(ex) {
                    reject('search ng!!!')
                })
        })
    } catch (ex) {
        console.log(ex)
    }
}

export default search;
