// Get elements by reference
let file = document.getElementById("files");
let columns = document.querySelectorAll(".column");

let arrImg = [];

file.onchange = () => {
    for(let key in file.files) {
        const element = file.files[key];

        if(element.type === 'image/jpeg' || element.type === 'image/png') {
            let parentColumn = getMinParent(columns);
            let img = createElementImg(element.webkitRelativePath);
            arrImg[key] = img;
            parentColumn.appendChild(img);

            // animate image
            let i = 0;
            let clearTime = setInterval(() => {
                arrImg[i].setAttribute("style", "display: initial");
                arrImg[i].classList.add("animated", "zoomln");
                i++;
                i == arrImg.length ? clearInterval(clearTime) : undefined;
            }, 400);
        }
    }
}

function getMinParent(parentNode) {
    let arry = [];

    parentNode.forEach((element, i) => {
        arry[i] = element.children.length;
    });

    let min = Math.min.apply(null, arry);

    for(let i = 0; i < parentNode.length; i++) {
        if(parentNode[i].children.length == min) {
            return parentNode[i];
        }
    }
}

// Create img element
function createElementImg(imgSrc) {
    let img = document.createElement("img");
    img.setAttribute("src", imgSrc);
    img.className = "img";
    return img;
}