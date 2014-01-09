/* used to get rid of _blank so your code validates w3c stylee */
function setExternalLinks() {
  var el_list = document.getElementsByTagName('A');
  for (i=0; i<el_list.length; i++) {
    if (el_list[i].getAttribute('rel') == 'external') {
      el_list[i].setAttribute('target', '_blank');
    }
  }
}