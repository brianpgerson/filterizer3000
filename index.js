(function () {
    const initial = $('#initial').get(0);
    const toRemove = $('#toRemove').get(0);
    const filtered = $('#filtered').get(0);
    const filterizer = $('#filterizer');

    const doFilter = () => {
        const initialItems = initial.value.split('\n').map(v => v.trim());
        const itemsToRemove = new Set(toRemove.value.split('\n').map(v => v.trim()));
        const afterFilter = initialItems.filter(item => item.length !== 0 && !itemsToRemove.has(item))

        filtered.value = afterFilter.join('\n');
    }

    filterizer.click(doFilter)

    $('button.copy').click((e) => {
        const textArea = document.querySelector(e.currentTarget.getAttribute('data-to-copy'))
        const textToCopy = textArea.value
        
        navigator.clipboard.writeText(textToCopy).then(
            () => console.log('wow, great job!'),
            () => window.alert('Opps! Your browser does not support the Clipboard API'),
        );
    })
}());