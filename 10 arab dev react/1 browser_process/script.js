// Create DOM Tree
function createDOMTree() {
    const domTree = document.getElementById('dom-tree');
    const structure = `
        <div class="tree-node">html</div>
        <div class="tree-level">
            <div class="tree-node">head</div>
            <div class="tree-level">
                <div class="tree-node">title</div>
            </div>
            <div class="tree-node">body</div>
            <div class="tree-level">
                <div class="tree-node">h1</div>
                <div class="tree-node">div</div>
                <div class="tree-level">
                    <div class="tree-node">p</div>
                </div>
            </div>
        </div>
    `;
    domTree.innerHTML = structure;
}

// Create CSSOM Tree
function createCSSOMTree() {
    const cssomTree = document.getElementById('cssom-tree');
    const structure = `
        <div class="tree-node">Styles</div>
        <div class="tree-level">
            <div class="tree-node">h1</div>
            <div class="tree-level">
                <div class="tree-node property-node">color: blue</div>
            </div>
            <div class="tree-node">#text</div>
            <div class="tree-level">
                <div class="tree-node property-node">color: green</div>
            </div>
        </div>
    `;
    cssomTree.innerHTML = structure;
}

// Create Render Tree
function createRenderTree() {
    const renderTree = document.getElementById('render-tree');
    const structure = `
        <div class="tree-node render-node">html</div>
        <div class="tree-level">
            <div class="tree-node render-node">body</div>
            <div class="tree-level">
                <div class="tree-node render-node">h1 (color: blue)</div>
                <div class="tree-node render-node">div</div>
                <div class="tree-level">
                    <div class="tree-node render-node">p (color: green)</div>
                </div>
            </div>
        </div>
    `;
    renderTree.innerHTML = structure;
}

// Toggle Arabic translations
function toggleArabic() {
    const translations = document.querySelectorAll('.arabic-translation');
    translations.forEach(translation => {
        translation.style.display = translation.style.display === 'none' ? 'block' : 'none';
    });
    
    const btn = document.querySelector('.lang-btn');
    btn.classList.toggle('active');
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create tree visualizations
    createDOMTree();
    createCSSOMTree();
    createRenderTree();

    // Hide Arabic translations initially
    const translations = document.querySelectorAll('.arabic-translation');
    translations.forEach(translation => {
        translation.style.display = 'none';
    });
});
