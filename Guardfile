# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'coffeescript', 
  input: 'app/coffeescripts',
  output: 'app/js'

guard :coffeescript, 
  input: 'test/coffee', 
  output: 'test'


guard "slim", :output => "." do
  watch(%r{^app/templates/.+(\.slim)$})
end
