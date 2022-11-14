function createH1(props) {
    return [document.createElement('h1')].map(ele => {
        Object
            .entries({...props, 'data-id': 'subject'})
            .forEach(([name, value]) => ele.setAttribute(name, value))
        return ele;
    })[0];
}

function createDiv(props) {
    return [document.createElement('div')].map(ele => {
        Object
            .entries({...props, 'data-id': 'layout'})
            .forEach(([name, value]) => ele.setAttribute(name, value))
        return ele;
    })[0];
}

const createMap = {
    h1: createH1,
    div: createDiv,
};

const coupler = map => (type, props) => map[type](props);
const createElement = coupler(createMap);
