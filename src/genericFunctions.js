export function renderElementIntoTarget({ elementId, elementType, content, elementClass, targetId }) {
    const element = document.createElement(elementType);
    element.id = elementId;
    element.innerHTML = content;
    element.className = elementClass;
    document.getElementById(targetId).appendChild(element);
}