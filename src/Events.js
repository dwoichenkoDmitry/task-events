import { doc } from 'prettier';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    document.body.innerHTML += '<button>Удали меня</button>';
    document.querySelector('button').onclick = function (e) {
        e.currentTarget.remove();
    };
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    document.body.innerHTML += '<ul></ul>';
    for (let i = 0; i < arr.length; i++) {
        document.querySelector('ul').innerHTML += '<li>' + arr[i] + '</li>';
    }
    const currElement = document.querySelectorAll('li');
    for (let i = 0; i < currElement.length; i++) {
        currElement[i].addEventListener('mouseover', function (e) {
            e.currentTarget.title = arr[i];
        });
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.innerHTML += '<a href="https://tensor.ru/">tensor</a>';
    let countClick = 0;
    document.querySelector('a').addEventListener('click', function (e) {
        countClick++;
        if (countClick === 1) {
            document.querySelector('a').innerHTML +=
                ' ' + document.querySelector('a').href;
            e.preventDefault();
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    function createElement(parent, tag, text, eventName, event) {
        const element = document.createElement(tag);
        if (text) {
            element.appendChild(document.createTextNode(text));
        }
        if (event) {
            element.addEventListener(eventName, event);
        }
        parent.appendChild(element);
        return element;
    }

    const ul = createElement(document.body, 'ul');

    const addTextOnLi = (e) => {
        e.target.innerHTML += '!';
    };

    const createItemLi = () => {
        createElement(ul, 'li', 'Пункт', 'click', addTextOnLi);
    };

    createElement(
        document.body,
        'button',
        'Добавить пункт',
        'click',
        createItemLi,
    );

    createItemLi();
}
