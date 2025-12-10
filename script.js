document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('open');
      return;
    }

    // Close all others
    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.maxHeight = null;
      c.classList.remove('open');
    });

    // Open this one
    content.style.maxHeight = content.scrollHeight + "px";
    content.classList.add('open');
  });
});
