import x from './x.js'
import image from './assets/1.png'

const div =document.getElementById('app')
div.innerHTML = `
<img src='${image}'>
`

const button = document.createElement('button')
button.innerText = '点击懒加载'
button.onclick=()=>{
    const promise = import('./lazy.js') //异步
    promise.then((module)=>{
        const fn = module.default 
        fn()
    },
    ()=>{
console.log('加载错误')
    })
}

div.appendChild(button)