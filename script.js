function random_image() {
  var imageA = "https://i.imgur.com/ZoEhVrQ.jpg";
  var imageB = "https://i.imgur.com/g16fIfr.jpg"; 

  var array_of_images = new Array ();
  console.log(array_of_images);
  array_of_images.push(imageA);
  array_of_images.push(imageB);
  // array_of_images.push(imageC);
  // array_of_images.push(imageD);
  // array_of_images.push(imageE);
  // array_of_images.push(imageF);
  // array_of_images.push(imageG);
  var choice = Math.floor(Math.random() * array_of_images.length);
  document.getElementById("container").innerHTML = "<img src='" 
      + array_of_images[choice] + "'></img>";
}