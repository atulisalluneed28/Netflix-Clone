// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Check if this item is already active
      const isActive = item.classList.contains('active');
      
      // Close all FAQ items
      faqItems.forEach(faqItem => {
        faqItem.classList.remove('active');
      });
      
      // If the clicked item wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

// Optional: Slider Arrow Functionality for Trending Section
document.addEventListener('DOMContentLoaded', function() {
  const sliderArrow = document.querySelector('.slider-arrow-right');
  const slider = document.querySelector('.slider');
  
  if (sliderArrow && slider) {
    sliderArrow.addEventListener('click', () => {
      const slideWidth = slider.querySelector('.slide').offsetWidth;
      const gap = 20; // Match the gap from CSS
      slider.scrollBy({
        left: (slideWidth + gap) * 2,
        behavior: 'smooth'
      });
    });
  }
});