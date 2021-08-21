let count=0; 
let counter = document.querySelector('.Counter');
counter.innerHTML = count;

document.getElementById('pp').addEventListener('click', () =>
{
    count++;
    counter.innerHTML = count; 
}); 

document.getElementById('mm').addEventListener('click', () =>
{
    count--;
    count = (count<0)? 0: count; /* Cannot go lower than zero */
    counter.innerHTML = count; 
}); 
