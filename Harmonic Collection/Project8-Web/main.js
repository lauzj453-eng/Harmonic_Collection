let cameraIndex = 0;
let bucketIndex = 0;
let hangerIndex = 0;

// Image arrays
const cameraImages = ['images/Oasis.jpg', 'images/blondie.jpg'];
const bucketImages = ['images/Oasis.jpg', 'images/oasisnaranja.jpg', 'images/Oasisverde.jpg', 'images/oasisturquesa.jpg'];
const hangerImages = ['images/blondie.jpg', 'images/blondiecorazones.jpg'];

// Camera button function
function cameraClick() {
    cameraIndex = (cameraIndex + 1) % cameraImages.length;
    document.getElementById('characterImage').src = cameraImages[cameraIndex];
    alert('Camera clicked! Image: ' + cameraImages[cameraIndex]);
}

// Bucket button function
function bucketClick() {
    bucketIndex = (bucketIndex + 1) % bucketImages.length;
    document.getElementById('characterImage').src = bucketImages[bucketIndex];
    alert('Bucket clicked! Image: ' + bucketImages[bucketIndex]);
}

// Hanger button function
function hangerClick() {
    hangerIndex = (hangerIndex + 1) % hangerImages.length;
    document.getElementById('characterImage').src = hangerImages[hangerIndex];
    alert('Hanger clicked! Image: ' + hangerImages[hangerIndex]);
}

// Restart button function
function restartClick() {
    cameraIndex = 0;
    bucketIndex = 0;
    hangerIndex = 0;
    document.getElementById('characterImage').src = 'images/Oasis.jpg';
    alert('Restarted!');
}