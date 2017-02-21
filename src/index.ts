import Feed from './model/feed'
import Conditions from './model/conditions'
import search from './service/searchService'

const feed = new Feed()

/**
 * function render(json) {
 * }
 * と同じ
 */
const render = (json:any) => {
    console.log(json)
    let element:Element = document.querySelector('.container .row')

    for(let i = 0; i < json.response.docs.length; i++) {
        element.appendChild(feed.getFeed(json.response.docs[i]))
    }
};

window.onload = () => {
    document.querySelector(".btn-outline-success").addEventListener('click' , () => {
            document.querySelector('.container .row').innerHTML = ''
            let conditions = new Conditions((<HTMLInputElement>document.querySelector('.form-control')).value)
            search(conditions)
                .then(render)
                .catch(window.alert) 
        }
    )
}



