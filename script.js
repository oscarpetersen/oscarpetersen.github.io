var foto = document.getElementById('prof');
var button = document.getElementById('button1');

function photoAppear() {
  foto.style.display = 'inherit';
  button.onclick = photoDisappear;
  button.innerHTML = 'Klik om de foto te laten verdwijnen!';
}
function photoDisappear() {
  button.onclick = photoAppear;
  foto.style.display = 'none';
  button.innerHTML= 'Klik hier voor de foto!';

}
foto.style.display = 'none';
button.onclick = photoAppear;
