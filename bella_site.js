
        document.addEventListener('DOMContentLoaded', function() {
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            document.getElementById('departure-date').value = formattedDate;
            
            
            updateWeather();
            
            
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const closeMobileMenu = document.getElementById('closeMobileMenu');
            const mobileNav = document.getElementById('mobileNav');
            
            mobileMenuBtn.addEventListener('click', function() {
                mobileNav.classList.add('active');
            });
            
            closeMobileMenu.addEventListener('click', function() {
                mobileNav.classList.remove('active');
            });
        });
        
        
        function toggleFlightType(type) {
            
            document.getElementById('one-way-checkbox').classList.remove('checked');
            document.getElementById('round-trip-checkbox').classList.remove('checked');
            document.getElementById('multi-city-checkbox').classList.remove('checked');
            
            
            document.getElementById(`${type}-checkbox`).classList.add('checked');
        }
        
        
        function adjustPassenger(type, change) {
            const countElement = document.getElementById(`${type}-count`);
            let count = parseInt(countElement.textContent);
            
            count += change;
            
            
            if (count < 0) count = 0;
            
            
            countElement.textContent = count;
            
            
            const minusBtn = countElement.previousElementSibling;
            const plusBtn = countElement.nextElementSibling;
            
            if (count === 0) {
                minusBtn.disabled = true;
            } else {
                minusBtn.disabled = false;
            }
            
            
            const checkbox = minusBtn.closest('li').querySelector('.custom-checkbox');
            if (count > 0) {
                checkbox.classList.add('checked');
            } else {
                checkbox.classList.remove('checked');
            }
        }
        
        
        function searchFlights() {
            const flightType = document.querySelector('.custom-checkbox.checked').closest('.flight-option').querySelector('label').textContent;
            const departureDate = document.getElementById('departure-date').value;
            const adults = document.getElementById('adult-count').textContent;
            const children = document.getElementById('child-count').textContent;
            const infants = document.getElementById('infant-count').textContent;
            
        
            const dateObj = new Date(departureDate);
            const formattedDate = dateObj.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
            
            alert(`Searching flights: \n\nType: ${flightType}\nDate: ${formattedDate}\nPassengers: ${adults} Adult(s), ${children} Child(ren), ${infants} Infant(s)`);
        }
        
        
        function updateWeather() {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const today = new Date();
            document.getElementById('weather-day').textContent = days[today.getDay()];
            
            
            const temp = 17 + Math.floor(Math.random() * 3); 
            const humidity = 70 + Math.floor(Math.random() * 5);  
            const pressure = 1016 + Math.floor(Math.random() * 5); 
            const wind = (12 + Math.random() * 2).toFixed(2); 
            
            document.getElementById('temperature').textContent = `${temp}°C`;
            document.getElementById('humidity').textContent = `${humidity}%`;
            document.getElementById('pressure').textContent = pressure;
            document.getElementById('wind').textContent = `${wind} km/h`;
        }
        
        
        setInterval(updateWeather, 60000);