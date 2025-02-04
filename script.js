const navLinks = document.querySelectorAll('.nav-link');
function handleMenu(){
    const navDialog = document.getElementById('nav-dialog');
    navDialog.classList.toggle('hidden');
   
}
navLinks.forEach(link => {
    link.addEventListener('click', function(event){
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        handleMenu();
    });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const projectCards = document.querySelectorAll('.project-card');
// Loop through each tab button
tabButtons.forEach(button => {

    button.addEventListener('click', () => {
        // Remove active state from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('bg-[#A53DFF]', 'text-white');
            btn.classList.add('bg-gray-200', 'text-black');
        });

        // Set active state for the clicked button
        button.classList.remove('bg-gray-200', 'text-black');
        button.classList.add('bg-[#A53DFF]', 'text-white');

        // Get the target category for filtering
        const targetCategory = button.getAttribute('data-target');

        // Loop through each project card
        projectCards.forEach(card => {
            // Show or hide cards based on the target category
            if(targetCategory === 'all' || card.getAttribute('data-category') === targetCategory){
                card.classList.remove('hidden');
            }
            else{
                card.classList.add('hidden');
            }
        });
    });
});



function scrollToTop() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}


