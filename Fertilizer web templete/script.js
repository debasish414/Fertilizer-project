/* ****************   About section   **************** */

const star = document.querySelectorAll(".star")
let selectrdStar = -1;
star.forEach((item, index) => {
    // console.log(item);
    item.dataset.rating = index + 1
    item.addEventListener('mouseover', handlemouseover)
    item.addEventListener('click', handleclick)
    item.addEventListener('mouseleave', handlemouseleave)
});

function handlemouseover(e) {
    // console.log(e.target.dataset.rating);
    let output = e.target.dataset.rating;
    if (!output) return;
    else handleUpdate(output);
};

function handleUpdate(getCurrentValue) {
    for (let i = 0; i < 5; i++) {
        if (i < getCurrentValue) {
            star[i].classList.replace('star', 'star-u')
        } else {
            star[i].classList.replace('star-u', 'star')
        }
    }
};

function handleclick(e) {
    // console.log(e.target.dataset.rating);
    let output = e.target.dataset.rating;
    selectrdStar = output
    handleUpdate(selectrdStar)

};
function handlemouseleave(e) {
    // console.log(e.target.dataset.rating);
    handleUpdate(selectrdStar)
};

/* ****************   Product section   **************** */

let cartButton = document.querySelectorAll(".cartBtn");

        let count = '0';
        function upadate() {
            // console.log(count);
            document.getElementById("myCart").innerHTML = count;
        }
        Array.from(cartButton).forEach((btn) => {
            btn.addEventListener("click", function (e) {
                count++
                upadate()
            })
        });
