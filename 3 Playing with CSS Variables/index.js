const input = document.querySelectorAll('.controls input');

input.forEach(input => input.addEventListener('change',handleChange));

function handleChange (e) {
  console.log(this.value,this,this.name,this.dataset);
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
