const dataUrlList = document.querySelectorAll('[data-url]')
dataUrlList.forEach(function(element) {
    const link = element.getAttribute('data-url');
    element.setAttribute('href', link)
})