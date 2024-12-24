const methodData = {
    GET: {
        color: '#4CAF50',
        explanation: `
            <h3>GET Request</h3>
            <p>Used to retrieve data from a server. The request parameters are sent as query parameters in the URL.</p>
            <ul>
                <li>Retrieves data only - should not modify server data</li>
                <li>Parameters included in URL</li>
                <li>Idempotent (multiple identical requests have same effect)</li>
                <li>Can be cached and bookmarked</li>
            </ul>
        `,
        example: `GET /api/users?id=123 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer token123`,
        requestBody: null,
        statusCode: '200 OK'
    },
    POST: {
        color: '#2196F3',
        explanation: `
            <h3>POST Request</h3>
            <p>Used to submit data to be processed to a specified resource. The data is sent in the request body.</p>
            <ul>
                <li>Creates new resources</li>
                <li>Data sent in request body</li>
                <li>Not idempotent</li>
                <li>Cannot be cached or bookmarked</li>
            </ul>
        `,
        example: `POST /api/users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer token123

{
    "name": "John Doe",
    "email": "john@example.com"
}`,
        requestBody: {
            name: "John Doe",
            email: "john@example.com"
        },
        statusCode: '201 Created'
    },
    PUT: {
        color: '#FF9800',
        explanation: `
            <h3>PUT Request</h3>
            <p>Used to update existing resources or create new ones if they don't exist. Replaces the entire resource.</p>
            <ul>
                <li>Updates existing resources</li>
                <li>Replaces entire resource</li>
                <li>Idempotent</li>
                <li>Requires complete resource data</li>
            </ul>
        `,
        example: `PUT /api/users/123 HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer token123

{
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin"
}`,
        requestBody: {
            name: "John Doe",
            email: "john@example.com",
            role: "admin"
        },
        statusCode: '200 OK'
    },
    DELETE: {
        color: '#f44336',
        explanation: `
            <h3>DELETE Request</h3>
            <p>Used to request the removal of a resource identified by a URI.</p>
            <ul>
                <li>Removes specified resource</li>
                <li>Idempotent</li>
                <li>May return different status codes</li>
                <li>Cannot be undone</li>
            </ul>
        `,
        example: `DELETE /api/users/123 HTTP/1.1
Host: api.example.com
Authorization: Bearer token123`,
        requestBody: null,
        statusCode: '204 No Content'
    },
    PATCH: {
        color: '#9C27B0',
        explanation: `
            <h3>PATCH Request</h3>
            <p>Used to apply partial modifications to a resource.</p>
            <ul>
                <li>Partially modifies resource</li>
                <li>Only sends changed fields</li>
                <li>Not idempotent</li>
                <li>More efficient than PUT for partial updates</li>
            </ul>
        `,
        example: `PATCH /api/users/123 HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer token123

{
    "email": "newemail@example.com"
}`,
        requestBody: {
            email: "newemail@example.com"
        },
        statusCode: '200 OK'
    }
};

let currentStep = 0;
let currentMethod = 'GET';

const steps = [
    {
        name: "Prepare Request",
        description: "Preparing the request with headers and body",
        action: (method) => {
            const packet = document.querySelector('.request-packet');
            const responseCode = document.querySelector('.response-code');
            
            // Reset elements
            packet.style.display = 'none';
            responseCode.style.display = 'none';
            packet.style.left = '180px';
            packet.style.top = '150px';

            // Prepare request packet content
            let packetContent = `${method} Request
            Headers:
            <ul class="headers-list">
                <li>Host: api.example.com</li>
                <li>Authorization: Bearer token123</li>
                <li>Accept: application/json</li>
            </ul>`;

            if (methodData[method].requestBody) {
                packetContent += `<div class="request-body">
                    Body: ${JSON.stringify(methodData[method].requestBody, null, 2)}
                </div>`;
            }

            packet.innerHTML = packetContent;
            packet.style.backgroundColor = methodData[method].color + '22';
            packet.style.borderColor = methodData[method].color;
            packet.style.display = 'block';
        }
    },
    {
        name: "Send Request",
        description: "Sending request to the server",
        action: () => {
            const packet = document.querySelector('.request-packet');
            packet.style.transition = 'all 1.5s ease';
            packet.style.left = '900px';
        }
    },
    {
        name: "Server Processing",
        description: "Server is processing the request",
        action: (method) => {
            const server = document.querySelector('.server');
            server.style.transition = 'all 0.5s ease';
            server.style.backgroundColor = '#f8f9fa';
            setTimeout(() => {
                server.style.backgroundColor = 'white';
            }, 500);
        }
    },
    {
        name: "Send Response",
        description: "Server sending response back to client",
        action: (method) => {
            const responseCode = document.querySelector('.response-code');
            responseCode.textContent = methodData[method].statusCode;
            responseCode.className = 'response-code ' + 
                (methodData[method].statusCode.startsWith('2') ? 'success' : 'error');
            responseCode.style.left = '850px';
            responseCode.style.top = '150px';
            responseCode.style.display = 'block';
            responseCode.style.transition = 'all 1.5s ease';
            setTimeout(() => {
                responseCode.style.left = '180px';
            }, 100);
        }
    },
    {
        name: "Complete",
        description: "Request completed",
        action: () => {
            const client = document.querySelector('.client');
            client.style.transition = 'all 0.5s ease';
            client.style.backgroundColor = '#f8f9fa';
            setTimeout(() => {
                client.style.backgroundColor = 'white';
            }, 500);
        }
    }
];

function updateStepIndicators() {
    const dots = document.querySelectorAll('.step-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentStep);
    });
}

function updateControls() {
    document.getElementById('prevBtn').disabled = currentStep === 0;
    document.getElementById('nextBtn').disabled = currentStep === steps.length - 1;
}

function updateStepDescription() {
    const description = document.querySelector('.step-description');
    description.textContent = steps[currentStep].description;
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        steps[currentStep].action(currentMethod);
        updateStepIndicators();
        updateControls();
        updateStepDescription();
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        resetAnimation();
        for (let i = 0; i <= currentStep; i++) {
            steps[i].action(currentMethod);
        }
        updateStepIndicators();
        updateControls();
        updateStepDescription();
    }
}

function resetAnimation() {
    currentStep = 0;
    const packet = document.querySelector('.request-packet');
    const responseCode = document.querySelector('.response-code');
    const client = document.querySelector('.client');
    const server = document.querySelector('.server');

    // Reset transitions
    packet.style.transition = 'none';
    responseCode.style.transition = 'none';
    
    // Reset elements
    packet.style.display = 'none';
    responseCode.style.display = 'none';
    client.style.backgroundColor = 'white';
    server.style.backgroundColor = 'white';

    // Reset indicators and controls
    updateStepIndicators();
    updateControls();
    updateStepDescription();

    // Start first step
    steps[0].action(currentMethod);
}

function showMethod(method) {
    // Update active tab
    document.querySelectorAll('.method-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.method-tab.${method.toLowerCase()}`).classList.add('active');

    // Update explanation and example
    document.getElementById('methodExplanation').innerHTML = methodData[method].explanation;
    document.getElementById('requestExample').textContent = methodData[method].example;

    // Reset and start animation
    currentMethod = method;
    resetAnimation();
}

// Initialize with GET request
document.addEventListener('DOMContentLoaded', () => {
    showMethod('GET');
});
