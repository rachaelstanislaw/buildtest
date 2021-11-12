require 'csv'

# To run this script: ruby friday_tickets.rb nameoffile.csv
# i.e. ruby friday_tickets.rb csv1.csv

DEFAULT_CSV_READ_OPTS = {headers: true, skip_blanks: true, force_quotes: true, quote_char: '"'}

CSV.read(ARGV[0], DEFAULT_CSV_READ_OPTS).each do |line|
        puts "https://circleci.zendesk.com/agent/tickets/#{line[0]} / #{line[3]}"
end
