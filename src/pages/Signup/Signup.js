import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import { signup, registerAuthObserver } from '../../services/auth';
import { addItemWithId, getItem } from '../../services/database';

import './Signup.scss';

let cancelObserver;

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (cancelObserver) cancelObserver();

    cancelObserver = registerAuthObserver(async (user) => {
      if (user) {
        const profile = await getItem('profiles', user.uid);
        if (!profile) {
          const result = await addItemWithId(
            'profiles',
            { name: formData.name, email: formData.email },
            user.uid
          );
          if (result) {
            history.push('/');
          }
        }
      }
    });

    return () => {
      cancelObserver();
    };
  }, [formData.name, formData.email]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setError('');

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('Todos los campos son obligatorios');
    } else {
      signup(email, password);
    }
  };

  return (
    <section className="form-container">
      {error && <div className="form-error">{error}</div>}
      <form onSubmit={handleSubmitForm}>
        <FormInput
          label="Name"
          value={formData.name}
          onChange={(value) => setFormData({ ...formData, name: value })}
        />
        <FormInput
          label="Email"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
        />
        <FormInput
          type="password"
          label="Password"
          value={formData.password}
          onChange={(value) => setFormData({ ...formData, password: value })}
        />
        <button>Registrar</button>
      </form>
    </section>
  );
};

export default Signup;
