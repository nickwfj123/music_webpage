var x = document.getElementsByTagName("header")[0];
function toggleNav() {
    if (x.className === "") {
        x.className = "openNav";
    } else {
        x.className = "";
    }
}
document.querySelector("#hamburger").addEventListener("click", toggleNav);
