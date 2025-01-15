###
# Sort integer arguments (ascending)
###

result = []

ARGV.each do |arg|
  # Skip if not an integer
  next unless arg.match?(/^[-+]?[0-9]+$/)

  # Convert to integer and add to the result array
  result << arg.to_i
end

# Sort the array in ascending order
result.sort!

# Print the sorted result
puts result
