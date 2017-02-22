import Feed from './model/feed'
import Conditions from './model/conditions'
import search from './service/searchService'

window.onload = () => {

    const feed = new Feed()
    const target:Element = document.querySelector('.container .row')
    const loading:Element = document.querySelector('.loading')

    /**
     * function render(json) {
     * }
     * と同じ
     */
    const render = (json:any) => {
        try {
            console.log(json)
            target.innerHTML = ''

            for(let i = 0; i < json.response.docs.length; i++) {
                target.appendChild(feed.getFeed(json.response.docs[i]))
            }
        } catch(ex) {
            console.log(ex)
        }
    }

    const sleep = (time:Number) => {
        const d1:any = new Date()
        while (true) {
            const d2:any = new Date()
            if (d2 - d1 > time) {
                break
            }
        }
    }

    document.querySelector(".btn-outline-success").addEventListener('click', () => {
            /** try-catch書けます **/
            try {
                target.innerHTML = ''
                console.log(loading)
                target.appendChild(loading.cloneNode(true))
                sleep(500)

                let conditions = new Conditions((<HTMLInputElement>document.querySelector('.form-control')).value)
                search(conditions)
                    .then(render)
                    .catch(window.alert)
            } catch(ex) {
                console.log(ex)
            }
        }
    )
}



