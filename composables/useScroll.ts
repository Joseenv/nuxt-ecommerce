import { ref, onMounted, onUnmounted } from 'vue';

export const useScroll = () => {
  let headerElement: HTMLElement | null = null;
  let startPosition = 0;

  const handleScroll = () => {
    if (!headerElement) headerElement = document.getElementById('header');

    if (headerElement) {
      const currentScrollPosition = window.scrollY;

      headerElement.style.top = (startPosition >= currentScrollPosition) ? '0' : '-100px';
      
      startPosition = currentScrollPosition;
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    handleScroll
  }
}