import React from "react";

const Gmap = () => {
  return (
    <div className="flex w-full items-center justify-center py-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.662210817268!2d77.61298207544341!3d13.120572587208633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae196168aa9d31%3A0xca296dc6b67c59ba!2sCybernous%20%7C%20CISSP%20Certification%2C%20CISSP%20Courses%2C%20CISSP%20Online%20Training!5e0!3m2!1sen!2sin!4v1727249541615!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map showing Cybernous CISSP Training location"
      ></iframe>
    </div>
  );
};

export default Gmap;
