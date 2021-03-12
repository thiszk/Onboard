export function renderElementIntoTarget({ elementId, elementType, content, elementClass, targetId }) {
    const element = document.createElement(elementType);
    element.id = elementId;
    element.innerHTML = content;
    element.className = elementClass;
    document.getElementById(targetId).appendChild(element);
}

export function changeInnerHTML(elementId, newContent) {
    const element = document.getElementById(elementId);
    element.innerHTML = newContent;
}

export function loadState(array) {
    array.forEach(element => {document.getElementById(element).classList.add("loader"); });
}

export function removeLoadState(array) {
    array.forEach(element => {document.getElementById(element).classList.remove("loader"); });
}