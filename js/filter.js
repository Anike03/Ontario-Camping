document.addEventListener('DOMContentLoaded', function() {
    // Toggle active state for filter options
    const filterOptions = document.querySelectorAll('.filter-option');
    
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // const backButton = document.querySelector('.back-button');
    // backButton.addEventListener('click', function() {
    //     window.history.back();
    // });

    // const applyButton = document.querySelector('.apply-button');
    // applyButton.addEventListener('click', function() {
    //     const selectedFilters = Array.from(document.querySelectorAll('.filter-option.active'))
    //         .map(el => el.textContent);
        
    //     console.log('Selected filters:', selectedFilters);
    //     window.location.href = 'explore.html';
    // });

    // 🌟 Clear All button functionality
    const clearAllButton = document.querySelector('.clear-all');
    clearAllButton.addEventListener('click', function() {
        filterOptions.forEach(option => {
            option.classList.remove('active');
        });
    });
});
