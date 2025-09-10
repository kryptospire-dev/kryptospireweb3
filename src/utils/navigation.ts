// Navigation utilities for button functionality

export const handleNavigation = (path: string) => {
  if (path.startsWith('http')) {
    window.open(path, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = path;
  }
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const openCalendlyModal = () => {
  // This would integrate with Calendly or similar booking system
  console.log('Opening booking modal...');
  // For now, redirect to contact page
  handleNavigation('/contact');
};

export const downloadResource = (resourceName: string) => {
  // This would handle resource downloads
  console.log(`Downloading ${resourceName}...`);
  // For demo purposes, just show alert
  alert(`Download initiated for: ${resourceName}`);
};

export const shareContent = async (title: string, url: string) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        url: window.location.origin + url
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  } else {
    // Fallback for browsers that don't support native sharing
    navigator.clipboard.writeText(window.location.origin + url);
    alert('Link copied to clipboard!');
  }
};