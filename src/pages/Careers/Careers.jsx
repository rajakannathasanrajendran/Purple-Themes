import './Careers.css';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import careerBanner from '../../assets/career/banner.png';

const jobOpenings = [
  {
    title: 'HEF',
    experience: '8+ years',
    location: 'Atlanta, GA',
  },
  {
    title: 'ASSISTANT CHEF',
    experience: '5+ years',
    location: 'Frisco, TX',
  },
  {
    title: 'WAITER',
    experience: '0 to 2 years',
    location: 'Malvern, PA',
  },
];

const Careers = () => {
  const [formData, setFormData] = useState({
    position: 'Head Chef',
    name: '',
    phone: '',
    email: '',
    currentLocation: '',
    message: '',
  });
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setResumeError('File size exceeds 2MB limit');
        setResume(null);
        e.target.value = '';
        return;
      }
      setResumeError('');
      setResume(file);
    }
  };

  const handleApplyNow = (jobTitle) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    const formSection = document.getElementById('careers-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Career application submitted:', formData, resume);
  };

  return (
    <div className="careers">
      {/* Hero Section - matching Franchise Enquiries style */}
      <section className="careers-hero" style={{ backgroundImage: `url(${careerBanner})` }}>
        <Header />
      </section>

      {/* Page Title Section */}
      <section className="careers-title-section">
        <h1 className="careers-main-heading">CAREERS</h1>
      </section>

      {/* Current Job Openings Section */}
      <section className="careers-openings-section">
        <h2 className="careers-openings-heading">CURRENT JOB OPENINGS</h2>
        <div className="careers-openings-grid">
          {jobOpenings.map((job, index) => (
            <div className="careers-job-card" key={index}>
              <h3 className="careers-job-title">{job.title}</h3>
              <p className="careers-job-detail">Experience: {job.experience}</p>
              <p className="careers-job-detail">Location: {job.location}</p>
              <button
                className="careers-job-apply-btn"
                onClick={() => handleApplyNow(job.title)}
              >
                APPLY NOW &nbsp;&rsaquo;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section className="careers-form-section" id="careers-form-section">
        <div className="careers-form-container">
          <h2 className="careers-form-heading">CONNECT WITH US & STAY TUNED</h2>

          <form className="careers-form" onSubmit={handleSubmit}>
            {/* Select Position */}
            <div className="careers-form-field careers-form-field--full">
              <label className="careers-form-label">Select Position *</label>
              <div className="careers-form-select-wrapper">
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="careers-form-select"
                  required
                >
                  {jobOpenings.map((job, i) => (
                    <option key={i} value={job.title}>
                      {job.title.charAt(0) + job.title.slice(1).toLowerCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Name + Phone */}
            <div className="careers-form-row">
              <div className="careers-form-field">
                <label className="careers-form-label">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="careers-form-input"
                  required
                />
              </div>
              <div className="careers-form-field">
                <label className="careers-form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="careers-form-input"
                  required
                />
              </div>
            </div>

            {/* Email + Current Location */}
            <div className="careers-form-row">
              <div className="careers-form-field">
                <label className="careers-form-label">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="careers-form-input"
                  required
                />
              </div>
              <div className="careers-form-field">
                <label className="careers-form-label">Current Location *</label>
                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleChange}
                  className="careers-form-input"
                  required
                />
              </div>
            </div>

            {/* Upload Resume */}
            <div className="careers-form-field careers-form-field--full careers-form-file-field">
              <label className="careers-form-label">Upload Resume *</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="careers-form-file-input"
                required
              />
              <span className="careers-form-file-hint">(Max: 2MB | PDF/DOC)</span>
              {resumeError && <span className="careers-form-error">{resumeError}</span>}
            </div>

            {/* Message */}
            <div className="careers-form-field careers-form-field--full">
              <label className="careers-form-label">Message (optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="careers-form-input careers-form-textarea"
                rows="5"
              />
            </div>

            <div className="careers-form-submit-wrapper">
              <button type="submit" className="careers-form-submit">
                SUBMIT APPLICATION
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
