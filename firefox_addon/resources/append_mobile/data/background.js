if (document.URL.indexOf('?') != -1)

var append = '&';

else

var append = '?';


if (document.URL.indexOf(‘mobile’) != -1)
{
 // wrong
}

else if (document.URL.indexOf('/YourDefiningString/') != -1)
{
window.location.replace(document.URL + append + 'mobile');
}

else if (document.URL.indexOf('/i/') != -1)
{
window.location.replace(document.URL + append + 'mobile');
}

