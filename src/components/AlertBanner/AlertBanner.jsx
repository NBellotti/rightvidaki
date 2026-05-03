'use client';

import { useState } from 'react';
import styles from './AlertBanner.module.css';

/**
 * AlertBanner Component
 * A dismissible alert banner that appears at the top of the page
 * 
 * @param {string} message - The message to display
 * @param {string} type - Type of alert: 'info', 'warning', 'error', 'success'
 * @param {boolean} dismissible - Whether the banner can be closed
 * @param {function} onDismiss - Callback when banner is dismissed
 */
export default function AlertBanner({
  message = 'Important: System maintenance scheduled. Thank you for your patience.',
  type = 'warning',
  dismissible = true,
  onDismiss = null,
}) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss();
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`${styles.banner} ${styles[type]}`}>
      <div className={styles.content}>
        <span className={styles.icon}>
          {type === 'warning' && '⚠️'}
          {type === 'error' && '❌'}
          {type === 'success' && '✅'}
          {type === 'info' && 'ℹ️'}
        </span>
        <p className={styles.message}>{message}</p>
      </div>
      {dismissible && (
        <button
          className={styles.closeButton}
          onClick={handleDismiss}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
}
