/// <reference path="../../node_modules/@types/whatwg-fetch/index.d.ts" />

import Searcher from '../interface/searcher';
import Conditions from '../model/conditions';

const url:string = 'http://kn.ndl.go.jp/api/search?searchPattern=simple';

/** interfaceの実装 **/
const search: Searcher<Conditions> = (condition) => {
    return new Promise((resolve, reject) => {
        let target = url + '&keyword=' + encodeURIComponent(condition.keyword)
        console.log(target)
        
        fetch(target)
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                resolve(json)
            }).catch(function(ex) {
                reject('search ng!!!')
            })
    });  
};

export default search;
