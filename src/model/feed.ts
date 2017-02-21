class Feed {
    constructor(
        private title:string = '',
        private details:Array<String> = []
    ) {}
 
    public getFeed = (doc:any):Node => {
        const template:Element = document.querySelector('.template')
        this.title = doc.top_title[0]
        this.details = ['creator: ' + ( doc.creator !== undefined ? doc.creator[0] : '' )
                        ,'publisher: ' + ( doc.publisher !== undefined ? doc.publisher[0] : '' )
                         ,'create: ' + ( doc.view_created !== undefined ? doc.view_created[0] : '')]
        template.querySelector('h3').innerHTML = this.title
        template.querySelector('p').innerHTML = this.details.join(' / ')

        return template.cloneNode(true)
    }
}
export default Feed;