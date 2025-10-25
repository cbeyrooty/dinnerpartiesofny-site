import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Invite = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    optin: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.bio.trim()) {
      newErrors.bio = 'Bio is required';
    } else if (formData.bio.length > 280) {
      newErrors.bio = 'Bio must be 280 characters or less';
    }
    
    if (!formData.optin) {
      newErrors.optin = 'You must agree to receive updates';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Mock submission - will integrate with Google Forms
    setTimeout(() => {
      console.log('Form submitted:', formData);
      navigate('/thank-you');
    }, 1000);
  };

  const bioCharsRemaining = 280 - formData.bio.length;

  return (
    <div className="site-container">
      <div className="form-page">
        {/* Deco Divider */}
        <div className="deco-divider-top">
          <div className="divider-line"></div>
          <div className="divider-diamond"></div>
          <div className="divider-line"></div>
        </div>

        <button 
          className="back-button"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft size={18} strokeWidth={2} />
          <span>BACK</span>
        </button>

        <div className="form-panel">
          {/* Corner Ornaments */}
          <div className="form-corner form-corner-tl"></div>
          <div className="form-corner form-corner-tr"></div>
          <div className="form-corner form-corner-bl"></div>
          <div className="form-corner form-corner-br"></div>

          <div className="form-header">
            <h1 className="form-title">REQUEST AN INVITE</h1>
            <div className="title-underline">
              <div className="underline-diamond"></div>
            </div>
            <p className="form-helper">Tell us who you are and the perspective you bring.</p>
          </div>

          <form onSubmit={handleSubmit} className="invite-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                NAME <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'error' : ''}`}
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="error-message" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                EMAIL <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'error' : ''}`}
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="error-message" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="bio" className="form-label">
                SHORT BIO <span className="required">*</span>
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className={`form-textarea ${errors.bio ? 'error' : ''}`}
                rows="4"
                maxLength="280"
                aria-required="true"
                aria-invalid={errors.bio ? 'true' : 'false'}
                aria-describedby={errors.bio ? 'bio-error' : 'bio-counter'}
              />
              <div className="textarea-footer">
                {errors.bio && (
                  <span id="bio-error" className="error-message" role="alert">
                    {errors.bio}
                  </span>
                )}
                <span 
                  id="bio-counter" 
                  className={`char-counter ${bioCharsRemaining < 0 ? 'over-limit' : ''}`}
                  aria-live="polite"
                >
                  {bioCharsRemaining} characters remaining
                </span>
              </div>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="optin"
                  checked={formData.optin}
                  onChange={handleChange}
                  className="form-checkbox"
                  aria-required="true"
                  aria-invalid={errors.optin ? 'true' : 'false'}
                  aria-describedby={errors.optin ? 'optin-error' : undefined}
                />
                <span className="checkbox-text">
                  I agree to receive occasional updates. <span className="required">*</span>
                </span>
              </label>
              {errors.optin && (
                <span id="optin-error" className="error-message" role="alert">
                  {errors.optin}
                </span>
              )}
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SUBMITTING...' : 'REQUEST AN INVITE'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Invite;