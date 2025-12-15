// Store all concert memories
let concerts = [];
let currentMemory = {};
let selectedRating = 0;

// Go to add new memory
function goToAddMemory() {
    currentMemory = {};
    selectedRating = 0;
    document.getElementById('artist-name').value = '';
    document.getElementById('venue-name').value = '';
    document.getElementById('concert-date').value = '';
    document.getElementById('photo-caption').value = '';
    document.getElementById('photo-preview').style.display = 'none';
    clearStars();
    
    showScreen('info-screen');
}

// Go to rating screen
function goToRating() {
    let artist = document.getElementById('artist-name').value;
    let venue = document.getElementById('venue-name').value;
    let date = document.getElementById('concert-date').value;
    
    if (!artist) {
        alert('Please enter the artist/band name!');
        return;
    }
    
    currentMemory.artist = artist;
    currentMemory.venue = venue || 'Unknown Venue';
    currentMemory.date = date || 'Unknown Date';
    
    showScreen('rating-screen');
}

// Set star rating
function setRating(rating) {
    selectedRating = rating;
    currentMemory.rating = rating;
    
    // Update star display
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star, index) {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    
    // Update rating text
    let ratingTexts = ['', 'Not Great', 'It Was OK', 'Pretty Good!', 'Amazing!', 'BEST SHOW EVER!'];
    document.getElementById('rating-text').textContent = ratingTexts[rating];
}

function clearStars() {
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star) {
        star.classList.remove('active');
    });
    document.getElementById('rating-text').textContent = 'Click the stars!';
}

// Go to photo screen
function goToPhoto() {
    if (selectedRating === 0) {
        alert('Please rate the concert first!');
        return;
    }
    showScreen('photo-screen');
}

// Preview uploaded photo
function previewPhoto() {
    let input = document.getElementById('photo-input');
    let preview = document.getElementById('photo-preview');
    
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            currentMemory.photo = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Save the memory
function saveMemory() {
    let caption = document.getElementById('photo-caption').value;
    currentMemory.caption = caption;
    currentMemory.id = Date.now();
    
    concerts.push(currentMemory);
    
    alert('Memory saved! 🎸');
    goHome();
}

// View all memories
function goToViewMemories() {
    let container = document.getElementById('memories-container');
    container.innerHTML = '';
    
    if (concerts.length === 0) {
        container.innerHTML = '<p class="no-memories">No memories yet! Add your first concert.</p>';
    } else {
        concerts.forEach(function(concert) {
            let card = document.createElement('div');
            card.className = 'memory-card';
            
            let stars = '';
            for (let i = 0; i < concert.rating; i++) {
                stars += '★';
            }
            
            let photoHTML = '';
            if (concert.photo) {
                photoHTML = '<img src="' + concert.photo + '">';
            }
            
            let captionHTML = '';
            if (concert.caption) {
                captionHTML = '<p><em>"' + concert.caption + '"</em></p>';
            }
            
            card.innerHTML = `
                <h3>${concert.artist}</h3>
                <p><strong>Venue:</strong> ${concert.venue}</p>
                <p><strong>Date:</strong> ${concert.date}</p>
                <p style="color: #ff9ed5; font-size: 24px;">${stars}</p>
                ${captionHTML}
                ${photoHTML}
            `;
            
            container.appendChild(card);
        });
    }
    
    showScreen('memories-screen');
}

// Go back to home
function goHome() {
    showScreen('intro-screen');
}

// Show specific screen
function showScreen(screenId) {
    let screens = document.querySelectorAll('.screen');
    screens.forEach(function(screen) {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}