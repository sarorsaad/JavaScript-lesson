let currentStep = 1;
const totalSteps = 6;

// Initialize visualization elements
document.addEventListener('DOMContentLoaded', () => {
    setupVisualization();
    updateControls();
});

function setupVisualization() {
    const vis = document.getElementById('visualization');
    
    // Add URL bar to browser (hidden initially)
    const urlBar = document.createElement('div');
    urlBar.className = 'url-bar';
    urlBar.id = 'urlBar';
    urlBar.textContent = 'Click to type URL';
    urlBar.style.display = 'none';
    urlBar.addEventListener('click', () => {
        if (currentStep === 1) {
            typeUrl();
        }
    });

    // Add device (browser)
    const device = document.createElement('div');
    device.className = 'animation-element device';
    device.id = 'device';
    device.style.left = '50px';
    device.style.top = '120px';
    device.innerHTML = 'Your Browser';
    device.appendChild(urlBar);
    vis.appendChild(device);

    // Add browser content
    const browserContent = document.createElement('div');
    browserContent.className = 'browser-content';
    browserContent.id = 'browserContent';
    browserContent.style.left = '20px';
    browserContent.style.top = '200px';
    browserContent.innerHTML = `
        <div class="google-logo"></div>
        <div class="search-box"></div>
    `;
    vis.appendChild(browserContent);

    // Add server
    const server = document.createElement('div');
    server.className = 'animation-element server';
    server.id = 'server';
    server.style.right = '50px';
    server.style.top = '90px';
    server.innerHTML = 'Web Server';
    vis.appendChild(server);

    // Add server content
    const serverContent = document.createElement('div');
    serverContent.className = 'server-content';
    serverContent.id = 'serverContent';
    serverContent.style.right = '150px';
    serverContent.style.top = '90px';
    vis.appendChild(serverContent);

    // Add packet (will be animated)
    const packet = document.createElement('div');
    packet.className = 'animation-element packet';
    packet.id = 'packet';
    packet.style.left = '150px';
    packet.style.top = '140px';
    packet.style.display = 'none';
    vis.appendChild(packet);
}

function resetVisualization() {
    // Reset all elements to their initial state
    const urlBar = document.getElementById('urlBar');
    const packet = document.getElementById('packet');
    const device = document.getElementById('device');
    const server = document.getElementById('server');
    const serverContent = document.getElementById('serverContent');
    const browserContent = document.getElementById('browserContent');

    // Reset URL bar
    urlBar.textContent = 'Click to type URL';
    urlBar.style.backgroundColor = '#fff';
    urlBar.style.display = 'none';

    // Reset device and server
    device.style.backgroundColor = '#fff';
    server.style.backgroundColor = '#2196F3';
    server.innerHTML = 'Web Server';

    // Hide all dynamic elements
    packet.style.display = 'none';
    serverContent.style.display = 'none';
    browserContent.style.display = 'none';

    // Reset to step 1
    currentStep = 1;
    showStep(1);
}

function typeUrl() {
    const urlBar = document.getElementById('urlBar');
    const text = 'https://google.com';
    let index = 0;
    
    // Reset the URL bar
    urlBar.textContent = '';
    urlBar.style.backgroundColor = '#e8f0fe';
    
    // Type the URL character by character
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            urlBar.textContent += text[index];
            index++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                urlBar.style.backgroundColor = '#fff';
            }, 500);
        }
    }, 50);
}

function showStep(step) {
    if (step < 1 || step > totalSteps) return;

    // Update buttons
    document.querySelectorAll('.step-button').forEach((btn, index) => {
        btn.classList.remove('active');
        if (index + 1 === step) btn.classList.add('active');
    });

    // Update content
    document.querySelectorAll('.step-content').forEach((content, index) => {
        content.classList.remove('active');
        if (index + 1 === step) content.classList.add('active');
    });

    // Update progress bar
    const progress = (step / totalSteps) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;

    // Update current step
    currentStep = step;
    updateControls();

    // Play animation for the current step
    playStepAnimation(step);
}

function playStepAnimation(step) {
    const packet = document.getElementById('packet');
    const device = document.getElementById('device');
    const server = document.getElementById('server');
    const serverContent = document.getElementById('serverContent');
    const browserContent = document.getElementById('browserContent');
    const urlBar = document.getElementById('urlBar');

    // Reset elements
    packet.style.display = 'none';
    device.style.backgroundColor = '#fff';
    server.style.backgroundColor = '#2196F3';
    serverContent.style.display = 'none';
    browserContent.style.display = 'none';

    switch(step) {
        case 1: // Initial Setup
            urlBar.style.display = 'block';
            server.innerHTML = 'Web Server';
            break;

        case 2: // DNS Lookup
            urlBar.style.display = 'block';
            packet.style.display = 'block';
            packet.style.backgroundColor = '#FFC107';
            server.innerHTML = 'DNS Server';
            animatePacket('right', () => {
                packet.style.backgroundColor = '#4CAF50';
                animatePacket('left');
            });
            break;

        case 3: // HTTP Request
            urlBar.style.display = 'block';
            packet.style.display = 'block';
            packet.style.backgroundColor = '#2196F3';
            server.innerHTML = 'Google Server';
            animatePacket('right');
            break;

        case 4: // Server Processing
            urlBar.style.display = 'block';
            server.style.backgroundColor = '#4CAF50';
            server.innerHTML = 'Google Server';
            serverContent.style.display = 'block';
            serverContent.innerHTML = `Processing request...
                <pre style="font-size:10px">
{
  "request": "GET /",
  "processing": true
}</pre>`;
            break;

        case 5: // Response
            urlBar.style.display = 'block';
            packet.style.display = 'block';
            packet.style.backgroundColor = '#9C27B0';
            server.innerHTML = 'Google Server';
            serverContent.style.display = 'block';
            serverContent.innerHTML = `Sending response...
                <pre style="font-size:10px">
{
  "status": 200,
  "type": "html"
}</pre>`;
            animatePacket('left');
            break;

        case 6: // Browser Rendering
            urlBar.style.display = 'block';
            browserContent.style.display = 'block';
            server.innerHTML = 'Google Server';
            device.style.backgroundColor = '#4CAF50';
            setTimeout(() => {
                device.style.backgroundColor = '#fff';
            }, 500);
            break;
    }
}

function animatePacket(direction, callback) {
    const packet = document.getElementById('packet');
    const startX = direction === 'right' ? 150 : 950;
    const endX = direction === 'right' ? 950 : 150;

    packet.style.left = `${startX}px`;
    
    setTimeout(() => {
        packet.style.left = `${endX}px`;
        if (callback) {
            setTimeout(callback, 500);
        }
    }, 100);
}

function nextStep() {
    if (currentStep < totalSteps) {
        showStep(currentStep + 1);
    }
}

function prevStep() {
    if (currentStep > 1) {
        showStep(currentStep - 1);
    }
}

function updateControls() {
    document.getElementById('prevBtn').disabled = currentStep === 1;
    document.getElementById('nextBtn').disabled = currentStep === totalSteps;
}
