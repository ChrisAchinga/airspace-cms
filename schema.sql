CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT,
  email TEXT UNIQUE,
  role TEXT
);

CREATE TABLE jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  description TEXT,
  skills_required TEXT,
  location TEXT,
  age_limit INTEGER,
  company_name TEXT,
  company_website TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  date_posted TEXT
);

CREATE TABLE applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  job_id INTEGER,
  user_id INTEGER,
  date_applied TEXT,
  status TEXT,
  FOREIGN KEY (job_id) REFERENCES jobs (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);
