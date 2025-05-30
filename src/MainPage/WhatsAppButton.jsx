import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // Phone number with country code (no + or 0)
  const phoneNumber = '917778827774';
  
  // Dynamic message based on device
  const message = `Hello Sonu! I saw your portfolio and I'm interested in discussing ${
    isMobile ? 'Hello Sonu! I have a project idea that aligns with your skills. Let's discuss how we can work together!`;
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Check if device is mobile
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);
      return () => window.removeEventListener('resize', checkIfMobile);
    }
  }, []);

  // Add pulse animation to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
        70% { box-shadow: 0 0 0 12px rgba(37, 211, 102, 0); }
        100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (!showButton) return null;

  const floatStyle = {
    position: 'fixed',
    width: isMobile ? '50px' : '60px',
    height: isMobile ? '50px' : '60px',
    bottom: isMobile ? '20px' : '30px',
    right: isMobile ? '15px' : '30px',
    backgroundColor: isHovered ? '#128C7E' : '#25d366',
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: isMobile ? '24px' : '30px',
    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
    zIndex: '1000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    border: '2px solid white',
    overflow: 'hidden',
    animation: 'pulse 2s infinite',
  };

  const iconStyle = {
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    zIndex: 1001,
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: isMobile ? '20px' : '30px',
        right: isMobile ? '15px' : '30px',
        zIndex: 1000,
      }}
    >
      {/* Tooltip Message (desktop only) */}
      {!isMobile && (
        <div
          style={{
            position: 'absolute',
            right: isMobile ? '65px' : '75px',
            bottom: '0',
            backgroundColor: 'white',
            padding: '8px 12px',
            borderRadius: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            opacity: isHovered ? 1 : 0,
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            fontSize: '14px',
            color: '#333',
            fontWeight: '500',
          }}
        >
          Let's discuss your project!
        </div>
      )}

      <div style={{ position: 'relative' }}>
        <a
          href={whatsappUrl}
          style={floatStyle}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <FaWhatsapp style={iconStyle} />
        </a>

        {isMobile && (
          <div
            style={closeButtonStyle}
            onClick={(e) => {
              e.preventDefault();
              setShowButton(false);
            }}
            aria-label="Close WhatsApp button"
          >
            <IoMdClose size={12} color="#25d366" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppButton;
