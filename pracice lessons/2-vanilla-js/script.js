class Header {
    constructor(title, subtitle) {
        this.title = title;
        this.subtitle = subtitle;
    }

    render() {
        const header = document.createElement('header');
        header.className = 'header';

        const container = document.createElement('div');
        container.className = 'header-container';

        const logo = document.createElement('h1');
        logo.className = 'logo';
        logo.textContent = this.title;

        const subtitle = document.createElement('p');
        subtitle.className = 'subtitle';
        subtitle.textContent = this.subtitle;

        container.appendChild(logo);
        container.appendChild(subtitle);
        header.appendChild(container);

        return header;
    }
}

// Create and render the header
const headerRoot = document.getElementById('header-root');
const header = new Header('My Beautiful Project 2', 'This is my first vue projecttttttttttt');
headerRoot.appendChild(header.render());
