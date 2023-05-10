const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'textfield': appendTextField(label)
            break
    }

}

const appendText = (label = "Default") => {

    let elem = document.createElement('div')
    let input = document.createElement('input')
    let remove = document.createElement('button')
    let checkbox = document.createElement('input')

    elem.setAttribute('class', 'input-group mt-2 input-group-text')
    input.setAttribute('placeholder', label)
    input.setAttribute('class', 'form-control')
    remove.setAttribute('class', 'btn btn-danger input-group-text')
    remove.textContent = 'X'
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'form-check-input')
    
    elem.append(checkbox)
    elem.append(input)
    elem.append(remove)

    remove.addEventListener('click', () => {
        elem.parentNode.removeChild(elem);
    });

    document.querySelector('#display').append(elem)

}

const appendButton = (label = "Default") => {

    let elem = document.createElement('div')
    let button = document.createElement('button')
    let remove = document.createElement('button')
    let checkbox = document.createElement('input')

    elem.setAttribute('class', 'input-group mt-2 input-group-text')
    button.setAttribute('class', 'btn btn-primary form-control')
    remove.setAttribute('class', 'btn btn-danger input-group-text')
    remove.textContent = 'X'
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', 'form-check-input')
    
    button.textContent = label
    elem.append(checkbox)
    elem.append(button)
    elem.append(remove)

    remove.addEventListener('click', () => {
        elem.parentNode.removeChild(elem);
    });

    document.querySelector('#display').append(elem)

}

const appendTextField = (label = "Default") => {
    let elem = document.createElement("div");
    let input = document.createElement("textarea");
    let remove = document.createElement("button");
    let checkbox = document.createElement("input");
  
    elem.setAttribute("class", "input-group mt-2 align-items-center input-group-text");
    input.setAttribute("placeholder", label);
    input.setAttribute("class", "form-control");
    input.style.height = "50px";
    remove.setAttribute("class", "btn btn-danger input-group-text");
    remove.textContent = "X";
    remove.style.height = "50px";
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input");
  
    elem.append(checkbox);
    elem.append(input);
    elem.append(remove);
  
    remove.addEventListener("click", () => {
      elem.parentNode.removeChild(elem);
    });
  
    document.querySelector("#display").append(elem);
  };
  
const removeSelected = () => {
    let selectedElements = document.querySelectorAll('input[type=checkbox]:checked');
    selectedElements.forEach(elem => {
        elem.parentNode.remove();
    });
}
