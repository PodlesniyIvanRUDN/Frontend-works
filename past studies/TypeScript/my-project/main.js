import {el, setChildren} from 'redom'
import Navigo from 'navigo'

const router = new Navigo('/')

function navigate(e){
    e.preventDefault();
    router.navigate(e.target.getAttribute('href'))
}

function postPage(id){
    const body = el('p', 'Loading...')
    console.log(typeof id)
    fetch(`https://gorest.co.in/public/v2/posts/${id}`).then(async(res) => {
        const data = await res.json();
        console.log(data);
        setChildren(body, [
            el('h2',data.title),
            el('p', data.body),
            el('a', {
                href: '/',
                onclick:navigate
            }, 'Return to list')

        ])
    })

    return el('div', {className: 'container'},[ el('h1', 'Post'), body ])

}

function postListPage(){
    const list = el('ul',el('li','loading...'))

    fetch(`https://gorest.co.in/public/v2/posts/`).then(async (res) =>{
        const data = await res.json();
        setChildren(list, data.map(post => el('li', el('a', {
            href: `post/${post.id}`,
            onclick:navigate
        }, post.title)
    )))
    })
    return el('div', {className: 'container'},[ el('h1', 'Post'), list ])
}

router.on('/', () => {setChildren(document.body, postListPage());} )

router.on('/post/:id', ({data: {id}}) => {setChildren(document.body, postPage(id));} )

router.resolve();