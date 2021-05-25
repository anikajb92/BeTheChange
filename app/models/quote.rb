class Quote < ApplicationRecord

  def self.singleQuote
    quote_array = Quote.all
    
    random_quote = quote_array[rand(quote_array.length)]

  end 
end
