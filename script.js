document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // If already open → close it
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('open');
      return;
    }

    // Close all others (optional — remove if you want multiple open)
    document.querySelectorAll('.accordion-content').forEach(c => {
      c.style.maxHeight = null;
      c.classList.remove('open');
    });

    // Open this one
    content.style.maxHeight = content.scrollHeight + "px";
    content.classList.add('open');
  });
});
