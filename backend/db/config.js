const supabasejs = require("@supabase/supabase-js");
// require('dotenv').config

const supabase = supabasejs.createClient(
  "https://bvnzragclodiiamozynz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2bnpyYWdjbG9kaWlhbW96eW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1MTg2OTksImV4cCI6MTk4OTA5NDY5OX0.zkCTQstfp6aAS8GYBZXYytumGIIVkQKaP6APYBRwgrI"
);

module.exports = supabase;
