document.querySelector('.sort-asc').onclick = function () {
    mySort('data-price')
}
document.querySelector('.sort-desc').onclick = function () {
    mySortDesc('data-price')
}
document.querySelector('.sort-name').onclick = function () {
    mySortAlf('data-name')
}

function mySort(sortType) {
    let nav = document.querySelector('.catalog')
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i])
            }
        }
    }
}

function mySortDesc(sortType) {
    let nav = document.querySelector('.catalog')
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (+nav.children[i].getAttribute(sortType) < +nav.children[j].getAttribute(sortType)) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i])
            }
        }
    }
}

function mySortAlf(sortType) {
    let nav = document.querySelector('.catalog')
    for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
            if (nav.children[i].getAttribute(sortType) > nav.children[j].getAttribute(sortType)) {
                replacedNode = nav.replaceChild(nav.children[j], nav.children[i])
                insertAfter(replacedNode, nav.children[i])
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}