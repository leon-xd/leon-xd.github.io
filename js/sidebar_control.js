function ActivateClass(element) {
    var currentActive = document.querySelectorAll("a.active");
    currentActive.forEach(item => item.classList.remove("active"));
    element.classList.add("active");
}