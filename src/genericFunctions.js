export function renderElementIntoDestiny(elementId, elementType, content, elementClass, destinyId) {
    const element = document.createElement(elementType);
    element.id = elementId;
    element.innerHTML = content;
    element.className = elementClass;
    document.getElementById(destinyId).appendChild(element);
}
 