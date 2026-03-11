import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', terms: false });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // Formun genel geçerliliğini kontrol et
    const isEmailValid = emailRegex.test(formData.email);
    const isPasswordValid = passwordRegex.test(formData.password);
    const isTermsAccepted = formData.terms;

    setIsDisabled(!(isEmailValid && isPasswordValid && isTermsAccepted));

    // Hata mesajlarını ayarla
    const newErrors = {};
    if (formData.email && !isEmailValid) newErrors.email = 'Geçersiz email adresi';
    if (formData.password && !isPasswordValid) newErrors.password = 'Şifre yeterince güçlü değil';
    setErrors(newErrors);

  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDisabled) navigate('/success');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <h1>Login</h1>
      
      <input 
        name="email" 
        placeholder="Email"
        data-cy="input-email" 
        onChange={handleChange} 
      />
      {errors.email && <p data-cy="error-msg" style={{color: 'red'}}>{errors.email}</p>}

      <input 
        type="password" 
        name="password" 
        placeholder="Şifre"
        data-cy="input-password" 
        onChange={handleChange} 
      />
      {errors.password && <p data-cy="error-msg" style={{color: 'red'}}>{errors.password}</p>}

      <label>
        <input type="checkbox" name="terms" data-cy="input-terms" onChange={handleChange} />
        Şartları kabul ediyorum
      </label>

      <button type="submit" data-cy="submit-button" disabled={isDisabled}>
        Giriş Yap
      </button>
    </form>
  );
}