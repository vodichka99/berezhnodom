// ACCORDION
const accIt0 = document.getElementById('item0')
const accIt1 = document.getElementById('item1')
const accIt2 = document.getElementById('item2')
const accIt3 = document.getElementById('item3')
const accIt4 = document.getElementById('item4')

const items = [accIt0, accIt1, accIt2, accIt3, accIt4]

let x = 0
let y = 0

for(const key in items){
    items[key].addEventListener('click', function(){
        if(x == 0 || y != key){
            itemMark = document.getElementById(`mark${key}`)
            itemInner = document.getElementById(`inner${key}`)
            a = Number(key) - 1
            b = Number(key) + 1
            for(; a >= 0; a--){
                itMark = document.getElementById(`mark${a}`)
                itInner = document.getElementById(`inner${a}`)
                itMark.style = 'transform: rotate(90deg)'
                itInner.style = 'max-height: 0; margin-top: 0'
            }
            for(; b <= 4; b++){
                itMark = document.getElementById(`mark${b}`)
                itInner = document.getElementById(`inner${b}`)
                itMark.style = 'transform: rotate(90deg)'
                itInner.style = 'max-height: 0; margin-top: 0'
            }
            itemMark.style = 'transform: rotate(0)'
            itemInner.style = 'max-height: 150px; margin-top: 25px'
            x = 1
            y = key
        }else if(x == 1 || y == key){
            itemMark = document.getElementById(`mark${key}`)
            itemInner = document.getElementById(`inner${key}`)
            itemMark.style = 'transform: rotate(90deg)'
            itemInner.style = 'max-height: 0; margin-top: 0'
            x = 0
        }
    })
}
