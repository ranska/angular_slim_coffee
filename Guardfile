# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'coffeescript', 
  input: 'coffeescripts',
  output: 'javascripts'

guard "slim", :output => "html" do
  watch(%r{^templates/.+(\.slim)$})
end
