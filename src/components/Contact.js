import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-green-300">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Contact
        </h2>
        <div className="max-w-md mx-auto">
          <div data-tf-live="01J9QJT98TM82AF4W16PW61QKE"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
