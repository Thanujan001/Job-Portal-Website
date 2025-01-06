/* Resetting some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  
  /* Navbar styles */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #333;
    color: #fff;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #00bcd4;
  }
  
  /* Home section */
  .home {
    padding: 2rem;
    text-align: center;
    background-color: #f4f4f9;
    color: #333;
  }
  
  .home h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  /* Job Listings */
  .job-listings {
    padding: 2rem;
    background-color: #fff;
  }
  
  .job-listings h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .job-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .job-card button {
    background-color: #00bcd4;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .job-card button:hover {
    background-color: #028c9c;
  }
  
  /* Post Job Section */
  .post-job {
    padding: 2rem;
    background-color: #f4f4f9;
  }
  
  .post-job h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .post-job-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .post-job-form input,
  .post-job-form textarea {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
  }
  
  .post-job-form button {
    background-color: #333;
    border: none;
    color: white;
    padding: 0.7rem;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .post-job-form button:hover {
    background-color: #444;
  }
  
  /* Footer */
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  