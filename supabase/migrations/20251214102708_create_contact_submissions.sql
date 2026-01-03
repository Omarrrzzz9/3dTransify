/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `company` (text) - Company name
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `interest` (text) - Type of inquiry (demo, quote, support, general)
      - `message` (text) - Contact message
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Submission status (new, read, replied)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - No public access policies (admin only access through service role)
  
  3. Important Notes
    - This table stores contact form submissions from the website
    - No RLS policies are added as this should only be accessed by admins
    - Submissions are marked as 'new' by default
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  interest text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create index for efficient querying
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON contact_submissions(status);